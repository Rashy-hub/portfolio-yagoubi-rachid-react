// src/data/timelineElements.ts
import { TimelineElement } from '../types/TimelineElement'

const timelineElements: TimelineElement[] = [
    {
        id: 1,
        title: 'Graduated in Electronics Engineering',
        location: 'Brussels, Belgium',
        description:
            'Completed my bachelor degree in electronics engineering / embedded systems at HELB/HEFF.',
        buttonText: 'Details',
        date: '2013',
        icon: 'school',
        color: 'blue',
        tech: ['C++', 'C', 'Python', 'Networks'],
    },
    {
        id: 2,
        title: 'Web Development Intern',
        location: 'Brussels, Belgium',
        description: 'Worked on web development projects at Stylelabs Inc.',
        buttonText: 'Details',
        date: 'Jan 2016 - Mar 2016',
        icon: 'work',
        color: 'purple',
        tech: ['C#', 'API REST', '.NET', 'Selenium', 'HTML5'],
    },

    {
        id: 3,
        title: 'Full Stack Web Developer at BeCode.org',
        location: 'Brussels, Belgium',
        description:
            'Worked on collaborative projects in a professional environment, applying agile methodologies. Developed my portfolio highlighting technical and soft skills.',
        buttonText: 'Details',
        date: 'Apr 2024 - Present',
        icon: 'school',
        color: 'green',
        tech: [
            'JavaScript',
            'React',
            'Node.js',
            'MongoDB',
            'TypeScript',
            'API REST',
            'Tailwind CSS',
        ],
    },
    {
        id: 4,
        title: ' Professional Break for Career Transition ',
        location: 'Brussels, Belgium',
        description:
            'Began learning as a Self-driven Learner , building web applications with modern JavaScript frameworks. Passing multiples certifications and courses online',
        buttonText: 'Details',
        date: '2022 - Present',
        icon: 'school',
        color: 'orange',
        tech: [
            'JavaScript',
            'React',
            'SQL',
            'Node.js',
            'Express',
            'MongoDB',
            'TypeScript',
            'Self-training',
            'Online courses',
            'Web Development',
        ],
    },

    {
        id: 5,
        title: 'R&D Lab Technician at UCL',
        location: 'Louvain-la-Neuve, Belgium',
        description:
            'Developed a platform to manage electrochemical sensors, designed electronic schematics, and worked with Raspberry Pi and Python.',
        buttonText: 'Details',
        date: 'Jan 2013 - Jun 2013',
        icon: 'work',
        color: 'blue',
        tech: ['Python', 'Raspberry Pi', 'Arduino', 'PCB Design'],
    },
]

export default timelineElements
