import React from "react";
import { Link } from "react-router-dom";

const HomeCard = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-4 mb-3">
          <div className="p-5 card">
            <img
              src="https://ouch-cdn2.icons8.com/y2Q-eOENoTwkhthPLEhMInAGRs8t4d8DjV9EehWSoEI/rs:fit:256:330/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTYv/Y2RmMzRiOWYtN2Vj/NS00MWZkLTg3YzQt/MzRiYjlkZDVmY2I5/LnBuZw.png"
              alt=""
              className=" mx-auto d-block mb-4"
              style={{
                height: 100,
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <h2>Heading</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              tempora!
            </p>
            <div className="btn-link-card">
              <Link to={"/*"}>View details</Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-3">
          <div className="p-5 card">
            <img
              src="https://ouch-cdn2.icons8.com/lIhSS3K6Ie9zYBtKWFqK_-Qe_3IXUiDazDBaPj0PB64/rs:fit:256:250/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjcy/LzBiYjNlY2UwLTcx/NWQtNDMxZC04MmU3/LTlhZmU5YjBjMDkz/Ny5wbmc.png"
              alt=""
              className="rounded mx-auto d-block mb-4"
              style={{
                width: 100,

                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            <h2>Heading</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              tempora!
            </p>
            <div className="btn-link-card">
              <Link to={"/*"}>View details</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="p-5 card">
            <img
              src="https://ouch-cdn2.icons8.com/tnS96P2bqW1VXP_QFtxmBf1ohsMM5kmRLoWbCxA-ZIE/rs:fit:256:280/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTc2/LzFmZmQ0Mjg2LTdl/NzItNDZmYS04YzM4/LTkyZDVmY2Q5NzA5/OC5wbmc.png"
              alt=""
              className=" mx-auto d-block mb-4"
              style={{
                height: 100,
                objectPosition: "center",
              }}
            />
            <h2>Heading</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              tempora!
            </p>
            <div className="btn-link-card">
              <Link to={"/*"}>View details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
