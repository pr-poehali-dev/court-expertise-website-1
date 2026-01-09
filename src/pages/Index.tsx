import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

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

      <section id="services" className="py-20">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Виды экспертиз
            </h2>
            <p className="text-muted-foreground">
              Предоставляем полный спектр услуг по судебной строительной экспертизе
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">Строительная экспертиза</CardTitle>
                    <CardDescription className="text-base">
                      Профессиональная оценка качества строительных работ
                    </CardDescription>
                  </div>
                  <Badge className="bg-accent">Основная</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Наша организация проводит независимую оценку качества строительных и ремонтных работ, 
                  соответствия их требованиям нормативно-технической документации, проектной документации 
                  и условиям договора.
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Что мы оцениваем:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Соответствие СНиП и ГОСТ",
                      "Качество материалов",
                      "Технология выполнения работ",
                      "Проектная документация",
                      "Скрытые дефекты",
                      "Причины повреждений"
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Этапы проведения экспертизы:</h4>
                  <div className="space-y-3">
                    {[
                      { step: "1", title: "Прием заявки", desc: "Изучение документов и постановка задач" },
                      { step: "2", title: "Выезд на объект", desc: "Визуальный осмотр и фиксация состояния" },
                      { step: "3", title: "Исследование", desc: "Анализ документации и проведение измерений" },
                      { step: "4", title: "Заключение", desc: "Составление экспертного заключения" }
                    ].map((phase) => (
                      <div key={phase.step} className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          {phase.step}
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">{phase.title}</h5>
                          <p className="text-sm text-muted-foreground">{phase.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold mb-1">Сроки проведения</h5>
                      <p className="text-sm text-muted-foreground">
                        От 7 до 30 рабочих дней в зависимости от сложности объекта
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="experts" className="py-20 bg-muted/30">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Наши эксперты
            </h2>
            <p className="text-muted-foreground">
              Высококвалифицированные специалисты с многолетним опытом
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {experts.map((expert) => (
              <Card key={expert.name}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="UserRound" className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{expert.name}</CardTitle>
                      <CardDescription>{expert.position}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Icon name="Briefcase" className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                      <span className="text-sm">{expert.experience}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Icon name="GraduationCap" className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                      <span className="text-sm">{expert.education}</span>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h5 className="font-semibold text-sm mb-2">Сертификаты:</h5>
                    <ul className="space-y-1">
                      {expert.certifications.map((cert) => (
                        <li key={cert} className="text-sm text-muted-foreground flex items-start space-x-2">
                          <Icon name="Award" className="h-3 w-3 text-accent mt-1 flex-shrink-0" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="licenses" className="py-20">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Лицензии и сертификаты
            </h2>
            <p className="text-muted-foreground">
              Мы работаем в полном соответствии с законодательством РФ
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="text-center p-8">
              <div className="mx-auto w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Icon name="FileText" className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Аккредитация</h3>
              <p className="text-muted-foreground mb-4">
                Аттестат аккредитации № РОСС RU.0001.000000
              </p>
              <Badge variant="secondary">Бессрочно</Badge>
            </Card>

            <Card className="text-center p-8">
              <div className="mx-auto w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Icon name="ShieldCheck" className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">СРО</h3>
              <p className="text-muted-foreground mb-4">
                Свидетельство о членстве в саморегулируемой организации
              </p>
              <Badge variant="secondary">Действительно</Badge>
            </Card>

            <Card className="text-center p-8">
              <div className="mx-auto w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Icon name="Award" className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ISO 9001</h3>
              <p className="text-muted-foreground mb-4">
                Сертификат системы менеджмента качества
              </p>
              <Badge variant="secondary">2026</Badge>
            </Card>

            <Card className="text-center p-8">
              <div className="mx-auto w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Icon name="FileCheck" className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Лицензия</h3>
              <p className="text-muted-foreground mb-4">
                Лицензия на осуществление экспертной деятельности
              </p>
              <Badge variant="secondary">Бессрочно</Badge>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Контакты
            </h2>
            <p className="text-muted-foreground">
              Свяжитесь с нами для получения консультации
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>
                  Мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="example@mail.ru" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea placeholder="Опишите суть обращения" className="min-h-[100px]" />
                </div>
                <Button className="w-full">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-sm text-muted-foreground">
                        г. Москва, ул. Примерная, д. 1, офис 100
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start space-x-3">
                    <Icon name="Phone" className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-sm text-muted-foreground">
                        +7 (495) 123-45-67
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start space-x-3">
                    <Icon name="Mail" className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-sm text-muted-foreground">
                        info@expertiza.ru
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Режим работы</h4>
                      <p className="text-sm text-muted-foreground">
                        Пн-Пт: 9:00 - 18:00<br />
                        Сб-Вс: выходной
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="Phone" className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Экстренная консультация</h4>
                      <p className="text-2xl font-bold mb-2">+7 (495) 123-45-67</p>
                      <p className="text-sm opacity-90">Звоните круглосуточно</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-primary text-primary-foreground">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scale" className="h-6 w-6" />
                <span className="text-lg font-bold">ЭКСПЕРТИЗА</span>
              </div>
              <p className="text-sm opacity-90">
                Профессиональная судебная экспертиза с 2010 года
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Навигация</h5>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <button onClick={() => scrollToSection("home")} className="hover:opacity-100 transition-opacity">
                    Главная
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:opacity-100 transition-opacity">
                    Виды экспертиз
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("experts")} className="hover:opacity-100 transition-opacity">
                    Наши эксперты
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("licenses")} className="hover:opacity-100 transition-opacity">
                    Лицензии
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm opacity-90">
                <li>+7 (495) 123-45-67</li>
                <li>info@expertiza.ru</li>
                <li>г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8 bg-primary-foreground/20" />
          <div className="text-center text-sm opacity-75">
            <p>© 2024 Независимая судебная экспертиза. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
