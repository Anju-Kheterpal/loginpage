import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const LoginSuccess = () => {
  return (
    <React.Fragment>
      <nav>
        <div className="navbar">
          <i className="bx bx-menu"></i>
          <div className="logo">
            <a href="#">Knowledge Centre</a>
          </div>
          <div className="nav-links">
            <div className="sidebar-logo">
              <span className="logo-name">KNOWLEDGE CENTRE</span>
              <i className="bx bx-x"></i>
            </div>
            <ul className="links">
              <li>
                <a href="#">DAVCAE</a>
                <i className="bx bxs-chevron-down htmlcss-arrow arrow  "></i>
                <ul className="htmlCss-sub-menu sub-menu">
                  <div className="dropdown">
                    <li>
                      <a className="dropbtn " href="#">
                        MT Resource
                      </a>
                    </li>
                    <div className="dropdown-content">
                      <a href="https://drive.google.com/drive/u/2/folders/1qL5ZkZWr-zUUpiJ03T2Bk5gTiBFomfce">
                        English
                      </a>
                      <a href="https://drive.google.com/drive/u/2/folders/1ize-ULG1-5SMPU-ZKo7DVd8BNNghXm5l">
                        Hindi
                      </a>
                      <a href="https://drive.google.com/drive/u/2/folders/1qOGLNjYsHlKCF01AHFlrDyrUNA84ja5e">
                        Maths
                      </a>
                      <a href="https://drive.google.com/drive/u/2/folders/1qOCOS2chGqsvY7OFls5HsAU7OhT-TWcT">
                        Social Science
                      </a>
                      <a href="https://drive.google.com/drive/u/2/folders/1qEZYjoH1satdJuq3inM_3udbOelEIfgO">
                        Science
                      </a>
                      <a href="https://drive.google.com/drive/u/2/folders/1qEdq4BbHvIiimiA8KvHsZCUrBqJUtWBI">
                        ICT
                      </a>
                      <a href="https://drive.google.com/drive/folders/1adiOJ7RXiAbLGfUJ5yXO4qonIFbKRbj1?usp=share_link">
                        Economics
                      </a>
                      <a href="https://drive.google.com/drive/folders/1BNwt-3qNWWK9svsd1rJRyC2etspxh63o?usp=share_link">
                        Library
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <li>
                      <a className="dropbtn " href="#">
                        Sample Papers
                      </a>
                    </li>
                    <div className="dropdown-content">
                      <a href="https://drive.google.com/drive/u/2/folders/1X9yw2f-vg6b-kKZipM0B9yxq_IoMvtVx">
                        Class VIII
                      </a>
                      <a href="https://drive.google.com/drive/u/2/folders/12aZN5YBYBmhp3YmA6_uzUJxUDGgU-9J9">
                        Class XI Commerce
                      </a>
                      <a href="https://drive.google.com/drive/u/2/folders/1M1g9omDNYrL3Yf0_JmiuQFISCoLOBTGE">
                        Class XI Science
                      </a>
                    </div>
                  </div>
                </ul>
              </li>

              <li>
                <a href={"#"}>TEACHER'S RESOURCE</a>
                <i className="bx bxs-chevron-down htmlcss-arrow arrow  "></i>
                <ul className="htmlCss-sub-menu sub-menu">
                  <div className="dropdown">
                    <li>
                      <a className="dropbtn ">Class 5</a>
                    </li>
                    <div className="dropdown-content">
                      <a
                        href={
                          "https://drive.google.com/drive/folders/162uz0eEX-jMWUHYKep8ezSXMXeWS0gIF?usp=share_link"
                        }
                      >
                        English
                      </a>
                      <a href="https://drive.google.com/drive/folders/1B-NQZjZqaTpgN5_0oV4chPFGctPf_jhB?usp=share_link">
                        Hindi
                      </a>
                      <a href="https://drive.google.com/drive/folders/1msL9bC9ITgAfNyPtmjVkuXfQGQxhR4kJ?usp=share_link">
                        Maths
                      </a>
                      <a href="https://drive.google.com/drive/folders/1UGhAKSsU-kY1i3j46nBt-1oyKvKwLHFD?usp=share_link">
                        Science
                      </a>
                      <a href="https://drive.google.com/drive/folders/135b7TXeiYeIJWcqOykV4ZA72P227gTKr?usp=share_link">
                        Social Science
                      </a>
                      <a href="https://drive.google.com/drive/folders/1VHTJb6SLGSY_KNaPWPbHogCwWpeuczYi?usp=share_link">
                        Sanskrit
                      </a>
                      <a href="https://drive.google.com/drive/folders/1B9Yii-tbOFVlUZybHSH2njyzcQXkEc6R?usp=share_link">
                        Punjabi
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <li>
                      <a className="dropbtn ">Class 6</a>
                    </li>
                    <div className="dropdown-content">
                      <a href="https://drive.google.com/drive/folders/1Th4_9iTCk6eZqIhRoCK3uJaYPV3qm9L6?usp=sharing">
                        English
                      </a>
                      <a href="https://drive.google.com/drive/folders/1ZAGv_WDV24Ib89ygU94u59Au8VmpTvvn?usp=share_link">
                        Hindi
                      </a>
                      <a href="https://drive.google.com/drive/folders/1osVKpbzRjR8S4hUyr3PlRsNT8RBiyj46?usp=share_link">
                        Maths
                      </a>
                      <a href="https://drive.google.com/drive/folders/1c7l0cOP2F2KLb68KMy4KYScV3AoNOG_W?usp=share_link">
                        Science
                      </a>
                      <a href="https://drive.google.com/drive/folders/1kdCL7VfghXmyQP4cOq4xpk-Lu4Ui7yNE?usp=share_link">
                        Social Science
                      </a>
                      <a href="https://drive.google.com/drive/folders/1fooljRN6eG17opoLN3Iou2pwN_PzNm_C?usp=share_link">
                        Sanskrit{" "}
                      </a>
                      <a href="https://drive.google.com/drive/folders/1gN_jiOWnzPWF8DbZ6Redm8GzUjj7cfax?usp=share_link">
                        Punjabi
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <li>
                      <a className="dropbtn ">Class 7</a>
                    </li>
                    <div className="dropdown-content">
                      <a href="https://drive.google.com/drive/folders/1trgPmQSnkFspNmbhg8_Rlp7ZHURWp64q?usp=share_link">
                        English
                      </a>
                      <a href="https://drive.google.com/drive/u/2/folders/1nNU8uufwxKIe3CFejMU3IdFTMO2ZXWo0">
                        Hindi
                      </a>
                      <a href="https://drive.google.com/drive/folders/1fmWPXDJd3cRw1aAMSBHAzcP9Dc1ZjnGa?usp=share_link">
                        Maths
                      </a>
                      <a href="https://drive.google.com/drive/folders/1LnVY5FvmME7f0xw3ZtkrUHOaf2Y9NYlo?usp=share_link">
                        Science
                      </a>
                      <a href="https://drive.google.com/drive/folders/1LGMV2uikBsaE3jV5gg_RiMuBvQmVvoBi?usp=share_link">
                        Social Science
                      </a>
                      <a href="https://drive.google.com/drive/folders/1z9vkmdBCd_6gAF-NXut_RHRRx5TIwWRu?usp=share_link">
                        Sanskrit{" "}
                      </a>
                      <a href="https://drive.google.com/drive/folders/1WJ7SjzC3kzJzZDQS7F3fZAX1fhdJYF2G?usp=share_link">
                        Punjabi
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <li>
                      <a className="dropbtn ">Class 8</a>
                    </li>
                    <div className="dropdown-content">
                      <a href="https://drive.google.com/drive/folders/12bazII1oH6gpsb2n0tb5Zr5Jvr4vQ9vP?usp=share_link">
                        English
                      </a>
                      <a href="https://drive.google.com/drive/folders/11dWbE-Ga_ZHITuehle3fY_ywIX3sXR06?usp=sharing">
                        Hindi
                      </a>
                      <a href="https://drive.google.com/drive/folders/124RSRY8o2PpacSqzNkgwd-GXClKgrl-G?usp=share_link">
                        Maths
                      </a>
                      <a href="https://drive.google.com/drive/folders/1M0Cw1bneZ5dOKQ31mNcvIeGFhryqX2Ps?usp=share_link">
                        Science
                      </a>
                      <a href="https://drive.google.com/drive/folders/1PDunf3FWtAFQesnW325W4u5pi2_fGp6z?usp=share_link">
                        Social Science
                      </a>
                      <a href="https://drive.google.com/drive/folders/1uLoVGXgm8sSPRF6fNJnCO1Jm1RnzFusO?usp=share_link">
                        Sanskrit{" "}
                      </a>
                      <a href="https://drive.google.com/drive/folders/1OTZg4aAHrjX4ZrvAMp2_-WKndbLeVZ1S?usp=share_link">
                        Punjabi
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <li>
                      <a className="dropbtn ">Class 9</a>
                    </li>
                    <div className="dropdown-content">
                      <a href="https://drive.google.com/drive/folders/1-METJwsmKs7KbjPjPgjajRc7sB9rTTIz?usp=share_link">
                        English
                      </a>
                      <a href="https://drive.google.com/drive/folders/1vQJMjistF9qq6WUPyP4l5oW7JC804anH?usp=share_link">
                        Hindi
                      </a>
                      <a href="https://drive.google.com/drive/folders/1o-R_wYIAL5YAXwD3XguokzZ0saK-B1TT?usp=share_link">
                        Maths
                      </a>
                      <a href="https://drive.google.com/drive/folders/1vgkZLfs_AnyPDzb9X8APG7xIkJr0hBTy?usp=share_link">
                        Science
                      </a>
                      <a href="https://drive.google.com/drive/folders/1AEH51GYV3u9axlAbPdXj5nCtpUjU_9uH?usp=share_link">
                        Social Science
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <li>
                      <a className="dropbtn ">Class 10</a>
                    </li>
                    <div className="dropdown-content">
                      <a href="https://drive.google.com/drive/folders/1lroJVqWvhn2joCGhzKGwpOoeHSj-H072?usp=share_link">
                        English
                      </a>
                      <a href="https://drive.google.com/drive/folders/1vr4njUWNjZ1w3oTFY912tHK0ue3SVsmJ?usp=share_link">
                        Hindi
                      </a>
                      <a href="https://drive.google.com/drive/folders/1XzOjwXc9yqulq5_BwMLUwxfTIGXzUHEI?usp=share_link">
                        Maths
                      </a>
                      <a href="https://drive.google.com/drive/folders/1H40RimfeaiS3jc9KYzSgECNL1sU2ozeR?usp=share_link">
                        Science
                      </a>
                      <a href="https://drive.google.com/drive/folders/1lUSHFaSoL5Ulp7PzJ4lO0oouKGJDE7vg?usp=share_link">
                        Social Science
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a className="dropbtn " style={{ paddingLeft: "20px" }}>
                      Class 11
                      <i
                        style={{ transform: "rotate(-90deg)" }}
                        className="fa-regular fa-circle-caret-down"
                      ></i>
                    </a>
                    <div className="dropdown-content">
                      <li>
                        <a href="#">XI Commerce</a>
                      </li>
                      <li>
                        <a href="#">XI Science</a>
                      </li>
                    </div>
                  </div>
                  <div className="dropdown">
                    <li>
                      <a className="dropbtn ">Class 12</a>
                    </li>
                    <div className="dropdown-content">
                      <a href="#">XII Commerce</a>
                      <a href="#">XII Science</a>
                    </div>
                  </div>

                  <li className="more"></li>
                </ul>
              </li>
              <li>
                <a href="#">CBSE RESOURCES</a>
                <i className="bx bxs-chevron-down js-arrow arrow "></i>
                <ul className="js-sub-menu sub-menu">
                  <li>
                    <a href="https://cbseacademic.nic.in/curriculum_2023.html">
                      CURRICULUM 2022-23
                    </a>
                  </li>

                  <div className="dropdown">
                    <li>
                      <a className="dropbtn ">Sample Papers (Class 10)</a>
                    </li>
                    <div className="dropdown-content">
                      <a href="https://cbseacademic.nic.in/SQP_CLASSX_2022-23.html">
                        SQP 2022-23
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSX_2021-22.html">
                        SQP 2021-22
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSX_2020-21.html">
                        SQP 2020-21
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSX_2019_20.html">
                        SQP 2019-20
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSX_2018_19.html">
                        SQP 2018-19
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSX_2017_18.html">
                        SQP 2017-18
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSX_2016_17.html">
                        SQP 2016-17
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSX_2015_16.html">
                        SQP 2015-16
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <li>
                      <a className="dropbtn ">Sample Papers (Class 12)</a>
                    </li>
                    <div className="dropdown-content">
                      <a href="https://cbseacademic.nic.in/SQP_CLASSXII_2022-23.html">
                        SQP 2022-23
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSXII_2021-22.html">
                        SQP 2021-22
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSXII_2020-21.html">
                        SQP 2020-21
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSXII_2019_20.html">
                        SQP 2019-20
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSXII_2018_19.html">
                        SQP 2018-19
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSXII_2017_18_final.html">
                        SQP 2017-18
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSXII_2016_17.html">
                        SQP 2016-17
                      </a>
                      <a href="https://cbseacademic.nic.in/SQP_CLASSXII_2015_16.html">
                        SQP 2015-16
                      </a>
                    </div>
                  </div>

                  <div className="dropdown">
                    <li>
                      <a className="dropbtn"> CBSE QUESTION BANK</a>
                    </li>
                    <div className="dropdown-content">
                      <a href="https://cbseacademic.nic.in/qbclass10.html">
                        Class 10
                      </a>
                      <a href="https://cbseacademic.nic.in/qbclass12.html">
                        Class 12
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <li>
                      <a className="dropbtn">DIKSHA PORTAL</a>
                    </li>
                    <div className="dropdown-content">
                      <a href="https://www.diksha.gov.in/">LOGINSuccess</a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <li>
                      <Link
                        to={{
                          pathname: "/onlineLibrary",
                          search: "?sort=name",
                          hash: "#the-hash",
                          state: { fromDashboard: true },
                        }}
                      >
                        on-line Library
                      </Link>
                    </li>
                    <div className="dropdown-content"></div>
                  </div>
                </ul>
              </li>
              <li>
                <a href="mailto:davpskaithal@gmail.com">CONTACT US</a>
              </li>
            </ul>
          </div>
          <div className="search-box">
            <i className="bx bx-search"></i>
            <div className="input-box">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
      </nav>

      {/* <!--<script src="script.js"></script>--> */}
      <section>
        <div className="content">
          <h3
            style={{
              paddingTop: "150px",
              color: "whitesmoke",
              paddingLeft: "780px",
              fontFamily: "'Arvo', serif",
            }}
          >
            <font size="7" align="center">
              O.S.D.A.V.
            </font>
          </h3>
          <h3
            style={{
              paddingTop: "7px",
              color: "whitesmoke",
              paddingLeft: "900px",
              fontFamily: "'Arvo', serif",
            }}
          >
            <font size="7" align="center">
              KNOWLEDGE
            </font>
          </h3>
          <h3
            style={{
              paddingTop: "7px",
              color: "whitesmoke",
              paddingLeft: "1180px",
              fontFamily: "'Arvo', serif",
            }}
          >
            <font size="7" align="centre">
              CENTER
            </font>
          </h3>

          <button
            type="button"
            style={{
              textAlign: "center",
              color: "whitesmoke",
              height: "40px",
              width: "175px",
              backgroundColor: "orange",
              marginLeft: "800px",
              marginTop: "20px",
              fontSize: "20px",
              textAlign: "center",
              border: "0px",
              borderRadius: "10px",
            }}
          >
            <font style={{ marginBottom: "30", fontFamily: "Arial" }}>
              <b>KNOW MORE</b>
            </font>
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LoginSuccess;
