'use client';

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
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
    // this was for the x-divider but i dont use it
    // const [scrollProgress, setScrollProgress] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollTop = window.scrollY;
    //         const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    //         const scrollRatio = Math.min(scrollTop / documentHeight, 1);
    //         setScrollProgress(scrollRatio);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <div className="grid grid-cols-5 divide-x">
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
            <div className={`col-span-4 px-7 ${isHeader && isFirst ? '' : isHeader ? '' : 'pt-24'}`} ref={sectionRef}>
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
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    // const [scope, animate] = useAnimate();

    if (isMobile || isTablet) {
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
                    Responsible for creating compelling visual designs for various brands and businesses:
                </p>
                <ul className="list-disc list-inside section-description">
                    <li>
                        Designed logos and brand identities that effectively communicated the clients&apos; vision
                    </li>
                    <li>
                        Created engaging and eye-catching social media posts
                    </li>
                    <li>
                        Created posters and other assets for brands, ensuring smooth printing and production without issues
                    </li>

                </ul>
                <div className="pt-10">
                    <div className="grid grid-cols-4 grid-rows-6 gap-4 h-[40rem] w-full">
                        {projectData.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </Section>

            <p className="text-center mt-36 mb-16 uppercase">Experience</p>
            {/* Xceed Section */}
            <Section
                year="Aug 2023 - Sep 2023"
                title=""
                description=""
                sectionName=""
                isHeader={true}
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
                            UI Design Intern @ Xceed
                        </h1>
                        <div className="flex flex-wrap pt-4 gap-2 whitespace-nowrap">
                            {skillsData.xceed.map(skill => (
                                <span key={skill} className="chip">{skill}</span>
                            ))}
                        </div>
                        <p className="section-description pt-4 max-w-2xl">
                            Collaborated with a team of developer interns to design a task management web application, Taskify:
                        </p>
                        <ul className="list-disc list-inside section-description">
                            <li>
                                Designed the user interface, focusing on creating an intuitive and user-friendly experience
                            </li>
                            <li>
                                Developed the user experience flow, ensuring smooth task navigation and management
                            </li>
                            <li>
                                Coordinated with developers to align design and functionality seamlessly
                            </li>
                        </ul>
                        <Link href="https://taskmaster-231fe.web.app/login" target="_blank" rel="noopener noreferrer">
                            <button className="btn-primary mt-10" type="button">
                                Visit live website
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div>
                        <MacbookMockup videoUrl="/xceed.mp4" />
                    </motion.div>
                </div>
            </Section>

            {/* Roomera*/}
            <Section
                year="Mar 2022 - Sep 2022"
                title=""
                description=""
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
                            Roomera is a fun and intuitive VR, AR, and mobile tool designed to help people imagine and explore the future.
                        </p>
                        <ul className="list-disc list-inside section-description">
                            <li>
                                Conducted competitive analysis using SWOT to understand and inform design strategy
                            </li>
                            <li>
                                Conducted user interviews and synthesized insights to verify assumptions and refine customer
                                segmentation
                            </li>
                            <li>
                                Planned and iterated on surveys to capture meaningful user feedback
                            </li>
                            <li>
                                Created interactive prototypes and wireframes for a mobile application interface
                            </li>
                            <li>
                                Conducted multiple usability tests to ensure the interface was intuitive and user-friendly
                            </li>
                        </ul>
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


        </div>

    )
}