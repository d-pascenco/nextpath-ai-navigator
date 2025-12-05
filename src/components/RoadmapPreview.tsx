import { FormCard } from "@/components/FormCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  BookOpen, 
  Briefcase, 
  Award,
  ChevronRight,
  Download,
  Share2,
  Sparkles
} from "lucide-react";

interface RoadmapPreviewProps {
  userData: {
    fullName: string;
    targetProfession: string;
    timeline: string;
  };
}

const roadmapStages = [
  {
    id: 1,
    title: "Основы программирования",
    duration: "4 недели",
    status: "current",
    skills: ["HTML/CSS", "JavaScript Basics", "Git"],
    resources: ["freeCodeCamp", "Codecademy", "YouTube"],
  },
  {
    id: 2,
    title: "Продвинутый JavaScript",
    duration: "6 недель",
    status: "upcoming",
    skills: ["ES6+", "Async/Await", "DOM API"],
    resources: ["JavaScript.info", "Udemy", "MDN"],
  },
  {
    id: 3,
    title: "React.js Разработка",
    duration: "8 недель",
    status: "upcoming",
    skills: ["React Hooks", "State Management", "API Integration"],
    resources: ["React Docs", "Scrimba", "Epic React"],
  },
  {
    id: 4,
    title: "Проектная практика",
    duration: "4 недели",
    status: "upcoming",
    skills: ["Portfolio Project", "Code Review", "Best Practices"],
    resources: ["GitHub", "Frontend Mentor", "CodeWars"],
  },
  {
    id: 5,
    title: "Подготовка к трудоустройству",
    duration: "4 недели",
    status: "upcoming",
    skills: ["Resume", "Interview Prep", "Networking"],
    resources: ["LinkedIn", "Glassdoor", "Mock Interviews"],
  },
];

export const RoadmapPreview = ({ userData }: RoadmapPreviewProps) => {
  const professionLabels: Record<string, string> = {
    frontend: "Frontend Developer",
    backend: "Backend Developer",
    fullstack: "Fullstack Developer",
    "data-scientist": "Data Scientist",
    "ml-engineer": "ML Engineer",
    devops: "DevOps Engineer",
    product: "Product Manager",
    designer: "UX/UI Designer",
    analyst: "Business Analyst",
    qa: "QA Engineer",
  };

  const timelineLabels: Record<string, string> = {
    "3months": "3 месяца",
    "6months": "6 месяцев",
    "1year": "1 год",
    "2years": "2 года",
    flexible: "Гибкий срок",
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Ваша персональная дорожная карта готова!</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Путь к{" "}
          <span className="text-gradient">
            {professionLabels[userData.targetProfession] || userData.targetProfession}
          </span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {userData.fullName}, мы составили для вас индивидуальный план развития на{" "}
          {timelineLabels[userData.timeline] || userData.timeline}
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Clock, label: "Срок", value: timelineLabels[userData.timeline] || "6 месяцев" },
          { icon: BookOpen, label: "Этапов", value: "5 этапов" },
          { icon: Award, label: "Навыков", value: "15+" },
          { icon: Briefcase, label: "Проектов", value: "3 проекта" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-card border border-border shadow-sm text-center"
          >
            <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="text-sm text-muted-foreground">{stat.label}</div>
            <div className="font-semibold text-foreground">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Roadmap timeline */}
      <FormCard title="Ваш план развития">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-6">
            {roadmapStages.map((stage, index) => (
              <div key={stage.id} className="relative pl-14">
                {/* Stage indicator */}
                <div
                  className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    stage.status === "current"
                      ? "gradient-accent text-accent-foreground shadow-lg"
                      : stage.status === "completed"
                      ? "gradient-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {stage.status === "completed" ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : stage.status === "current" ? (
                    <span className="font-bold">{stage.id}</span>
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </div>

                {/* Stage content */}
                <div
                  className={`p-5 rounded-xl border transition-all ${
                    stage.status === "current"
                      ? "bg-accent/5 border-accent/30 shadow-md"
                      : "bg-card border-border hover:border-accent/20"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {stage.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {stage.duration}
                      </div>
                    </div>
                    {stage.status === "current" && (
                      <Badge className="bg-accent text-accent-foreground">
                        Текущий этап
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-medium text-muted-foreground mb-2">
                        Навыки:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stage.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-primary/10 text-primary"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-medium text-muted-foreground mb-2">
                        Рекомендуемые ресурсы:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stage.resources.map((resource) => (
                          <Badge
                            key={resource}
                            variant="outline"
                            className="text-muted-foreground"
                          >
                            {resource}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {stage.status === "current" && (
                    <Button variant="accent" className="mt-4 w-full sm:w-auto">
                      Начать обучение
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FormCard>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg">
          <Download className="w-5 h-5" />
          Скачать план (PDF)
        </Button>
        <Button variant="outline" size="lg">
          <Share2 className="w-5 h-5" />
          Поделиться
        </Button>
      </div>
    </div>
  );
};
