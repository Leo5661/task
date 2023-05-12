"use client";

import { useState } from "react";
import { SideTabMenu } from "@/dataSets/TabList";
import style from "@/styles/sideTab.module.scss";
import Overview from "@/tabs/Overview";

function SideTab() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handelTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={style.side_tab_container}>
      <div className={style.tabList}>
        {SideTabMenu.map((item, index) => {
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
      <div className={style.tabBody}>
        {(() => {
          switch (activeTab) {
            case 0:
              return <Overview />;
            default:
              return <div>{`This is tab ${activeTab}`}</div>;
          }
        })()}
      </div>
    </div>
  );
}

export default SideTab;
