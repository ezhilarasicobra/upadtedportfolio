import { contact } from "../../portfolio";
import "./Contact.css";

const Achieve = () => {
  if (!contact.email) return null;

  return (
    <section className="project-section">
      <div>
        <h2 className="section__title">Interest / Achievements</h2>
      
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div className="boxes rotate-360-clockwise">
        Nominated for best client service Award in 2020.
        </div>
        <div className="boxes rotate-360-clockwise">
        Been an Extra Mile
          Worker in my Project.
        </div>
        <div className="boxes rotate-360-clockwise">
        Completed Fullstack Development program in Guvi Geek.
        </div>
      </div>
      </div>
    </section>
  );
};

export default Achieve;
