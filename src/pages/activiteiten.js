import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogTitle, Heading, Paragraph, SubHeading } from "../components/atoms"

const Activiteiten = () => {
  return (
    <Layout activePage="activiteiten">
      <SEO title="Activiteiten" />
      <BlogTitle>Alle Activiteiten</BlogTitle>
      <Paragraph><b>
        Dit is een overzicht van alle activiteiten van mijn portfolio in omgekeerd chronologische volgorde per domein.
        </b></Paragraph>
        <br class="break"/>

      <Heading>Seminaries</Heading>

      <div class="activity-card relative group md:bg-secondary hover:bg-secondary">
      <img src={require("../assets/images/italent/activities/bewire.jpg")}/>
      <SubHeading>Bewire - Technology Thursday: Docker</SubHeading>
      <br/>
      <p className="text-tertiary">
        Een Webinar waarin een medewerker van Bewire een diepe duik maakte in de wereld van Docker en Docker-Compose. We leerden een Docker-file op te bouwen en een eigen Docker container te configureren en op te zetten.
      </p>
      <br/>
      <p><b>Zelf aangebracht</b><br/>
      Locatie: Online<br/>
      Datum: 25 maart 2021, 17:00 - 19:00</p>
      </div>

      <div class="activity-card relative group md:bg-secondary hover:bg-secondary">
      <img src={require("../assets/images/italent/activities/bewire.jpg")}/>
      <SubHeading>Bewire – B-Labs Webinar</SubHeading>
      <br/>
      <p className="text-tertiary">
      Een Webinar waarin het personeel van Bewire sprak over vijf uitdagingen die ze hebben uitgewerkt in kader van werken in een IT-bedrijf. De eindresultaten werden getoond aan de hand van uitgewerkte concepten die een oplossing boden voor de verschillende uitdagingen.
      </p>
      <br/>
      <p><b>Zelf aangebracht</b><br/>
      Locatie: Online<br/>
      Datum: 11 maart 2021,18:00 - 20:00</p>
      </div>

      <div class="activity-card relative group md:bg-secondary hover:bg-secondary">
      <img src={require("../assets/images/italent/activities/tobania.png")}/>
      <SubHeading>Tobania – Dart en Flutter</SubHeading>
      <br/>
      <p className="text-tertiary">
      Een Engelstalig seminarie waarin de krachten van Flutter en zijn programmeertaal Dart aan ons werden voorgesteld. Ik had hier al wel ervaring mee door mijn vakantiewerk, maar het was nog steeds interessant om technische standpunten over het framework vanuit een ander perspectief te kunnen bekijken.
      </p>
      <br/>
      <p>Locatie: Online<br/>
      Datum: 17 december 2020, 09:00 - 12:00</p>
      </div>

      <div class="activity-card relative group md:bg-secondary hover:bg-secondary">
      <img src={require("../assets/images/italent/activities/ericsson.jpg")}/>
      <SubHeading>Ericsson – Op weg naar 5G</SubHeading>
      <br/>
      <p className="text-tertiary">
      Na een interessante geschiedenisles over telefonie en mobiel internet werden we voorgesteld aan 5G. Er werd zeer technisch uitgelegd hoe deze nieuwe technologie zulke snelheden voor elkaar krijgt.
      </p>
      <br/>
      <p>Locatie: Online<br/>
      Datum: 25 november 2020, 09:00 - 12:00</p>
      </div>

      <div class="activity-card relative group md:bg-secondary hover:bg-secondary">
      <img src={require("../assets/images/italent/activities/evance.jpeg")}/>
      <SubHeading>Evance – De wondere wereld van Firebase</SubHeading>
      <br/>
      <p className="text-tertiary">
      Tijdens een presentatie over de mogelijkheden van Firebase werd er via een hands-on approach samen een chatapplicatie uitgewerkt. De voor- en nadelen van Firebase werden besproken binnen verschillende situaties.
      </p>
      <br/>
      <p>Locatie: Hogeschool PXL, B-blok<br/>
      Datum: 25 februari 2020, 09:00 - 12:00</p>
      </div>

      <div class="activity-card relative group md:bg-secondary hover:bg-secondary">
      <img src={require("../assets/images/italent/activities/aca.png")}/>
      <SubHeading>ACA IT-Solutions – Machine Learning</SubHeading>
      <br/>
      <p className="text-tertiary">
      In dit seminarie werd een presentatie gegeven met een inleiding tot machine learning. Na de presentatie zijn we zelf aan de slag gegaan, met behulp van pre-trained modellen van AWS en hun text-to-speech bot werd er een kleine toepassing uitgewerkt.
      </p>
      <br/>
      <p>Locatie: Hogeschool PXL, B-blok<br/>
      Datum: 18 februari 2020, 08:30 - 12:30</p>
      </div>

      <br class="break"/>

      <Heading>Persoonlijke Ontwikkeling</Heading>

      <div class="activity-card relative group md:bg-secondary hover:bg-secondary">
      <img src={require("../assets/images/italent/activities/pxl.png")}/>
      <SubHeading>I-Talent Portfolio</SubHeading>
      <br/>
      <p className="text-tertiary">
      Het verzamelen van bewijsmateriaal en uitschrijven van gepresteerde activiteiten over een periode van het tweede en derde opleidingsjaar in kader van het vak I-Talent.
      </p>
      <br/>
      <p>Periode: 2019 - 2021</p>
      </div>

      <div class="activity-card relative group md:bg-secondary hover:bg-secondary">
      <img src={require("../assets/images/italent/activities/pxl.png")}/>
      <SubHeading>PXL - Projectweek</SubHeading>
      <br/>
      <p className="text-tertiary">
      Een week vol activiteiten in het kader van het succesvol starten van het research project Hierbinnen vielen meerdere activiteiten zoals POP-sessies en de PXL-jobbeurs. De week werd afgesloten met een eindpresentatie in groep.
      </p>
      <br/>
      <p>Locatie: Hogeschool PXL, B-blok, D-blok en Corda Campus<br/>
      Datum: 20 - 24 april 2020</p>
      </div>

      <div class="activity-card relative group md:bg-secondary hover:bg-secondary">
      <img src={require("../assets/images/italent/activities/pxl.png")}/>
      <SubHeading>PXL - POP Sessies</SubHeading>
      <br/>
      <p className="text-tertiary">
      In 3 verschillende sessies werd er gefocust op teamwork, zelfontplooiing en zelfreflectie voor zowel onszelf als voor het projectteam. Dit aan de hand van leuke workshops gevuld met actie.
      </p>
      <br/>
      <p>Locatie: Hogeschool PXL, B-blok en online<br/>
      Datum: 3 maart 2020, 13:00 - 17:00</p>
      </div>

      <br class="break"/>

      <Heading>Innovatie</Heading>

      <div class="activity-card relative group md:bg-secondary hover:bg-secondary">
      <img src={require("../assets/images/italent/activities/ghc.jpg")}/>
      <SubHeading>Hackaton: Google Hash Code</SubHeading>
      <br/>
      <p className="text-tertiary">
      Een internationale programmeerwedstrijd tussen studenten en professionals over de hele wereld. We bouwden een algoritme dat verkeerslichten in een virtuele stad bestuurde. Het doel was om zo snel en zo veel mogelijk virtuele auto’s op hun bestemming te laten arriveren.
      </p>
      <br/>
      <p>Locatie: online<br/>
      Datum: 25 februari 2021, 18:00 - 23:30</p>
      </div>

      <div class="activity-card relative group md:bg-secondary hover:bg-secondary">
      <img src={require("../assets/images/italent/activities/pxl.png")}/>
      <SubHeading>Appwise - Innovatieroute UI/UX</SubHeading>
      <br/>
      <p className="text-tertiary">
      Maar liefst drie dagen werden we door experts meegenomen op avontuur door de wondere wereld van UI en UX. Door vele workshops, creatieve groepsopdrachten en presentaties hebben we veel bijgeleerd over het optimaliseren van UI en UX, binnen verschillende scenario’s.
      </p>
      <br/>
      <p>Locatie: Hogeschool PXL, Corda Campus<br/>
      Datum: 7 oktober 2020 - 9 oktober 2020</p>
      </div>

      <br class="break"/>

      <Heading>Student Engagement</Heading>

      <div class="activity-card relative group md:bg-secondary hover:bg-secondary">
      <img src={require("../assets/images/italent/activities/wd.png")}/>
      <SubHeading>Woolly Development</SubHeading>
      <br/>
      <p className="text-tertiary">
      Woolly Development is een development team dat ik zelf heb opgericht, gespecialiseerd in het ontwikkelen van MC-plugins in Java. Ondertussen telt het team zeven developers. Naast het onderhouden van mijn eigen projecten beheer ik het team van enthousiaste ontwikkelaars en werken we samen, op commissies gebaseerd als freelancers. Ik manage ook onze grote community van gebruikers.
      </p>
      <br/>
      <p><b>Zelf aangebracht</b><br/>
      Datum: Zomer 2019 - heden</p>
      </div>

      <div class="activity-card relative group md:bg-secondary hover:bg-secondary">
      <img src={require("../assets/images/italent/itlicious/it-licious-banner.png")}/>
      <SubHeading>Vakantiewerk: IT Licious</SubHeading>
      <br/>
      <p className="text-tertiary">
      Gedurende een periode van drie maanden heb ik voltijds meegedraaid in een IT-consultancybedrijf. Ik maakte er kennis met nieuwe technologieën en verdiepte mezelf in technologieën die ik al kende tijdens het ontwikkelen van vele verschillende (mobiele) applicaties en API’s.
      </p>
      <br/>
      <p><b>Zelf aangebracht</b><br/>
      Locatie: Sint-Truiden en online<br/>
      Datum: 22 juni 2020 - 18 september 2020, voltijds</p>
      </div>

    </Layout>
  )
}

export default Activiteiten
