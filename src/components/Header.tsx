interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-yellow-400 text-xl font-black uppercase tracking-wide">M</div>
        <nav className="flex gap-8">
          <a
            href="#menu"
            className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm"
          >
            Меню
          </a>
          <a
            href="#about"
            className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm"
          >
            О нас
          </a>
          <a
            href="#contact"
            className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm"
          >
            Рестораны
          </a>
        </nav>
      </div>
    </header>
  );
}