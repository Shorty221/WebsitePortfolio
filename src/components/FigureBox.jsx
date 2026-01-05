//  FigureBox, this is where my profile pic's displayed
import profilePic from "../assets/ProfilePic.jpg";
export default function FigureBox() {
  return (
    <figure className="highlight-box">
      <img src={profilePic} alt="Placeholder image" />
      <figcaption>My profile pic</figcaption>
    </figure>
  );
}
