import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>WARNING</h4>
          Are you sure you want to continue?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45pm"
          comment="nice post"
          img={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Taylor"
          timeAgo="Today at 11:03am"
          comment="really enjoyed this!"
          img={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jason"
          timeAgo="Yesterday at 3:30pm"
          comment="this is good content right here"
          img={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
