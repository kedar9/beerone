import { useState } from 'react';
import fetch from 'isomorphic-unfetch';

import './styles.scss';

const List = (props) => {
  return (
    <div className="beerone-search">
      <Autocomplete
        getItemValue={(item) => item.nameDisplay}
        items={beerList}
        renderItem={(item, isHighlighted) =>
          <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.nameDisplay}
          </div>
        }
        value={inputValue}
        onChange={handleOnChange}
        // onSelect={(val) => inputValue = val}
      />
    </div>
  );
};

export default List;
