import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  
  // change state acording time
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  return (
    <div className="Navbar mb-4">
      <nav
        className="navbar navbar-light justify-content-between"
        style={{ backgroundColor: "rgb(109 255 255)" }}
      >
        <Link to="/" className="navbar-brand m-2 ms-5">
          <h2>Habit Tracker</h2>
        </Link>
        <form action="" className="form-inline">
          <Link
            to="/add"
            className="btn btn-outline-info  me-5 my-sm-0 m-2 "
            type="submit"
          >
            Add Habits
          </Link>
        </form>
      </nav>
      <h4 className="text-center mt-2 text-decoration-underline">
        Good &nbsp;
        {hour <= 12
          ? "Morning"
          : hour <= 17
          ? "Afternoon"
          : hour <= 21
          ? "Evening"
          : "Night"}
      </h4>
    </div>
  );
};

export default Navbar;
