import React from "react";
import BlogSlider from "../component/Blogslider";
import VideoFrame from "../component/VideoFrame";
import ExecutiveSlider from "../component/ExecutiveSlide";
import PartnerSlider from "../component/PartnerSlider";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <img
              className="w-100"
              style={{ marginTop: "-50px" }}
              src="/img/banner/main-banner.png"
              alt="banner"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <center className="my-5">
              <h3 className="head-line-bkk">รู้จัก พยก.</h3>
              <p>สภาพัฒนาเยาวชนกรุงเทพมหานคร</p>
              <p className="mt-4">
                สภาพัฒนาเยาวชนกรุงเทพมหานคร
                เป็นองค์กรเอกชนด้านการพัฒนาเด็กและเยาวชน
                <br />
                ตามพระราชบัญญัติส่งเสริมการพัฒนาเด็กและเยาวชนแห่งชาติ
                <br />
                มุ่งส่งเสริมและสนับสนุนการมีส่วนร่วมของเด็กและเยาวชน
                <br />
                สู่การเป็นพลเมืองที่ดีและมีคุณภาพของสังคม
                <br />
                เพื่อเป็นกำลังสำคัญในการพัฒนากรุงเทพมหานครและสังคมให้น่าอยู่ต่อไป
                <br />
              </p>
            </center>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <center className="my-3">
              <h3 className="head-line mb-5">ข่าวสารล่าสุด</h3>
            </center>
            <BlogSlider />
            <center className="my-3 mt-5">
              <h3 className="head-line mb-5">วิดิโอกิจกรรม พยก.</h3>
            </center>
            <VideoFrame />
            <center className="my-3 mt-5">
              <h3 className="head-line mb-5">ผู้บริหาร</h3>
            </center>
            <ExecutiveSlider />
            <center className="my-3 mt-5">
              <h3 className="head-line mb-5">ผลงานของเรา</h3>
              <Link to="/about">
                <img
                  src="https://bkkydc-cms.000webhostapp.com/wp-content/uploads/2023/09/ผลงานพยก.jpg"
                  alt="bkkydc"
                />
              </Link>
            </center>
            <div className="mb-5">
              <center className="my-3 mt-5">
                <h3 className="head-line mb-5">พาร์ทเนอร์ของเรา</h3>
              </center>
              <PartnerSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
