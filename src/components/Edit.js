import React from 'react'
import { TextInput, Button } from "evergreen-ui";
const Edit=() =>{
  return (
    <div>
      <div style={{ marginTop: 60, marginLeft: 5 }}>
        <h3 style={{ color: "white" }}>Name:</h3>
        <TextInput
          placeholder="Enter Name"
          style={{ height: 45, width: 300, borderRadius: 20 }}
        />
      </div>
      <div style={{ marginTop: 60, marginLeft: 5 }}>
        <h3 style={{ color: "white" }}>College Name:</h3>
        <TextInput
          placeholder="Enter College Name"
          style={{ height: 45, width: 300, borderRadius: 20 }}
        />
      </div>

      <br />
    </div>
  );
}

export default Edit
