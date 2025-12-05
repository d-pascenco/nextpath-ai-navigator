import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ArrowRight, Target, Map, Sparkles, Users, TrendingUp, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Target,
    title: "Персонализированные цели",
    description: "AI анализирует ваши данные и определяет оптимальный путь к желаемой профессии",
  },
  {
    icon: Map,
    title: "Интерактивная дорожная карта",
    description: "Пошаговый план с конкретными курсами, материалами и сроками",
  },
  {
    icon: Sparkles,
    title: "Динамическая адаптация",
    description: "Маршрут корректируется по мере вашего прогресса и изменения целей",
  },
  {
    icon: Users,
    title: "Поддержка и менторство",
    description: "Связь с менторами и сообществом единомышленников",
  },
];

const stats = [
  { value: "10,000+", label: "Успешных карьер" },
  { value: "95%", label: "Достигают целей" },
  { value: "50+", label: "Профессий" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-hero">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Возможности
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              Как это работает
            </a>
            <Button variant="outline" size="sm">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            AI-платформа для карьерного развития
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Когда все пути кажутся{" "}
            <span className="text-gradient">закрытыми</span>,<br />
            NextPath найдёт{" "}
            <span className="text-gradient">выход</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Персональная дорожная карта развития на основе ваших данных, целей и возможностей. 
            От текущего уровня до работы мечты.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => navigate("/onboarding")}
            >
              Начать бесплатно
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl">
              Узнать больше
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Всё для вашего карьерного роста
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NextPath использует искусственный интеллект для создания уникального плана развития
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Как это работает
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Три простых шага к вашей персональной дорожной карте
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Расскажите о себе",
                  description: "Заполните профиль: образование, опыт, навыки и карьерные цели",
                },
                {
                  step: "02",
                  title: "AI создаёт план",
                  description: "Наш алгоритм анализирует данные и строит оптимальный маршрут",
                },
                {
                  step: "03",
                  title: "Следуйте карте",
                  description: "Изучайте материалы, выполняйте задания и отслеживайте прогресс",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Готовы начать свой путь?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Присоединяйтесь к тысячам людей, которые уже строят карьеру мечты с NextPath
          </p>
          <Button 
            variant="gold" 
            size="xl"
            onClick={() => navigate("/onboarding")}
          >
            Создать дорожную карту
            <TrendingUp className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground">
              © 2024 NextPath. Всегда есть другой путь.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
