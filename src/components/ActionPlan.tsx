import style from "@/styles/actionPlan.module.scss";

type Prop = {
  value: number;
};

function ActionPlan(prop: Prop) {
  return (
    <div className={style.action_plan_bar}>
      <div className={style.title_bar}>
        <div className={style.action_title}>Mutual Action Plan</div>
        <div className={style.value}>{`${prop.value}%`}</div>
      </div>
      <div className={style.bar_wrapper}>
        <div
          className={style.filled_bar}
          style={{ width: `${prop.value}%` }}
        ></div>
        <div className={style.divider_container}>
          <span className={style.divider}></span>
          <span className={style.divider}></span>
          <span className={style.divider}></span>
          <span className={style.divider}></span>
          <span className={style.divider}></span>
          <span className={style.divider}></span>
          <span className={style.divider}></span>
          <span className={style.divider}></span>
          <span className={style.divider}></span>
          <span className={style.divider}></span>
        </div>
      </div>
    </div>
  );
}

export default ActionPlan;
