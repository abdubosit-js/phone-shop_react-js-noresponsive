import { Container } from "./pages/Container";
import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <Container />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  border: 1px solid transparent;
  background-color: #EDEDED;
`

export default App;
