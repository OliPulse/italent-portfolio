import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogTitle, ExtLink, Heading, Paragraph } from "../components/atoms"

const ItLicious = _ => {
  return (
    <Layout activePage="itlicious">
      <SEO title="IT Licious" /> 
      <BlogTitle>Vakantiewerk IT Licious</BlogTitle>

      <Heading>Inleiding</Heading>
      <Paragraph>
      Ik was al langer zeker dat ik tijdens de grote vakantie van 2020 absoluut aan de slag wou als jobstudent in een echt IT-bedrijf. Door de coronapandemie werd dit echter een iets lastigere klus dan voorzien. Ik heb tientallen bedrijven gecontacteerd via mail, telefoon of LinkedIn. Ik kreeg overal hetzelfde antwoord: “We nemen dit jaar geen jobstudenten omwille van Covid”. Gelukkig kwam ik uiteindelijk toch terecht bij IT Licious, een IT-consultancy bedrijf gerund door Jo Vandereyt. Ik heb er fulltime gewerkt gedurende een periode van drie maanden, van eind juni tot eind september 2020.
      <br/><br/><img src={require("../assets/images/italent/itlicious/it-licious-banner.png")}/>
      <br/>Tijdens deze periode heb ik aan verschillende projecten gewerkt en kennis gemaakt met nieuwe technologieën. Ik stel hieronder alle projecten voor in chronologische volgorde. Een belangrijke opmerking hierbij is dat alle applicaties/concepten die ik showcase auteursgerechtelijk beschermd zijn.
      <br/><br/>
      <details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
          Een overzicht van alle projecten (behalve project ‘God’) in GitLab:
        </summary>
        <br/><img src={require("../assets/images/italent/itlicious/it-licious-projects.png")}/>
      </details>
      </Paragraph>

      <Heading>AbroadConnect App</Heading>
      <Paragraph>
      Dit is de eerste opdracht waaraan ik moest werken bij IT Licious. AbroadConnect is een mobiele applicatie die boeren of andere werkgevers gemakkelijk in contact brengt met de juiste seizoenswerkers. De applicatie is gemaakt in Flutter met een backend in Kotlin Spring Boot. Met Spring Boot had ik al ervaring, maar de taal Kotlin was nieuw, net zoals het Flutter framework en zijn taal Dart.
      <br/><br/>De applicatie bevat ook een verdienmodel voor de eigenaars. Er kan maar beperkt gecommuniceerd worden met de seizoenswerkers, met op voorhand ingestelde berichten. Op die manier kunnen de werkgevers erachter komen of de seizoenswerker voor hen geschikt is. Om de volledige contactgegevens vrij te spelen wordt er met credits (een betaalmiddel binnen de app) gewerkt. Dit betalingssysteem was ook iets nieuw voor mij om te implementeren. Hieronder enkele screenshots uit de applicatie.
      <br/><br/><details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
          Een overzicht van de seizoenswerkers met uitgebreide filters:
          </summary>
        <br class="break"/><img class="half-image" src={require("../assets/images/italent/itlicious/abroadconnect/ac-1.jpg")}/>
        <img class="half-image" src={require("../assets/images/italent/itlicious/abroadconnect/ac-2.jpg")}/>
      </details>
      <details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        Het eigen profiel met de mogelijkheid om credits te kopen (waarmee dan later contactinformatie van seizoenswerkers gekocht kan worden):
        </summary>
        <br class="break"/><br/>
      <br class="break"/><img class="third-image" src={require("../assets/images/italent/itlicious/abroadconnect/ac-3.jpg")}/>
      <img class="third-image" src={require("../assets/images/italent/itlicious/abroadconnect/ac-4.jpg")}/>
      <img class="third-image" src={require("../assets/images/italent/itlicious/abroadconnect/ac-5.jpg")}/>
      </details>
      </Paragraph>

      <Heading>Deccopyr Pot App</Heading>
      <Paragraph>
      Deccopyr is een bedrijf dat speciale rookkaarsen aan fruitboeren verkoopt. De rook die uit deze kaarsen komt, heeft namelijk een positief effect op de houdbaarheid van het fruit. Er is echter een zeer complex proces dat moet worden opgevolgd bij het gebruiken van deze kaarsen, anders vervalt de garantie. Om de boeren te helpen bij dit proces en bij te houden wie het proces juist heeft opgevolgd ontwikkelde we de Deccopyr Pot applicatie. Deze applicatie is ook gemaakt in Flutter met een backend in Kotlin Spring Boot.
      <br/><br/><img src={require("../assets/images/italent/itlicious/deccopyr/deccopyr-pot.png")}/>
      <br/><br/><details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        Zoals te zien in onderstaande screenshot is de applicatie voor iedereen te downloaden in de Play- en Appstore. Het logo van de applicatie en bovenstaande banner heb ik ook zelf gemaakt in Adobe Photoshop. Naast de screenshot van de Playstore staat een screenshot van het login scherm:
        </summary>
        <br class="break"/><img class="half-image" src={require("../assets/images/italent/itlicious/deccopyr/dp-1.png")}/>
        <img class="half-image" src={require("../assets/images/italent/itlicious/deccopyr/dp-2.png")}/>
      </details>
      <details class="p-3   relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        Hieronder zijn drie screenshots te zien uit het startproces van nieuwe kaarsen. Dit is een redelijk complex proces met zeven stappen. De kaarsen worden gescand via een QR-code, zo kan elke kaars ook maar één keer worden gebruikt. Op de laatste stap wordt er een handtekening van de gebruiker opgeslagen. Zo weet Deccopyr zeker dat de klant akkoord gaat met de voorwaarden:
        </summary>
        <br class="break"/><img class="third-image" src={require("../assets/images/italent/itlicious/deccopyr/dp-3.png")}/>
        <img class="third-image" src={require("../assets/images/italent/itlicious/deccopyr/dp-4.png")}/>
        <img class="third-image" src={require("../assets/images/italent/itlicious/deccopyr/dp-5.png")}/>
      </details>
      </Paragraph>

      <Heading>Project ‘God’</Heading>
      <Paragraph>
      Een van de grootste en meest complexe projecten die ik vervulde tijdens het vakantiewerk is het project ‘God’. Dit is een backend API geschreven in Kotlin Spring Boot. Jammer genoeg staat dit project onder NDA en mag er dus absoluut niets over worden onthuld. 
      <br/><br/><details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        Als bewijsstuk van deze activiteit heeft Jo, de zaakvoerder van IT Licious, een attest opgemaakt, dat hieronder te lezen is:
        </summary>
        <br/><img src={require("../assets/images/italent/itlicious/god/god.png")}/>
      </details>
      </Paragraph>

      <Heading>Car-TCO Backend API</Heading>
      <Paragraph>
      Deze API is bedoeld voor de interne applicatie van IT Licious en heeft als functie te berekenen hoe groot de maandelijkse kost zal zijn voor een bepaalde wagen, aan de hand van een reeks variabelen. Dit noemt men de TCO van de wagen. De API is geïnspireerd door 
      de <ExtLink link="https://www.milieuvriendelijkevoertuigen.be/sites/default/files/tco-tool/">TCO-tool van de overheid</ExtLink>. Echter heeft deze tool veel variabelen die voor IT Licious niet nodig zijn, en er dus uit gehaald zijn. Desondanks blijft het toch een zeer pittige wiskundige berekening.
      <br/><br/><details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        Aangezien er nog geen frontend toepassing is van dit project en het dus enkel een backend is, toon ik enkele screenshots van de TCO-tool van de overheid. Alles in deze tool kan met deze Car-TCO backend van IT Licious ook worden gerealiseerd:
        </summary>
        <br/><img src={require("../assets/images/italent/itlicious/tco/tco-1.png")}/>
        <img src={require("../assets/images/italent/itlicious/tco/tco-2.png")}/>
        <img src={require("../assets/images/italent/itlicious/tco/tco-3.png")}/>
      </details>
      </Paragraph>

      <Heading>Telenet Matuvu App</Heading>
      <Paragraph>
      Dit was het laatste project waaraan ik in mijn periode bij IT Licious aan heb gewerkt. Het was een frontend project, een mobiele applicatie voor het sales team van Telenet. De applicatie maakt gebruik van AR (augmented reality) om via de camera van de smartphone aan de sales medewerkers van Telenet te tonen waar potentiële of huidige klanten zich bevinden. Er is ook te zien wat hun status is, of ze hier een afspraak hebben, en er is de mogelijkheid om hen te bellen of een afspraak in te plannen. Met behulp van deze app zal hun alledaags werk een stuk gemakkelijker worden, en zal er veel papierwerk worden uitgespaard. Deze applicatie is gemaakt in native Android in Android Studio. Dat was voor mij toen een nieuw framework om mee te werken. Ik kreeg van Jo gelukkig de tijd om mij enkele dagen bij te scholen over deze nieuwe technologie. In het derde jaar van de opleiding aan Hogeschool PXL bleek dit ook een nieuw framework te zijn binnen het vak ‘Mobile Development’. Ik had hier, door mijn ervaring tijdens het vakantiewerk, dus al een mooi stapje voor.
      <br/><br/><img src={require("../assets/images/italent/itlicious/matuvu/telenet.png")}/>
      <br/><br/><details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        Het login scherm, gevolgd door de AR in actie. Zoals je op de screenshot kan zien worden (ex) klanten weergegeven, er kan ook op gefilterd worden:
        </summary>
        <br class="break"/><img class="third-image" src={require("../assets/images/italent/itlicious/matuvu/matuvu-1.png")}/>
        <img class="third-image" src={require("../assets/images/italent/itlicious/matuvu/matuvu-2.png")}/>
        <img class="third-image" src={require("../assets/images/italent/itlicious/matuvu/matuvu-3.png")}/>
      </details>
      <details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        Wanneer er op een klant wordt gedrukt krijg je de mogelijkheid om ze te bellen of om een afspraak/bezoek te plannen. Na een telefoongesprek wordt er aan de gebruiker van de app nog wat info gevraagd, bijvoorbeeld of het gesprek succesvol is verlopen of niet:
        </summary>
        <br class="break"/><img class="third-image" src={require("../assets/images/italent/itlicious/matuvu/matuvu-4.png")}/>
        <img class="third-image" src={require("../assets/images/italent/itlicious/matuvu/matuvu-5.png")}/>
        <img class="third-image" src={require("../assets/images/italent/itlicious/matuvu/matuvu-6.png")}/>
      </details>
      </Paragraph>

      <Heading>Reflectie Vakantiewerk IT Licious</Heading>
      <Paragraph>
      Ik ben enorm blij dat ik de kans kreeg om tijdens de grote vakantie niet alleen een beetje bij te verdienen, maar ook om mee te kunnen draaien in een echt IT-bedrijf. Het was voor mij een nieuwe ervaring, die zowel op technisch als op persoonlijk ontwikkelingsvlak enorm van pas is gekomen in het laatste jaar van mijn opleiding. Tijdens het IT-project was het voor mij bijvoorbeeld niet de eerste keer dat ik in aanraking kwam met een ‘echte’ klant, dit heeft de klant toen zelfs opgemerkt.
      <br/><br/>Tijdens sommige vakken, zoals ‘mobile development’ was de materie voor mij al zo goed als 100% herhaling. Dit komt omdat ik al eerder een complexe app had gemaakt in Android Studio. Ook de vele apps die ik tijdens het vakantiewerk in Flutter heb ontwikkeld komen van pas. Ik ben momenteel stagiair bij Bewire, waar ik werk aan hun interne applicatie, die ook in Flutter is gemaakt. Ik leerde tijdens het vakantiewerk eveneens een nieuwe backend programmeertaal, namelijk Kotlin. Deze taal is de laatste jaren fors aan het groeien, dus ik ben zeker dat deze ook nog van pas zal komen in mijn verdere carrière.
      <br/><br/>Natuurlijk is het ook zeer mooi dat ik contacten heb kunnen leggen in de IT-wereld. Jo Vandereyt, de zaakvoerder van IT Licious, was zeer tevreden over de maanden dat ik bij hem heb gewerkt. We hebben nog steeds op regelmatige basis contact, misschien levert deze activiteit mij mijn eerste job op wanneer ik afstudeer in juni.
      <br/><br/>Kortom was dit vakantiewerk een ontzettend groot succes. Alle persoonlijke en professionele vaardigheden die ik heb ontwikkeld tijdens deze activiteit zal ik nog jaren met mij meedragen. Ze zullen samen met de gelegde contacten gegarandeerd een uitermate positief effect hebben op mijn verdere carrière in de IT-wereld.
      <br/><br/><img src={require("../assets/images/italent/itlicious/it-licious.jpeg")}/>
      </Paragraph>

    </Layout>
  )
}

export default ItLicious
