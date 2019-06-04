import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Modal from 'react-responsive-modal';

import Beer from './../beer';
import Highlight from './../highlight';
import Info from './../info';
import Button from './../button';
import Search from './../search';
import SearchIcon from './../search-icon';
import ASSETS from '../../static';

import { HIGHLIGHTS } from '../../static/data.js';
import './styles.scss';

const focusOnSearchInput = () => {
  const inputEl = document.getElementById('search-input');
  if (inputEl) {
    inputEl.focus();
  }
}
const date = new Date();
const month = date.getMonth();
const isSummer = (month > 2 && month < 9);

const highlights = [
  {
    name: isSummer ? 'summer' : 'winter',
    sign: isSummer ? ASSETS.NEON_SUMMER : ASSETS.NEON_WINTER,
    desc: 'Beers perfect for the Season.',
    data: isSummer ? HIGHLIGHTS.summer : HIGHLIGHTS.winter
  }, {
    name: 'casual',
    sign: ASSETS.NEON_CASUAL,
    desc: 'Beers with Low Alcohol Content.',
    data: HIGHLIGHTS.casual
  }, {
    name: 'new',
    sign: ASSETS.NEON_NEW,
    desc: 'New Beers launched in the recent years.',
    data: HIGHLIGHTS.new
  }, {
    name: 'organic',
    sign: ASSETS.NEON_ORGANIC,
    desc: 'Organic Beers. Made Naturally.',
    data: HIGHLIGHTS.organic
  }
];

const Home = () => {
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
          <img src={ASSETS.NEON_CODED} className="beerone-coded-logo" />
          <a href="https://kedar.dev" target="_blank">Made by Kedar.</a>
        </div>
      </div>
    );
  }

  return (
    <div className="beerone-container">
      <header className="beerone-header">
        <div onClick={() => setCurrentBeer({})} className="beerone-logo">
          <img src={ASSETS.BEERONE_LOGO} className="beerone-logo-img" />
          <div className="beerone-logo-tag">Explore & Discover Beers</div>
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
    </div>
  )};

export default Home;
