import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainSections from "@/components/MainSections";
import ContactsFooter from "@/components/ContactsFooter";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const experts = [
    {
      name: "Петров Андрей Викторович",
      position: "Главный эксперт по строительству",
      experience: "15 лет опыта",
      education: "МГУ, Инженерно-строительный факультет",
      certifications: ["Аттестат аккредитации № 12345", "Сертификат ISO 9001"]
    },
    {
      name: "Сидорова Елена Михайловна",
      position: "Эксперт-строитель высшей категории",
      experience: "12 лет опыта",
      education: "МГСУ, Промышленное и гражданское строительство",
      certifications: ["Аттестат аккредитации № 67890"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <MainSections experts={experts} />
      <ContactsFooter scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
