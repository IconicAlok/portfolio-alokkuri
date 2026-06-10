import { Hero } from '../components/Hero'
import { Contact } from '../components/Contact'
import { Skills } from '../components/Skills'
import { Services } from '../components/Services'
import { Works } from '../components/Works'
import { About } from '../components/About'
import Clients from '../components/Clients'



export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills/>
      <Works/>
      <Services />
      <Clients />
      <Contact />
    </>
)
}
