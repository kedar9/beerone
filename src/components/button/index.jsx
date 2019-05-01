import React from 'react';
import './styles.scss';
import InfoIcon from './../info-icon';
import MoreIcon from './../more-icon';

const Button = (props) => {
  const { text, icon, onClick } = props;

  const renderIcon = () => {
    if (icon === 'info') {
      return <InfoIcon />;
    } else if (icon === 'more') {
      return <MoreIcon />;
    }
    return null;
  }

  return (
    <div className="beer-button" onClick={onClick}>
      {renderIcon()}
      <div className="beer-button-title">
        {props.text}
      </div>
    </div>
  );
};

export default Button;
