import React from "react";
import about from "@/public/about.png";
import Image from "next/image";

const HizmetDetay: React.FC<any> = ({ params }) => {
  return (
    <section className="grid grid-cols-2 py-12 h-screen">
      <div className="bg-white h-[80%] flex flex-col justify-center my-auto lg:translate-x-12 px-8 col-span-2 lg:col-span-1">
        <h4>{params.slug === 'web-site-cozumleri' && "Web Site Çözümleri" ||
            params.slug === 'mobil-uygulama-cozumleri' && "Mobil Uygulama Çözümleri" ||
            params.slug === 'profesyonel-marka-yonetimi' && "Profesyonel Marka Yönetimi" ||
            params.slug === 'sosyal-medya-yonetimi' && "Sosyal Medya Yönetimi" ||
            params.slug === 'e-ticaret-cozumleri' && "E-Ticaret Çözümleri " ||
            params.slug === 'crm-sistemleri' && "CRM Çözümleri "
            }</h4>
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
        <Image src={about} alt="about-us" className="h-full object-cover" />
      </div>
    </section>
  );
};

export default HizmetDetay;
