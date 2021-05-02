import React from "react"

import { Blob, BlogTitle, Paragraph } from "../components/atoms"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const IndexPage = () => (
  <Layout activePage="/">
    <SEO />
    <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
      <h1 className="mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-4xl text-primary font-semibold sm:text-left md:text-center lg:text-left">
        Hallo, mijn naam is Oliver.
        <br className="mb-6 lg:hidden" /> Ik ben student full stack developer @ Hogeschool PXL. Welkom op mijn digitale I-talent portfolio.
      </h1>
      <div className="relative">
        <Blob />
        <div className="absolute w-full h-full top-0 flex items-center justify-center">
          <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full overflow-hidden">
            <Image path="cv-foto.png"/>
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
    <BlogTitle>Voorstelling</BlogTitle>
    <br/>
    <Paragraph>
    Mijn naam is Oliver Maenen. Ik ben 22 jaar en woon in Hasselt. Ik volg momenteel een professionele bachelor toegepaste informatica op Hogeschool PXL met afstudeerrichting applicatieontwikkeling en ben dus student full stack developer. Momenteel ben ik als stagiair tewerkgesteld bij Evance, een deelbedrijf van Bewire. Ik werk hier aan een interne app met als hoofddoel werknemers met elkaar in verbinding en dichter bij elkaar te brengen.
    <br/><br/>In mijn vrije tijd spendeer ik veel tijd met mijn vriendin, familie en vrienden. Ik ben geïnteresseerd in voetbal en heb dit zelf ook altijd gespeeld. Verder speel ik af en toe ook wat games op de PC en ben ik regelmatig bezig met eigen projecten. Deze projecten doe ik met veel enthousiasme uit de doeken in dit I-Talent portfolio.
    <br/><br/>Volgens mijn Thalento-rapport, waarvoor ik eind 2019 een uitgebreide test heb afgelegd ben ik in teamverband een ondernemend persoon. Ik kan flexibel en dynamisch tewerk gaan en hanteer naargelang de situatie zowel een detailgerichte, pragmatische als procesgerichte overkoepelende werkwijze. Ik kan binnen een team als extravert persoon spontaan een prominentere rol innemen indien dit nodig is en anderen op de hoogte brengen van mijn visie en ideeën. Ik vind het belangrijk om binnen een project invloed te hebben op de gang van zaken en ben erg ambitieus en af en toe competitief ingesteld. Tijdig beslissingen nemen om de bal aan het rollen te houden is voor mij ook belangrijk. Ik geloof dat ik met deze eigenschappen binnen veel teams kan fungeren als troef.
    <br/><br/><img src={require("../assets/images/italent/thalento.png")}/>
    <br/>Op technisch vlak ben ik vooral thuis in mobile development met Flutter en Java/Kotlin Spring Boot. Flutter is een vernieuwende hybride framework voor het ontwikkelen van mobile apps. Dit is iets dat mij zeer hard aansprak bij het leren van Flutter. Ik ben van mening dat frameworks en programmeertalen constant moeten evolueren om te voldoen aan hedendaagse noden. Ik ben dan ook gemotiveerd om me voortdurend bij te scholen, op deze manier slaag ik erin om altijd mee te blijven met de nieuwste technologieën. 
    <br/><br/>Ik heb, buiten de stage, nog wat werkervaring achter de rug in de IT-sector. In de zomer van 2020 heb ik namelijk drie maanden meegedraaid in een klein IT-consultancybedrijf genaamd IT Licious. Hier heb ik voor verschillende klanten mobiele applicaties met backend erbij ontwikkeld. Dit gebeurde ook in Flutter en Native Android voor de apps en Kotlin Spring Boot voor de backends. Deze ervaring heeft mij in het laatste jaar van mijn studie al een serieuze voorsprong gegeven. Ik beheerste deze technologieën al zeer goed, alsook had ik al wat professionele ervaring voor het werken met ‘echte’ klanten en het opleveren van ‘echte’ producten.
    <br/><br/>Een van mijn uitgelichte activiteiten in dit portfolio is mijn development team ‘Woolly Development’. Ik heb het team opgericht in april 2020. Het team telt ondertussen zeven developers. We specialiseren ons in het maken van extensies/plugins voor het populaire spel Minecraft. Deze activiteit heeft net zoals mijn vakantiewerk bij IT Licious een enorme bijdrage geleverd aan mijn persoonlijke ontwikkeling binnen de IT-branche. In de uitgelichte selectie van mijn activiteiten ga ik dieper in op beide prestaties.
    <br/><br/>Ik ben een ambitieus persoon, na het behalen van mijn diploma in juni 2021, ben ik van plan om te beginnen met werken. Aangezien ik via mijn vakantiewerk en stage al contacten heb kunnen leggen in de consultancywereld zal ik waarschijnlijk zelf ook als consultant aan de slag gaan. Mijn doel in de eerste werkjaren is om zo veel mogelijk ervaring op te doen en vooral mezelf goed te kunnen ontwikkelen zodat ik een ‘complete’ programmeur word. Dan zal ik verdere stappen zetten richting project lead en/of zelfstandige consultant. Ik vind het ook belangrijk dat mijn werkgever hier achter staat en samen met mij mee naar toe werkt. Gelukkig is dit bij al mijn opties wel degelijk het geval. Als langetermijndoel en ultieme droom hoop ik ooit een eigen IT-bedrijf op te starten en jonge programmeurs aan te nemen om hun dezelfde mogelijkheden te bieden die er op dit moment aan mij worden aangeboden.
    </Paragraph>
    <br/>
    <br/>
  </Layout>
)

export default IndexPage
