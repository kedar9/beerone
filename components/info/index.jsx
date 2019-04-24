import './styles.scss';
import Button from './../button';
import Search from './../search';

const Info = (props) => {
  const {
    type,
    title,
    value,
    display,
    displayClass = '',
    similarLinkMsg,
    className = '',
    searchUrl = ''
  } = props;
  const styleObj = (type === 'srmId' && display !== '--') ? {
    backgroundColor: `#${display}`
  } : {};

  return (
    <div className={`beer-info-container ${className}`}>
      <div className="beer-info-title">{title}</div>
      <div className={`beer-info-display ${displayClass}`} style={styleObj}>
        {display}
      </div>
      {similarLinkMsg &&
        <Button
          text={similarLinkMsg}
          icon="more"
          onClick={() => props.openSidebar(searchUrl, similarLinkMsg)}
        />
      }
    </div>
  );
};

export default Info;
