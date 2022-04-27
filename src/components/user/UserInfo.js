import React from 'react';
import PropTypes from 'prop-types';
import style from './UserInfo.module.css';

function UserInfo({ ...props }) {
  const { name, imgUrl, companyName } = props;
  return (
    <div className={style.userInfoContainer}>
      UserInfo
      <img src={imgUrl} alt="user" className={style.img} />
      <span>
        {' '}
        {name}
        {' '}
      </span>
      <span>{companyName}</span>
    </div>
  );
}

export default UserInfo;
UserInfo.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  companyName: PropTypes.string,
};

UserInfo.defaultProps = {
  name: '',
  imgUrl: '',
  companyName: '',
};
