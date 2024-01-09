import React from "react";
import MesBtn from "./MesBtn";

const Meses = () =>{
    return (
        <div className="flex">
            <MesBtn n={-11}/>
            <MesBtn n={-10}/>
            <MesBtn n={-9}/>
            <MesBtn n={-8}/>
            <MesBtn n={-7}/>
            <MesBtn n={-6}/>
            <MesBtn n={-5}/>
            <MesBtn n={-4}/>
            <MesBtn n={-3}/>
            <MesBtn n={-2}/>
            <MesBtn n={-1}/>
            <MesBtn n={0}/>
        </div>
    )
}

export default Meses