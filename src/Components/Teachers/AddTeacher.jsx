import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const AddTeacher = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center p-5 rounded m-3">
        <div className="col-12 col-md-4 col-lg-4 d-flex flex-column justify-content-center">
          <img
            //src="https://ouch-cdn2.icons8.com/XuGmjWOFl3CLinPqodbyrk6BusMq3Sj4ybzp9YQuyiI/rs:fit:256:238/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjc2/Lzg5NzE2MDczLTc1/MjAtNDViMi1iYmEx/LWI1OTA5M2MwMGY3/NS5wbmc.png"
            src="https://ouch-cdn2.icons8.com/HScNCUE-_8tNaiE85brq4hxbDMXIMSY-h0laUmX_kL4/rs:fit:256:277/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjI0/LzU3MjA4YTczLWY4/ZjYtNDk0OS04OWJi/LTU2MzcwNTY4YTZk/Mi5wbmc.png"
            alt=""
            className="mb-4"
            style={{
              width: "100%",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
          <span className="mb-0 text-uppercase">Westcoast Education</span>
          <h1>Register new teacher</h1>
          <p className="py-3 text-muted ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quam
            tempora quibusdam blanditiis dicta veniam! Magni, neque? Cupiditate,
            qui. Non ab sequi officiis aut amet sit accusantium ea possimus
            deleniti!
          </p>

          <div className="btn-link col-12 col-md-6">
            <Link to={"/AddTeache"}>
              <span className="link-icon-left">
                <FontAwesomeIcon icon={faPlus} className="icon" />
              </span>
              Add new teacher
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
