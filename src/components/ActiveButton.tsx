import React from "react";
import style from "@/styles/button.module.scss";

type Prop = {
  name: String;
};

function ActiveButton(prop: Prop) {
  return <div className={style.active_button}>{prop.name}</div>;
}

export default ActiveButton;
