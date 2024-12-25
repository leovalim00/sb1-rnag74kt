import React from 'react';
import { ClipboardCheck, Lightbulb, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="w-12 h-12 text-blue-600" />,
    title: 'Diagnóstico Personalizado',
    description: 'Análise detalhada dos seus processos atuais e identificação de oportunidades de automação.'
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
    title: 'Planejamento e Proposta',
    description: 'Desenvolvimento de uma estratégia sob medida com soluções específicas para seu negócio.'
  },
  {
    icon: <Rocket className="w-12 h-12 text-blue-600" />,
    title: 'Implementação',
    description: 'Execução do projeto com acompanhamento contínuo e suporte dedicado.'
  }
];

export default function Steps() {
  return (
    <section id="steps" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Etapas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça nossa metodologia para implementar soluções de IA em seu negócio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}