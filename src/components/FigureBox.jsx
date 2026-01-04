//  src/components/FigureBox.jsx
import profilePic from "../assets/ProfilePic.jpg";
export default function FigureBox() {
  return (
    <figure className="highlight-box">
      <img src={profilePic} alt="Placeholder image" />
      <figcaption>This is my handsome face.</figcaption>
    </figure>
  );
}
