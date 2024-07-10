import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-blue-900 text-white text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Ett modernt fastighetssystem</h1>
      <p className="text-lg mb-8">
        TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.
      </p>
      <div className="mb-8">
        <p>kontakt@tenfast.se</p>
        <p>08-199 552</p>
      </div>
      <Button className="bg-white text-blue-900">Kom igång</Button>
      <div className="mt-8">
        <img src="/images/hero-image.png" alt="Hero" className="mx-auto object-cover w-full h-[400px]" />
      </div>
    </section>
  );
};

export default HeroSection;