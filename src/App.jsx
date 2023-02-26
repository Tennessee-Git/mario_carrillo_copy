import { Block } from "./components/Block";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="BlocksContainer">
        <div className="Blocks">
          <Block
            size="small"
            title="S1"
            image="https://picsum.photos/200?random=1"
          ></Block>
          <Block
            size="small"
            title="S2"
            image="https://picsum.photos/200?random=2"
          ></Block>
          <Block
            size="big"
            title="B1"
            image="https://picsum.photos/400?random=3"
          ></Block>
          <Block
            size="small"
            title="S3"
            image="https://picsum.photos/170?random=4"
          ></Block>
          <Block
            size="big"
            title="B2"
            image="https://picsum.photos/400?random=5"
          ></Block>
          <Block
            size="small"
            title="S4"
            image="https://picsum.photos/170?random=6"
          ></Block>
          <Block
            size="small"
            title="S5"
            image="https://picsum.photos/170?random=7"
          ></Block>
          <Block
            size="small"
            title="S6"
            image="https://picsum.photos/170?random=8"
          ></Block>
          <Block
            size="small"
            title="S7"
            image="https://picsum.photos/170?random=9"
          ></Block>
        </div>
      </div>
    </div>
  );
}

export default App;
