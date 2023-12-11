import React from "react";

const About: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0 mt-5">
            <div className="margin-about">
              <div>
                <h2 className="about-head">Penhuang Bot</h2>
                <hr className="header-line" />
              </div>
              <div className="margin-about-content">
                <p>
                  กำลังอยากคุยกับใครสักคนหรือไม่ เป็นห่วงบอทพร้อมจะเป็นเพื่อนรับฟังคุณเสมอ
                </p>
                <button>แชทเลย!</button>
                <div>
                  <hr className="header-line" />
                  </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default About;
