import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Modal from 'react-responsive-modal';

import '../static/styles.scss';
import Info from '../components/info';
import Button from '../components/button';
import Search from '../components/search';
import SearchIcon from '../components/search-icon';
import { BUDWEISER } from '../static/mock.js';

const getBeerInfo = (currentBeer) => {
  const {
    styleId, style, abv, srmId, srm, ibu, description
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
      value: srmId,
      display: (srm && srm.hex) || '--',
      displayClass: `${(srm && srm.hex) ? 'color' : 'highlight'}`,
      similarLinkMsg: `${srmId ? 'Beers of This Color' : ''}`,
      searchUrl: `${srmId ? `/more/srmId/${srmId}` : ''}`,
    },
    ibu: {
      title: 'Bitterness (In IBU)',
      value: ibu,
      display: ibu || '--',
      displayClass: 'highlight',
      similarLinkMsg: `${ibu ? 'Beers with Similar Bitterness' : ''}`,
      searchUrl: `${ibuLimits ? `/more/ibu/${ibuLimits[0]},${ibuLimits[1]}` : ''}`
    }
  };
}

const focusOnSearchInput = () => {
  const inputEl = document.getElementById('search-input');
  if (inputEl) {
    inputEl.focus();
  }
}

const Index = (props) => {
  const [currentBeer, setCurrentBeer] = useState({ ...BUDWEISER });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchUrl, setSearchUrl] = useState('');
  const { nameDisplay, description, styleId, style } = currentBeer;
  const beerInfo = getBeerInfo(currentBeer);

  const openSidebar = (url = '') => {
    setSearchUrl(url);
    setSidebarOpen(true);
  }

  const onResultSelect = (beerObj) => {
    setSidebarOpen(false);
    setCurrentBeer({ ... beerObj });
  }

  // console.log('Data: ', props, BUDWEISER);
  return (
    <div className="beerone-container">
      <header className="beerone-header">
        <a href="/" className="beerone-logo">
          <img src="../static/beerone.png" />
        </a>
        <div className="beerone-search" onClick={() => openSidebar()}>
          <SearchIcon />
        </div>
      </header>
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
              <Button text="About this Style" icon="info" />
              <Button text="Beers of this Style" icon="more" />
            </div>
          </div>
        }
        <div className="beer-info">
          {Object.keys(beerInfo).map((key, index) => {
            const infoObj = beerInfo[key];

            return (
              <Info
                type={key}
                openSidebar={openSidebar}
                { ...infoObj }
              />
            );
          })}
        </div>
      </div>
      <Modal
        open={sidebarOpen}
        onEntered={focusOnSearchInput}
        onClose={() => setSidebarOpen(false)}
        animationDuration={60}
        classNames={{
          overlay: 'beerone-overlay',
          modal: 'beerone-modal'
        }}>
        <Search
          searchUrl={searchUrl}
          onResultSelect={onResultSelect}
        />
     </Modal>

    </div>
  )};

// Index.getInitialProps = async () => {
//   const res = await fetch('https://api.brewerydb.com/v2/search?type=beer&key=ea2b62597b2a7489427894a88c9fca06&q=bud');
//   const data = await res.json();
//
//   console.log('\n\n data from getInitialProps: ', data);
//
//   return data;
// }

export default Index;
