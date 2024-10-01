import React from "react";
function Universe() {
  return (
    <div className="container ">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5 ">
          <img src="./media/images/smallcaseLogo.png" />
         
          <p className="text-small text-muted text-center">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="\media\images\streakLogo.png" style={{width:"199px",height:"52px"}}/>
          <p className="text-small text-muted text-center">
            Algo & Strategy platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="\media\images\sensibullLogo.svg" style={{width:"199px",height:"52px"}} />
          <p className="text-small text-muted text-center">
            Options trading platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="\media\images\zerodhaFundhouse.png" style={{width:"199px",height:"52px"}}/>
          <p className="text-small text-muted text-center">
            Asset management
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="\media\images\goldenpiLogo.png" style={{width:"199px",height:"52px"}}/>
          <p className="text-small text-muted text-center">
            Bonds trading platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="\media\images\dittoLogo.png" style={{width:"199px",height:"52px"}} />
          <p className="text-small text-muted text-center">
            Insurance
          </p>
        </div>
        <button
          className="p-3 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup for Free
        </button>
      </div>
    </div>
  );
}
export default Universe;
