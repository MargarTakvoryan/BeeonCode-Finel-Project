import React from 'react'
import { Link } from 'react-router-dom'
import { SlUserFemale } from 'react-icons/sl';
import { SlUser } from 'react-icons/sl';
import styles from './Gender.module.css'

function Gender() {
  return (
    <div style={{display:'flex'}}>
      <div className={styles.gender_Continer}>
        <Link to={'/'}><SlUser /></Link>
        <Link to={'/woman'}><SlUserFemale /></Link>
      </div>

    </div>
  )
}

export default Gender