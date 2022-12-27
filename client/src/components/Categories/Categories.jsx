import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://i.ibb.co/CBg842r/Group-3.png"
            alt=""
          />
          <button>
            <Link className="link" to="/products/6">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://i.ibb.co/cv1vmbK/Group-7.png"
            alt=""
          />
          <button>
            <Link to="/products/4" className="link">
              New
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://i.ibb.co/dgHwk4H/Group-9.png"
            alt=""
          />
          <button>
            <Link to="/products/5" className="link">
              Pipe/Exhaust
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://i.ibb.co/2ySKHh4/Group-6.png"
                alt=""
              />
              <button>
                <Link to="/products/3" className="link">
                  Mags/RIM
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://i.ibb.co/bF5TdtT/Group-4.png"
                alt=""
              />
              <button>
                <Link to="/products/7" className="link">
                  Shock Absorber/Suspension
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://i.ibb.co/RCKL0Qh/Group-11.png"
            alt=""
          />
          <button>
            <Link to="/products/2" className="link">
              Care and Maintenance
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
