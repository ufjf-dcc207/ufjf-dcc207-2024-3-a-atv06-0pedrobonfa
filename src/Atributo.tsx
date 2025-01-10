import { useState } from 'react';
import './Atributo.css'

type AtributoProps = {
    icone:String;
}

export default function Contador({icone}: AtributoProps){
    const [valor, setValor] = useState(5);

    function onMaisClick(){
        if(valor == 5)
        {
            setValor(0);
        }
        else{
            setValor(valor+1);
        }
        
    }

    return (
        <div className="atributo">

            <span>{icone.repeat(valor)}</span>
            <span className="inativo">{icone.repeat(5-valor)}</span>
            <button onClick={onMaisClick}>+</button>

        </div>

    );
}

