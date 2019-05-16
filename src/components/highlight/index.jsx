import React from 'react';
import './styles.scss';

const Highlight = ({ beer, onClick }) => {
  console.log('beer: ', beer);
  const labelPath = beer.label || '';
  const backgroundStyle = {
    backgroundImage: `radial-gradient(at top left, #eabb00 30%, rgba(234, 187, 0, 0.5) 120%), url(${labelPath})`
  };

  return (
    <div className="highlight-beer" style={backgroundStyle} onClick={onClick}>
      <div className="highlight-beer-label"
        style={{backgroundImage: `url(${labelPath})`}}
      >
      </div>
      <div className="highlight-beer-title">
        {beer.nameDisplay || beer.name}
      </div>
      {beer.highlightNum &&
        <div className="highlight-beer-num">
          {beer.highlightNum}
        </div>
      }
      <div className="highlight-beer-desc">
        {beer.highlightDesc && beer.highlightDesc}
      </div>
    </div>
  );
};

export default Highlight;
