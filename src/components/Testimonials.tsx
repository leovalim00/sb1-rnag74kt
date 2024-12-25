import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'João Silva',
    role: 'CEO, TechSolutions',
    content: 'A automação implementada pela Valim IA revolucionou nosso atendimento ao cliente. Reduzimos o tempo de resposta em 80% e aumentamos a satisfação dos clientes.',
    stars: 5
  },
  {
    name: 'Maria Santos',
    role: 'Diretora de Operações, LogisticaPro',
    content: 'Os agentes de IA para ligações nos ajudaram a qualificar leads de forma muito mais eficiente. O ROI foi impressionante já no primeiro mês.',
    stars: 5
  },
  {
    name: 'Pedro Costa',
    role: 'Gerente de TI, InovaTech',
    content: 'A implementação foi suave e o suporte excepcional. Os resultados superaram nossas expectativas, com automação de processos que antes consumiam dias.',
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Depoimentos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nossas soluções
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}