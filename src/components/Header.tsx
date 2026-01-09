import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <Icon name="Scale" className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">ЭКСПЕРТИЗА</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection("home")}
            className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "home" ? "text-primary" : "text-muted-foreground"}`}
          >
            Главная
          </button>
          <button 
            onClick={() => scrollToSection("services")}
            className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "services" ? "text-primary" : "text-muted-foreground"}`}
          >
            Виды экспертиз
          </button>
          <button 
            onClick={() => scrollToSection("experts")}
            className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "experts" ? "text-primary" : "text-muted-foreground"}`}
          >
            Наши эксперты
          </button>
          <button 
            onClick={() => scrollToSection("licenses")}
            className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "licenses" ? "text-primary" : "text-muted-foreground"}`}
          >
            Лицензии
          </button>
          <button 
            onClick={() => scrollToSection("contacts")}
            className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "contacts" ? "text-primary" : "text-muted-foreground"}`}
          >
            Контакты
          </button>
        </nav>
        <Button onClick={() => scrollToSection("contacts")}>
          Заказать экспертизу
        </Button>
      </div>
    </header>
  );
};

export default Header;
