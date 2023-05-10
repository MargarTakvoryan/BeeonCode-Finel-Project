import React from 'react'
import { Link } from 'react-router-dom'
import { SlUserFemale } from 'react-icons/sl';
import { SlUser } from 'react-icons/sl';

function Gender() {
  return (
    <div>
        <Link to={'/'}><SlUser/></Link>
        <Link to={'/woman'}><SlUserFemale/></Link>
    </div>
  )
}

export default Gender