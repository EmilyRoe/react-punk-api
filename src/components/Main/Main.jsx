import React from 'react'
import styles from "./Main.module.scss";
import { Link } from "@reach/router";

const Main = () => {
  return (
    <section className={styles.main}>
      <Link to="/">
        <h2 className={styles.mainHeading}>BrewDog Beer API Challenge</h2>
      </Link>
    </section>
  )
}

export default Main
