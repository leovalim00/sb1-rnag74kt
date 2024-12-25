import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Salve <span className="text-blue-600">40h semanais</span> de trabalho manual utilizando Automação com I.A.
          </h1>
          <p className="text-lg text-gray-600">
            Automatize processos, aumente a produtividade e tome decisões mais inteligentes com nossas soluções personalizadas de IA.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
              Começar Agora
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}