import { Block } from "./components/Block";
import { Menu } from "./components/Menu";
import "./styles/App.css";

const blocks = [
  {
    size: "small",
    title: "S1",
    image: "https://picsum.photos/200?random=1",
  },
  {
    size: "small",
    title: "S1",
    image: "https://picsum.photos/200?random=1",
  },
  {
    size: "small",
    title: "S2",
    image: "https://picsum.photos/200?random=2",
  },
  {
    size: "big",
    title: "B1",
    image: "https://picsum.photos/400?random=3",
  },
  {
    size: "small",
    title: "S3",
    image: "https://picsum.photos/170?random=4",
  },
  {
    size: "big",
    title: "B2",
    image: "https://picsum.photos/400?random=5",
  },
  {
    size: "small",
    title: "S4",
    image: "https://picsum.photos/170?random=6",
  },
  {
    size: "small",
    title: "S5",
    image: "https://picsum.photos/170?random=7",
  },
  {
    size: "small",
    title: "S6",
    image: "https://picsum.photos/170?random=8",
  },
];

function App() {
  return (
    <div className="App">
      <div className="BlocksContainer">
        <div className="Blocks">
          {blocks.map((block, index) => (
            <Block
              key={index}
              size={block.size}
              title={block.title}
              image={block.image}
            />
          ))}
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default App;
