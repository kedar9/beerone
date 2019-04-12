import fetch from 'isomorphic-unfetch'
import '../static/styles.scss';
import Info from '../components/info';
import Button from '../components/button';
import { BUDWEISER } from '../static/mock.js';

const getBeerInfo = (currentBeer) => {
  const {
    styleId, style, abv, srmId, srm, ibu, description
  } = currentBeer;

  return {
    abv: {
      title: 'Alcohol By Volume',
      value: abv,
      display: `${abv || '--'}%`,
      displayClass: 'highlight',
      similarLinkMsg: `${abv ? 'Beers with Similar ABV' : ''}`
    },
    srmId: {
      title: 'Beer Color',
      value: srmId,
      display: srm && srm.hex,
      displayClass: 'color',
      similarLinkMsg: `${srmId ? 'Beers of This Color' : ''}`
    },
    ibu: {
      title: 'Bitterness (In IBU)',
      value: ibu,
      display: ibu || '--',
      displayClass: 'highlight',
      similarLinkMsg: `${ibu ? 'Beers with Similar Bitterness' : ''}`
    }
  };
}

const Index = (props) => {
  const currentBeer = { ...BUDWEISER };
  const { nameDisplay, description, styleId, style } = currentBeer;
  const beerInfo = getBeerInfo(currentBeer);

  console.log('Data: ', props, BUDWEISER);
  return (
    <div className="beerone-container">
      <div className="beerone-glass" />
      <div className="beerone-content">
        <div className="beer-title">{ nameDisplay }</div>
        <div className="beer-title-sly">{ nameDisplay }</div>
        {description &&
          <div className="beer-desc">{description}</div>
        }
        {(styleId && style) &&
          <div className="beer-style">
            <Info title="Style" display={style.name} />
            <div className="beer-style-btns">
              <Button text="About this Style" />
              <Button text="Beers of this Style" />
            </div>
          </div>
        }
        <div className="beer-info">
          {Object.keys(beerInfo).map((key, index) => {
            const infoObj = beerInfo[key];

            return (
              <Info
                type={key}
                { ...infoObj }
              />
            );
          })}
        </div>
      </div>
    </div>
  )};

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.brewerydb.com/v2/search?type=beer&key=ea2b62597b2a7489427894a88c9fca06&q=bud');
//   const data = await res.json();
//
//   return data;
// }

export default Index;
