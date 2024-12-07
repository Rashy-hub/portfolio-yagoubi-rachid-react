// src/types/TimelineElement.ts
export interface TimelineElement {
    id: number
    title: string
    location: string
    description: string
    buttonText?: string
    date: string
    icon: 'school' | 'work' // Restrict to 'school' or 'work'
    color: string // Represents the color theme
    tech: string[] // List of technologies
}
