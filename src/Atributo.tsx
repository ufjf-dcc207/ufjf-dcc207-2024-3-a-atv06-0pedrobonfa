import { useState } from 'react';
import './Atributo.css'

type AtributoProps = {
    icone:String;
    valor: number;
}

export default function Contador({icone, valor}: AtributoProps){
        


    return (
        <div className="atributo">

            <span>{icone.repeat(valor)}</span>
            <span className="inativo">{icone.repeat(5-valor)}</span>

        </div>

    );
}

