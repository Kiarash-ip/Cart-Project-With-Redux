import React from "react";

// gif
import Spinner from "../gif/spinner.gif";

export default function Loader() {
  return (
    <div>
      <img
        style={{ width: "100%", textAlign: "center" }}
        src={Spinner}
        alt="Loading"
      />
    </div>
  );
}
