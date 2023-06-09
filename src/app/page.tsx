import ActionPlan from "@/components/ActionPlan";
import ActiveButton from "@/components/ActiveButton";
import Nav from "@/components/Nav";
import TabContainer from "@/components/TabContainer";
import style from "@/styles/page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className={style.body}>
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
              <Image
                className={style.corp_img}
                src="/we.png"
                alt="we logo"
                width={60}
                height={60}
              />
              <Image src="/sum.svg" alt="we logo" width={20} height={20} />
              <Image
                className={style.corp_img}
                src="/salesforce.png"
                alt="we logo"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
        <div className={style.scope}>
          <div className={style.scope_title}>
            <div className={style.title}>Project Scope Recap</div>
            <ActionPlan value={3} />
          </div>
          <TabContainer />
        </div>
      </div>
    </main>
  );
}
