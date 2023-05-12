"use client";

import { useState } from "react";
import { TabMenu } from "@/dataSets/TabList";
import style from "@/styles/tabContainer.module.scss";
import BasicInfo from "@/tabs/BasicInfo";

function TabContainer() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handelTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={style.tab_container}>
      <div className={style.tabList}>
        {TabMenu.map((item, index) => {
          return (
            <div
              key={index}
              className={`${style.tabName} ${
                activeTab === index ? `${style.activeTab}` : ""
              }`}
              onClick={() => handelTabClick(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="tabBody">
        {(() => {
          switch (activeTab) {
            case 0:
              return <BasicInfo />;
            default:
              return <div>{`This is tab ${activeTab}`}</div>;
          }
        })()}
      </div>
    </div>
  );
}

export default TabContainer;
