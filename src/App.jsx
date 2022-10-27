import styles from './style';
import React from 'react'
import { Navbar, Stats, Business, Billing, CardDeal,
         Testimonials, Clients, CTA, Footer, Hero}  from './components';

const App = () => (
  // wraps entire program
  //if React functional component returns jsx, no return function or curlys needed
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        {/* Hero component: main (usually first) content page on acessing website*/}
        <Navbar></Navbar>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* All other non-hero components */}
        <Hero></Hero>
        <Stats></Stats>
        <Business></Business>
        <Billing></Billing>
        <CardDeal></CardDeal>
        <Testimonials></Testimonials>
        <Clients></Clients>
        <CTA></CTA>
        <Footer></Footer>
      </div>
    </div>
  </div>
)


export default App