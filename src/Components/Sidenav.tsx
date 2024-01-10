import React from "react"
import fintech from "../assets/FintechSVG.tsx"
import resumo from "../assets/icons/resumo.svg"

const Sidenav = () => {
    return (
        <nav>
            <img src={resumo} alt="Fintech logo" />
            <ul>
                <li>
                    <span>
                        <img src={resumo} alt="" />
                    </span>
                    <a href="">Resumo</a>
                </li>
                
            </ul>            
        </nav>
        
    )
}

export default Sidenav