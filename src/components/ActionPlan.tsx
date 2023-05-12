import React from "react";

type Prop = {
  value: Number;
};

function ActionPlan(prop: Prop) {
  return (
    <div>
      <div className="title_bar">
        <div className="action_title">Mutual Action Plan</div>
        <div className="value">{`${prop.value}%`}</div>
      </div>
      <div className="bar_wrapper"></div>
    </div>
  );
}

export default ActionPlan;
