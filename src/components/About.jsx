import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="gradient-text">Hakkımda</span>
        </h2>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Merhaba! Ben tutkulu bir web developer'ım. Modern teknolojiler
            kullanarak kullanıcı deneyimini ön planda tutan web uygulamaları
            geliştiriyorum.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            React, TypeScript ve modern frontend teknolojileri ile çalışmayı
            seviyorum. Her proje için en iyi çözümleri üretmeye ve sürekli
            kendimi geliştirmeye odaklanıyorum.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Kod yazmadığım zamanlarda yeni teknolojileri öğreniyor, açık kaynak
            projelere katkıda bulunuyor ve teknoloji topluluklarında aktif
            olarak yer alıyorum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
