import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import logo2 from "./images/logo2.png";

export default function App() {
  const [language, setLanguage] = useState("tr");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize EmailJS (Demo mode - gerçek kullanım için EmailJS hesabı gerekli)
  useEffect(() => {
    // emailjs.init("YOUR_PUBLIC_KEY"); // Gerçek kullanım için bu satırı aktif edin
  }, []);

  const content = {
    tr: {
      // Navbar
      home: "Ana Sayfa",
      about: "Hakkımızda",
      career: "Kariyer",
      contact: "İletişim",
      
      // Hero
      heroSubtitle: "2012'den Beri Hizmet Veriyoruz",
      heroTitle: "KEYİF VE HUZUR DOLU ZAMANLAR",
      heroYear: "Hepimizin gerçekleştirmek istediği bir hayaldi yapmak istediğimiz, sonrasında sadece doğruları yapmaya çalışmakla devam edeceğini farkettik, biz elimizden geldiğince, kaliteyi, temizliği, güveni, samimiyeti ve huzuru sağlamaya çalıştıkça daha da güzelleşti her şey.",
      
      // About
      aboutTitle: "2012'den Beri Servis",
      ourStory: "Hikayemiz",
      ourVision: "Vizyonumuz",
      storyText: "Caffe Soso, İstanbul'un kalbinde, kahve tutkusuyla başlayan bir hikayedir. Kaliteli kahve çekirdekleri ve özenli hazırlıkla müşterilerimize en iyi deneyimi sunuyoruz.",
      visionText: "Kahve kültürünü yaygınlaştırmak ve her fincan kahveyle anılar oluşturmak vizyonumuzun temelini oluşturur.",
      learnMore: "Daha Fazla Bilgi",
      
      // Services
      servicesTitle: "Hizmetlerimiz",
      servicesSubtitle: "Taze & Organik Çekirdekler",
      fastDelivery: "Hızlı Teslimat",
      freshBeans: "Taze Kahve Çekirdekleri",
      bestQuality: "En İyi Kalite Kahve",
      tableBooking: "Online Masa Rezervasyonu",
      serviceDesc: "Müşterilerimize en iyi hizmeti sunmak için sürekli kendimizi geliştiriyoruz.",
      
      // Menu
      menuTitle: "Menü & Fiyatlar",
      menuSubtitle: "Rekabetçi Fiyatlar",
      hotCoffee: "Sıcak Kahveler",
      coldCoffee: "Soğuk Kahveler",
      blackCoffee: "Sade Kahve",
      chocolateCoffee: "Çikolatalı Kahve",
      milkCoffee: "Sütlü Kahve",
      
      // Reservation
      reservationTitle: "Masa Rezervasyonu",
      reservationSubtitle: "Online Rezervasyon İçin %30 İndirim",
      reservationDesc: "Online rezervasyon yaparak özel indirimlerden yararlanın ve en iyi masaları ayırtın.",
      bookTable: "Masanızı Ayırtın",
      name: "İsim",
      email: "E-posta",
      date: "Tarih",
      time: "Saat",
      person: "Kişi Sayısı",
      bookNow: "Şimdi Rezerve Et",
      
      // Footer
      getInTouch: "İletişime Geçin",
      followUs: "Bizi Takip Edin",
      openHours: "Açık Saatler",
      newsletter: "Bülten",
      address: "Fahrettin Kerim Gökay Caddesi, No:206 / B, Göztepe Kadıköy İstanbul",
      phone: "+90 216 567 7 567",
      emailAddress: "info@caffesoso.com",
      followDesc: "Sosyal medya hesaplarımızdan güncel haberlerimizi takip edin.",
      weekdays: "Hafta İçi (Pazartesi - Cuma)",
      weekend: "Haftasonu (Cumartesi - Pazar)",
      weekdayHours: "10:00 - 23:30",
      weekendHours: "10:00 - 23:30",
      newsletterDesc: "Özel kampanyalarımızdan haberdar olmak için bültenimize abone olun.",
      signUp: "Abone Ol",
      copyright: "Tüm hakları saklıdır.",
      
      // Career
      careerTitle: "Kariyer Fırsatları",
      careerSubtitle: "Takımımıza Katılın",
      careerDesc: "Caffe Soso ailesinin bir parçası olmak istiyorsanız, açık pozisyonlarımız için başvurabilirsiniz. Kahve tutkusu olan, müşteri odaklı ve takım çalışmasına yatkın kişileri arıyoruz.",
      applyNow: "Başvur",
      firstName: "İsim",
      lastName: "Soyisim",
      phone: "Telefon",
      position: "Pozisyon",
      experience: "Deneyim",
      message: "Mesaj / Motivasyon Mektubu",
      selectPosition: "Pozisyon Seçin",
      barista: "Barista",
      waiter: "Garson",
      cashier: "Kasiyer",
      manager: "Müdür",
      selectExperience: "Deneyim Seviyesi",
      noExperience: "Deneyim Yok",
      oneYear: "1 Yıl",
      twoYears: "2 Yıl",
      threePlus: "3+ Yıl",
      
      // Social Media
      followInstagram: "Takip Et",
      likeFacebook: "Beğen",
      getDirections: "Yol Tarifi"
    },
    en: {
      // Navbar
      home: "Home",
      about: "About",
      career: "Career",
      contact: "Contact",
      
      // Hero
      heroSubtitle: "We Have Been Serving Since 2012",
      heroTitle: "MOMENTS FULL OF JOY AND PEACE",
      heroYear: "It was a dream that we all wanted to realize, and then we realized that we would continue to try to do only the right things. As we tried our best to provide quality, cleanliness, trust, sincerity and peace, everything became more beautiful.",
      
      // About
      aboutTitle: "Serving Since 2012",
      ourStory: "Our Story",
      ourVision: "Our Vision",
      storyText: "Caffe Soso is a story that began with a passion for coffee in the heart of Istanbul. We serve our customers the best experience with quality coffee beans and careful preparation.",
      visionText: "Spreading coffee culture and creating memories with every cup of coffee forms the foundation of our vision.",
      learnMore: "Learn More",
      
      // Services
      servicesTitle: "Our Services",
      servicesSubtitle: "Fresh & Organic Beans",
      fastDelivery: "Fast Delivery",
      freshBeans: "Fresh Coffee Beans",
      bestQuality: "Best Quality Coffee",
      tableBooking: "Online Table Booking",
      serviceDesc: "We continuously improve ourselves to provide the best service to our customers.",
      
      // Menu
      menuTitle: "Menu & Pricing",
      menuSubtitle: "Competitive Pricing",
      hotCoffee: "Hot Coffee",
      coldCoffee: "Cold Coffee",
      blackCoffee: "Black Coffee",
      chocolateCoffee: "Chocolate Coffee",
      milkCoffee: "Coffee With Milk",
      
      // Reservation
      reservationTitle: "Table Reservation",
      reservationSubtitle: "30% OFF For Online Reservation",
      reservationDesc: "Make online reservations to benefit from special discounts and reserve the best tables.",
      bookTable: "Book Your Table",
      name: "Name",
      email: "Email",
      date: "Date",
      time: "Time",
      person: "Person",
      bookNow: "Book Now",
      
      // Footer
      getInTouch: "Get In Touch",
      followUs: "Follow Us",
      openHours: "Open Hours",
      newsletter: "Newsletter",
      address: "Fahrettin Kerim Gökay Caddesi, No:206 / B, Göztepe Kadıköy İstanbul",
      phone: "+90 216 567 7 567",
      emailAddress: "info@caffesoso.com",
      followDesc: "Follow our social media accounts for our latest news.",
      weekdays: "Weekdays (Monday - Friday)",
      weekend: "Weekend (Saturday - Sunday)",
      weekdayHours: "10:00 - 23:30",
      weekendHours: "10:00 - 23:30",
      newsletterDesc: "Subscribe to our newsletter to be informed about our special campaigns.",
      signUp: "Sign Up",
      copyright: "All rights reserved.",
      
      // Career
      careerTitle: "Career Opportunities",
      careerSubtitle: "Join Our Team",
      careerDesc: "If you want to be part of the Caffe Soso family, you can apply for our open positions. We are looking for people who are passionate about coffee, customer-oriented and team-oriented.",
      applyNow: "Apply Now",
      firstName: "First Name",
      lastName: "Last Name",
      phone: "Phone",
      position: "Position",
      experience: "Experience",
      message: "Message / Cover Letter",
      selectPosition: "Select Position",
      barista: "Barista",
      waiter: "Waiter",
      cashier: "Cashier",
      manager: "Manager",
      selectExperience: "Experience Level",
      noExperience: "No Experience",
      oneYear: "1 Year",
      twoYears: "2 Years",
      threePlus: "3+ Years",
      
      // Social Media
      followInstagram: "Follow",
      likeFacebook: "Like",
      getDirections: "Get Directions"
    },
    de: {
      // Navbar
      home: "Startseite",
      about: "Über uns",
      career: "Karriere",
      contact: "Kontakt",
      
      // Hero
      heroSubtitle: "Wir servieren seit 2012",
      heroTitle: "MOMENTE VOLLER FREUDE UND RUHE",
      heroYear: "Es war ein Traum, den wir alle verwirklichen wollten, und dann erkannten wir, dass wir weiterhin versuchen würden, nur das Richtige zu tun. Als wir unser Bestes gaben, um Qualität, Sauberkeit, Vertrauen, Aufrichtigkeit und Frieden zu bieten, wurde alles schöner.",
      
      // About
      aboutTitle: "Servieren seit 2012",
      ourStory: "Unsere Geschichte",
      ourVision: "Unsere Vision",
      storyText: "Caffe Soso ist eine Geschichte, die mit einer Leidenschaft für Kaffee im Herzen von Istanbul begann. Wir bieten unseren Kunden mit hochwertigen Kaffeebohnen und sorgfältiger Zubereitung das beste Erlebnis.",
      visionText: "Die Verbreitung der Kaffeekultur und die Schaffung von Erinnerungen mit jeder Tasse Kaffee bilden die Grundlage unserer Vision.",
      learnMore: "Mehr erfahren",
      
      // Services
      servicesTitle: "Unsere Dienstleistungen",
      servicesSubtitle: "Frische & Bio-Bohnen",
      fastDelivery: "Schnelle Lieferung",
      freshBeans: "Frische Kaffeebohnen",
      bestQuality: "Beste Kaffeequalität",
      tableBooking: "Online-Tischreservierung",
      serviceDesc: "Wir verbessern uns kontinuierlich, um unseren Kunden den besten Service zu bieten.",
      
      // Menu
      menuTitle: "Menü & Preise",
      menuSubtitle: "Wettbewerbsfähige Preise",
      hotCoffee: "Heißer Kaffee",
      coldCoffee: "Kalter Kaffee",
      blackCoffee: "Schwarzer Kaffee",
      chocolateCoffee: "Schokoladenkaffee",
      milkCoffee: "Kaffee mit Milch",
      
      // Reservation
      reservationTitle: "Tischreservierung",
      reservationSubtitle: "30% Rabatt für Online-Reservierung",
      reservationDesc: "Machen Sie Online-Reservierungen, um von besonderen Rabatten zu profitieren und die besten Tische zu reservieren.",
      bookTable: "Buchen Sie Ihren Tisch",
      name: "Name",
      email: "E-Mail",
      date: "Datum",
      time: "Zeit",
      person: "Person",
      bookNow: "Jetzt buchen",
      
      // Footer
      getInTouch: "Kontakt aufnehmen",
      followUs: "Folgen Sie uns",
      openHours: "Öffnungszeiten",
      newsletter: "Newsletter",
      address: "Fahrettin Kerim Gökay Caddesi, No:206 / B, Göztepe Kadıköy İstanbul",
      phone: "+90 216 567 7 567",
      emailAddress: "info@caffesoso.com",
      followDesc: "Folgen Sie unseren Social-Media-Konten für unsere neuesten Nachrichten.",
      weekdays: "Wochentage (Montag - Freitag)",
      weekend: "Wochenende (Samstag - Sonntag)",
      weekdayHours: "10:00 - 23:30",
      weekendHours: "10:00 - 23:30",
      newsletterDesc: "Abonnieren Sie unseren Newsletter, um über unsere besonderen Kampagnen informiert zu werden.",
      signUp: "Anmelden",
      copyright: "Alle Rechte vorbehalten.",
      
      // Career
      careerTitle: "Karrieremöglichkeiten",
      careerSubtitle: "Werden Sie Teil unseres Teams",
      careerDesc: "Wenn Sie Teil der Caffe Soso Familie werden möchten, können Sie sich für unsere offenen Stellen bewerben. Wir suchen Menschen, die eine Leidenschaft für Kaffee haben, kundenorientiert und teamorientiert sind.",
      applyNow: "Jetzt bewerben",
      firstName: "Vorname",
      lastName: "Nachname",
      phone: "Telefon",
      position: "Position",
      experience: "Erfahrung",
      message: "Nachricht / Anschreiben",
      selectPosition: "Position auswählen",
      barista: "Barista",
      waiter: "Kellner",
      cashier: "Kassierer",
      manager: "Manager",
      selectExperience: "Erfahrungsstufe",
      noExperience: "Keine Erfahrung",
      oneYear: "1 Jahr",
      twoYears: "2 Jahre",
      threePlus: "3+ Jahre",
      
      // Social Media
      followInstagram: "Folgen",
      likeFacebook: "Gefällt mir",
      getDirections: "Route"
    }
  };

  const t = content[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 110; // Navbar yüksekliği
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
          <div>
      {/* Navbar */}
      <nav className={`navbar fixed-top ${isScrolled ? 'scrolled' : ''}`} style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1rem 0',
        transition: 'all 0.3s ease'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo2} alt="Caffe Soso Logo" style={{ height: '80px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {/* Desktop Navigation */}
              <div className="desktop-nav" style={{ display: 'flex', gap: '1.5rem' }}>
                <button onClick={() => scrollToSection('home')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>{t.home}</button>
                <button onClick={() => scrollToSection('about')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>{t.about}</button>
                <button onClick={() => scrollToSection('career')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>{t.career}</button>
                <button onClick={() => scrollToSection('footer')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>{t.contact}</button>
              </div>
              
              {/* Language Selector */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="language-selector"
              >
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
              </select>
              
              {/* Mobile Hamburger Menu */}
              <button 
                className="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{
                  display: 'none',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  color: 'var(--bordo)',
                  cursor: 'pointer'
                }}
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
        </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-nav-menu" style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgb(255, 248, 219)',
            boxShadow: '0 4px 20px rgba(139, 0, 0, 0.2)',
            padding: '1rem 0',
            zIndex: 999
          }}>
            <div className="container">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <button onClick={() => { scrollToSection('home'); setIsMobileMenuOpen(false); }} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>{t.home}</button>
                <button onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>{t.about}</button>
                <button onClick={() => { scrollToSection('career'); setIsMobileMenuOpen(false); }} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>{t.career}</button>
                <button onClick={() => { scrollToSection('footer'); setIsMobileMenuOpen(false); }} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>{t.contact}</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container text-center">
          <h2 className="hero-subtitle">{t.heroSubtitle}</h2>
          <h1 className="hero-title">{t.heroTitle}</h1>
          <p className="hero-description">{t.heroYear}</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" style={{ backgroundColor: 'var(--light)' }}>
        <div className="container">
          <div className="section-title">
            <h4 style={{ color: 'var(--primary)' }}>{t.about}</h4>
            <h1 style={{ color: 'var(--bordo)' }}>{t.aboutTitle}</h1>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <h1 className="mb-3" style={{ color: 'var(--bordo)' }}>{t.ourStory}</h1>
              <p className="mb-4" style={{ color: 'var(--secondary)' }}>{t.storyText}</p>
            </div>
            <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Coffee" 
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px' }}
              />
            </div>
            <div className="col-lg-4">
              <h1 className="mb-3" style={{ color: 'var(--bordo)' }}>{t.ourVision}</h1>
              <p className="mb-4" style={{ color: 'var(--secondary)' }}>{t.visionText}</p>
              <div className="mb-3" style={{ color: 'var(--secondary)' }}>
                <i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '1rem' }}></i>
                {t.freshBeans}
              </div>
              <div className="mb-3" style={{ color: 'var(--secondary)' }}>
                <i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '1rem' }}></i>
                {t.bestQuality}
              </div>
              <div className="mb-4" style={{ color: 'var(--secondary)' }}>
                <i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '1rem' }}></i>
                {t.fastDelivery}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Commented Out */}
      {/* 
      <section id="services" className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="section-title">
            <h4>{t.services}</h4>
            <h1>{t.servicesSubtitle}</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="service-card">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Service" 
                    style={{ width: '80px', height: '80px', borderRadius: '10px', marginRight: '1rem' }}
                  />
                  <div>
                    <h4><i className="fas fa-truck service-icon"></i>{t.fastDelivery}</h4>
                    <p>{t.serviceDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Service" 
                    style={{ width: '80px', height: '80px', borderRadius: '10px', marginRight: '1rem' }}
                  />
                  <div>
                    <h4><i className="fas fa-coffee service-icon"></i>{t.freshBeans}</h4>
                    <p>{t.serviceDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Service" 
                    style={{ width: '80px', height: '80px', borderRadius: '10px', marginRight: '1rem' }}
                  />
                  <div>
                    <h4><i className="fas fa-award service-icon"></i>{t.bestQuality}</h4>
                    <p>{t.serviceDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Service" 
                    style={{ width: '80px', height: '80px', borderRadius: '10px', marginRight: '1rem' }}
                  />
                  <div>
                    <h4><i className="fas fa-table service-icon"></i>{t.tableBooking}</h4>
                    <p>{t.serviceDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Menu Section - Commented Out */}
      {/*
      <section id="menu" className="section">
        <div className="container">
          <div className="section-title">
            <h4>{t.menu}</h4>
            <h1>{t.menuSubtitle}</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h1 className="mb-4">{t.hotCoffee}</h1>
              <div className="menu-item">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Coffee" 
                    className="menu-image"
                  />
                  <div style={{ flex: 1, marginLeft: '1rem' }}>
                    <h4>{t.blackCoffee}</h4>
                    <p>Geleneksel Türk kahvesi tarzında hazırlanmış sade kahve</p>
                  </div>
                  <div className="menu-price">₺25</div>
                </div>
              </div>
              <div className="menu-item">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Coffee" 
                    className="menu-image"
                  />
                  <div style={{ flex: 1, marginLeft: '1rem' }}>
                    <h4>{t.chocolateCoffee}</h4>
                    <p>Belçika çikolatası ile harmanlanmış özel kahve</p>
                  </div>
                  <div className="menu-price">₺35</div>
                </div>
              </div>
              <div className="menu-item">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Coffee" 
                    className="menu-image"
                  />
                  <div style={{ flex: 1, marginLeft: '1rem' }}>
                    <h4>{t.milkCoffee}</h4>
                    <p>Köpüklü süt ile servis edilen kremsi kahve</p>
                  </div>
                  <div className="menu-price">₺30</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="mb-4">{t.coldCoffee}</h1>
              <div className="menu-item">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Coffee" 
                    className="menu-image"
                  />
                  <div style={{ flex: 1, marginLeft: '1rem' }}>
                    <h4>Buzlu {t.blackCoffee}</h4>
                    <p>Soğuk servis edilen geleneksel sade kahve</p>
                  </div>
                  <div className="menu-price">₺25</div>
                </div>
              </div>
              <div className="menu-item">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Coffee" 
                    className="menu-image"
                  />
                  <div style={{ flex: 1, marginLeft: '1rem' }}>
                    <h4>Frappé</h4>
                    <p>Buzlu çikolatalı kahve karışımı</p>
                  </div>
                  <div className="menu-price">₺40</div>
                </div>
              </div>
              <div className="menu-item">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Coffee" 
                    className="menu-image"
                  />
                  <div style={{ flex: 1, marginLeft: '1rem' }}>
                    <h4>Iced Latte</h4>
                    <p>Soğuk süt ile hazırlanmış buzlu latte</p>
                  </div>
                  <div className="menu-price">₺35</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Reservation Section - Commented Out */}
      {/*
      <section id="reservation" className="section reservation-section">
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-md-6">
              <div style={{ padding: '2rem' }}>
                <div className="mb-4">
                  <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>30% İNDİRİM</h1>
                  <h1 style={{ color: 'white', marginBottom: '1rem' }}>{t.reservationSubtitle}</h1>
                </div>
                <p style={{ color: 'white', marginBottom: '2rem' }}>{t.reservationDesc}</p>
                <ul style={{ listStyle: 'none', padding: 0, color: 'white' }}>
                  <li style={{ padding: '0.5rem 0' }}>
                    <i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '1rem' }}></i>
                    {t.freshBeans}
                  </li>
                  <li style={{ padding: '0.5rem 0' }}>
                    <i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '1rem' }}></i>
                    {t.bestQuality}
                  </li>
                  <li style={{ padding: '0.5rem 0' }}>
                    <i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '1rem' }}></i>
                    {t.fastDelivery}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="reservation-form">
                <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>{t.bookTable}</h1>
                <form>
                  <input type="text" className="form-control" placeholder={t.name} required />
                  <input type="email" className="form-control" placeholder={t.email} required />
                  <input type="date" className="form-control" placeholder={t.date} required />
                  <input type="time" className="form-control" placeholder={t.time} required />
                  <select className="form-control" required>
                    <option value="">{t.person}</option>
                    <option value="1">1 Kişi</option>
                    <option value="2">2 Kişi</option>
                    <option value="3">3 Kişi</option>
                    <option value="4">4 Kişi</option>
                    <option value="5">5+ Kişi</option>
                  </select>
                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    {t.bookNow}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Career Section */}
      <section id="career" className="section">
        <div className="container">
          <div className="section-title">
            <h4>{t.career}</h4>
            <h1>{t.careerTitle}</h1>
          </div>
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-md-6">
              <div style={{ padding: '2rem' }}>
                <h2 className="mb-4" style={{ color: 'var(--light)' }}>{t.careerSubtitle}</h2>
                <p className="mb-4" style={{ color: 'var(--light)' }}>{t.careerDesc}</p>
                <div className="mb-3" style={{ color: 'var(--light)' }}>
                  <i className="fas fa-coffee" style={{ color: 'var(--primary)', marginRight: '1rem' }}></i>
                  Kahve tutkusu olan adaylar
                </div>
                <div className="mb-3" style={{ color: 'var(--light)' }}>
                  <i className="fas fa-users" style={{ color: 'var(--primary)', marginRight: '1rem' }}></i>
                  Takım çalışmasına yatkın kişiler
                </div>
                <div className="mb-4" style={{ color: 'var(--light)' }}>
                  <i className="fas fa-smile" style={{ color: 'var(--primary)', marginRight: '1rem' }}></i>
                  Müşteri odaklı hizmet anlayışı
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card career-form">
                <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--bordo)' }}>İş Başvuru Formu</h3>
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setSubmitMessage("");
                  
                  const formData = new FormData(e.target);
                  const data = {
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    position: formData.get('position'),
                    experience: formData.get('experience'),
                    message: formData.get('message')
                  };
                  
                  // EmailJS template parameters
                  const templateParams = {
                    to_email: 'info@caffesoso.com',
                    from_name: `${data.firstName} ${data.lastName}`,
                    from_email: data.email,
                    phone: data.phone,
                    position: data.position,
                    experience: data.experience,
                    message: data.message,
                    subject: `İş Başvurusu - ${data.position}`
                  };
                  
                  try {
                    // Demo mode - Gerçek email gönderimi için EmailJS hesabı gerekli
                    // Şimdilik simüle ediyoruz
                    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 saniye bekle
                    
                    // Gerçek EmailJS kullanımı için aşağıdaki kodu aktif edin:
                    /*
                    await emailjs.send(
                      'YOUR_SERVICE_ID', // EmailJS service ID
                      'YOUR_TEMPLATE_ID', // EmailJS template ID
                      templateParams
                    );
                    */
                    
                    // Console'a bilgileri yazdır (demo amaçlı)
                    console.log('İş Başvurusu Gönderildi:', templateParams);
                    
                    setSubmitMessage(language === 'tr' ? 'Başvurunuz başarıyla gönderildi! (Demo Mode)' : 
                                   language === 'en' ? 'Your application has been sent successfully! (Demo Mode)' :
                                   'Ihre Bewerbung wurde erfolgreich gesendet! (Demo Mode)');
                    e.target.reset(); // Form'u temizle
                  } catch (error) {
                    console.error('Email gönderme hatası:', error);
                    setSubmitMessage(language === 'tr' ? 'Başvuru gönderilirken hata oluştu. Lütfen tekrar deneyin.' :
                                   language === 'en' ? 'An error occurred while sending the application. Please try again.' :
                                   'Beim Senden der Bewerbung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}>
                  <div className="row">
                    <div className="col-md-6">
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--bordo)' }}>
                        {t.firstName}
                      </label>
                      <input 
                        type="text" 
                        name="firstName"
                        className="form-control" 
                        placeholder={t.firstName} 
                        required 
                        style={{ 
                          background: 'white', 
                          border: '2px solid #ddd', 
                          color: '#333',
                          width: '100%'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--bordo)' }}>
                        {t.lastName}
                      </label>
                      <input 
                        type="text" 
                        name="lastName"
                        className="form-control" 
                        placeholder={t.lastName} 
                        required 
                        style={{ 
                          background: 'white', 
                          border: '2px solid #ddd', 
                          color: '#333',
                          width: '100%'
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--bordo)' }}>
                        {t.email}
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        className="form-control" 
                        placeholder={t.email} 
                        required 
                        style={{ 
                          background: 'white', 
                          border: '2px solid #ddd', 
                          color: '#333',
                          width: '100%'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--bordo)' }}>
                        {t.phone}
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="form-control" 
                        placeholder={t.phone} 
                        required 
                        style={{ 
                          background: 'white', 
                          border: '2px solid #ddd', 
                          color: '#333',
                          width: '100%'
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--bordo)' }}>
                      {t.position}
                    </label>
                    <select 
                      name="position"
                      className="form-control" 
                      required
                      style={{ 
                        background: 'white', 
                        border: '2px solid #ddd', 
                        color: '#333',
                        width: '100%'
                      }}
                    >
                      <option value="">{t.selectPosition}</option>
                      <option value="barista">{t.barista}</option>
                      <option value="waiter">{t.waiter}</option>
                      <option value="cashier">{t.cashier}</option>
                      <option value="manager">{t.manager}</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--bordo)' }}>
                      {t.experience}
                    </label>
                    <select 
                      name="experience"
                      className="form-control" 
                      required
                      style={{ 
                        background: 'white', 
                        border: '2px solid #ddd', 
                        color: '#333',
                        width: '100%'
                      }}
                    >
                      <option value="">{t.selectExperience}</option>
                      <option value="no-experience">{t.noExperience}</option>
                      <option value="1-year">{t.oneYear}</option>
                      <option value="2-years">{t.twoYears}</option>
                      <option value="3-plus">{t.threePlus}</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--bordo)' }}>
                      {t.message}
                    </label>
          <textarea
                      name="message"
                      className="form-control" 
                      placeholder={t.message}
                      rows="4"
                      required
                      style={{ 
                        background: 'white', 
                        border: '2px solid #ddd', 
                        color: '#333',
                        resize: 'vertical',
                        width: '100%'
                      }}
          ></textarea>
                  </div>
                  
                  {/* Submit Message */}
                  {submitMessage && (
                    <div style={{ 
                      marginBottom: '1rem', 
                      padding: '1rem', 
                      borderRadius: '8px',
                      backgroundColor: submitMessage.includes('başarıyla') || submitMessage.includes('successfully') || submitMessage.includes('erfolgreich') 
                        ? '#d4edda' : '#f8d7da',
                      color: submitMessage.includes('başarıyla') || submitMessage.includes('successfully') || submitMessage.includes('erfolgreich')
                        ? '#155724' : '#721c24',
                      border: `1px solid ${submitMessage.includes('başarıyla') || submitMessage.includes('successfully') || submitMessage.includes('erfolgreich')
                        ? '#c3e6cb' : '#f5c6cb'}`,
                      textAlign: 'center'
                    }}>
                      {submitMessage}
                    </div>
                  )}
                  
          <button
            type="submit"
                    className="btn-primary" 
                    disabled={isSubmitting}
                    style={{ 
                      width: '100%',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting 
                      ? (language === 'tr' ? 'Gönderiliyor...' : 
                         language === 'en' ? 'Sending...' : 'Wird gesendet...')
                      : t.applyNow
                    }
          </button>
        </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h4>{t.getInTouch}</h4>
              <p><i className="fas fa-map-marker-alt" style={{ marginRight: '0.5rem' }}></i>{t.address} </p>
              <p><i className="fas fa-phone" style={{ marginRight: '0.5rem' }}></i>{t.phone}</p>
              <p><i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i>{t.emailAddress}</p>
            </div>
            <div className="col-lg-4">
              <h4>{t.followUs}</h4>
              <p>{t.followDesc}</p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="https://facebook.com/caffesoso" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://instagram.com/caffesoso" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://maps.google.com/?q=Caferağa+Mahallesi+Moda+Caddesi+142A+Kadıköy+İstanbul" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <h4>{t.openHours}</h4>
              <div>
                <h6 style={{ color: 'white', textTransform: 'uppercase' }}>{t.weekdays}</h6>
                <p>{t.weekdayHours}</p>
                <h6 style={{ color: 'white', textTransform: 'uppercase' }}>{t.weekend}</h6>
                <p>{t.weekendHours}</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', marginTop: '2rem' }}>
            <p>© 2025 <span style={{ color: 'var(--bordo)', fontWeight: 'bold' }}>Caffe Soso</span> — {t.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '1.2rem',
          cursor: 'pointer',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#c8934f'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary)'}
      >
        <i className="fas fa-angle-up"></i>
      </button>

      {/* Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    </div>
  );
}
