import { COMPANY } from "@shared/const";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
                TA
              </div>
              <div>
                <h3 className="font-bold">{COMPANY.name}</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{COMPANY.description}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Aluguel de Caçambas
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Aluguel de Andaimes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Descarte Licenciado
                </a>
              </li>
              <li>
                <a href="#quote" className="hover:text-white transition-colors">
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">{COMPANY.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-blue-400" />
                <a
                  href={`https://instagram.com/${COMPANY.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {COMPANY.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} {COMPANY.name}. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-400 italic">
              "{COMPANY.tagline}"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

