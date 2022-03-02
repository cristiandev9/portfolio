import './style.css';
import Project from '../Project';

export default function Projects (){
    const projects =[
        {
            id:1,
            title:'Agenda Digital',
            localImage:'../../img/projects/zage.png',
            github:'',
            url:'',
            language:'PHP'
        },
        {
            id:2,
            title:'Calculadora IMC',
            localImage:'../../img/projects/imc.png',
            github:'',
            url:'',
            language:'React'
        }

    ];


    return ( 
        <>
        <section className='section-projects'>
            
            <h1>Projetos</h1>
            <div className='div-projects'>
            {projects.map((e)=>
             
             <Project key={e.id}  props={e} />
            
                ).filter((e,i)=>i < 6)}

                {projects.length>=6 && (
                    <div className='div-button-view-more'><button className='button-view-more'>Ver mais</button></div>
                )

                }
            </div>
        </section>
        </>
    )
}