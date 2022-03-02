import './style.css';

export default function Skills(){
    return(
        <section className='section-languages'>
                <div>
                    <h1>Experiências</h1>
                   
                </div>
                <span className='span-title-2'>Habilidades</span>
                <div className='containers'>
                    <div className="container">
                        <ul>
                            <li>Front-End</li>

                            <li className='more-two-years'><div>+ de 2 anos </div></li>

                            <li className="li-js"><div>Javascript</div><div>75%</div></li>

                            <li>
                                <div className="progress">
                                    <span className="progress-bar-js"></span>
                                </div>
                            </li>

                            <li className="li-react"><div>React</div><div>60%</div></li>
                            
                            <li>
                                <div className="progress">
                                    <span className="progress-bar-react"></span>
                                </div>
                            </li>

                            <li className="li-next"><div>Next JS</div><div>45%</div></li>
                            
                            <li>
                                <div className="progress">
                                    <span className="progress-bar-next"></span>
                                </div>
                            </li>

                            <li className='li-html'><div>HTML</div><div>100%</div></li>
                            <li>
                                <div className="progress">
                                    <span className="progress-bar-html"></span>
                                </div>
                            </li>

                            <li className='li-css'><div>CSS</div><div>100%</div></li>
                            <li><div className="progress">
                                <span className="progress-bar-css"></span>
                            </div></li>
                        </ul>
                    </div>
                    <div className="container">
                        <ul>
                            <li>Back-End</li>

                            <li className='more-two-years'><div>+ de 2 anos </div></li>

                            <li className='li-php'><div>PHP</div><div>85%</div></li>
                            <li>
                                <div className="progress">
                                    <span className="progress-bar-php">
                                    </span>
                                </div>
                            </li>
                            
                            <li className='li-mysql'><div>MYSQL</div><div>85%</div></li>
                            <li>
                                <div className="progress">
                                    <span className="progress-bar-mysql">
                                    </span>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="container">
                        <ul>
                            <li>Outros</li>

                            <li className='more-two-years'><div>0 - 1 ano </div></li>

                            <li className='li-docker'><div>Docker</div><div>30%</div></li>
                            <li>
                                <div className="progress">
                                    <span className="progress-bar-docker">
                                    </span>
                                </div>
                            </li>
                            <li className='li-git'><div>Git</div><div>40%</div></li>
                            <li>
                                <div className="progress">
                                    <span className="progress-bar-git">
                                    </span>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
    )
}