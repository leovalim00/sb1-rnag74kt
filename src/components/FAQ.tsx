import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Como a automação com IA pode beneficiar minha empresa?',
    answer: 'A automação com IA pode reduzir custos operacionais, aumentar a eficiência, eliminar erros humanos e liberar sua equipe para focar em tarefas estratégicas. Em média, nossos clientes economizam 40 horas semanais em trabalhos manuais.'
  },
  {
    question: 'Quanto tempo leva para implementar uma solução de IA?',
    answer: 'O tempo de implementação varia de acordo com a complexidade do projeto. Projetos menores podem ser implementados em até 7 dias, enquanto projetos mais complexos podem levar até 14 dias.'
  },
  {
    question: 'É necessário conhecimento técnico para utilizar as soluções?',
    answer: 'Não. Nossas soluções são desenvolvidas pensando na facilidade de uso. Fornecemos treinamento completo e suporte contínuo para sua equipe.'
  },
  {
    question: 'Como é feita a integração com sistemas existentes?',
    answer: 'Nossas soluções são projetadas para integrar perfeitamente com seus sistemas existentes. Realizamos uma análise detalhada da sua infraestrutura atual e desenvolvemos conectores personalizados quando necessário.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600">
            Tire suas dúvidas sobre nossas soluções de IA
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}