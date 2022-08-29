import Nav from './Nav'
import '../styles/hero.scss'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container'>
                <header>
                    <h1>Granola's Projects</h1>
                </header>
                <main>
                    <div className='grid'>
                        <a 
                        href="http://osc-client-deploy.s3-website.ca-central-1.amazonaws.com" 
                        className='card'>
                            <h2>Mina On-Chain Signals &rarr;</h2>
                            <p>Click here for the results from this election.</p>
                        </a>
                        <a 
                        href="" 
                        className='card'>
                            <h2>Projects in Development &rarr;</h2>
                            <p>A few projects are in the works. Coming Soon!</p>
                        </a>
                    </div>
                </main>
                <br></br><br></br><br></br>
                <footer>
                    <p>Say hello: <a text-decoration="none" color="#FFFFFF" href="mailto:hello@granola.team"><font color="#FFFFFF">hello@granola.team</font></a></p>
                </footer>
            </div>
        </section>
    )
}

export default Hero;
