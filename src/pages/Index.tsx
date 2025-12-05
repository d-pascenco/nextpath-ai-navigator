import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Анализ навыков",
    description: "AI определяет ваши сильные стороны и точки роста на основе опыта и образования",
  },
  {
    title: "Персональный маршрут",
    description: "Пошаговый план с курсами, практикой и реалистичными сроками",
  },
  {
    title: "Динамическая адаптация",
    description: "План корректируется по мере вашего прогресса и изменения приоритетов",
  },
];

const capabilities = [
  "Определение навыков под целевую профессию",
  "Подбор курсов и материалов",
  "Формирование учебного графика",
  "Подготовка резюме и портфолио",
  "Помощь в прохождении собеседований",
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Возможности
              </a>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Как это работает
              </a>
              <Button variant="outline" size="sm">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm mb-8">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              AI-платформа для карьеры
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6">
              Найди свой<br />
              <span className="text-primary">путь к мечте</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Персональная дорожная карта развития от текущего уровня до работы мечты. 
              На основе ваших данных, целей и возможностей.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => navigate("/onboarding")}
              >
                Начать бесплатно
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="xl" className="text-muted-foreground">
                Узнать больше
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities list */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilities.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Всё для карьерного роста
            </h2>
            <p className="text-muted-foreground text-lg">
              NextPath использует AI для создания вашего уникального плана развития
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-lg font-serif text-primary">0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Как это работает
            </h2>
            <p className="text-muted-foreground text-lg">
              Три простых шага к персональной дорожной карте
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Расскажите о себе",
                description: "Заполните профиль: образование, опыт, навыки и карьерные цели",
              },
              {
                step: "02",
                title: "AI создаёт план",
                description: "Алгоритм анализирует данные и строит оптимальный маршрут развития",
              },
              {
                step: "03",
                title: "Следуйте карте",
                description: "Изучайте материалы, выполняйте задания и отслеживайте прогресс",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-8xl font-serif text-primary/10 leading-none mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Готовы начать?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Создайте персональную дорожную карту и сделайте первый шаг к карьере мечты
            </p>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => navigate("/onboarding")}
            >
              Создать дорожную карту
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="container mx-auto">
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