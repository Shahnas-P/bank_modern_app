import styles from './style'
import {Navbar,Hero,Stats,Business,Billing,CardDeal,Testimonials,Clients,CTA ,Footer} from './components'
function App() {

  return (
    <div className='bg-primary overflow-hidden w-full' >
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>

      <div className={styles.boxWidth}>
<Navbar/>
      </div>
    </div>

    {/* Hero-Section */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
<Hero/>
      </div>
    </div>

{/* Sections */}

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
<Stats/>
<Business/>
<Billing/>
<CardDeal/> 
<Testimonials/>
<Clients/>
<CTA/>
<Footer/>
      </div>
    </div>

    </div>
  )
}

export default App
