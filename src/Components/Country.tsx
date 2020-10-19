import React, { useState, FunctionComponent } from 'react';
import './Flipcard.css';

type CountryProps = {
  name: string;
  capital: string;
  currencies: Array<{ name: string; symbol: any }>;
  languages: Array<{ name: string }>;
};

export const CountryInd: FunctionComponent<CountryProps> = ({ name, capital, currencies = [], languages }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p onClick={() => setShow(!show)}> {name}</p>
          </div>
          <div className="flip-card-back">
            {
              <>
                <div> Capital : {capital}</div>
                <div>
                  {' '}
                  Currency :{' '}
                  {currencies &&
                    currencies.map(i => (
                      <div>
                        <span>{i.name}</span> <span>{i.symbol}</span>
                      </div>
                    ))}
                </div>
                <div>Languages :{languages && languages.map(lang => <div>{lang.name}</div>)}</div>
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default CountryInd;
