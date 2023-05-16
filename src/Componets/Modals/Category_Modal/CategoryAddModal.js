import React from 'react'
import styles from './CategoryAddModal.module.css'

function CategoryAddModal({setOpen}) {
  return (
    <div className={styles.modalContiner} onClick={()=>{
        setOpen(false)
    }}>
        <div className={styles.modalBox}></div>
    </div>
  )
}

export default CategoryAddModal