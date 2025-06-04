import "./cardEffect.min.css"
interface CardEffectProps {
  image: string;
  description: string;
}

function CardEffect(props: CardEffectProps) {

  return (
    <>
      <div className="card-container">
        <div className="card-effect">
          <div style={{ backgroundImage: `url("${props.image}")` }} className="card-front">
          </div>
          <div className="card-back">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardEffect;