const InformationalSection = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Fastighetssystemet för din verksamhet</h2>
      <p className="text-lg mb-8">
        Program för fastighetsägare, förvaltningsbolag och kommuner mm.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="/placeholder.svg" alt="Webbaserat" className="mx-auto object-cover w-full h-[100px]" />
          <h3 className="text-xl font-semibold mt-4">Webbaserat</h3>
        </div>
        <div>
          <img src="/placeholder.svg" alt="Enkel prissättning" className="mx-auto object-cover w-full h-[100px]" />
          <h3 className="text-xl font-semibold mt-4">Enkel prissättning</h3>
        </div>
        <div>
          <img src="/placeholder.svg" alt="Automatisera din verksamhet" className="mx-auto object-cover w-full h-[100px]" />
          <h3 className="text-xl font-semibold mt-4">Automatisera din verksamhet</h3>
        </div>
        <div>
          <img src="/placeholder.svg" alt="Allt i ett" className="mx-auto object-cover w-full h-[100px]" />
          <h3 className="text-xl font-semibold mt-4">Allt i ett</h3>
        </div>
      </div>
    </section>
  );
};

export default InformationalSection;