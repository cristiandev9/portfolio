import Menu from './components/Menu';
import PersonalInformations from './components/PersonalInformations';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';



export default function App() {

    const urlDownloadCurriculo = './documents/curriculo.pdf';

    return (
        <div className='div-global'>
            <Menu />
            <PersonalInformations />

            <section className="section-buttons-cv-about">
                <a href={urlDownloadCurriculo} download>Download CV</a>
                <a className='btn-about-me' href='#section-footer'>Sobre mim</a>
               
                
            </section>
     

            <Profile />

            <Skills />

            <Projects />

            <Footer />

        </div>
    )
}