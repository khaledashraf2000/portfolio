import React, { useRef, useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const fragmentShader = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

// Function to generate color palette based on slate-800
vec3 slateColorPalette(float value) {
    // Base color: rgb(30, 41, 59)
    vec3 baseColor = vec3(30.0/255.0, 41.0/255.0, 59.0/255.0);
    
    // Subtle variation for animation
    float variation = 0.05; // Reduced variation to keep it subtle
    return baseColor + vec3(variation * sin(value));
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    // Introduce subtle random factors
    float randomFactor = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);

    // Calculate flow field direction
    float scale = 9.0;
    float angle = sin(uv.x * scale) + cos(uv.y * scale) + u_time * 0.5;
    vec2 flowDir = vec2(cos(angle), sin(angle));

    // Apply flow field and random factors
    vec2 newUV = uv + flowDir * randomFactor * 0.02; // Reduced effect for subtlety

    // Create subtle pattern
    vec2 scaledUV = newUV * 20.0;
    float pixelValue = 1.0 - step(0.5, mod(scaledUV.x + scaledUV.y, 2.0));

    // Background color (slate-800)
    vec3 backgroundColor = slateColorPalette(0.0);

    // Slightly lighter variation for pattern
    vec3 patternColor = slateColorPalette(u_time * 0.2 + scaledUV.x + scaledUV.y);

    // Combine colors with subtle mixing
    vec3 finalColor = mix(backgroundColor, patternColor, pixelValue * 0.15); // Reduced mixing for subtlety

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

const ShaderBackground: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const { size } = useThree();

    const uniforms = useMemo(() => ({
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(size.width, size.height) }
    }), [size.width, size.height]);

    useEffect(() => {
        const handleResize = () => {
            if (meshRef.current) {
                meshRef.current.scale.set(size.width, size.height, 1);
            }
            uniforms.u_resolution.value.set(size.width, size.height);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [size, uniforms]);

    useFrame((state) => {
        uniforms.u_time.value = state.clock.getElapsedTime();
    });

    return (
        <mesh
            ref={meshRef}
            scale={[size.width, size.height, 1]}
            position={[0, 0, 0]}
        >
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
            />
        </mesh>
    );
};

export default ShaderBackground;