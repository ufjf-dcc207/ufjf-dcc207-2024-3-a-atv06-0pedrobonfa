import { useState } from 'react';
import './Atributo.css'


export default function Contador()
{
    const [valor, setValor] = useState(3);

    return (
        <div className="atributo">

            <span>{valor}</span>
            <button>+</button>

        </div>

    );
}

