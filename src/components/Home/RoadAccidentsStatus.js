import React from "react";
import accidentsPic from "../../images/AccidentsPic.png";
import "../../stylesheets/Home/RoadAccidentsStatus.css"
export default function RoadAccidentsStatus(){
  return (
    <>
      <section id="appbody" className="py-5">
        <h3 className="text-center poppins f-50 mb-5">Road Accidents Status</h3>
        <div className="container">
          <div className="row">
            <div className="accstatus-col col-lg-4 col-12">
              <div className="card">
                <div className="card-img" style={{"backgroundColor":"#eac95f"}}>
                    <center>
                        <img src={accidentsPic} alt="Logo" className="accstatuspic"/>
                    </center>
                     
                </div>
                <div className="card-body">
                  <h5 className="card-title f-20">Why Road Health is important?</h5>
                  <br/>
                  <p className="card-text habibi grey f-14">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                  <p className="card-text habibi grey f-14">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                  <p className="card-text habibi grey f-14">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                </div>
              </div>
            </div>
            <div className="accstatus-col col-lg-4 col-12">
              <div className="card">
                <div className="card-img" style={{"backgroundColor":"#e6702da3"}}>
                    <center>
                        <img src={accidentsPic} alt="Logo" className="accstatuspic"/>
                    </center>
                     
                </div>
                <div className="card-body">
                  <h5 className="card-title f-20">Risk factors for increasing accidents</h5>
                  <br/>
                  <p className="card-text habibi grey f-14">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                  <p className="card-text habibi grey f-14">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                  <p className="card-text habibi grey f-14">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                </div>
              </div>
            </div>
            <div className="accstatus-col col-lg-4 col-12">
              <div className="card">
                <div className="card-img" style={{"backgroundColor":"#e6432da3"}}>
                    <center>
                        <img src={accidentsPic} alt="Logo" className="accstatuspic"/>
                    </center>
                     
                </div>
                <div className="card-body">
                  <h5 className="card-title f-20">Steps to avoid accidents</h5>
                  <br/>
                  <p className="card-text habibi grey f-14">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                  <p className="card-text habibi grey f-14">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                  <p className="card-text habibi grey f-14">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
