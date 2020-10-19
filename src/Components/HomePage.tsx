import React, { useEffect, useState } from 'react';
import { Home, Button, Input } from './Styles';
import CountryInd from './Country';
import asc from '../assets/sort-ascending.png';
import dsc from '../assets/sort-descending.png';
type FilteredDataType = any;
function HomePage() {
  const [data, setData] = useState<FilteredDataType>([]);
  const [filteredData, setFilteredData] = useState<FilteredDataType>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(data => data.json())
      .then(res => {
        setData(res);
      });
  }, []);

  useEffect(() => {
    const dataToFilter = [...data];
    const results = dataToFilter.filter(item => {
      const serachKeys = ['name', 'alpha2Code', 'alpha3Code'];
      return serachKeys.some(key => {
        const regex = new RegExp(`^${searchTerm.trim()}`, 'i');
        return regex.test(item[key]);
      });
    });
    setFilteredData(results);
  }, [searchTerm]);

  const inputChangeHandler = (event: any) => {
    setSearchTerm(event!.target!.value);
  };

  // sort data in asc dsc order
  const sortedData = (allData: any, type: string) => {
    let dataToSort = allData;
    let sorted = [];
    if (type === 'asc') {
      sorted = [...dataToSort].sort(function(a, b) {
        return a.population - b.population;
      });
    } else {
      sorted = [...dataToSort].sort(function(a, b) {
        return b.population - a.population;
      });
    }
    searchTerm ? setFilteredData(sorted) : setData(sorted);
  };

  let dataToRender = searchTerm ? filteredData : data;

  return (
    <div style={{ backgroundColor: 'powderblue', textAlign: 'center', minHeight: '100vh' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 100, width: '100vw', backgroundColor: 'lightgrey' }}>
        <Input type="text" placeholder="Search by Name, Code" value={searchTerm} onChange={inputChangeHandler} />
        <Button onClick={() => sortedData(dataToRender, 'asc')}>
          <img src={asc} width="20px" height="20px" alt="ascending order"></img>
        </Button>
        <Button onClick={() => sortedData(dataToRender, 'dsc')}>
          {' '}
          <img src={dsc} width="20px" height="20px" alt="descending order"></img>
        </Button>
      </div>
      <Home>
        {dataToRender &&
          dataToRender.map((el: any) => (
            <>
              <CountryInd {...el}> </CountryInd>
            </>
          ))}
      </Home>
      <br />
    </div>
  );
}

export default HomePage;
