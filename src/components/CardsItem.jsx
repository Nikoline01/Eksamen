import { Link } from "react-router-dom";
import HOF from "/src/assets/HOF.png";
import IS from "/src/assets/IS.png";
import NIPPON from "/src/assets/Nippon.png";
import MONK from "/src/assets/MONK.png";

export default function CardsItem() {
  return (
    <li className="cards-item">
      <Link to="/Project" className="cards-item-link">
        <img src={HOF} alt="HOF" />
        <p>HOLM OUTDOOR FITNESS</p>
      </Link>
      <Link to="/Project" className="cards-item-link">
        <img src={IS} alt="Interactive Storytelling" />
        <p>INTERACTIVE STORYTELLING</p>
      </Link>
      <Link to="/Project" className="cards-item-link">
        <img src={NIPPON} alt="NIPPON" />
        <p>NIPPON</p>
      </Link>
      <Link to="/Project" className="cards-item-link">
        <img src={MONK} alt="MONK" />
        <p>MONK</p>
      </Link>
    </li>
  );
}
