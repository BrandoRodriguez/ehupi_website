import { PageLayout, Hero, Business, Services, Tecnology, Team, Action, Contact, Brands } from "../components";

export default function Home() {
  return (
    <PageLayout title='Ehupi - Tech Lab for Startups & Companie'>
      <section className="hero" id="home">
        <Hero />
      </section>
      <section className="services" id="services">
        <Services />
        <Tecnology />
        <Brands />
      </section>
      <section className="business" id="about">
        <Business />
      </section>
      <section className="team" id="team">
        <Team />
      </section>
      <section className="action" id="contact">
        <Action />
      </section>
      <section className="contact">
        <Contact />
      </section>
    </PageLayout>
  )
} 