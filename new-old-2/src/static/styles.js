const STYLES = `
@font-face {
  font-family: Staatliches;
  src: url('Staatliches-Regular.ttf');
}

@font-face {
  font-family: NationalPark;
  src: url('NationalPark-Thin.otf');
}

@keyframes slideUp {
  from {
    bottom: -50px;
    opacity: 0;
  }
  to {
    bottom: 0px;
    opacity: 1;
  }
}

@keyframes slideUpFar {
  from {
    bottom: -150px;
    opacity: 0;
  }
  to {
    bottom: 0px;
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    right: -1500px;
  }
  to {
    right: 0px;
  }
}

body {
  color: #fff;
  font-family: NationalPark, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #181818;
  background-image: url('/static/beer.webp');
  background-size: 100vh;
  background-position: 700px 60px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  transition: background-position 300ms ease-in-out;
}

a {
  color: #d7d7d7;
  text-decoration: none;
}

.center {
  text-align: center;
}

.beerone-container {
  margin: 0px;
}

.beerone-header {
  max-height: 60px;
}

.beerone-logo {
  width: 300px;
  cursor: pointer;
}

.beerone-logo-img {
  width: 300px;
  height: auto;
}

.beerone-content {
  width: 85%;
  margin: 33px;
}

.highlights {
  width: 85%;
  text-align: center;
}

.highlights-intro {
  width: 75%;
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto;
  text-align: left;
  display: none;
}

.highlight {
  position: relative;
  animation-name: slideUp;
  animation-timing-function: ease-in;
}

.highlight-neon-sign {
  margin-bottom: -40px;
}

.highlight-neon-sign-img {
  width: 400px;
  height: auto;
}

.highlight-beers {
  display: block;
}

.beerone-search-icon {
  position: absolute;
  top: 45px;
  right: 30px;
  padding-left: 12px;
}

.beerone-search-icon > svg {
  width: 50px;
  height: 50px;
  background-color: #eabb00;
  border-radius: 50%;
  padding: 10px;
  stroke: #181818;
  transition: all 300ms ease-in-out;
}

.beerone-coded {
  width: 200px;
  height: 20px;
  margin: 50px auto 0;
  padding: 15px;
  background-image: url('/static/neon/coded.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.beerone-modal {
  width: 50%;
  background-color: #eabb00;
  position: fixed;
  right: -18px;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  animation-name: slideIn;
  animation-duration: 250ms;
  animation-timing-function: ease-in;
}

@media only screen and (min-width: 1200px) {
  body {
    background-position: -36% 90px;
  }

  .beerone-content {
    width: 65%;
    max-width: 100%;
    margin-left: 35%;
  }

  .highlights-intro {
    text-align: center;
  }

  .highlight-beers {
    display: flex;
  }

  .beerone-search-icon {
    position: absolute;
    top: 30px;
  }

  .beerone-search-icon > svg {
    width: 25px;
    height: 25px;
    border: none;
    background-color: transparent;
    stroke: #fff;
  }

  .beerone-modal {
    width: 33%;
  }
}
`;

module.exports = {
  STYLES
};
