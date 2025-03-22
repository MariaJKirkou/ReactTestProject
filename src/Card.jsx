
function Card({ image, name, description, className }) {
    return (
      <div className={`card ${className}`}>
        <img className="card-image" src={image} alt="profile picture" />
        <h2 className="card-rubric">{name}</h2>
        <p className="card-text">{description}</p>
      </div>
    );
  }
  
  export default Card;