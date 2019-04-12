import '../static/styles.scss';
import Button from './button';


const Info = (props) => {
  const {
    type,
    title,
    value,
    display,
    displayClass = '',
    similarLinkMsg,
    className = ''
  } = props;
  const styleObj = (type === 'srmId' && display) ? {
    backgroundColor: `#${display}`
  } : {};

  return (
    <div className={`beer-info-container ${className}`}>
      <div className="beer-info-title">{title}</div>
      <div className={`beer-info-display ${displayClass}`} style={styleObj}>
        {display}
      </div>
      {similarLinkMsg && <Button text={similarLinkMsg} />}
    </div>
  );
};

export default Info;
