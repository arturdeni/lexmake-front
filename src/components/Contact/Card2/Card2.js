import "./Card2.css";

export const Card2 = ({
  image,
  title,
  subtitle,
  description,
  onProfile,
  onFollow,
}) => (
  <div className="card-2">
    <img src={image} alt={title} />
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      <div className="buttons">
        <button className="lexmake-button" onClick={onProfile}>
          Profile
        </button>
        <button onClick={onFollow} className="primary lexmake-button">
          Follow
        </button>
      </div>
    </div>
  </div>
);
