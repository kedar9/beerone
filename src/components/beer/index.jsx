import React from 'react';

import './styles.scss';
import Info from './../info';
import Button from './../button';

const getBeerInfo = (currentBeer) => {
  const {
    style, abv, srm = {}, ibu, description
  } = currentBeer;

  // 'parseInt' is required in the following assignments because
  // the numbers are getting converted to string. So `5+1` becomes 51.
  const abvLimits = !isNaN(abv) ? [abv-1, parseInt(abv)+1] : null;
  const ibuLimits = !isNaN(ibu) ? [ibu-5, parseInt(ibu)+5] : null;

  return {
    abv: {
      title: 'Alcohol By Volume',
      value: abv,
      display: `${abv || '--'}%`,
      displayClass: 'highlight',
      similarLinkMsg: `${abv ? 'Beers with Similar ABV' : ''}`,
      searchUrl: `${abvLimits ? `/more/abv/${abvLimits[0]},${abvLimits[1]}` : ''}`
    },
    srmId: {
      title: 'Beer Color',
      value: srm.id,
      display: srm.hex || '--',
      displayClass: `${srm.hex ? 'color' : 'highlight'}`,
      similarLinkMsg: `${srm.id ? 'Beers of This Color' : ''}`,
      searchUrl: `${srm.id ? `/more/srmId/${srm.id}` : ''}`,
    },
    ibu: {
      title: 'Bitterness (In IBU)',
      value: ibu,
      display: ibu || '--',
      displayClass: 'highlight',
      similarLinkMsg: `${ibu ? 'Beers with Similar IBU' : ''}`,
      searchUrl: `${ibuLimits ? `/more/ibu/${ibuLimits[0]},${ibuLimits[1]}` : ''}`
    }
  };
}

const Beer = (props) => {
  const {
    name,
    description,
    style,
    label
  } = props.currentBeer;
  const beerInfo = getBeerInfo(props.currentBeer);

  return (
    <div className="beer">
      <div className="beer-intro">
        {label &&
          <img src={label} className="beer-logo" />
        }
        <div className="beer-title">{ name }</div>
      </div>
      {description &&
        <div className="beer-desc">{ description }</div>
      }
      {style.name &&
        <div className="beer-style">
          <Info title="Style" display={style.name} />
          <div className="beer-style-btns">
            {style.description && <Button
              text="About this Style"
              icon="info"
              onClick={() => props.openSidebar('', `${style.name}: ${style.description}`)}
            />}
            <Button
              text="Beers of this Style"
              icon="more"
              onClick={() => props.openSidebar(
                `/more/styleId/${style.id}`
              )}
            />
          </div>
        </div>
      }
      <div className="beer-info">
        {Object.keys(beerInfo).map((key, index) => {
          const infoObj = beerInfo[key];

          return (
            <Info
              key={key}
              type={key}
              openSidebar={props.openSidebar}
              { ...infoObj }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Beer;
