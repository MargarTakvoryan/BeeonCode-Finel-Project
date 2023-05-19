import React, { useState } from 'react'
import styles from './Man.module.css'
import { HiPlus } from 'react-icons/hi';
import CategoryAddModal from '../../Modals/CategoryModal/CategoryAddModal';


function Man({ manCategory }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.Man_Continer}>
      {
        manCategory.map((post) => {
          return <div key={post.id} className={styles.sub_category}>
            <img className={styles.manCategoryImg} src={post.imgUrl} alt='aaa'/>
            <p className={styles.manCategoryTitle}>{post.title}</p>
          </div>

        })
      }


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