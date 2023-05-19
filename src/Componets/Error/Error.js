import React from 'react'
import styles from "./Error.module.css"

function Error({errorMessage}) {
  return (
    <div className={styles.errorContiner}>{errorMessage}</div>
  )
}

export default Error