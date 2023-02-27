import axios from "axios";
import React, { useEffect, useState } from "react";
const Favorites = ({ predict, change, output }) => {
  return (
    <div>
      <h1>Upload File in React js</h1>
      <input type="file" onChange={(e) => change(e)} name="img" />
      <button onClick={predict}>Submit</button>
      <h1>{output.class}</h1>
      <h1>{output.confidence}</h1>
    </div>
  );
};

export default Favorites;
