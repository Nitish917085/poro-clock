import Task1 from "./Pages/Task1";
import Task2 from "./Pages/Task2";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  width: 50vw;
  margin: 10px;
  border-radius: 10px;
  min-height: 90vh;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 95vw;
  }
`;
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
function App() {
  return (
    <Container className="App">
      <Div>
        <h3>Task 1</h3>
        <Task1 />
      </Div>
      <Div>
        <h3>Task 2</h3>
        <Task2 />
      </Div>
    </Container>
  );
}

export default App;
