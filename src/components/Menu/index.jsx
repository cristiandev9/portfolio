import './style.css';
import { MdLightMode } from 'react-icons/md';
export default function Menu(){
    return(
        <>
        <nav className="navbar">
            <div className="logo">Cristian</div>
            <div className="theme"><MdLightMode size={21} color="#FFF"/></div>
        </nav>
        </>
    )
}