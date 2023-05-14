import React from 'react'
// import styles from './NotFound.module.css'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      Page Not Found
      <Link to={"/"}><button>Please click here</button></Link>
    </div>
  )
}

export default NotFound