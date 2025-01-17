import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Vanliga frågor</h2>
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>Vad är TenFAST fastighetssystem?</AccordionTrigger>
          <AccordionContent>
            TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Är TenFAST webbaserat?</AccordionTrigger>
          <AccordionContent>
            Ja, TenFAST är byggt för webben. Ingen installation krävs, obegränsat antal användare. Använd din dator eller mobilen!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Vad kostar systemet?</AccordionTrigger>
          <AccordionContent>
            Priset är rörligt och baseras på antal hyresobjekt, utan startavgift.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Funkar fastighetssystemet på mobilen?</AccordionTrigger>
          <AccordionContent>
            Ja, TenFAST är byggt för webben och fungerar på alla enheter.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Hur kan fastighetssystemet vara så billigt?</AccordionTrigger>
          <AccordionContent>
            Priset är rörligt och baseras på antal hyresobjekt, utan startavgift.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Varför kan jag använda det gratis?</AccordionTrigger>
          <AccordionContent>
            För privatpersoner och små företag med upp till 5 hyresobjekt är TenFAST gratis.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Vad räknas som ett hyresobjekt?</AccordionTrigger>
          <AccordionContent>
            Ett hyresobjekt är en enhet som hyrs ut, till exempel en lägenhet eller ett kontor.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>Vilka funktioner finns i fastighetsprogrammet?</AccordionTrigger>
          <AccordionContent>
            TenFAST erbjuder en mängd funktioner inklusive avtalskapare, hyresgäst inloggning, bostadskö, bokföring, statistik, felanmälan, automatiska inbetalningar och öppet API.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>Kan jag skapa hyresavtal och signera digitalt?</AccordionTrigger>
          <AccordionContent>
            Ja, med TenFAST kan du skapa och signera hyresavtal digitalt.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>Kan hyresgästen använda det?</AccordionTrigger>
          <AccordionContent>
            Ja, hyresgäster kan logga in och se sina avtal och göra felanmälningar.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger>Indexering av hyra</AccordionTrigger>
          <AccordionContent>
            TenFAST stödjer indexering av hyra.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger>Hur gör jag med mina befintliga hyresavtal?</AccordionTrigger>
          <AccordionContent>
            Du kan importera dina befintliga hyresavtal till TenFAST.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-13">
          <AccordionTrigger>Kan jag få hjälp att komma i gång?</AccordionTrigger>
          <AccordionContent>
            Ja, vi erbjuder support för att hjälpa dig komma i gång med TenFAST.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;