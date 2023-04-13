import React, { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  function fSetTitle(e) {
    setTitle(e.value);
  }
  function fSetDes(e) {
    setDes(e.value);
  }

  return (
    <>
      {/* <div> */}
      <h1>Log Your Goals For This Bootcamp</h1>
      {/* <div>
            <label htmlFor="title">Title</label>
            <input onChange={(e)=> fSetTitle(e)} value={title} type="text"  id='title'/>
        </div>
        <div>
            <label htmlFor="des">Description</label>
            <input type="text"  id='des' onChange={(e)=> fSetDes(e)} value={des}/>
        </div>
        <button>Save</button>
    </div> */}

      <div className="container">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Goal Title
          </label>
          <input
            onChange={(e) => fSetTitle(e)}
            value={title}
            type="test"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Goal Description
          </label>
          <textarea
            onChange={(e) => fSetDes(e)}
            value={des}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="button" class="btn btn-primary">
          Save
        </button>
      </div>
    </>
  );
}

export default Form;
