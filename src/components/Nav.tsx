"use client";

import Image from "next/image";
import style from "@/styles/nav.module.scss";
import { useState } from "react";
import { MobileMenu } from "@/dataSets/TabList";

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const handelHamburgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav className={style.nav}>
        <div className="logo">
          <Image src="./logo.svg" alt="logo" width={35} height={35} />
          <Image src="./arrow.svg" alt="arrow" width={25} height={35} />
        </div>
        <ul>
          <li>
            <Image
              src="./search.svg"
              alt="search icon"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image src="./inbox.svg" alt="inbox icon" width={20} height={20} />
          </li>
          <li>
            <div className={style.badge}>24</div>
            <Image
              src="./notification.svg"
              alt="notification icon"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image src="./help.svg" alt="help icon" width={20} height={20} />
          </li>
          <li>
            <Image
              src="./profile.svg"
              alt="profile icon"
              width={30}
              height={30}
            />
          </li>
        </ul>
        <div className={style.hamburger}>
          <Image
            src={`${isActive ? "./close.svg" : "./menu.svg"}`}
            alt="Hamburger menu button"
            width={30}
            height={30}
            onClick={handelHamburgerClick}
          />
        </div>
      </nav>
      <div
        className={`${style.mobile_menu} ${
          isActive ? style.show_mobile_menu : null
        }`}
      >
        <div className={style.menu_list}>
          <div className={style.user}>
            <Image
              className={style.user_pic}
              src="./profile.svg"
              alt="profile pic"
              width={45}
              height={45}
            />
            <div className={style.userdetails}>
              <div className={style.name}>Jane Smith</div>
              <div className={style.designation}>Sales Executive</div>
            </div>
          </div>

          {MobileMenu.map((item) => {
            return (
              <div className={style.menu}>
                <div className={style.item_icon}>
                  <div
                    className={`${item.isBadge ? style.badge : style.no_badge}`}
                  >
                    24
                  </div>
                  <Image
                    src={item.icon}
                    alt="inbox icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div className={style.item_name}>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Nav;
