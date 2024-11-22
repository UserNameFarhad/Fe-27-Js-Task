import React from 'react'
import styles from "./NotFoundBlock.module.scss"

const index = () => {
  return (
    <div className={styles.root}>
        <h1>
        <span>😕</span>
        <br />
            Ничего не найдено
            </h1>
        <p className={styles.description}>К сожалениу данная страница отстувствует в нашем интернет-магазине</p>
    </div>
  )
}

export default index