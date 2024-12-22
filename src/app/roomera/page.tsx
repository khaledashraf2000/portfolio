'use client';

import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/Breadcrumbs";
import HoverCard from '@/components/HoverCard';

const LoadingScreen = dynamic(() => import('../../components/LoadingScreen'));

// Fade-in animation variant
const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const Roomera: NextPage = () => {
    const [loadingComplete, setLoadingComplete] = useState(false);

    const handleLoadingComplete = () => {
        setLoadingComplete(true);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {!loadingComplete && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInVariants}
                className="container mx-auto px-4 mt-24"
            >
                <div className="flex flex-col w-full gap-8">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/roomera">Roomera</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <h2 className="section-headline">Roomera</h2>
                </div>
            </motion.section>

            {/* Roomera GIF */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInVariants}
                className="w-screen h-96 overflow-hidden mt-12"
            >
                <Image
                    src="/vr.gif"
                    alt="roomera gif"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInVariants}
                className="container mx-auto px-4 mt-12"
            >
                <div className="flex flex-col w-full gap-8">
                    {/* Role details */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-y-4 sm:gap-x-12 md:gap-y-0"
                    >
                        <div className="flex flex-col gap-2 section-description bg-gray-200 p-4 rounded-lg">
                            <h4 className="section-description-headline">Role</h4>
                            <p>UX Research & Design intern</p>
                        </div>
                        <div className="flex flex-col gap-2 section-description bg-gray-200 p-4 rounded-lg">
                            <h4 className="section-description-headline">Duration</h4>
                            <p>6 months (Mar 2023 - Sep 2023)</p>
                        </div>
                        <div className="flex flex-col gap-2 section-description bg-gray-200 p-4 rounded-lg">
                            <h4 className="section-description-headline">Skills</h4>
                            <p>User Interviews - Competitive Analysis - UI Design - Secondary Data Analysis - Usability Testing</p>
                        </div>
                        <div className="flex flex-col gap-2 section-description bg-gray-200 p-4 rounded-lg">
                            <h4 className="section-description-headline">Tools</h4>
                            <p>Figma - Miro - Whimsical</p>
                        </div>
                    </motion.div>

                    {/* Overview */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInVariants}
                        className="flex flex-col gap-12 mt-24"
                    >
                        <div>
                            <h4 className="section-headline text-2xl mb-4">Overview</h4>
                            <div className="flex w-full justify-between">
                                <p className="section-description">
                                    Roomera is a fun and intuitive VR, AR and mobile tool made to help people imagine and explore the future.
                                    My role as a UX Research and Design intern was to help explore the landscape, structure meaningful conversations
                                    with potential customers, and synthesize this data into actionable insights.
                                </p>
                            </div>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeInVariants}
                            className="flex flex-col md:flex-row w-full items-start gap-8 md:gap-12 md:px-24 h-auto"
                        >
                            <div className="bg-gray-200 h-max py-8 px-8 flex flex-col gap-2 rounded-lg md:w-[50%]">
                                <div className="mt-0 mb-0 p-0 flex gap-2">
                                    <Image src="/icons/target.svg" width={16} height={16} alt="target icon" />
                                    <p className="section-description-headline">Problem Statement</p>
                                </div>
                                <p className="section-description">
                                    How can we help homeowners visualize their home renovation ideas before initiating a project,
                                    providing them with a near-real-life experience that instills confidence in their choices
                                    and encourages idea-sharing and inspiration?
                                </p>
                            </div>
                            <div className="bg-gray-200 h-max py-8 px-8 flex flex-col gap-2 rounded-lg md:w-[50%]">
                                <div className="mt-0 mb-0 p-0 flex gap-2">
                                    <Image src="/icons/lightbulb.svg" width={16} height={16} alt="lightbulb icon" />
                                    <p className="section-description-headline">Solution</p>
                                </div>
                                <p className="section-description">
                                    Develop an AR-based app that lets homeowners visualize and customize renovation ideas,
                                    compare designs, and share for feedback. It includes inspiration, cost estimation,
                                    and collaboration tools for confidence and ease of use.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Research */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInVariants}
                        className="flex flex-col gap-12 mt-24 md:flex-row md:justify-between"
                    >
                        <div className="flex flex-col gap-4 md:w-2/3">
                            <h4 className="section-headline text-2xl">Research</h4>
                            <p className="section-description max-w-xl">
                                During Roomera&apos;s early stages, we focused on defining our core value, understanding user needs,
                                and identifying our competitive edge. Through stakeholder discussions and market research,
                                we conducted a SWOT analysis and heuristic reviews of competitors&apos; apps, visualizing findings with radar charts.
                            </p>
                            <div className="bg-gray-200 py-8 px-8 md:flex md:flex-col gap-2 rounded-lg md:max-w-xl hidden">
                                <div className="mt-0 mb-0 p-0 flex gap-2">
                                    <Image src="/icons/sparkles.svg" width={16} height={16} alt="sparkles icon" />
                                    <p className="section-description-headline">Conclusion</p>
                                </div>
                                <p className="section-description">
                                    The research revealed a market gap for a tool that helps users create and visualize ideas
                                    while fostering inspiration, idea-sharing, and community connection.
                                </p>
                            </div>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeInVariants}
                        >
                            <HoverCard>
                                <video
                                    src="/heuristic evaluation.webm"
                                    width={800}
                                    height={300}
                                    className="border border-gray-500 rounded-lg"
                                    loop
                                    muted
                                    autoPlay
                                >
                                    Your browser does not support the video tag.
                                </video>

                            </HoverCard>
                        </motion.div>

                        <div className="bg-gray-200 py-8 px-8 flex flex-col gap-2 rounded-lg md:max-w-xl md:hidden">
                            <p className="section-description-headline">Conclusion</p>
                            <p className="section-description">
                                The research revealed a market gap for a tool that helps users create and visualize ideas
                                while fostering inspiration, idea-sharing, and community connection.
                            </p>
                        </div>
                    </motion.div>

                    {/* User Interviews */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInVariants}
                        className="flex flex-col gap-12 mt-24"
                    >
                        <div>
                            <h4 className="section-headline text-2xl mb-4">User Interviews</h4>
                            <div className="flex w-full justify-between">
                                <p className="section-description">
                                    To understand our users, we analyzed secondary data for insights on demographics and behavior,
                                    then validated assumptions through user interviews. These interviews explored user dynamics,
                                    workflows, pain points, and tools they use. Finally, surveys with thousands of participants
                                    helped confirm and expand our findings.
                                </p>
                            </div>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeInVariants}
                            className="flex flex-col md:flex-row w-full items-start gap-8 md:gap-12 h-auto"
                        >
                            <div className="bg-gray-200 h-max py-8 px-8 flex flex-col gap-2 rounded-lg items-center w-full md:min-w-fit">
                                <Image
                                    src="/the smiths.jpg"
                                    width={300}
                                    height={300}
                                    alt="The Smiths persona"
                                />
                                <p className="section-description-headline">The Smiths</p>
                                <ul className="section-description text-center">
                                    <li>Family interested in building a home</li>
                                    <li>Have stable income, allowed to take time for this</li>
                                </ul>
                            </div>
                            <div className="bg-gray-200 h-max py-8 px-8 flex flex-col gap-2 rounded-lg items-center w-full md:min-w-fit">
                                <Image
                                    src="/the jones'.jpg"
                                    width={300}
                                    height={300}
                                    alt="The Jones' persona"
                                />
                                <p className="section-description-headline">The Jones&apos;</p>
                                <ul className="section-description text-center">
                                    <li>Family interested in remodeling a home</li>
                                    <li>Have stable income, but maybe busy lives</li>
                                </ul>
                            </div>
                            <div className="bg-gray-200 h-max py-8 px-8 flex flex-col gap-2 rounded-lg items-center w-full md:min-w-fit">
                                <Image
                                    src="/max.jpg"
                                    width={300}
                                    height={300}
                                    alt="Max persona"
                                />
                                <p className="section-description-headline">Max</p>
                                <ul className="section-description text-center">
                                    <li>Interested in design only</li>
                                    <li>Age can vary significantly</li>
                                    <li>Income is not necessarily relevant</li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Design */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInVariants}
                        className="flex flex-col gap-12 mt-24 md:flex-row md:justify-between"
                    >
                        <div className="flex flex-col gap-4 md:w-2/3">
                            <h4 className="section-headline text-2xl">Design</h4>
                            <p className="section-description max-w-xl">
                                Based on our research, we concluded that it&apos;s time to design our application user interface. So I began with making a high-level information architecture diagram, followed by two concepts of a prototype to the application.
                            </p>
                            <h5 className='section-description-headline mt-8'>Information Architecture</h5>
                            <p className='section-description'>
                                The information architecture was the first step in designing the user interface, as it depicts the logical flow of the application, guiding me to create a user friendly interface.
                            </p>
                            <h5 className='section-description-headline mt-8'>Rapid Prototyping & Testing</h5>
                            <p className='section-description'>
                                I designed two concepts that followed the initial information architecture, and then conducted usability testing to test whether or not they are easy to use.
                                Each participant were assigned the following tasks:
                            </p>
                            <ul className='section-description list-disc pl-9'>
                                <li>Add a chair</li>
                                <li>Remove the chair</li>
                                <li>Undo</li>
                                <li>Identify icons</li>
                            </ul>
                            <div className="bg-gray-200 py-8 px-8 md:flex md:flex-col gap-2 rounded-lg md:max-w-xl hidden mt-8">
                                <div className="mt-0 mb-0 p-0 flex gap-2">
                                    <Image src="/icons/sparkles.svg" width={16} height={16} alt="sparkles icon" />
                                    <p className="section-description-headline">Conclusion</p>
                                </div>
                                <p className="section-description">
                                    We eventually chose concept 1 over concept 2 according to the user feedback.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-16'>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={fadeInVariants}
                            >
                                <HoverCard>
                                    <Image
                                        src="/images/IA.png"
                                        alt="Information Architecture of Roomera app"
                                        width={800}
                                        height={300}
                                    />
                                </HoverCard>
                            </motion.div>
                            <div className='flex gap-12 items-center justify-end'>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={fadeInVariants}
                                >
                                    <HoverCard>
                                        <Image
                                            src="/prototype concept 1.gif"
                                            alt="Roomera app prototype concept 1"
                                            width={230}
                                            height={300}
                                        />
                                    </HoverCard>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={fadeInVariants}
                                >
                                    <HoverCard>
                                        <Image
                                            src="/prototype concept 2.gif"
                                            alt="Roomera app prototype concept 2"
                                            width={250}
                                            height={300}
                                        />
                                    </HoverCard>
                                </motion.div>

                            </div>

                        </div>

                        <div className="bg-gray-200 py-8 px-8 flex flex-col gap-2 rounded-lg md:max-w-xl md:hidden">
                            <div className="mt-0 mb-0 p-0 flex gap-2">
                                <Image src="/icons/sparkles.svg" width={16} height={16} alt="sparkles icon" />
                                <p className="section-description-headline">Conclusion</p>
                            </div>
                            <p className="section-description">
                                We eventually chose concept 1 over concept 2 according to the user feedback.
                            </p>
                        </div>
                    </motion.div>

                    {/* Conclusion */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInVariants}
                        className="flex flex-col gap-12 mt-24 md:flex-row md:justify-between"
                    >
                        <div className="flex flex-col gap-4 md:w-2/3">
                            <h4 className="section-headline text-2xl">Internship Conclusion</h4>
                            <p className="section-description max-w-xl">
                                This concludes the end of my 6-months long internship. I have learned a lot about <strong>the design process, how to conduct user interviews, design a user interface, and carry out usability testing.</strong> With the help of my mentor I was able to make <strong>informed design decisions</strong>, and I am grateful for the opportunity to work on such an amazing project.
                            </p>
                            <div className=" md:flex md:flex-col md:max-w-xl hidden mt-8">
                                <HoverCard>
                                    <Image
                                        src="/internship.jpg"
                                        width={800}
                                        height={300}
                                        alt='A picture of me and my mentor Thong Nguyen'
                                        className='rounded-lg shadow-lg'
                                    />
                                </HoverCard>
                            </div>
                        </div>

                        <div className='flex flex-col gap-16'>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={fadeInVariants}
                            >
                                <HoverCard>
                                    <Image
                                        src="/Roomera Letter of Certification.webp"
                                        alt="Information Architecture of Roomera app"
                                        width={800}
                                        height={300}
                                        className='rounded-lg shadow-lg'
                                    />
                                </HoverCard>
                            </motion.div>
                        </div>

                        <div className="flex flex-col md:max-w-xl md:hidden">
                            <HoverCard>
                                <Image
                                    src="/internship.jpg"
                                    width={800}
                                    height={300}
                                    alt='A picture of me and my mentor Thong Nguyen'
                                    className='rounded-lg shadow-lg'
                                />
                            </HoverCard>
                        </div>
                    </motion.div>

                    <div className='flex flex-col gap-8 md:flex-row md:gap-8 items-center justify-center mt-24'>
                        <a href="/" className="section-description-headline text-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={fadeInVariants}
                                className="bg-white h-max py-8 px-8 flex justify-center gap-2 rounded-lg items-center w-full md:min-w-fit shadow-lg"
                            >
                                <Image
                                    src="/icons/arrow-left.svg"
                                    width={32}
                                    height={32}
                                    alt="home icon"
                                />
                                <p>Back to Home</p>
                            </motion.div>
                        </a>
                        <motion.button
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeInVariants}
                            className="bg-white h-max py-8 px-8 flex justify-center gap-2 rounded-lg items-center w-fit md:min-w-fit shadow-lg"
                            onClick={scrollToTop}
                            type='button'
                        >
                            <Image
                                src="/icons/arrow-up.svg"
                                width={32}
                                height={32}
                                alt="home icon"
                            />
                            <p className="section-description-headline text-center">Scroll to top</p>
                        </motion.button>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Roomera;