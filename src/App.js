import React, { useState, useEffect } from 'react';
// Ikonkalar uchun kutubxona
import { BookOpen, Code, Users, Phone, Mail, MapPin, Menu, X, Languages, Megaphone, Calculator } from 'lucide-react';

// Yangilangan kurslar ma'lumotlari
const coursesData = [
  {
    icon: <Languages className="w-10 h-10 text-red-500" />,
    title: "Ingliz Tili",
    description: "CEFR va IELTS imtihonlariga professional tayyorlov va ravon nutq."
  },
  {
    icon: <Languages className="w-10 h-10 text-red-500" />,
    title: "Rus Tili",
    description: "So'zlashuv va grammatika kurslari orqali rus tilini tez o'rganing."
  },
  {
    icon: <Languages className="w-10 h-10 text-red-500" />,
    title: "Koreys Tili",
    description: "TOPIK imtihonlariga tayyorlov va koreys madaniyati bilan tanishuv."
  },
  {
    icon: <Code className="w-10 h-10 text-red-500" />,
    title: "IT (Dasturlash)",
    description: "Frontend, Backend va mobil ilovalar yaratish bo'yicha amaliy kurslar."
  },
  {
    icon: <Megaphone className="w-10 h-10 text-red-500" />,
    title: "SMM & Marketing",
    description: "Ijtimoiy tarmoqlarda biznesni rivojlantirish va brendni tanitish."
  },
   {
    icon: <Calculator className="w-10 h-10 text-red-500" />,
    title: "Matematika",
    description: "DTM testlari va mantiqiy fikrlashni kuchaytirishga yo'naltirilgan kurs."
  }
];

// Yangi, to'liq o'qituvchilar ro'yxati
const teachersData = [
  { name: "Djametova Saodat", specialty: "Rus Tili O'qituvchisi", img: "./teacher.png" },
  { name: "Muminov Baxodirxo’ja", specialty: "IT (Dasturlash) O'qituvchisi", img: "./teacher.png" },
  { name: "Ismailova Roziya", specialty: "Ingliz Tili O'qituvchisi", img: "./teacher.png" },
  { name: "Yuldasheva Ziyoda", specialty: "Ma'mur (Reception)", img: "./teacher.png" },
  { name: "Olimjonova Safina", specialty: "Ingliz Tili O'qituvchisi", img: "./teacher.png" },
  { name: "Khudayberganov Asadbek", specialty: "Ingliz Tili O'qituvchisi", img: "./teacher.png" },
  { name: "Dariev Urazbek", specialty: "Ingliz Tili O'qituvchisi", img: "./teacher.png" },
  { name: "Ibrokhimov Kamron", specialty: "IT (Dasturlash) O'qituvchisi", img: "./teacher.png" },
  { name: "Rashidov Abubakir", specialty: "IT (Dasturlash) O'qituvchisi", img: "./teacher.png" },
  { name: "Juraboyeva Nilufar", specialty: "Rus Tili O'qituvchisi", img: "./teacher.png" },
  { name: "Murtozayeva Munisa", specialty: "Ma'mur (Reception)", img: "./teacher.png" },
  { name: "Ravshanbekova Maftuna", specialty: "Ma'mur (Reception)", img: "./teacher.png" },
  { name: "Khasanova Kumush", specialty: "Matematika O'qituvchisi", img: "./teacher.png" },
  { name: "Fotima", specialty: "Koreys Tili O'qituvchisi", img: "./teacher.png" },
  { name: "Anvarov Shukhrat", specialty: "SMM Mutaxassisi", img: "./teacher.png" }
];


// Komponentlar

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Bosh sahifa", "Kurslar", "Biz haqimizda", "Bizning jamoa", "Kursga yozilish"];

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wider">
          <span className="text-red-500">London</span> Education
        </h1>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-gray-300 hover:text-red-500 transition-colors duration-300">{link}</a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <nav className="flex flex-col items-center px-6 pb-4 space-y-4">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-red-500 transition-colors duration-300 block py-2">{link}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

const Hero = () => {
  return (
    <section id="bosh-sahifa" className="bg-gray-900 text-white min-h-[60vh] flex items-center">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-black bg-opacity-30 p-10 rounded-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Kelajagingizni <span className="text-red-500">London Education</span> Bilan Quring
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Eng talabgir sohalardagi professional kurslar orqali muvaffaqiyatga erishing.
            </p>
            <a href="#kurslar" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/40">
            Kurslarni Ko'rish
            </a>
        </div>
      </div>
    </section>
  );
}

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        <p className="text-md text-gray-500 mt-2">{subtitle}</p>
        <div className="inline-block w-20 h-1 bg-red-500 rounded-full mt-4"></div>
    </div>
);


const Courses = () => {
  return (
    <section id="kurslar" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Bizning Kurslarimiz" subtitle="Siz uchun maxsus tanlangan yo'nalishlar" />
        <div className="flex flex-wrap justify-center gap-8">
          {coursesData.map((course, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-red-500/20 transform hover:-translate-y-2 transition-all duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-[30%]">
              <div className="mb-6">{course.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
              <p className="text-gray-400">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const About = () => {
  return (
    <section id="biz-haqimizda" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="O'quv jarayoni" 
                      className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/111827/ef4444?text=Bizning+Jamoa'; }}
                    />
                </div>
                <div className="lg:w-1/2 text-white">
                    <SectionTitle title="Nega Aynan Biz?" subtitle="Bizning afzalliklarimiz" />
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Bizning o'quv markazimizda har bir o'quvchiga individual yondashuv, eng so'nggi o'quv metodikalari va amaliyotga asoslangan darslar taklif etiladi. Maqsadimiz - shunchaki o'rgatish emas, balki o'z sohasining haqiqiy mutaxassislarini tayyorlashdir.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <BookOpen className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                            <span><span className="font-bold text-white">Kuchli O'quv Dasturlari:</span> Zamonaviy talablarga to'liq javob beradigan dasturlar.</span>
                        </li>
                        <li className="flex items-start">
                            <Users className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                            <span><span className="font-bold text-white">Professional Jamoa:</span> O'z sohasining tajribali mutaxassislari jamoasi.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}

const TeacherCard = ({ teacher }) => (
  <div className="flex-shrink-0 w-64 mx-4">
      <div className="bg-gray-900 rounded-2xl overflow-hidden text-center group">
          <div className="relative h-64">
              <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="p-6">
              <h3 className="text-xl font-bold text-white">{teacher.name}</h3>
              <p className="text-red-500">{teacher.specialty}</p>
          </div>
       </div>
  </div>
);

const Teachers = () => {
  const duplicatedTeachers = [...teachersData, ...teachersData];

  return (
    <section id="bizning-jamoa" className="bg-gray-800 py-20">
      <div className="container mx-auto">
        <SectionTitle title="Bizning Professional Jamoa" subtitle="Muvaffaqiyatingizga hissa qo'shadigan mutaxassislar" />
        <div
          className="relative w-full overflow-hidden group"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex group-hover:[animation-play-state:paused] animate-scroll">
            {duplicatedTeachers.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const Enrollment = () => {
    return (
        <section id="kursga-yozilish" className="bg-gray-900 py-20 text-white">
            <div className="container mx-auto px-6">
                <SectionTitle title="Kursga Yozilish" subtitle="O'z joyingizni hoziroq band qiling!" />
                <div className="max-w-xl mx-auto bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl">
                    <form className="space-y-6">
                         <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">To'liq ismingiz</label>
                            <input type="text" id="name" placeholder="Ismingizni kiriting" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Telefon raqamingiz</label>
                            <input type="tel" id="phone" placeholder="+998 90 123 45 67" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105">
                            Ariza Qoldirish
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}


const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} London Education. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
}


export default function App() {
  const cardWidth = 256 + 32; // karta eni + oradagi masofa
  const animationDuration = teachersData.length * 5; // har bir karta uchun 5 sekund

  return (
    <div className="bg-gray-900 font-sans">
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out 0.5s forwards; }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-${cardWidth}px * ${teachersData.length})); }
        }
        .animate-scroll {
          animation: scroll ${animationDuration}s linear infinite;
        }
      `}</style>
      <Header />
      <main>
        <Hero />
        <Courses />
        <About />
        <Teachers />
        <Enrollment />
      </main>
      <Footer />
    </div>
  );
}
