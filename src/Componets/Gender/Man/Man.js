import React, { useState } from 'react'
import styles from './Man.module.css'
import { HiPlus } from 'react-icons/hi';
import CategoryAddModal from '../../Modals/CategoryModal/CategoryAddModal';


function Man() {
  const [open, setOpen] = useState(false)
  console.log(open);
  return (
    <div className={styles.Man_Continer}>
      <div className={styles.sub_category}>

      </div>
      <div className={styles.sub_category}>

      </div>
      <div className={styles.man_page_add_category_modal} onClick={() => {
        setOpen(true)
      }}>
        <HiPlus />
      </div>
      {open && <CategoryAddModal setOpen={setOpen} />}
    </div>
  )
}

export default Man