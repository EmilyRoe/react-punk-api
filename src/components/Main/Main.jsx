import React from 'react'
import styles from "./Main.module.scss";
import { Link } from "@reach/router";

const Main = () => {
  return (
    <section className={styles.main}>
      <Link to="/">
        <h2>BrewDog Beer API Challenge</h2>
      </Link>
    </section>
      //{/* Main works: is the equivalent of Dashboard?
      //CardList feeds into this and this is where the search functionality will come in to effect. You'll probs need a CookBook equivalent too when you do this.
      //For now just feed the relevant info in here from CardList     */}
  )
}

export default Main
