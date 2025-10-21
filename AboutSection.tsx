import { Award, Users, Leaf, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "Clientes Satisfeitos",
    },
    {
      icon: TrendingUp,
      number: "2+",
      label: "Anos de Experiência",
    },
    {
      icon: Award,
      number: "100%",
      label: "Licenciado",
    },
    {
      icon: Leaf,
      number: "0",
      label: "Impacto Ambiental Negativo",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quem Somos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A T.A. Serviços e Locações é uma empresa especializada em aluguel
                de caçambas estacionárias e andaimes em Maricá – RJ. Com mais de 2
                anos de experiência, nos dedicamos a oferecer soluções completas
                para suas obras com qualidade, segurança e responsabilidade
                ambiental.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Por que escolher a T.A. Locações?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Entrega Rápida:</strong> Atendimento no mesmo dia em
                    toda Maricá
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Preço Justo:</strong> Melhor custo-benefício da região
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Licenciado:</strong> 100% de conformidade ambiental
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Profissionalismo:</strong> Equipe treinada e certificada
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm text-gray-700">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 pt-16 border-t">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Qualidade</h4>
              <p className="text-gray-600 text-sm">
                Equipamentos sempre em perfeito estado e manutenção regular
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Segurança</h4>
              <p className="text-gray-600 text-sm">
                Todos os equipamentos certificados e equipe treinada
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sustentabilidade</h4>
              <p className="text-gray-600 text-sm">
                Descarte licenciado e responsabilidade ambiental total
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

