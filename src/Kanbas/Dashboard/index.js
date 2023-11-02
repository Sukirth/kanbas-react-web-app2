import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

function Dashboard() {

  const courses = db.courses;

  return (
    <div style={{ marginLeft: "30px", marginTop: "30px" }}>
      <h1>Dashboard</h1>
      <hr />
      <h3>Published Courses (3)</h3>
      <hr />
      <div className="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <div className="card , course-card" style={{ width: "290px" }}>
            <img
              src={require("../Images/blue.png")}
              className="card-img-top"
              alt="..."
            ></img>
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="list-group-item"
              style={{ padding: "20px" }}
            >
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {course.number} {course.name}
              </h5>
              <p className="card-text" style={{ color: "darkgrey" }}>
                {course.number}.{course.startDate}.{course.endDate}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;