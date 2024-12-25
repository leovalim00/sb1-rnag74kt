import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-2xl font-bold">Valim IA</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#services" className="hover:text-blue-400">Serviços</a>
            <a href="#steps" className="hover:text-blue-400">Como Funciona?</a>
            <a href="#contact" className="hover:text-blue-400">Contato</a>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 Valim IA. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}