import * as React from "react";
import img from "../images/lock.png";
import { TextInput, Button } from "evergreen-ui";
const Forget = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#00a69c",
          height: "105vh",
          width: "26%",
          marginTop: 30,
          margin: "auto",

          padding: 30,
          boxShadow: "15px 10px 30px 10px #bbbbbb",
        }}
      >
        <div>
          <img src={img} style={{ width: 100, height: 100, marginLeft: 120 }} />
          <br />
          <br />
          <h2 style={{ color: "black", marginLeft: 20 }}>CHANGE PASSWORD</h2>
        </div>
        <div style={{ marginTop: 60, marginLeft: 5 }}>
          <h3 style={{ color: "white" }}>Old Password</h3>
          <TextInput
            placeholder="Enter Old Passowrd"
            style={{ height: 45, width: 300, borderRadius: 20 }}
          />
        </div>

        <div style={{ marginTop: 60, marginLeft: 5 }}>
          <h3 style={{ color: "white" }}>New Password</h3>
          <TextInput
            placeholder="Enter New Passowrd"
            style={{ height: 45, width: 300, borderRadius: 20 }}
          />
        </div>
        <div style={{ marginTop: 60, marginLeft: 5 }}>
          <h3 style={{ color: "white" }}>Confirm Password</h3>
          <TextInput
            placeholder="Confirm Passowrd"
            style={{ height: 45, width: 300, borderRadius: 20 }}
          />
        </div>
        <br />
        <br />
        <Button
          marginLeft={120}
          intent="success"
          style={{
            width: 120,
            height: 50,
            fontSize: 25,
            color: "#00a69c",
            borderRadius: 20,
            marginLeft: 110,
          }}
        >
          Change
        </Button>
      </div>
    </>
  );
};
export default Forget;
