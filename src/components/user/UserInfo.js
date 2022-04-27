import React from 'react'
import style from './UserInfo.module.css'

function UserInfo({...props}) {
    const { name, imgUrl, companyName} = props;
  return (
    <div className={style.userInfoContainer}>
        UserInfo
        <img src={imgUrl} alt='user' className={style.img} />
        <span> {name} </span>
        <span>{companyName}</span>
    </div>
  )
}

export default UserInfo