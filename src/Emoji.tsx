import "./Emoji.css";

const EMOJIS = new Map<String, String>([
  ["happy", "🙂"],
  ["sick", "🤮"],
  ["dead", "😵"],
]);
//EMOJIS.set("happy","🙂");

export default function Emoji() {
  let situacao = "dead";

  function toHappy()
  {
    console.log(`toHappy()! ${situacao}`);
    situacao = "happy";
  }

  function toDead()
  {
    console.log(`toDead()! ${situacao}`);
    situacao = "dead";
  }

  return (
    <div className="emoji">
      <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
      <div className="acoes">
        <button onClick={toHappy}>Vivo</button>
        <button onClick={toDead}>Morto</button>
      </div>
    </div>
  );
}
