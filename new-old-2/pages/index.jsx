import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Modal from 'react-responsive-modal';

// import './styles.scss';
import { STYLES } from '../static/styles.js';
import Beer from '../components/beer';
import Highlight from '../components/highlight';
import Info from '../components/info';
import Button from '../components/button';
import Search from '../components/search';
import SearchIcon from '../components/search-icon';
import { HIGHLIGHTS } from '../static/data.js';
import { BUDWEISER } from '../static/mock.js';

const focusOnSearchInput = () => {
  const inputEl = document.getElementById('search-input');
  if (inputEl) {
    inputEl.focus();
  }
}

const highlights = [
  {
    name: 'summer',
    sign: '../static/neon/title-summer.png',
    desc: 'Beers perfect for the Season.',
    data: HIGHLIGHTS.summer
  }, {
    name: 'casual',
    sign: '../static/neon/title-casual.png',
    desc: 'Beers with Low Alcohol Content.',
    data: HIGHLIGHTS.casual
  }, {
    name: 'new',
    sign: '../static/neon/title-new.png',
    desc: 'New Beers launched in the recent years.',
    data: HIGHLIGHTS.new
  }, {
    name: 'organic',
    sign: '../static/neon/title-organic.png',
    desc: 'Organic Beers. Made Naturally.',
    data: HIGHLIGHTS.organic
  }
];

const Index = (props) => {
  // const [currentBeer, setCurrentBeer] = useState({ ...BUDWEISER });
  const [currentBeer, setCurrentBeer] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchUrl, setSearchUrl] = useState('');
  const [searchHeadline, setSearchHeadline] = useState('');
  const isCurrentBeerSet = (Object.keys(currentBeer).length > 0);

  const openSidebar = (url = '', headline = '') => {
    setSearchUrl(url);
    setSearchHeadline(headline);
    setSidebarOpen(true);
  }

  const selectBeer = (beerObj) => {
    setSidebarOpen(false);
    setCurrentBeer({ ... beerObj });
  }

  const renderHighlights = () => {
    return (
      <div className="highlights">
        <div className="highlights-intro" style={{ color: 'red' }}>
          Welcome to BeerOne. Search and Explore beers from around the world.
          Get all the important details about any beer. And discover new beers
          based on your taste.
        </div>
        {highlights.map((highlight, index) => (
          <div
            key={`highlight-${index}`}
            className="highlight"
            style={{animationDuration: `${index * 150}ms`}}
          >
            <div className="highlight-neon-sign">
              <img src={highlight.sign} alt={`${highlight.name} Beers`} className="highlight-neon-sign-img" />
            </div>
            <div className="highlight-desc">{highlight.desc}</div>
            <div className="highlight-beers">
              {highlight.data.map((highlightBeer, index) => (
                <Highlight
                  key={`highlightBeer-${index}`}
                  beer={highlightBeer}
                  onClick={() => selectBeer(highlightBeer)}
                />
              ))}
            </div>
          </div>
        ))}
        <div className="beerone-coded">
          <a href="https://kedar.dev" target="_blank">Made by Kedar.</a>
        </div>
      </div>
    );
  }

  return (
    <div className="beerone-container">
      <header className="beerone-header">
        <div onClick={() => setCurrentBeer({})} className="beerone-logo">
          <img src="../static/beerone.png" className="beerone-logo-img" />
        </div>
        <div
          className="beerone-search-icon"
          onClick={() => openSidebar()}
        >
          <SearchIcon />
        </div>
      </header>
      <div className="beerone-content">
        {isCurrentBeerSet &&
          <Beer
            key={currentBeer.name}
            currentBeer={currentBeer}
            openSidebar={openSidebar}
          />
        }
        {!isCurrentBeerSet && renderHighlights()}
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
          searchHeadline={searchHeadline}
          selectBeer={selectBeer}
        />
      </Modal>
      <style jsx>{`
        body {
          background-color: black;
        }
      `}</style>
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
