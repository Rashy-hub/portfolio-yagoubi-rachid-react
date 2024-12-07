import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const ProjectsContainer: React.FC = () => {
    const projects = [
        {
            link: 'https://github.com/Rashy-hub/KriticArt-FullStack',
            image: '/projetA.png',
            title: 'KriticArt Web App',
            description:
                'KriticArt is a MERN stack project focused on showcasing a powerful  collaborative photo-sharing and review platform built using the MERN stack. Users can create accounts, upload photos from their devices or import them via third-party services. The platform allows users to comment on and rate photos, create personal galleries, and mark favorites. The homepage features a curated selection of random or thematic images, fetched from public APIs. The back-end, implemented in TypeScript, is designed for scalability and includes advanced functionalities like authentication, media uploads, and external API integrations. Work is still in progress 🚧',
        },
        {
            link: 'https://tasktrackr-tool.onrender.com/',
            image: '/projetB.png',
            title: 'TaskTrackr SaaS',
            description:
                'Our app is designed to help users efficiently organize their tasks by incorporating proven productivity techniques like the Pomodoro method. Tailored for students, professionals, and anyone striving for better task management, it simplifies organization with predefined categories and an intuitive interface. A built-in Pomodoro tracker, complete with session statistics, empowers users to stay focused and track their progress seamlessly, making productivity both effective and effortless.',
        },
        {
            link: 'https://jobtrackr-6b0t.onrender.com/',
            image: '/projetC.png',
            title: 'JobTrackr',
            description:
                'This web app keeps track of your applications (as job seeker) , saving your cvs , job status etc... The app includes features like creating and updating job entries, filtering and sorting jobs, and managing user profiles. It interacts seamlessly with a backend API and includes several modern UI/UX elements such as animations, modals, and customizable particle effects.',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between each child animation
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <motion.div
            className="w-full h-full col-start-2 row-start-3 col-span-10 row-span-6 place-self-center flex gap-8 items-center justify-center flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Start animation when 10% of the container is visible
            variants={containerVariants}
        >
            {projects.map((project, index) => (
                <motion.div
                    className="w-80 h-96"
                    variants={cardVariants} // Ensure animation is attached
                    key={index}
                >
                    <ProjectCard
                        link={project.link}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                    />
                </motion.div>
            ))}
        </motion.div>
    )
}

export default ProjectsContainer
