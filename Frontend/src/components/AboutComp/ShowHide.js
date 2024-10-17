import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const ShowHide = ({ heading, para }) => {
  const [show, setShow] = useState(false);
  return (
    <div key={heading}>
      <div
        onClick={() => setShow(!show)}
        className="text-dark flex flex-row mt-2 py-2 gap-3"
      >
        <span
          className="p-2 border rounded text-white"
          style={{
            backgroundColor: "rgba(47, 130, 162, 0.8588235294)",
          }}
        >
          {!show ? <IoMdAdd /> : <RiSubtractFill />}
        </span>
        <span
          className="text-xl"
          style={{
            color: "rgba(47, 130, 162, 0.8588235294)",
          }}
        >
          {heading}
        </span>
      </div>
      {show ? <div className="my-1 ml-12">{para}</div> : null}
    </div>
  );
};

export default ShowHide;
