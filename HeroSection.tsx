import { Button } from "@/components/ui/button";
import { COMPANY, BENEFITS, AUDIENCES } from "@shared/const";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const handleQuoteClick = () => {
    const element = document.querySelector("#quote");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Precisando de Caçamba ou Andaime?
              </h1>
              <p className="text-xl text-blue-100 italic">
                "{COMPANY.tagline}"
              </p>
            </div>

            <div className="space-y-2 text-blue-100">
              <p className="flex items-center gap-2">
                <span className="text-2xl">⚡</span> Entrega rápida
              </p>
              <p className="flex items-center gap-2">
                <span className="text-2xl">💰</span> Preço justo
              </p>
              <p className="flex items-center gap-2">
                <span className="text-2xl">♻️</span> Descarte licenciado
              </p>
              <p className="text-sm mt-4">em toda Maricá – RJ</p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-3 gap-4 py-6">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white bg-opacity-10 rounded-lg p-4 text-center"
                >
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <h3 className="font-semibold text-sm">{benefit.title}</h3>
                  <p className="text-xs text-blue-100">{benefit.subtitle}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleQuoteClick}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                size="lg"
              >
                Solicite Seu Orçamento Grátis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                size="lg"
              >
                Ver Nossos Serviços
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block">
            <div className="flex justify-end items-end h-full">
              <img
                src="/truck-hero.png"
                alt="Cami nhão T.A. Locações"
                className="w-96 h-auto object-contain"
              />
            </div>
            <div className="mt-6 space-y-3 text-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                  ✓
                </div>
                <span>Montagem e desmontagem profissional</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                  ✓
                </div>
                <span>Equipamentos certificados e seguros</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                  ✓
                </div>
                <span>Atendimento 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Audiences Section */}
        <div className="mt-12 pt-12 border-t border-blue-400">
          <p className="text-center text-blue-100 mb-6 font-semibold">
            ✅ ATENDEMOS:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {AUDIENCES.map((audience) => (
              <div
                key={audience.label}
                className="bg-white bg-opacity-10 rounded-lg p-4 text-center hover:bg-opacity-20 transition-all"
              >
                <div className="text-3xl mb-2">{audience.emoji}</div>
                <p className="font-semibold text-sm">{audience.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

