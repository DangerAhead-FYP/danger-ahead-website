import React from 'react'
import { Link } from "react-router-dom";
import accident_img from "../images/accident-img.png"

export default function Card() {
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="card">
                  <img
                    className="card-img-top"
                    src={accident_img}
                    alt="Card image cap"
                  />
                <div className="card-body">
                  <br />
                  <h5 className="card-title">Start Your Application</h5>
                  <p className="card-text">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                  <div className="fixapplybut">
                    <Link to="" className="applybut">
                      <button className="btn btn-sih-other">
                        Apply Here ...
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
