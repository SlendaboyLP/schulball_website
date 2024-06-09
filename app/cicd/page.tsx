import "./cicd_style.css";
import Section from "./Section";

export default function CICD() {
  return (
    <>
      <Section
        title="Das Logo"
        img="/logo.png"
        text="Das Logo ist das erste Design Element das wir gemacht haben, es zeigt den Roten Teppich, passend zum Thema, und den Schriftzug. Alle Anderen Objekte orientieren sich an dem Logo."
        left={false}
        width={800}
        height={600}
      ></Section>
      <Section
        title="Die Farben"
        img="/colors.png"
        text="Die Farben waren eine der ersten Entscheidungen die wir getroffen haben. Wir haben uns für 5 Hauptfarben entschieden, die sich in den Design Elementen wiederfinden. Die Farben sind: Weiß, Gold, Rot, Dunkelrot und Grau"
        left={true}
        width={800}
        height={560}
      ></Section>
      <Section
        title="Die Schriftarten"
        img="/fonts.png"
        text="Wir haben uns für 2 Schriftarten entschieden, die sich in den Elementen wiederfinden. Die Schriftarten sind: Beverly Drive Right Black, für Überschriften und Franklin Gothic, für Texte und Inhalte."
        left={false}
        width={900}
        height={500}
      ></Section>
      <Section
        title="Design Elemente"
        img="/design.png"
        text="Diese Elemente werden in verschiedenen Kombinationen und Variationen im CICD verwendet. Sie sind so gestaltet, dass sie sich in das Gesamtbild einfügen und die Webseite aufwerten."
        left={true}
        width={600}
        height={600}
      ></Section>
    </>
  );
}
