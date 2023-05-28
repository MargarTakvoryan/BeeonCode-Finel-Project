import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './SubCatgoryComponent.module.css'

function SubCatgoryComponent({ manSubCategory }) {
  const [boxId, setBoxId] = useState(0)
  // console.log(manSubCategory.sub_Category);

  return (
    <div className={styles.subCategory_continer}>
      <div className={styles.subCategory_box_continer}>
        {
          manSubCategory.sub_Category?.map(({ id, name }) => {
            return <Link onClick={()=>{
              setBoxId(id)
            }} style={boxId === id ? { borderBottom: " 6.5px solid #0008C1" } : null} className={styles.subCategory_box} key={id}>{name}</Link>
          })
        }
      </div>

      <hr className={styles.border} />
    </div>
  )
}

export default SubCatgoryComponent