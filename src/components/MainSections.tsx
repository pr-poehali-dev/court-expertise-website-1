import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Expert {
  name: string;
  position: string;
  experience: string;
  education: string;
  certifications: string[];
}

interface MainSectionsProps {
  experts: Expert[];
}

const MainSections = ({ experts }: MainSectionsProps) => {
  return (
    <>
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
    </>
  );
};

export default MainSections;
