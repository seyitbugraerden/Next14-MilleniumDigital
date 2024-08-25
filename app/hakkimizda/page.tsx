import React from "react";
import about from "@/public/about.png";
import Image from "next/image";
function Hakkimizda() {
  return (
    <>
      <section className="flex flex-row py-12 h-screen overflow-hidden">
        <div className="bg-white my-auto lg:translate-x-12 p-14 flex-1 col-span-2 lg:col-span-1 overflow-hidden">
          <h4>Hakkımızda</h4>
          <p className="text-xs 2xl:text-xl">
            <strong>Millenium Digital</strong> , dijital dünyada fark yaratmak
            isteyen işletmelere yenilikçi ve kapsamlı çözümler sunan bir
            ajanstır. Amacımız, müşterilerimizin dijital varlıklarını
            güçlendirmek ve büyümelerini sağlamaktır.
          </p>
          <p className="text-xs 2xl:text-xl">
            Uzman ekibimizle, web sitesi ve mobil uygulama geliştirmeden marka
            ve sosyal medya yönetimine, e-ticaret çözümlerinden CRM sistemlerine
            kadar geniş bir yelpazede hizmet sunuyoruz. Müşteri odaklı
            yaklaşımımızla, her projede işinizin benzersiz ihtiyaçlarına uygun
            stratejiler geliştiriyoruz. Yaratıcılığımızı ve teknik bilgimizi
            birleştirerek, işinizin dijital dünyada en iyi şekilde temsil
            edilmesini sağlıyoruz.
          </p>
          <p className="text-xs 2xl:text-xl">
            <strong>Millenium Digital</strong> olarak, işinizin dijital dünyada
            sürdürülebilir bir başarı yakalaması için gereken tüm desteği
            sağlıyoruz. Bizimle çalışarak, dijital dönüşüm yolculuğunuzda
            güvenilir bir ortak edinebilirsiniz.
          </p>
          <div className="flex justify-around items-center mt-12">
            <div>
              <div className="line"></div>
              <h3 className="text-xs lg:text-4xl text-hover">12</h3>
              <p className="text-xs 2xl:text-xl">Yıllık Tecrübe</p>
            </div>
            <div>
              <div className="line"></div>
              <h3 className="text-xs lg:text-4xl text-hover">257</h3>
              <p className="text-xs 2xl:text-xl">Mutlu Müşteri</p>
            </div>
            <div>
              <div className="line"></div>
              <h3 className="text-xs lg:text-4xl text-hover">257</h3>
              <p className="text-xs 2xl:text-xl">Tamamlanmış Proje</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block flex-1 h-screen">
          <Image src={about} alt="about-us" className="h-screen object-cover" />
        </div>
      </section>
    </>
  );
}

export default Hakkimizda;
