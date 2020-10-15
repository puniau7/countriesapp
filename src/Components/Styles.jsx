import styled from 'styled-components';

// styles in Home Page
export const Home = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: auto auto auto auto;
  background-color: powderblue;
  text-align: center;
  padding-top: 40px;
  align-content: center;
  margin: 0 auto;
  justify-content: space-around;
  @media (max-width: 968px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 520px) {
    grid-template-columns: auto;
  }
`;
export const Button = styled.button`
  padding: 5px;
  cursor: pointer;
  margin: 5px;
  &:hover {
    filter: invert(100);
  }
`;
export const Input = styled.input`
  padding: 8px;
  cursor: pointer;
  margin: 5px;
`;
// styles in Country Component
export const CountryWrapper = styled.div`
  text-decoration: none;
  color: red;
  padding: 5px;
  list-style-type: none;
  text-align: center;
`;
