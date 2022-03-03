import './style.css';
import { GoMarkGithub } from "react-icons/go";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiInstagram } from "react-icons/si";
import { RiMouseLine } from "react-icons/ri";
export default function Profile(){
    return(
        <>
        <section className='section-img-profile'>
                <div className="div-icons">
                    <ul>
                        <li><a href='https://www.github.com/cristiandev9'><GoMarkGithub size={25} /></a></li>
                        <li><a href='https://www.linkedin.com/in/cristian-andrisen-6497301a0/'><TiSocialLinkedin size={25} /></a></li>
                        <li><a href='https://www.instagram.com/cristian.andrisen/'><SiInstagram size={22} /></a></li>
                    </ul>
                </div>

                <div className='div-img'>
                    <img className='img-profile' src='img/profileCristian.png' />
                </div>

                <div className="scroll-sec">
                    <ul>
                        <li>S</li>
                        <li>c</li>
                        <li>r</li>
                        <li>o</li>
                        <li>l</li>
                        <li>l</li>
                        <li><RiMouseLine /></li>
                    </ul>
                </div>
            </section>
        </>
    );
}

