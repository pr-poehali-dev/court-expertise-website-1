import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <>
      <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-secondary to-background">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4">
              Аккредитованная организация
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Независимая судебная экспертиза
            </h1>
            <p className="text-xl text-muted-foreground">
              Профессиональная оценка качества строительных работ с соблюдением всех законодательных норм и стандартов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" onClick={() => scrollToSection("contacts")}>
                <Icon name="Phone" className="mr-2 h-4 w-4" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("services")}>
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Award" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">15+</h3>
              <p className="text-muted-foreground">Лет на рынке</p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="FileCheck" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">2500+</h3>
              <p className="text-muted-foreground">Проведенных экспертиз</p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Users" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">10</h3>
              <p className="text-muted-foreground">Экспертов в штате</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
