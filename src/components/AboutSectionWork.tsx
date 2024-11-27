'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimate, useInView } from "framer-motion";
import CardsSwipe from "./CardsSwipe";
import Carousel from "./carousel/Carousel";
import HoverCard from "./HoverCard";
import IPhoneVideoMockup from "./IphoneMockup";
import MacbookMockup from "./MacbookMockup";
import Link from "next/link";
import { useMediaQuery } from 'react-responsive';
import AboutSectionWorkMobile from "./AboutSectionWorkMobile";

interface ProjectCardProps {
    href: string;
    imageSrc: string;
    videoSrc?: string; // Optional video source
    title: string;
    year: string;
}

interface SectionProps {
    year: string;
    title: string;
    description: string;
    children: React.ReactNode;
    extraContent?: React.ReactNode;
    delay?: number;
    isHeader?: boolean;
    sectionName?: string;
    isFirst?: boolean;
}

const ProjectCard = ({ href, imageSrc, videoSrc, title, year }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <div
            className="col-span-2 row-span-2 relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a href={href} target="_blank" rel="noopener noreferrer">
                <HoverCard>
                    <div className="relative w-full h-full">
                        {/* Image that shows by default */}
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: isHovered && videoSrc ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            <Image
                                className="rounded-lg shadow-lg object-cover"
                                src={imageSrc}
                                alt={title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>

                        {/* Video that shows on hover (if videoSrc is provided) */}
                        {videoSrc && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isHovered ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 rounded-lg overflow-hidden"
                            >
                                <video
                                    ref={videoRef}
                                    className="rounded-lg shadow-lg w-full h-full object-cover transform scale-125"
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src={videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </motion.div>
                        )}

                        {/* Dark overlay with title and year */}
                        <motion.div
                            className="absolute inset-0 bg-black/40 rounded-lg text-white flex items-end justify-start text-base font-medium p-4 text-left opacity-0 group-hover:opacity-100 uppercase transition-opacity duration-300"
                        >
                            <div className="flex justify-between w-full">
                                <p>{title}</p>
                                <p>{year}</p>
                            </div>
                        </motion.div>
                    </div>
                </HoverCard>
            </a>
        </div>
    );
};

const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay }
    })
};

const sideSlideVariant = {
    hidden: { x: 200, y: -100, rotate: -10, opacity: 0 },
    visible: {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: { duration: 1, type: "spring", delay: 0.5 }
    }
};

const Section = ({ year, title, description, children, extraContent, delay = 0, isHeader = false, isFirst = false, sectionName }: SectionProps) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollRatio = Math.min(scrollTop / documentHeight, 1);
            setScrollProgress(scrollRatio);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="grid grid-cols-4 divide-x">
            <div className={`col-span-1 h-full ${isHeader && isFirst ? '' : isHeader ? '' : 'pt-24'}`}>
                {isHeader && (
                    <motion.p
                        className="section-description uppercase text-end px-7 text-gray-950 font-medium"
                        custom={delay}
                        variants={fadeInVariant}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {sectionName}
                    </motion.p>
                )}
                <motion.p
                    className="section-description uppercase text-end px-7 sticky z-10 pt-2 top-4"
                    custom={delay}
                    variants={fadeInVariant}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {year}
                </motion.p>
            </div>
            <div className={`col-span-3 px-7 ${isHeader && isFirst ? '' : isHeader ? '' : 'pt-24'}`} ref={sectionRef}>
                <motion.div
                    custom={delay + 0.25}
                    variants={fadeInVariant}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

const projectData = [
    {
        href: "https://www.behance.net/gallery/212449641/Bader",
        imageSrc: "/images/bader2.png",
        videoSrc: "/videos/bader.mp4",
        title: "Bader charity brand identity",
        year: "2024"
    },
    {
        href: "https://www.behance.net/gallery/212349001/Washit",
        imageSrc: "/images/washit.png",
        title: "Washit delivery car wash",
        year: "2023"
    },
    {
        href: "https://www.behance.net/gallery/168847695/4-El-Fagr-Brand-Identity",
        imageSrc: "/images/4elfagr.png",
        title: "4 el fagr brand identity",
        year: "2023"
    },
    {
        href: "https://www.behance.net/gallery/113273807/Icarus-Thrift-Store",
        imageSrc: "/images/icarus.png",
        title: "Icarus brand identity",
        year: "2021"
    },
    {
        href: "https://www.behance.net/gallery/111889399/CRUNCH-Granola",
        imageSrc: "/images/crunch.jpg",
        title: "Crunch brand identity",
        year: "2021"
    },
    {
        href: "https://www.behance.net/gallery/105986979/CalEarth-Logo-Redesign",
        imageSrc: "/images/calearth.png",
        title: "Calearth logo redesign",
        year: "2020"
    }
];

const skillsData = {
    roomera: ['UX Design', 'UX Research', 'UI Design', 'User Interviews', 'Competitive Analysis', 'Usability Testing'],
    xceed: ['UI Design', 'Creative Design', 'Frontend Development']
};

export default function AboutSectionWork() {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [scope, animate] = useAnimate();

    if (isMobile) {
        return (
            <AboutSectionWorkMobile />
        )
    }

    return (
        <div className="container mx-auto mt-36 flex flex-col">
            {/* Journey Section */}
            <p className="text-center mb-16 uppercase">Journey</p>
            <Section
                year="2018 - 2023"
                title=""
                description=""
                isHeader={true}
                sectionName=""
                isFirst={true}
            >
                <div className="flex justify-between gap-10">
                    <motion.div
                        className="flex flex-col justify-start w-[65%]"
                        variants={fadeInVariant}
                        custom={0.5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="section-headline">
                            I studied computer engineering and I had passion for art & design
                        </h1>
                        <p className="section-description pt-4">
                            I decided to pursue my passion for design by learning, creating, and trying new things
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative"
                        variants={sideSlideVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <CardsSwipe />
                    </motion.div>
                </div>
            </Section>

            {/* Design Journal Section */}
            <Section
                year="2021"
                title=""
                description=""
            >
                <h1 className="section-headline">
                    I started a journal about user-centered design
                </h1>
                <p className="section-description pt-4">
                    Whenever I felt inspired by a product, or intrigued by a design, I would write about it
                </p>
                <div className="pt-10">
                    <Carousel />
                </div>
            </Section>

            {/* Freelancing Section */}
            <Section
                year="2021 - Present"
                title=""
                description=""
            >
                <h1 className="section-headline">
                    I started freelancing as a visual designer
                </h1>
                <p className="section-description pt-4">
                    Designing brand identities, logos, and social media posts
                </p>
                <div className="pt-10">
                    <div className="grid grid-cols-4 grid-rows-6 gap-4 h-[40rem] w-full">
                        {projectData.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </Section>

            <p className="text-center mt-36 mb-16 uppercase">Experience</p>
            {/* Experience Section */}
            <Section
                year="Mar 2022 - Sep 2022"
                title=""
                description=""
                isHeader={true}
                sectionName=""
            >
                <div className="flex justify-between gap-10">
                    <motion.div
                        className="flex flex-col justify-start w-[65%]"
                        variants={fadeInVariant}
                        custom={0.5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="section-headline">
                            UX Research & Design Intern<br />@ Roomera, Inc.
                        </h1>
                        <div className="flex flex-wrap pt-4 gap-2 whitespace-nowrap">
                            {skillsData.roomera.map(skill => (
                                <span key={skill} className="chip">{skill}</span>
                            ))}
                        </div>
                        <p className="section-description pt-4">
                            Roomera is a fun and intuitive VR, AR and mobile tool made to help people imagine and explore their home renovation ideas, so that they are able to visualize their ideas before carrying out their renovation project.
                        </p>
                        <Link href="/roomera">
                            <button className="btn-primary mt-10" type="button">
                                View full case study
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div>
                        <HoverCard>
                            <IPhoneVideoMockup videoUrl="/roomera 2.mp4" />
                        </HoverCard>
                    </motion.div>
                </div>
            </Section>

            {/* Xceed Section */}
            <Section
                year="Aug 2023 - Sep 2023"
                title=""
                description=""
            >
                <h1 className="section-headline">
                    UI Design Intern @ Xceed
                </h1>
                <div className="flex flex-wrap pt-4 gap-2 whitespace-nowrap">
                    {skillsData.xceed.map(skill => (
                        <span key={skill} className="chip">{skill}</span>
                    ))}
                </div>
                <p className="section-description pt-4 max-w-2xl">
                    I collaborated with my fellow front-end developer interns to create a simple yet functional and easy to use Task Management webapp. I also had the opportunity to chat with designers and engineers and learned from them how the business in general works
                </p>

                <motion.div className="mt-10 w-full flex justify-between">
                    <button className="btn-primary flex-wrap flex h-fit" type="button">
                        View full case study
                    </button>
                    <MacbookMockup videoUrl="/xceed.mp4" />
                </motion.div>
            </Section>
        </div>

    )
}