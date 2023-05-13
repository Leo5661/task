import style from "@/styles/pdfContainer.module.scss";
import Image from "next/image";

function PdfContainer() {
  return (
    <div className={style.pdf_container}>
      <div className={style.pdf_tool_bar}>
        <div className={style.img_container}>
          <Image src="./pdf.svg" alt="pdf icon" width={16} height={16} />
          <div className={style.page}>1/15</div>
        </div>
        <div className={style.divider}></div>
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
            src="./zoom_out.svg"
            alt="zoom out tool"
            width={16}
            height={16}
          />
        </div>
        <div className={style.divider}></div>
        <div className={style.img_container}>
          <Image
            src="./zoom_in.svg"
            alt="zoom in tool"
            width={16}
            height={16}
          />
        </div>
        <div className={style.divider}></div>
        <div className={style.img_container}>
          <Image src="./open.svg" alt="open tool" width={16} height={16} />
        </div>
      </div>

      <div className={style.pdf_img}>
        <Image src="/pdf_img.png" alt="pdf image" fill={true} />
        <div className={style.cover}>
          <div className={style.title}>wework</div>
          <div className={style.sub_title}>
            For all the ways you work, we're here
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfContainer;
