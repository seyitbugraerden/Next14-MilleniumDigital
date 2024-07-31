function Iletisim() {
  return (
    <section className="grid grid-cols-2 py-12 h-screen">
      <div className="bg-[#e3e3e3] flex flex-col justify-center my-auto lg:translate-x-12 p-14 col-span-2 lg:col-span-1 overflow-hidden">
        <h4>İletişim</h4>
        <p>
          <strong>Adres : </strong>Kızılırmak Mah. Dumlupınar Bulv. No:3 Next
          Level A Blok Kat:16 Daire:80, 06520 Çankaya/Ankara
        </p>
        <p>
          <strong>Telefon : </strong>+90 542 330 10 84
        </p>
        <p>
          <strong>E-Posta : </strong>milleniumdigital@gmail.com
        </p>
      </div>
      <div className="hidden lg:block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d270.4973909577112!2d32.812949057570535!3d39.911661304899056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1719941994617!5m2!1str!2str"
          className="h-screen w-full"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Iletisim;
