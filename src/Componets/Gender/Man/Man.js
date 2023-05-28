import React, { useState } from 'react'
import styles from './Man.module.css'
import { HiPlus } from 'react-icons/hi';
import CategoryAddModal from '../../Modals/CategoryModal/CategoryAddModal';
import { Link } from 'react-router-dom';


function Man({ manCategory,filterID, addCategoryObject}) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.Man_Continer}>
      {
        manCategory.map((post) => {
          return <Link to={`/man/${post.title}`} key={post.id} className={styles.manCategoryContiner} onClick={()=>{
            filterID(post.id)
          }}>
            <img className={styles.manCategoryImg} src={post.imgUrl} alt='aaa'/>
            <p className={styles.manCategoryTitle}>{post.title}</p>
          </Link>

        })
      }

      <div className={styles.man_page_add_category_modal} onClick={() => {
        setOpen(true)
      }}>
        <HiPlus />
      </div>
      {open && <CategoryAddModal addCategoryObject={addCategoryObject} setOpen={setOpen} />}
    </div>
  )
}

export default Man