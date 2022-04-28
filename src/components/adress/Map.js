import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CompanyAddress = ({ text }) => <div>{text}</div>;

function SimpleMap() {
  const address = useSelector((state) => state.company.address);
  const defaultState = {
    center: {
      lat: parseInt(address.latitude, 10),
      lng: parseInt(address.longitude, 10),
    },
    zoom: 11,
  };
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBvvjqfS_EhSWFHB5ulwhA-2XEQgR4PDsY' }}
        defaultCenter={defaultState.center}
        defaultZoom={defaultState.zoom}
      >
        <CompanyAddress
          lat={defaultState.center.lat}
          lng={defaultState.center.lng}
          text={address.city.name}
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;

CompanyAddress.propTypes = {
  text: PropTypes.string,
};

CompanyAddress.defaultProps = {
  text: '',
};
