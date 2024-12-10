import React from "react";
import { motion } from "framer-motion";
import CardsSwipe from "./CardsSwipe";
import Carousel from "./carousel/Carousel";
import IPhoneVideoMockup from "./IphoneMockup";
import MacbookMockup from "./MacbookMockup";
import Link from "next/link";
import Image from "next/image";

// Fade-in variant for sections
const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

// Reuse project data and skills data from the desktop version
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

// Mobile ProjectCard (simplified version of desktop ProjectCard)
const ProjectCard = ({ href, imageSrc, title, year }: { href: string; imageSrc: string; title: string; year: string }) => {
    return (
        <div className="w-full h-[15rem] mb-4">
            <a href={href} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-full aspect-square">
                    <Image
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-lg text-white flex items-end justify-between p-4">
                        <p className="uppercase">{title}</p>
                        <p>{year}</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default function AboutSectionWorkMobile() {
    return (
        <div className="container mx-auto px-4 mt-16">
            {/* Journey Section */}
            <motion.div
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <p className="text-center mb-10 uppercase">Journey</p>

                <div className="mb-16">
                    <div className="mb-10">
                        <p className="section-description uppercase text-start sticky z-10 pb-4">2018 - 2023</p>
                        <h1 className="text-2xl font-medium mb-4 text-left">
                            I studied computer engineering and I had passion for art & design
                        </h1>
                        <p className="text-left text-gray-600">
                            I decided to pursue my passion for design by learning, creating, and trying new things
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <CardsSwipe />
                    </div>
                </div>
            </motion.div>

            {/* Design Journal Section */}
            <motion.div
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="mb-16">
                    <p className="section-description uppercase text-start sticky z-10 pb-4">2021</p>
                    <h1 className="text-2xl font-medium mb-4 text-left">
                        I started a journal about user-centered design
                    </h1>
                    <p className="text-left text-gray-600 mb-10">
                        Whenever I felt inspired by a product, or intrigued by a design, I would write about it
                    </p>
                    <Carousel />
                </div>
            </motion.div>

            {/* Freelancing Section */}
            <motion.div
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="mb-16">
                    <p className="section-description uppercase text-start sticky z-10 pb-4">2021 - Present</p>
                    <h1 className="text-2xl font-medium mb-4 text-left">
                        I started freelancing as a visual designer
                    </h1>
                    <p className="text-left text-gray-600 mb-10">
                        Designing brand identities, logos, and social media posts
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        {projectData.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <p className="text-center mb-10 uppercase">Experience</p>

                {/* Xceed Section */}
                <div className="mb-16">
                    <p className="section-description uppercase text-start sticky z-10 pb-4">Aug 2023 - Sep 2023</p>
                    <h1 className="text-2xl font-medium mb-4 text-left">
                        UI Design Intern @ Xceed
                    </h1>
                    <div className="flex flex-wrap justify-start gap-2 mb-4">
                        {skillsData.xceed.map(skill => (
                            <span key={skill} className="chip">{skill}</span>
                        ))}
                    </div>
                    <p className="text-left text-gray-600 mb-6">
                        I collaborated with my fellow front-end developer interns to create a simple yet functional and easy to use Task Management webapp. I also had the opportunity to chat with designers and engineers and learned from them how the business in general works
                    </p>
                    <div className="flex justify-center mb-6">
                        <MacbookMockup videoUrl="/xceed.mp4" />
                    </div>
                    <Link href="https://taskmaster-231fe.web.app/login" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
                        <button className="btn-primary mt-10" type="button">
                            Visit live website
                        </button>
                    </Link>
                </div>
                {/* Roomera Section */}
                <div>
                    <p className="section-description uppercase text-start sticky z-10 pb-4">Mar 2022 - Sep 2022</p>
                    <h1 className="text-2xl font-medium mb-4 text-left">
                        UX Research & Design Intern<br />@ Roomera, Inc.
                    </h1>
                    <div className="flex flex-wrap justify-start gap-2 mb-4">
                        {skillsData.roomera.map(skill => (
                            <span key={skill} className="chip">{skill}</span>
                        ))}
                    </div>
                    <p className="text-left text-gray-600 mb-6 ">
                        Roomera is a fun and intuitive VR, AR and mobile tool made to help people imagine and explore their home renovation ideas, so that they are able to visualize their ideas before carrying out their renovation project.
                    </p>
                    <div className="flex justify-center mb-6">
                        <IPhoneVideoMockup videoUrl="/roomera 2.mp4" />
                    </div>
                    <div className="flex justify-center">
                        <Link href="/roomera">
                            <button className="btn-primary" type="button">
                                View full case study
                            </button>
                        </Link>
                    </div>
                </div>


            </motion.div>
        </div>
    );
}