import Image from "next/image";
import style from "@/styles/nav.module.scss";

function Nav() {
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
      </nav>
    </div>
  );
}

export default Nav;
