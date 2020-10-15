import React, { useState } from 'react';
import './Flipcard.css';
function CountryInd({ countryData }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p onClick={() => setShow(!show)}> {countryData.name}</p>
          </div>
          <div className="flip-card-back">
            {
              <>
                <div> Capital : {countryData.capital}</div>
                <div>
                  {' '}
                  Currency :{' '}
                  {countryData.currencies.map(i => (
                    <div>
                      <span>{i.name}</span> <span>{i.symbol}</span>
                    </div>
                  ))}
                </div>
                <div>
                  Languages :
                  {countryData.languages.map(lang => (
                    <div>{lang.name}</div>
                  ))}
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
}
export default CountryInd;
