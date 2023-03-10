import React from "react";
import { Link } from "react-router-dom";

const homeCard = () => {
  return (
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="p-5 card">
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
            <p>Lorem, ipsum dolor sit amet adipisicing elit.</p>
            <button className="btn btn-dark text-">
              <Link to={"/"} className="link-unstyled">
                View details
              </Link>
            </button>
          </div>
        </div>

        <div class="col-12 col-md-4 ">
          <div class="p-5 card">
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
            <p>Lorem, ipsum dolor sit amet adipisicing elit.</p>
            <button className="btn btn-dark text-">
              <Link to={"/"} className="link-unstyled">
                View details
              </Link>
            </button>
          </div>
        </div>
        <div class="col-12 col-md-4 ">
          <div class="p-5 card">
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
            <p>Lorem, ipsum dolor sit amet adipisicing elit.</p>
            <button className="btn btn-dark text-">
              <Link to={"/"} className="link-unstyled">
                View details
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homeCard;
