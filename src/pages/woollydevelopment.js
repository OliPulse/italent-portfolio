import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogTitle, ExtLink, Heading, Paragraph, SubHeading } from "../components/atoms"

const WoollyDevelopment = _ => {
  return (
    <Layout activePage="woollydevelopment">
      <SEO title="Woolly Development" /> 
      <BlogTitle>Woolly Development</BlogTitle>

      <Heading>Inleiding</Heading>
      <Paragraph>
      Woolly Development is een development team dat ik zelf heb opgericht in april 2020. Het team is gespecialiseerd in het ontwikkelen van plugins voor de populaire game Minecraft en is nog steeds zeer actief. Deze ‘activiteit’ loopt dus over een lange periode, en kan worden opgedeeld in meerdere delen. 
      <br/><br/>Voor ik dieper inga op mijn team vertel ik jullie graag eerst wat Minecraft plugins nu eigenlijk precies zijn.
      </Paragraph>

      <Heading>Wat zijn Minecraft plugins?</Heading>
      <Paragraph>
      Minecraft is momenteel het meest populaire spel op aarde. In het basisspel word je gedropt in een oneindig genererende wereld die opgebouwd is uit blokken. Hoe jij jouw tijd opvult in deze wereld is volledig je eigen keuze. De opties zijn, net zoals de wereldgrootte, vrijwel oneindig. Op avontuur gaan, een huis of stad bouwen, vechten met monsters en meer.
      <br/><br/>Je hebt ook de mogelijkheid om de game samen met vrienden te spelen, dit gebeurt op zogenaamde Minecraft servers. Je kan er zelf eentje opzetten voor jezelf en je vrienden of gebruik maken van publieke servers die worden uitgebaat door externe server eigenaars. Er zijn duizenden servers om uit te kiezen, dus hoe weet je op welke je best kan spelen en wat is het verschil tussen al deze servers?
      <br/><br/><img src={require("../assets/images/italent/woollydev/minecraft.png")}/>
      <br/>Dit is waar plugins naar boven komen. Het zijn eigenlijk extensies voor het basisspel, geïnstalleerd op deze servers, waarmee de server eigenaars hun server uniek kunnen maken ten opzichte van de rest. De plugins worden geschreven in Java met behulp van de Spigot API. Sommige plugins kunnen van Minecraft een compleet nieuwe game maken. Zo bestaan er bijvoorbeeld plugins waardoor je in Minecraft een zeer brede waaier van kleine minigames kan spelen of plugins waardoor jouw ervaring in de game net dat tikkeltje specialer of intenser wordt. Specifiekere voorbeelden krijg je te zien in de showcases van mijn eigen plugins.
      <br/><br/><img class="center-image" src={require("../assets/images/italent/woollydev/spigot.png")}/>
      </Paragraph>

      <Heading>Over Woolly Development</Heading>
      <Paragraph>
      Ik ben al sinds de zomer van 2019 bezig met het ontwikkelen van plugins voor Minecraft. Bij het coderen van mijn plugins sta ik erop dat de server eigenaars die mijn plugins gebruiken, zelf nog zeer veel kunnen configureren. Hierdoor kunnen ze ervoor zorgen dat mijn plugins perfect in het plaatje van hun server passen. Deze configuratie verloopt voor hen echter niet altijd van een leien dakje. Daarom heb ik een Discord supportserver gemaakt, waarin ik via chat of calls support bied aan alle gebruikers van mijn plugins. (Discord is een zeer populair chat platform, vergelijkbaar met MS Teams of Slack, voornamelijk voor gamers.)
      <br/><br/>Een vriend van mij, Wouter Blockken, ook een student aan de PXL, is sinds begin 2020 eveneens bezig met het ontwikkelen van plugins. Hij had in die tijd zijn eigen supportserver op Discord. We hebben in april 2020 gekozen om onze krachten te bundelen in een gezamenlijke supportserver, onder de naam Woolly Development. Onderstaand logo hebben we laten designen door een professional.
      <br/><img src={require("../assets/images/italent/woollydev/woolly-development.png")}/>
      <br/>We zijn ondertussen (op vlak van gezamenlijke downloads van alle plugins) uitgegroeid tot een van de grootste teams binnen deze wereld. Het team bestaat momenteel uit zeven developers. Sinds 2021 zijn developers van ons team ook in te huren als freelancers, voor het maken van plugins op maat. Als eigenaar vervul ik momenteel meerdere rollen binnen het team. Ik beheer namelijk onze grote community van gebruikers op Discord, begeleid onze developers bij het werken aan commissies als freelancers en onderhoud en release natuurlijk ook nog steeds mijn eigen plugins en bied support aan de gebruikers.
      <br/><br/>In onderstaande secties geef ik jullie nog iets meer informatie over al deze taken. Ik laat jullie met plezier ook een showcase zien van mijn huidige eigen plugins.
      </Paragraph>

      <Heading>Woolly Development Community</Heading>
      <Paragraph>
      De Woolly Development Discord supportserver bevat momenteel bijna 800 leden. Zoals te zien op onderstaande screenshots blijven we sinds de oprichting steeds stabiel groeien. Tegen het einde van de zomer zal de server normaal over de 1000 leden zitten.
      <br/><br/><img src={require("../assets/images/italent/woollydev/wd-community-1.png")}/>
      <br/><details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        In onderstaande tabel stellen de getallen een wekelijks gemiddelde voor. We hebben dus ongeveer 25 nieuwe leden per week. Ze blijven echter niet allemaal hangen wanneer ze antwoorden hebben op hun vragen:
        </summary>
        <br/><img src={require("../assets/images/italent/woollydev/wd-community-2.png")}/>
      </details>
      <br/>Het onderhouden van een community van dergelijke grootte is niet altijd evident. Af en toe krijgen we te maken met de ‘dark side’ van het internet. De server is al eens slachtoffer geweest van een aanval van spambots, gelukkig hadden we de nodige verificatie voorzien om dit zonder problemen af te kunnen weren.
      <br/><br/>Na de forse groei van ons team was het ook een uitdaging om de server overzichtelijk te houden, omdat er support werd gevraagd voor zo veel verschillende plugins. Hiervoor zijn we overgeschakeld naar een rollensysteem. Elke rol is gekoppeld aan een plugin, waarbij nieuwe leden zelf hun rollen kunnen kiezen. Aan de hand van die rollen zien ze dan enkel de toebehorende supportkanalen voor die rol/plugin. 
      <br/><br/><details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        In onderstaande screenshot zie je nogmaals het aantal leden en enkele leden met hun toegewezen rollen:
        </summary>
        <br/><img src={require("../assets/images/italent/woollydev/wd-community-3.png")}/>
      </details>
      <br/>Als we deze getallen vergelijken met de downloads van onze plugins, merken we dat slechts een fractie van de gebruikers van onze plugins in de supportserver om hulp komt vragen. Ook blijft niet iedereen die om support komt vragen in de server, er erna ook in.
      <br/><br/><details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        Op onderstaande screenshot is te zien dat we sinds de start meer dan 2000 mensen hebben ontvangen, een groot deel daarvan zal ook support hebben gevraagd bij het configureren van een plugin (‘OliPulse’ is mijn bijnaam):
        </summary>
        <br/><img src={require("../assets/images/italent/woollydev/wd-community-4.png")}/>
      </details>
      <br/>We hebben ook een Patreon page opgericht. Hierop kunnen gebruikers ons sponsoren, in ruil daarvoor krijgen ze een hoop verschillende ‘perks’/voordelen en beloningen. Een van onze meest gegeerde beloningen is het ontvangen van een maandelijkse mini-plugin, die enkel onze Patrons (mensen die ons steunen op Patreon) krijgen. Deze worden maandelijks afwisselend door een developer van het team ontwikkeld. Ik ga hier niet alle specifieke mini-plugins/voordelen bespreken, je kan 
      de <ExtLink link="https://www.patreon.com/woollydevelopment">Patreon-pagina</ExtLink> bezoeken.
      Hier staat een overzicht van alle voordelen en alle mini-plugins die we voor onze Patrons hebben gemaakt. Om sommige voordelen waar te maken zijn we sinds december 2020 officieel partner van een server/website hosting bedrijf RAMShard. Je zal ons op 
      hun <ExtLink link="https://ramshard.com/company/partners">website</ExtLink> tussen de partners terugvinden.
      <br/><br/><img src={require("../assets/images/italent/woollydev/wd-community-5.png")}/>
      </Paragraph>
      
      <Heading>Freelance werk</Heading>
      <Paragraph>
      Een volgende activiteit die ik doe binnen Woolly Development is het behandelen van commissies. Ons team kan door server eigenaars worden ingehuurd om plugins op maat te laten maken. Wanneer dit soort plugins af zijn, zijn ze dan ook uniek en enkel te vinden op de server van de klant. Zo krijgen de klanten niet enkel precies wat ze willen, het geeft hun ook een nieuwe en unieke troef om nieuwe spelers mee aan te trekken.
      <br/><br/>Voor grote projecten werken we op een agile manier. De plugin wordt opgedeeld in verschillende stages, die dan telkens opgeleverd kunnen worden aan de klant. Zo zijn we er zeker van dat het product precies is zoals de klant het voor ogen heeft en dat hij dus tevreden zal zijn. Hieronder is een screenshot te zien van uit onze services informatie post, met onze volledige werkwijze.
      <br/><br/><img src={require("../assets/images/italent/woollydev/wd-freelance-1.png")}/>
      <br/>Ik doe zelf ook freelance werk bij enkele vaste klanten, maar ben dit jaar vooral bezig met het begeleiden van projecten die worden opgenomen door de andere developers. Ik stel de requirements op, maak inschattingen voor de prijs, ben voortdurend in contact met de klant en volg de projecten precies op aan de hand van een Trello. 
      <br/><br/><details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        Dit Trello-bord is te zien op onderstaande screenshot:
        </summary>
        <br/><img src={require("../assets/images/italent/woollydev/wd-freelance-2.png")}/>
      </details>
      <details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
      Onze klanten zijn altijd zeer tevreden over onze services, we hebben enkele getuigenissen van tevreden klanten hieronder op een rijtje gezet:
        </summary>
      <br/><img src={require("../assets/images/italent/woollydev/wd-freelance-3.png")}/>
      </details>
      </Paragraph>

      <Heading>Mijn plugins</Heading>
      <Paragraph>
      In deze sectie laat ik jullie graag kennis maken met mijn huidige plugins. In onderstaande screenshot is een overzicht te zien van al onze plugins, van iedereen in het team. De bovenste vier plugins zijn van mij. Wanneer het sterretje voor een plugin ingekleurd is, wil dit zeggen dat deze plugin betalend is. Alle art voor mijn plugins heb ik zelf gemaakt in Adobe Photoshop.
      <br/><br/><img src={require("../assets/images/italent/woollydev/wd-all-plugins.png")}/>
      </Paragraph>

      <br/>

      <ExtLink link="https://www.spigotmc.org/resources/meteoritespro.72092/">
        <SubHeading>1. MeteoritesPro</SubHeading>
        <Paragraph>(Klik hier om de pluginpagina te bezoeken)</Paragraph>
        </ExtLink>
        <Paragraph>
        <br/><img src={require("../assets/images/italent/woollydev/mp/mp-banner.png")}/>
        <br/>MeteoritesPro is de eerste gratis plugin die ik uitgebracht heb. De plugin zorgt ervoor dat er random meteorieten uit de lucht kunnen vallen. In het centrum van de gevallen meteoriet is een kist met schatten te vinden, die wordt bewaakt door een sterk monster. Alle aspecten van deze plugin zijn helemaal aanpasbaar naar eigen wens.
        <br/><br/><img class="center-image" src={require("../assets/images/italent/woollydev/mp/mp.gif")}/>
        <br/><details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        Hieronder vind je enkele foto’s en GIF's van op de plugin pagina:
        </summary>
      <br/><img src={require("../assets/images/italent/woollydev/mp/mp-features.png")}/>
      <br/><img src={require("../assets/images/italent/woollydev/mp/mp-1.png")}/>
      <br/><img src={require("../assets/images/italent/woollydev/mp/mp-2.png")}/>
      <br/><img class="half-image" src={require("../assets/images/italent/woollydev/mp/mp-1.gif")}/>
      <img class="half-image" src={require("../assets/images/italent/woollydev/mp/mp-2.gif")}/>
      </details>
      <br/>De plugin is een gigantisch succes. Gecombineerd over de twee websites waar je hem kan downloaden heeft MeteoritesPro <b class="text-xl">16.000 downloads</b> en uitsluitend 5-star reviews.
      <div class="break"/>
      <br/><img class="half-image" src={require("../assets/images/italent/woollydev/mp/mp-downloads-1.png")}/>
      <img class="half-image" src={require("../assets/images/italent/woollydev/mp/mp-downloads-2.png")}/>
      <div class="break"/>
      </Paragraph>
      
      <br/>

      <ExtLink link="https://www.spigotmc.org/resources/beehivespro.73538/">
        <SubHeading>2. BeehivesPro</SubHeading>
        <Paragraph>(Klik hier om de pluginpagina te bezoeken)</Paragraph>
        </ExtLink>
        <Paragraph>
        <br/><img src={require("../assets/images/italent/woollydev/bp/bp-banner.png")}/>
        <br/>Mijn tweede gratis plugin, BeehivesPro, is een plugin waarmee spelers hun bijen en bijenkorven kunnen benoemen, upgraden en er daarna meer nut uit kunnen halen. 
        
        <br/><br/><img class="center-image" src={require("../assets/images/italent/woollydev/bp/bp.gif")}/>
        <br/><details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        Hieronder vind je een foto van alle features van op de plugin pagina:
        </summary>
      <br/><img src={require("../assets/images/italent/woollydev/bp/bp-features.png")}/>
      </details>
      <br/>Gecombineerd over de twee websites waar je BeehivesPro kan downloaden, heeft de plugin meer dan <b>4.500 downloads</b> en uitsluitend 5-star reviews.
      <div class="break"/>
      <br/><img class="half-image" src={require("../assets/images/italent/woollydev/bp/bp-downloads-1.png")}/>
      <img class="center-image" src={require("../assets/images/italent/woollydev/bp/bee2.gif")}/>
      <img class="half-image" src={require("../assets/images/italent/woollydev/bp/bp-downloads-2.png")}/>
      <img src={require("../assets/images/italent/woollydev/bp/bee3.gif")}/> 
      <div class="break"/>
      </Paragraph>

      <br/>

      <ExtLink link="https://www.spigotmc.org/resources/deathtotems.75342/">
        <SubHeading>3. DeathTotems</SubHeading>
        <Paragraph>(Klik hier om de pluginpagina te bezoeken)</Paragraph>
        </ExtLink>
        <Paragraph>
        <br/><img src={require("../assets/images/italent/woollydev/dt/dt-banner.png")}/>
        <br/>Mijn derde gratis plugin DeathTotems is een iets kleinere plugin. Deze plugin is eigenlijk gemaakt als commissie voor een server. Na de afloop van het project was de klant zo vriendelijk om mij de plugin publiek te laten releasen. DeathTotems zorgt ervoor dat wanneer je doodgaat in het spel, je op een makkelijke manier je spullen terug kan krijgen door het betalen van in-game-geld.  
        <br/><br/><img class="center-image" src={require("../assets/images/italent/woollydev/dt/dt-1.gif")}/>
        <br/><details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        Hieronder vind je nog wat meer sfeervolle GIF's van op de plugin pagina:
        </summary>
      <br/><img src={require("../assets/images/italent/woollydev/dt/dt-2.gif")}/>
      <br/><img src={require("../assets/images/italent/woollydev/dt/dt-3.gif")}/>
      </details>
      <br/>Gecombineerd over de twee websites waar je DeathTotems kan downloaden, heeft de plugin meer dan <b>2.000 downloads</b> en bijna uitsluitend 5-star reviews.
      <div class="break"/>
      <br/><img class="half-image" src={require("../assets/images/italent/woollydev/dt/dt-downloads-1.png")}/>
      <img class="half-image" src={require("../assets/images/italent/woollydev/dt/dt-downloads-2.png")}/>
      <div class="break"/>
      </Paragraph>

      <br/>

      <ExtLink link="https://songoda.com/marketplace/product/rainbowspro-the-ultimate-rainbow-plugin-make-your-server-stand-out.349">
        <SubHeading>4. RainbowsPro</SubHeading>
        <Paragraph>(Klik hier om de pluginpagina te bezoeken)
          <br/>(Dit is een link naar een ander platform dan bij de vorige plugins, omdat je op Spigot een account nodig hebt om betalende plugins te kunnen bekijken)
          </Paragraph>
        </ExtLink>
        <Paragraph>
        <br/><img src={require("../assets/images/italent/woollydev/rp/rp-banner.png")}/>
        <br/>De meest recente plugin die ik heb uitgebracht is de betalende plugin RainbowsPro. Zoals de naam zelf al verraad draait alles in deze plugin rond regenbogen. Je kan ze gewoon ergens neerzetten ter versiering of je kan ze at random tevoorschijn laten komen. Er zal dan ook een mannetje aan de onderkant van de regenboog staan, wanneer spelers met dit mannetje interageren, geeft hij hen een kaart die leidt naar een begraven schatkist. Het meest impressionante aan deze plugin is dat letterlijk alles in deze plugin geconfigureerd kan worden zoals je het wil en dat er een enorm brede waaier aan default configuratie al gebeurd is. Zo bevat de plugin al meer dan 180(!) speciale regenbogen, die elk een uniek mannetje hebben, die op hun beurt elk zullen wijzen naar schatkisten met vele unieke spullen in en dit per regenboog.
        <br/><br/><img class="center-image" src={require("../assets/images/italent/woollydev/rp/rp-1.gif")}/>
        <br/><details class="p-3 relative group md:bg-secondary hover:bg-secondary">
        <summary class="group-hover:text-accent">
        Hieronder vind je enkele foto’s en GIF's van op de plugin pagina:
        </summary>
      <br/><img src={require("../assets/images/italent/woollydev/rp/rp-features.png")}/>
      <br/><img src={require("../assets/images/italent/woollydev/rp/rp-2.gif")}/>
      <br/><img src={require("../assets/images/italent/woollydev/rp/rp-2.png")}/>
      <br/><img src={require("../assets/images/italent/woollydev/rp/rp-3.gif")}/>
      <br/><img src={require("../assets/images/italent/woollydev/rp/rp-1.png")}/>
      <br/><img src={require("../assets/images/italent/woollydev/rp/rp-4.gif")}/>
      <br/><img src={require("../assets/images/italent/woollydev/rp/rp-3.png")}/>
      </details>
      <br/>Gecombineerd over de twee websites waar je RainbowsPro kan kopen en vervolgens downloaden, heeft de plugin <b>138 downloads/kopers</b> en uitsluitend 5-star reviews.
      <div class="break"/>
      <br/><img class="half-image" src={require("../assets/images/italent/woollydev/rp/rp-downloads-1.png")}/>
      <img class="half-image" src={require("../assets/images/italent/woollydev/rp/rp-downloads-2.png")}/>
      <div class="break"/>
      </Paragraph>

      <br/>

      <SubHeading>5. JetpacksPro</SubHeading>
      <Paragraph>
      De laatste maanden ben ik bezig met het ontwikkelen van mijn volgende betalende plugin. Hij is nog niet uit en wil verdere informatie dan ook nog geheimhouden. Toch licht ik hier al een tipje van de sluier op met de naam en het logo.
      <br/><br/><img src={require("../assets/images/italent/woollydev/jp/jp-logo.png")}/>
      </Paragraph>

      <br/>
      
      <Heading>Reflectie Woolly Development</Heading>
      <Paragraph>
      Ondanks dat deze activiteit nog ‘actief’ is, kan ik wel al reflecteren over het lange pad dat ik tot nu toe heb afgelegd binnen Woolly Development.
      <br/><br/>Ik geloof dat dit team mij enorm vooruit heeft geholpen met mijn persoonlijke ontwikkeling als IT-professional. Het heeft me de kans gegeven om mijn werk om te zetten in een project waar ik trots op ben en met enorm veel plezier tijd in kan steken.
      <br/><br/>Op ondernemend vlak heeft het freelance gedeelte van Woolly Development me geholpen om al eens geconfronteerd te worden met klanten van over de hele wereld. Dit is het domein waar de meeste frustraties naar boven zijn gekomen, vooral wanneer klanten zonder enige reden plots afhaken. Over de jaren heb ik hier wel afstand van kunnen nemen en geleerd hoe ik hiermee kan omgaan. Verder heeft het afhandelen van commissies in team mij ook veel bijgeleerd over hoe ik moet om gaan met mensen die ‘voor jou’ werken. Ik geloof dat ik dit altijd op een goede manier heb aangepakt, desondanks ben ik er wel zeker van dat ik veel heb bijgeleerd over hoe ik moet omgaan met verschillende karakters van mensen die voor je werken.
      <br/><br/>Het onderhouden van de Woolly Development community is iets waar ik voor de start van dit team ook al mee bezig was. Maar deze community zal binnenkort een grotere omvang hebben dan de andere community’s waar ik aan het hoofd heb gestaan. Ik neem hier vooral uit mee dat je duidelijke afspraken moet vastleggen, voorbereid moet zijn op de ‘dark side’ van het internet en consequent moet zijn. Op deze manier vertrouwen de leden erop dat ik altijd handel in het voordeel van iedereen.
      <br/><br/>Woolly Development is nu een deel van mijn leven. De ervaringen die ik heb opgedaan binnen dit lopende avontuur zal ik nog lange tijd met mij meedragen. Ze zullen zeker van pas komen bij mijn carrièrestart als IT-professional.
      <br/><br/><img src={require("../assets/images/italent/woollydev/woolly-development-banner.png")}/>
      </Paragraph>

    </Layout>
  )
}

export default WoollyDevelopment
