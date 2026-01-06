// Import your images
import project1 from "../assets/tinkercad/1.png"; // Greenhouse
import project2 from "../assets/tinkercad/2.png"; // Temperature Sensor
import project3 from "../assets/tinkercad/3.png"; // Traffic Light

const projects = [
  {
    src: project1,
    title: "Smart Greenhouse",
    description:
      "Automatically turns on a fan if the temp is too high and lights red otherwise it lights green and it'll display normal on the LCD. Yellow light will be on if there's enough sunlight",
  },
  {
    src: project2,
    title: "Temperature Sensor",
    description:
      "Measures temperature with an LM35 sensor and displays on Serial Monitor.",
  },
  {
    src: project3,
    title: "Traffic Light Controller",
    description:
      "Simulates a traffic light system using LEDs controlled by Arduino.",
  },
];

export default function Projects() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Arduino / Tinkercad Projects</h1>
      <div className="row">
        {projects.map((proj, index) => (
          <div key={index} className="col-md-4 mb-4">
            <figure className="text-center border p-2 rounded shadow-sm">
              <img
                src={proj.src}
                alt={proj.title}
                className="img-fluid rounded"
              />
              <figcaption className="mt-2">
                <strong>{proj.title}</strong>
                <p className="small">{proj.description}</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
