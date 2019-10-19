import React, { useState } from 'react';
import DataFetching from '../fetchdata.js';
import PersonCard from './Components/PersonCard';
import HyfButton from '../Homework-w02/components/HyfButton/button';

function Week03() {
  const defaultURL = 'https://uinames.com/api/?amount=1&&ext';
  const maleURL = 'https://uinames.com/api/?ext&&gender=male';
  const femaleURL = 'https://uinames.com/api/?ext&&gender=female';
  const [URL, setURL] = useState(defaultURL);
  const { loading, results, error } = DataFetching(URL);

  if (loading || error) {
    return loading ? 'Now Loading...' : error.message;
  }

  const changeName = () => {
    let newUrl = `https://uinames.com/api/?ext`;
    if (URL === newUrl) {
      newUrl = defaultURL;
    }
    setURL(newUrl);
  };

  const changeGender = () => {
    let newUrl = femaleURL;
    if (URL === newUrl) {
      newUrl = maleURL;
    }
    setURL(newUrl);
  };

  return (
    <div className="Week03">
      <h2>Homework Week03</h2>
      <React.Fragment>
        <PersonCard props={results} />
        <HyfButton name="Click to Randomize!" toggle={changeName} />
        <HyfButton
          name={`Click for ${
            URL === femaleURL ? 'Male Info' : URL === maleURL ? 'Female Info' : 'Female Info'
          }`}
          toggle={changeGender}
        />
      </React.Fragment>
    </div>
  );
}

export default Week03;
