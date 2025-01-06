import { useState } from "react";
import "./Emoji.css";

const EMOJIS = new Map<String, String>([
  ["happy", "🙂"],
  ["sick", "🤮"],
  ["dead", "😵"],
]);
//EMOJIS.set("happy","🙂");

export default function Emoji() {
  const [situacao, setSituacao] = useState("dead");

  function toHappy() {
    console.log(`toHappy()! ${situacao}`);
    setSituacao("happy");
  }

  function toDead() {
    console.log(`toDead()! ${situacao}`);
    setSituacao("dead");
  }

  function toSick() {
    console.log(`toSick()! ${situacao}`);
    setSituacao("sick");
  }

  function toNextStage() {
    console.log(`toNextStage()! ${situacao}`);
    if(situacao === "happy"){
        setSituacao("sick");
        break;
    }
    else if(situacao === "sick"){
        setSituacao("dead");
        break;
    }
    else if(situacao === "dead"){
        setSituacao("happy");
        break;
    }
  }

  return (
    <div className="emoji">
      <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
      <div className="acoes">
        <button onClick={toHappy}>Vivo</button>
        <button onClick={toSick}>Doente</button>
        <button onClick={toDead}>Morto</button>
        <button onClick={toNextStage}>NextStage</button>
      </div>
    </div>
  );
}
