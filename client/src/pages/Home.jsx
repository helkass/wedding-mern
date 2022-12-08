import { Header } from "../components/Header.style"
import { Hero } from "../components/home/Hero.style"
import { About } from "../components/home/About.style"
import { Features } from "../components/home/Features.style"
import { Options } from "../components/home/Options.style"
import { Works } from "../components/home/Works.style"
import { Reviews } from "../components/home/Reviews.style"
import { Packet } from "../components/home/Packets.style"
import { Questions } from "../components/home/Question.style"
import { Footer } from "../components/home/Footer.style"
import { useRef } from "react"


const Home = () => {

	const feature = useRef(null)
	const option = useRef(null)
	const work = useRef(null)
	
    return (
        <>
        <Header options={option} works={work} features={feature}/>
		<Hero />
		<About />
		<Features forwardRef={feature}/>
		<Options forwardRef={option}/>
		<Works forwardRef={work}/>
		<Reviews />
		<Packet/>
		<Questions/>
		<Footer/>
        </>
    )
}

export default Home;