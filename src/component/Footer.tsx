// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="bg-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5 footer-adr">
              <img
                src="/img/bkkydc-navlogo.png"
                alt="Logo"
                width="220"
                height="75"
                className="cover mb-2"
              />
              <p>ที่อยู่สำนักงาน</p>
              <p className="font-gray">
                98/532 ซอยประชาอุทิศ33 แยก7 แขวงบางมด เขตทุ่งครุ กรุงเทพมหานคร
                10140
              </p>
              <p>ที่อยู่ส่งเอกสาร</p>
              <p className="font-gray">
                258/145 ถนนเจริญนคร แขวงสำเหร่ เขตธนบุรี กรุงเทพมหานคร 10600
              </p>
            </div>

            <div className="col-md-3">
              <p>ข่าวสารและกิจกรรม</p>
              <ul>
                <li>
                  <Link className="font-gray nav-link" to="">
                    ภารกิจผู้บริหาร
                  </Link>
                </li>
                <li>
                  <Link className="font-gray nav-link" to="">
                    กิจกรรม พยก.
                  </Link>
                </li>
                <li>
                  <Link className="font-gray nav-link" to="">
                    พยก. Gallery
                  </Link>
                </li>
                <li>
                  <Link className="font-gray nav-link" to="">
                    วิดีโอ
                  </Link>
                </li>
              </ul>
              <p>ร่วมเป็นส่วนหนึ่งกับ พยก.</p>
              <ul>
                <li>
                  <Link className="font-gray nav-link" to="">
                    สมัครสมาชิก
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4 ">
              <p>ติดตามเรา!</p>
              <a
                className="nav-link mx-2"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/bkkydc/"
              >
                <i className="fa fa-instagram mx-2"></i>
                IG: bkkydc
              </a>
              <a
                className="nav-link mx-2"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/BKKYDC"
              >
                <i className="fa fa-facebook mx-2"></i>
                สภาพัฒนาเยาวชนกรุงเทพมหานคร : พยก.
              </a>
              <a
                className="nav-link mx-2"
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/bkkydc"
              >
                <i className="fa fa-youtube mx-2"></i>
                bkkydc chanel
              </a>
              <a
                className="nav-link mx-2"
                target="_blank"
                rel="noreferrer"
                href="mailto: bkydc.connect@gmail.com"
              >
                <i className="fa fa-envelope mx-2"></i>
                bkydc.connect@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
      <center
        style={{
          backgroundColor: "#2b3990",
          color: "white",
          padding: "10px 0px",
        }}
      >
        <p style={{ marginBottom: "0px" }}>
          &copy; {new Date().getFullYear()} สภาพัฒนาเยาวชนกรุงเทพมหานคร : พยก.
        </p>
      </center>
    </div>
  );
};

export default Footer;
