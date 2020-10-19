export const getData = (updateData, updateCalled) => {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(data => data.json())
    .then(res => {
      updateData(res);
      updateCalled(true);
    });
};
