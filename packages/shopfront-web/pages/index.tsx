import styled from 'styled-components';
// import { Button } from 'onepress-commerce-ui';

const SButton = styled.button`
  background-color: #000000;
  color: #ffffff;
`;

const Button = ({ label }: { label: string }) => {
  return (
    <SButton>
      {label}
    </SButton>
  )
}

const App = () => {
  return (
    <>
      <Button label="ts"/>
      <div>Next jss!</div>
    </>
  );
};

export default App;
