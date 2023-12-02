// src/components/InfoPage.tsx
import React from "react";

const Info: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <center>
                  <img
                    src="./img/backlogo.png"
                    alt="news"
                    style={{ height: 200, width: "auto" }}
                  />
                </center>
                <h5 className="card-title">ข่าวสารที่ {i + 1}</h5>
                <p className="card-text">รายละเอียดข่าวสารที่ {i + 1}</p>
                <button
                  style={{
                    backgroundColor: "lightblue",
                    border: 0,
                    padding: "5px 10px",
                    color: "white",
                  }}
                >
                  ดูรายละเอียดเพิ่มเติม
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
