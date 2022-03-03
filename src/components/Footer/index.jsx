import './style.css';
import { GoMarkGithub } from "react-icons/go";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiInstagram } from "react-icons/si";

export default function Footer(){
    return(
        <>
        <section className='section-footer' id='section-footer'>
            <footer>
                <div className='div-section-footer'>
                    <div>Sobre mim</div>
                    <div>Comecei a programar no ensino médio e lá tive aulas de programação WEB. Houve um concurso em que ganhei entre os alunos, o prêmio de melhor site. Cursei parte do curso de Direito. E voltei para área de tecnologia, começei a cursar Análise e desenvolvimento de sistemas, logo no início do curso, entrei para a empresa Simples TI, onde adquiri muitos conhecimentos na área. Nesse mesmo período que fui aprendendo, criei novos projetos, inclusive desenvolvi uma agenda digital (sistema web), voltado para empreendedores, fiz novos cursos sobre as principais tecnologias e que aplico no dia a dia...</div>
                </div>
              
                <div className='div-section-footer'>
                    <div>Minhas redes sociais</div>
                    <div><a href='https://www.github.com/cristiandev9'><GoMarkGithub size={25} /></a></div>
                    <div><a href='https://www.linkedin.com/in/cristian-andrisen-6497301a0/'><TiSocialLinkedin size={25} /></a></div>
                    <div><a href='https://www.instagram.com/cristian.andrisen/'><SiInstagram size={22} /></a></div>
                </div>
            </footer>
        </section>
        </>
    )
}