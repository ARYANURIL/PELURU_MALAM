import Image from "next/image";
import Navbar from '@/app/component/navbar'
import style from '@/app/page.module.css'

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Navbar />
      </div>
    </div>
  );
}
 