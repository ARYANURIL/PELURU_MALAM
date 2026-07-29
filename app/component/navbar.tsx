'use client'; // Baris 1 wajib ini agar onClick bisa jalan

import { useState } from 'react';
import style from '@/app/component/navbar.module.css';
import GambarBus from '@/app/assets_picture/assest/lumba-lumba.png';
import GambarPT from '@/app/assets_picture/assest/sumber.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={style.container}>
      {/* 1. Bagian Brand & Logo */}
      <div className={style.brandBox}>
        <img src={GambarBus.src} alt="lumba-lumba" className={style.logoLumba} />
        <div className={style.brandText}>
          <img src={GambarPT.src} alt="sumber" className={style.sumber} />
          <p className={style.descrip}>SUMBER SELAMAT • AMAN - CEPAT - NYAMAN</p>
        </div>
      </div>

        <button 
          className={style.hamburger} 
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          type="button"
        >
          {isOpen ? '✕' : '☰'}
        </button>

      {/* 3. Bagian Menu Navigasi */}
      <ul className={`${style.navigation} ${isOpen ? style.navActive : ''}`}>
        <li className={style.border}><a href="#">Cek Tarif & Jadwal</a></li>
        <li className={style.border}><a href="#">Kelas Armada</a></li>
        <li className={style.border}><a href="#">Lokasi Agen</a></li>
        <li className={style.border}><a href="#">Layanan Pelanggan</a></li>
      </ul>
    </nav>
  );
}