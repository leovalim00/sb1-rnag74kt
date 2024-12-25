import React from 'react';
import { Bot, BrainCircuit, Cpu, Phone } from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-12 h-12 text-blue-600" />,
    title: 'Agentes IA',
    description: 'Automatize o atendimento ao cliente com agentes IA avançados.'
  },
  {
    icon: <BrainCircuit className="w-12 h-12 text-blue-600" />,
    title: 'Automação de Processos',
    description: 'Otimize suas operações com automação inteligente de processos.'
  },
  {
    icon: <Phone className="w-12 h-12 text-blue-600" />,
    title: 'IA de Ligação',
    description: 'Crie agentes IA realista para engajar com os seus leads por chamadas telefônicas inbound e outbound.'
  },
  {
    icon: <Cpu className="w-12 h-12 text-blue-600" />,
    title: 'Soluções Customizadas',
    description: 'Desenvolva soluções de IA personalizadas para seu negócio.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em automação e inteligência artificial para impulsionar seu negócio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}