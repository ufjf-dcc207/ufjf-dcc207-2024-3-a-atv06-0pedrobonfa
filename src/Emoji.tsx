import { useState } from "react";
import "./Emoji.css";
import Atributo from './Atributo'

const EMOJIS = new Map<String, String>([
  ["happy", "🙂"],
  ["neutral", "😐"],
  ["sick", "🤒"],
  ["sleepy", "😴"],
  ["dead", "😵"],
]);
//EMOJIS.set("happy","🙂");

export default function Emoji() {
  const [situacao, setSituacao] = useState("vivo");
  const [saude, setSaude] = useState(5);
  const [energia, setEnergia] = useState(3);
  const [comida, setComida] = useState(2);
  const [agua, setAgua] = useState(1);
  const [luz, setLuz] = useState(true);

  function onAlimentar() {
    setComida(Math.min(comida+1, 5));
  } 

  function onHidrata() {
    setAgua(Math.min(agua+1, 5));
  }

  function onLigaDesligaLuz() {
    setLuz(!luz);
  }

  function onCiclo() {
    if(comida>0 && agua > 0 && luz == false)
    {
      setSaude(Math.min(5,saude+1));
    }
    setComida(Math.max(0, comida - 1));
    setAgua(Math.max(0, agua - 1));
    setEnergia(Math.max(0, energia - 1));
    if(luz)
    {
      setEnergia(Math.max(0,energia-1));
    }else{
      setEnergia(Math.min(5,energia+1));
    }
    if(comida === 0){ 
      setSaude(s => Math.max(Math.max(0,s-1)));
    }
    if(agua === 0){
       setSaude(s => Math.max(Math.max(0,s-1)));
      }
    if(energia === 0){ 
      setSaude(s => Math.max(Math.max(0,s-1)));
    }
    if(saude === 1){
      //fica morto
      setSituacao("dead");
    }
    if(saude === 5){
      //fica bem
      setSituacao("happy");
    }
    if(saude === 2){
      //fica doente
      setSituacao("sick");
    }
    if(energia === 2)
    {
      //fica com sono
      setSituacao("sleepy")
    }


  }

  return (
    <div className="emoji">
      <div className="situacao">{EMOJIS.get(situacao) || "🙂"}</div>
      <div className="atributos">
          <Atributo icone={"❤️"} valor={saude}/>
          <Atributo icone={"⚡"} valor={energia}/>
          <Atributo icone={"🍗"} valor={comida}/>
          <Atributo icone={"💧"} valor={agua}/>
          <span style={{filter: luz?"":"grayscale(100%)"}}>💡</span>
        </div>
      <div className="acoes">
        <button onClick={onAlimentar}>Comida</button>
        <button onClick={onHidrata}>Água</button>
        <button onClick={onLigaDesligaLuz}>
          {luz?"Apagar" : "Acender"}</button>
        <button onClick={onCiclo}>Ciclo</button>
      </div>
    </div>
  );
}
