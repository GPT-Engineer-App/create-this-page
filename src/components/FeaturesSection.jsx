const FeaturesSection = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-8">Det här får du med TenFAST</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src="/placeholder.svg" alt="Avtalskapare med mallar" className="mx-auto object-cover w-full h-[100px]" />
          <h3 className="text-xl font-semibold mt-4">Avtalskapare med mallar</h3>
        </div>
        <div>
          <img src="/placeholder.svg" alt="Hyresgäst inloggning" className="mx-auto object-cover w-full h-[100px]" />
          <h3 className="text-xl font-semibold mt-4">Hyresgäst inloggning</h3>
        </div>
        <div>
          <img src="/placeholder.svg" alt="Bostadskö" className="mx-auto object-cover w-full h-[100px]" />
          <h3 className="text-xl font-semibold mt-4">Bostadskö</h3>
        </div>
        <div>
          <img src="/placeholder.svg" alt="Bokföring" className="mx-auto object-cover w-full h-[100px]" />
          <h3 className="text-xl font-semibold mt-4">Bokföring</h3>
        </div>
        <div>
          <img src="/placeholder.svg" alt="Statistik" className="mx-auto object-cover w-full h-[100px]" />
          <h3 className="text-xl font-semibold mt-4">Statistik</h3>
        </div>
        <div>
          <img src="/placeholder.svg" alt="Felanmälan" className="mx-auto object-cover w-full h-[100px]" />
          <h3 className="text-xl font-semibold mt-4">Felanmälan</h3>
        </div>
        <div>
          <img src="/placeholder.svg" alt="Automatiska inbetalningar" className="mx-auto object-cover w-full h-[100px]" />
          <h3 className="text-xl font-semibold mt-4">Automatiska inbetalningar</h3>
        </div>
        <div>
          <img src="/placeholder.svg" alt="Öppet API" className="mx-auto object-cover w-full h-[100px]" />
          <h3 className="text-xl font-semibold mt-4">Öppet API</h3>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;