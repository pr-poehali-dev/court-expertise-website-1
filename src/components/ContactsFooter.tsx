import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

interface ContactsFooterProps {
  scrollToSection: (sectionId: string) => void;
}

const ContactsFooter = ({ scrollToSection }: ContactsFooterProps) => {
  return (
    <>
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
    </>
  );
};

export default ContactsFooter;
