import Link from "next/link";
import React from "react";

function Hizmetlerimiz() {
  return (
    <div className="hizmetler">
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 m-0 p-0">
        <Link href="/hizmetlerimiz/web-site-cozumleri" className="card-area relative overflow-hidden">
          <div className="text-area">
            <p>01</p>
            <h2>Web Site Çözümleri</h2>
            <p>
            Millenium Digital, web sitesi çözümleri sunan bir firmadır. Kullanıcı dostu, modern ve işlevsel web siteleri tasarlayarak işletmelerin dijital dünyada güçlü bir varlık göstermelerini sağlıyoruz. Başarıya giden yolda profesyonel destek sunuyoruz.
            </p>
          </div>
          <img src="https://picsum.photos/200/300" alt="" />
        </Link>
        <Link href="/hizmetlerimiz/mobil-uygulama-cozumleri" className="card-area relative overflow-hidden">
          <div className="text-area">
            <p>02</p>
            <h2>Mobil Uygulama Çözümleri</h2>
            <p>
            Millenium Digital, mobil uygulama çözümleri sunar. Yenilikçi ve kullanıcı dostu mobil uygulamalar tasarlayarak, işletmelerin dijital dünyada rekabet avantajı kazanmalarını sağlıyoruz. Mobil teknolojide başarıya ulaşmak için profesyonel destek sunuyoruz.
            </p>
          </div>
          <img src="https://picsum.photos/200/300" alt="" />
        </Link>
        <Link href="/hizmetlerimiz/profesyonel-marka-yonetimi" className="card-area relative overflow-hidden">
          <div className="text-area">
            <p>03</p>
            <h2>Profesyonel Marka Yönetimi</h2>
            <p>
            Millenium Digital, profesyonel marka yönetimi hizmetleri sunar. Markanızı güçlendirmek ve hedef kitlenizle etkili iletişim kurmak için stratejik çözümler geliştiriyoruz. Markanızın değerini artırarak, sektörde fark yaratmanıza yardımcı oluyoruz.
            </p>
          </div>
          <img src="https://picsum.photos/200/300" alt="" />
        </Link>
        <Link href="/hizmetlerimiz/sosyal-medya-yonetimi" className="card-area relative overflow-hidden">
          <div className="text-area">
            <p>04</p>
            <h2>Sosyal Medya Yönetimi</h2>
            <p>
            Millenium Digital, sosyal medya yönetimi hizmetleri sunar. Sosyal medya platformlarında markanızı etkin şekilde temsil eder, etkileşimi artırır ve hedef kitlenizle güçlü bir bağ kurmanızı sağlarız. Başarılı sosyal medya stratejileri ile fark yaratıyoruz.
            </p>
          </div>
          <img src="https://picsum.photos/200/300" alt="" />
        </Link>
        <Link href="/hizmetlerimiz/e-ticaret-cozumleri" className="card-area relative overflow-hidden">
          <div className="text-area">
            <p>05</p>
            <h2>E-Ticaret Çözümleri</h2>
            <p>
            Millenium Digital, e-ticaret çözümleri sunar. İşletmenizi dijital pazarda başarılı kılmak için özelleştirilmiş e-ticaret platformları tasarlıyor ve geliştiriyoruz. Satışları artırmak ve müşteri memnuniyetini sağlamak için profesyonel destek sunuyoruz.
            </p>
          </div>
          <img src="https://picsum.photos/200/300" alt="" />
        </Link>
        <Link href="/hizmetlerimiz/crm-sistemleri" className="card-area relative overflow-hidden">
          <div className="text-area">
            <p>06</p>
            <h2>CRM Çözümleri</h2>
            <p>
            Millenium Digital, CRM çözümleri sunar. Müşteri ilişkilerini yönetmek ve işletmenizin verimliliğini artırmak için özelleştirilmiş CRM sistemleri tasarlıyoruz. Müşteri memnuniyetini ve sadakatini artırmak için profesyonel destek sağlıyoruz.
            </p>
          </div>
          <img src="https://picsum.photos/200/300" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Hizmetlerimiz;
