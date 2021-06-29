import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Signin(props) {
  const [fullname, setfullname] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [description, setdescription] = useState("");

  const Postdata = (e) => {
    e.preventDefault();
    const userdata = {
      fullname: fullname,
      address: address,
      email: email,
      description: description,
    };
    axios
      .post("https://thenextgear.herokuapp.com/contact", userdata)
      .then((res) => console.log(res.data));

    setfullname("");
    setaddress("");
    setemail("");
    setdescription("");
    let alertboxes = document.querySelector(".alertboxes");
    alertboxes.style.display = "block";
  };
  return (
    <>
      <div className="signincontainer">
        <div
          className="alertboxes"
          style={{
            backgroundImage:
              " linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7)) ,url(./bike1.jpg)",
          }}
        >
          <h2>
            Thank You {fullname} For Contacting Us! <br />
            We Will Reach You Soon...
          </h2>

          <button>
            <Link to="/">Back To Home</Link>
          </button>
        </div>
        <h2>Contact with Us!</h2>
        <form onSubmit={Postdata}>
          <div>
            <input
              type="text"
              name="fullname"
              id=""
              placeholder="Enter your name......"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              id=""
              placeholder="Enter your address...."
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your email....."
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              placeholder="Your opinions......."
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
