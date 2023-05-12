import ActiveButton from "@/components/ActiveButton";
import Nav from "@/components/Nav";
import TabContainer from "@/components/TabContainer";
import style from "@/styles/page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className={style.company_banner}>
        <div className={style.title_box}>
          <div className={style.title}>WeWork + Salesforce</div>
          <ActiveButton name={`Publish/Share`} />
        </div>
        <div className={style.banner}>
          <div className={style.banner_img}>
            <Image src="/banner.png" alt="banner" fill={true} />
            <div className={style.cover}>
              Workspace <br /> Proposal
            </div>
          </div>
          <div className={style.dp}>
            <Image src="/we.png" alt="we logo" width={60} height={60} />
            <Image src="/sum.svg" alt="we logo" width={20} height={60} />
            <Image src="/salesforce.png" alt="we logo" width={60} height={60} />
          </div>
        </div>
        <div className="scope">
          <div className="scope_title">Project Scope Recap</div>
          <TabContainer />
        </div>
      </div>
    </main>
  );
}
