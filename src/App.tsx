import Avatar from './components/Avatar'
import CtaButton from './components/CtaButton'

import HomeContent from './components/HomeContent'
import VerticalTimeLine from './components/VerticalTimeLine'
import ContactContainer from './containers/ContactContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import ServicesContainer from './containers/ServicesContainer'
import SkillsContainer from './containers/SkillsContainer'
import Header from './layout/Header'
import Main from './layout/Main'
import Section from './layout/Section'
import BeautifulLink from './components/BeautifulLink'
import SectionTitle from './components/SectionTitle'

function App() {
    return (
        <>
            <Header />
            <Main>
                <Section name="home">
                    <CtaButton />
                    <Avatar />
                    <HomeContent />
                </Section>
                <Section name="skills">
                    <SkillsContainer />

                    <BeautifulLink
                        text="Check my github"
                        href="https://github.com/Rashy-hub"
                        gridPosition="col-start-1 row-start-9 col-span-12 row-span-1"
                    />
                </Section>
                <Section name="services">
                    <ServicesContainer />
                    <BeautifulLink
                        text="Check my LinkeDin"
                        href="https://www.linkedin.com/in/rachid-yagoubi-dev/"
                        gridPosition="col-start-1 row-start-9 col-span-12 row-span-1"
                    />
                </Section>
                <Section name="projects">
                    <ProjectsContainer />
                    <BeautifulLink
                        text="Check my github"
                        href="https://github.com/Rashy-hub"
                        gridPosition="col-start-1 row-start-9 col-span-12 row-span-1"
                    />
                </Section>

                <div className="h-fit w-screen flex flex-col items-center justify-between  md:grid md:grid-cols-12 md:grid-rows-[repeat(auto-fit,_minmax(0,_1fr))]   gap-8 md:gap-4 pt-4 place-content-center">
                    <SectionTitle title="educations" />
                    <VerticalTimeLine />
                </div>

                <Section name="contact">
                    <ContactContainer />
                </Section>
            </Main>
        </>
    )
}

export default App
