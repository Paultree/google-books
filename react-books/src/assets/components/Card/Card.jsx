import React from 'react'
import styles from './Card.module.scss'

const Card = ({image, title, authors, description}) => {
  return (
    <div className={styles.Card}>
        <img src={image} />
        <h2>{title}</h2>
        <h4>{authors}</h4>
        <p>{description}</p>
    </div>
  )
}

export default Card