export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/824181d4-9eb4-4a0f-8997-7da046fbc2ae/files/d139be17-a659-4738-94b3-6ff832018816.jpg"
          alt="McDonald's restaurant"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Качество без компромиссов</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight font-bold">
          Свежие ингредиенты, проверенные рецепты и любовь к делу — в каждом бургере, картошке и напитке, который мы подаём.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0"></span>
            <span className="text-neutral-700 text-sm uppercase tracking-wide">Свежее мясо — никаких заморозок</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0"></span>
            <span className="text-neutral-700 text-sm uppercase tracking-wide">Строгий контроль качества</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0"></span>
            <span className="text-neutral-700 text-sm uppercase tracking-wide">Более 1000 ресторанов в России</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 cursor-pointer w-fit uppercase tracking-wide font-bold">
          Наше меню
        </button>
      </div>
    </div>
  );
}