'use client'
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
  const router = usePathname()
  const routerLink = router.split('/')
  return (
    <div className="h-[100dvh] hidden lg:flex flex-col bg-primary text-white text-[13px] fixed">
      <div className="flex justify-center items-center">
        <Image src={Logo} alt="brand" width={300} />
      </div>
      <div className="flex flex-col gap-12">
        <nav className="flex flex-col gap-6">
          <div>
            <Link
              href="/"
              className={`pe-[24px] ps-[50px] py-3 hover:bg-hover transition duration-500 ${routerLink[1] === '' ? 'bg-hover' : ""}`}
            >
              Ana Sayfa
            </Link>
          </div>
          <div>
            <Link
              href="/hakkimizda"
              className={`pe-[24px] ps-[50px] py-3 hover:bg-hover transition duration-500 ${routerLink[1] === 'hakkimizda' ? 'bg-hover' : ""}`}
            >
              Hakkımızda
            </Link>
          </div>
          <div>
            <Link
              href="/hizmetlerimiz"
              className={`pe-[24px] ps-[50px] py-3 hover:bg-hover transition duration-500 ${routerLink[1] === 'hizmetlerimiz' ? 'bg-hover' : ""}`}
            >
              Hizmetlerimiz
            </Link>
          </div>
          <div>
            <Link
              href="#"
              className="pe-[24px] ps-[50px] py-3 hover:bg-hover transition duration-500"
            >
              Portfölyo
            </Link>
          </div>
          <div>
            <Link
              href="/iletisim"
              className={`pe-[24px] ps-[50px] py-3 hover:bg-hover transition duration-500 ${routerLink[1] === 'iletisim' ? 'bg-hover' : ""}`}
              >
              İletişim
            </Link>
          </div>
        </nav>
        <nav className="flex flex-col gap-6">
          <h2 className="pe-[24px] ps-[50px] py-3 text-hover transition duration-500">
            Başlıca Hizmetler
          </h2>
          <div>
            <Link
              href="/hizmetlerimiz/web-site-cozumleri"
              className={`pe-[24px] ps-[50px] py-3 hover:bg-hover transition duration-500 ${routerLink[2] === 'web-site-cozumleri' ? 'bg-hover' : ""}`}
            >
              Web Site Çözümleri
            </Link>
          </div>
          <div>
            <Link
              href="/hizmetlerimiz/mobil-uygulama-cozumleri"
              className={`pe-[24px] ps-[50px] py-3 hover:bg-hover transition duration-500 ${routerLink[2] === 'mobil-uygulama-cozumleri' ? 'bg-hover' : ""}`}
            >
              Mobil Uygulama Çözümleri
            </Link>
          </div>
          <div>
            <Link
              href="/hizmetlerimiz/profesyonel-marka-yonetimi"
              className={`pe-[24px] ps-[50px] py-3 hover:bg-hover transition duration-500 ${routerLink[2] === 'profesyonel-marka-yonetimi' ? 'bg-hover' : ""}`}
            >
              Profesyonel Marka Yönetimi
            </Link>
          </div>
          <div>
            <Link
              href="/hizmetlerimiz/sosyal-medya-yonetimi#"
              className={`pe-[24px] ps-[50px] py-3 hover:bg-hover transition duration-500 ${routerLink[2] === 'sosyal-medya-yonetimi' ? 'bg-hover' : ""}`}
            >
              Sosyal Medya Yönetimi
            </Link>
          </div>
          <div>
            <Link
              href="/hizmetlerimiz/e-ticaret-cozumleri"
              className={`pe-[24px] ps-[50px] py-3 hover:bg-hover transition duration-500 ${routerLink[2] === 'e-ticaret-cozumleri' ? 'bg-hover' : ""}`}
            >
              E-Ticaret Çözümleri
            </Link>
          </div>
          <div>
            <Link
              href="/hizmetlerimiz/crm-sistemleri"
              className={`pe-[24px] ps-[50px] py-3 hover:bg-hover transition duration-500 ${routerLink[2] === 'crm-sistemleri' ? 'bg-hover' : ""}`}
            >
              CRM Sistemleri
            </Link>
          </div>
        </nav>
      </div>
      <p className="text-hover text-center mx-8 mt-auto mb-4 text-xs">
        Copyright ©2024 All rights reserved
      </p>
    </div>
  );
}

export default Header;
