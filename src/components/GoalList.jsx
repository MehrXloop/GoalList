import React from "react";

function GoalList(props) {
  return (
    <div>
      {/* <h2>{props.title}</h2>
        <p>{props.des}</p> */}
        <div class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.des}</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
    </div>
  );
}

export default GoalList;
