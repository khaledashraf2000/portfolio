import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import debounce from 'lodash/debounce';
import { useMediaQuery } from "react-responsive";

interface Uniforms {
    u_time: { value: number };
    u_resolution: { value: THREE.Vector2 };
    u_washout: { value: number };
    u_zoom: { value: number };
    u_complexity: { value: number };
    u_mix: { value: number };
    u_mouse: { value: THREE.Vector2 };
    [uniform: string]: { value: any };
}

const HolographicBackground: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [fragmentShader, setFragmentShader] = useState<string | null>(null);
    const mousePositionRef = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>();
    const isVisibleRef = useRef(true);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const { size } = useThree();

    // Memoize uniforms to prevent unnecessary recreations
    const uniforms = useMemo<Uniforms>(() => ({
        u_time: { value: 20.0 },
        u_resolution: { value: new THREE.Vector2() },
        u_washout: { value: 0.0 },
        u_zoom: { value: isMobile ? 0.25 : 0.7 },
        u_complexity: { value: 1.0 },
        u_mix: { value: 0.2 },
        u_mouse: { value: new THREE.Vector2() }
    }), []);

    // Debounced mouse move handler
    const handleMouseMove = useMemo(
        () => debounce((event: MouseEvent) => {
            if (isVisibleRef.current) {
                mousePositionRef.current = { x: event.clientX, y: event.clientY };
            }
        }, 16),
        []
    );

    // Handle visibility changes
    useEffect(() => {
        const handleVisibilityChange = () => {
            isVisibleRef.current = !document.hidden;
            if (document.hidden && animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    // Cache shader in SessionStorage
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const shaderCache = sessionStorage.getItem('holographic-shader');
        if (shaderCache) {
            setFragmentShader(shaderCache);
            return;
        }

        fetch('/hhholographic.frag', { signal: controller.signal })
            .then(response => response.text())
            .then(text => {
                if (isMounted) {
                    sessionStorage.setItem('holographic-shader', text);
                    setFragmentShader(text);
                }
            })
            .catch(error => {
                if (!controller.signal.aborted) {
                    console.error('Error loading shader:', error);
                }
            });

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []);

    // Handle mouse move events
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            handleMouseMove.cancel();
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    // Handle resize events
    const handleResize = useCallback(() => {
        if (meshRef.current) {
            meshRef.current.scale.set(size.width, size.height, 1);
        }
        uniforms.u_resolution.value.set(size.width, size.height);
    }, [size, uniforms]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    // Update animation frame
    useFrame((state) => {
        if (!isVisibleRef.current) return;

        const { clock } = state;
        if (meshRef.current) {
            uniforms.u_time.value = clock.getElapsedTime();
            uniforms.u_mouse.value.set(
                mousePositionRef.current.x / size.width,
                1 - mousePositionRef.current.y / size.height
            );
        }
    });

    if (!fragmentShader) return null;

    return (
        <mesh ref={meshRef} scale={[size.width, size.height, 1]}>
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

export default HolographicBackground;