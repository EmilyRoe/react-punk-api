import React, { Component } from 'react'
import styles from "./Card.module.scss";

const Card = (props) => {
  const {
    image_url,
    name,
    tagline,
    description,
    abv,
    ph,
    first_brewed,
  } = props.beer;

  const shortenDescriptions = (descriptions) =>
  descriptions.length < 200
    ? descriptions
    : descriptions.substring(0, 150) + "...";

  return (
    <div className={styles.card}>
      <img src={image_url} alt="Beer image" />
      <section className={styles.beerDetails}>
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p>{shortenDescriptions(description)}</p>
        <ul>
          <li>ABV:{abv}</li>
          <li>First-Brewed:{first_brewed}</li>
          <li>ph:{ph}</li>
        </ul>
      </section>
    </div>
  )
}

export default Card
