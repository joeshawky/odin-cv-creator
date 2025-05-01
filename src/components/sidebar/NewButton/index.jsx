import React from 'react'
import styles from './NewButton.module.css'

export default function NewButton({onClick}) {
  return (
    <button className={styles.btn} onClick={onClick}>+ New</button>
  )
}
