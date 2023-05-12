import Image from "next/image";
import style from "@/styles/overview.module.scss";
import PdfContainer from "@/components/PdfContainer";

function Overview() {
  return (
    <div className={style.overview_container}>
      <div className={style.overview_title_bar}>
        <div className={style.title}>Company Profile</div>
        <div className={style.tool_bar}>
          <div className={style.img_container}>
            <Image
              src="./download.svg"
              alt="download tool"
              width={16}
              height={16}
            />
          </div>
          <div className={style.divider}></div>
          <div className={style.img_container}>
            <Image
              src="./eye_off.svg"
              alt="download tool"
              width={16}
              height={16}
            />
          </div>
          <div className={style.divider}></div>
          <div className={style.img_container}>
            <Image
              src="./delete.svg"
              alt="download tool"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
      <div className={style.pdf_container}>
        <PdfContainer />
      </div>
    </div>
  );
}

export default Overview;