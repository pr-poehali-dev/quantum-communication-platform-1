import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/824181d4-9eb4-4a0f-8997-7da046fbc2ae/files/6b68b36b-20fc-4ab2-9b2a-2ba1581121db.jpg"
          alt="McDonald's Big Mac"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4 font-medium">I'm Lovin' It</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none">
          ВКУС,<br />КОТОРЫЙ<br />ОБЪЕДИНЯЕТ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Более 50 лет мы создаём моменты, которые запоминаются — с первого укуса до последней картошки
        </p>
        <button className="mt-8 bg-yellow-400 text-black font-bold px-8 py-3 uppercase tracking-wide text-sm hover:bg-yellow-300 transition-colors duration-300 cursor-pointer">
          Смотреть меню
        </button>
      </div>
    </div>
  );
}