import fetch from 'isomorphic-unfetch'
import '../static/styles.scss';
import Info from '../components/info';
import { BUDWEISER } from '../static/mock.js';

const Index = (props) => {
  const currentBeer = { ...BUDWEISER };
  console.log('Data: ', props, BUDWEISER);
  return (
  <div className="beerone-container">
    <div className="title heading">BEERONE</div>
    <div className="beerone-content">
      <div className="beer-title">
        {currentBeer.nameDisplay}
      </div>
      <Info />
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
