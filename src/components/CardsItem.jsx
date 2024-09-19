import { Link } from "react-router-dom";
import HOF from "/src/assets/HOF.png";

export default function CardsItem() {
  return (
    <li className="cards-item">
      <Link to="/Project" className="cards-item-link">
        <img src={HOF} alt="HOF" />
        <p>HOLM OUTDOOR FITNESS</p>
      </Link>
      <Link to="/Project" className="cards-item-link">
        <img src="/src/assets/IS.png" alt="STORYTELLING"></img>
        <p>INTERACTIVE STORYTELLING</p>
      </Link>
      <Link to="/Project" className="cards-item-link">
        <img src="/src/assets/NIPPON.png" alt="NIPPON"></img>
        <p>NIPPON</p>
      </Link>
      <Link to="/Project" className="cards-item-link">
        <img src="/src/assets/MONK.png" alt="MONK"></img>
        <p>MONK</p>
      </Link>
    </li>
  );
}
