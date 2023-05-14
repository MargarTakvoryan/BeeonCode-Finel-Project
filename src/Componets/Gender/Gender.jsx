import { Link, Outlet, useLocation } from 'react-router-dom'
import { SlUserFemale } from 'react-icons/sl';
import { SlUser } from 'react-icons/sl';
import styles from './Gender.module.css'

function Gender() {
  const {pathname} = useLocation()
  return (
    <div className={styles.gender_Continer}>
      <div className={styles.gender_box}>
        <Link to={'/woman'} className={styles.gender_Icone}  ><SlUserFemale style={pathname === "/woman" ? { color: '#0008C1' } : null} /></Link>
        <Link to={'/man'} className={styles.gender_Icone} ><SlUser style={pathname === "/man" ? { color: '#0008C1' } : null} /></Link>
      </div>
      <Outlet />

    </div>
  )
}

export default Gender