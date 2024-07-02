import React from "react";
import about from "@/public/about.png";
import Image from "next/image";
function Hakkimizda() {
  return (
    <section className="grid grid-cols-2 py-12 h-screen">
      <div className="bg-white lg:mt-12 lg:pt-24 lg:translate-x-12 px-8 col-span-2 lg:col-span-1">
        <h4>Hakkımızda</h4>
        <p>
          <strong>Millenium Digital</strong> , dijital dünyada fark yaratmak
          isteyen işletmelere yenilikçi ve kapsamlı çözümler sunan bir ajanstır.
          Amacımız, müşterilerimizin dijital varlıklarını güçlendirmek ve
          büyümelerini sağlamaktır.
        </p>
        <p>
          Uzman ekibimizle, web sitesi ve mobil uygulama geliştirmeden marka ve
          sosyal medya yönetimine, e-ticaret çözümlerinden CRM sistemlerine
          kadar geniş bir yelpazede hizmet sunuyoruz. Müşteri odaklı
          yaklaşımımızla, her projede işinizin benzersiz ihtiyaçlarına uygun
          stratejiler geliştiriyoruz. Yaratıcılığımızı ve teknik bilgimizi
          birleştirerek, işinizin dijital dünyada en iyi şekilde temsil
          edilmesini sağlıyoruz.
        </p>
        <p>
          <strong>Millenium Digital</strong> olarak, işinizin dijital dünyada
          sürdürülebilir bir başarı yakalaması için gereken tüm desteği
          sağlıyoruz. Bizimle çalışarak, dijital dönüşüm yolculuğunuzda
          güvenilir bir ortak edinebilirsiniz.
        </p>
        <div className="flex justify-around items-center mt-12">
          <div>
            <div className="line"></div>
            <h3 className="text-4xl text-hover">12</h3>
            <p>Yıllık Tecrübe</p>
          </div>
          <div>
            <div className="line"></div>
            <h3 className="text-4xl text-hover">257</h3>
            <p>Mutlu Müşteri</p>
          </div>
          <div>
            <div className="line"></div>
            <h3 className="text-4xl text-hover">257</h3>
            <p>Tamamlanmış Proje</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image src={about} alt="about-us" className="h-full object-cover"/>
      </div>
    </section>
  );
}

export default Hakkimizda;
