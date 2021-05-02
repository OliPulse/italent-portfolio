import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogTitle, Paragraph } from "../components/atoms"

const Selectie = () => {
  return (
    <Layout activePage="selectie">
      <SEO title="Selectie" />
      <BlogTitle>Selectie Activiteiten</BlogTitle>
      <Paragraph>
        <b>
        Een overzicht van mijn selectie van activiteiten.
        <br/>Klik op een activiteit om naar de detail pagina te gaan.
        </b>
        </Paragraph>
      <br/>
      <div class="selected-activity-card text-center relative group md:bg-secondary hover:bg-secondary">
      <a href="/woollydevelopment">
      <h3 className="text-3xl mb-3 font-semibold text-primary group-hover:text-accent">
        Woolly Development
      </h3>
      <img src={require("../assets/images/italent/woollydev/woolly-development-banner.png")}/>
      </a>
      </div>
      <div class="selected-activity-card text-center relative group md:bg-secondary hover:bg-secondary">
      <a href="/itlicious">
      <h3 className="text-3xl mb-3 font-semibold text-primary group-hover:text-accent">
        Vakantiewerk IT Licious
      </h3>
      <img src={require("../assets/images/italent/itlicious/it-licious.jpeg")}/>
      </a>
      </div>
      <div class="selected-activity-card text-center relative group md:bg-secondary hover:bg-secondary">
      <a href="/googlehashcode">
      <h3 className="text-3xl mb-3 font-semibold text-primary group-hover:text-accent">
        Hackaton: Google Hash Code
      </h3>
      <img src={require("../assets/images/italent/googlehashcode/google-hash-code.png")}/>
      </a>
      </div>
    </Layout>
  )
}

export default Selectie
