import { Block } from "./components/Block";
import { Menu } from "./components/Menu";
import "./styles/App.css";
import { useRef, useEffect } from "react";

function App() {
  const topBoundry = useRef();
  const middle = useRef();
  const bottomBoundry = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // console.log("TOP", bottomBoundry.current.offsetTop);
          window.scrollTo(0, 1173);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(topBoundry.current);
    const observer2 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // console.log("BOTTOM", topBoundry.current.offsetTop);
          window.scrollTo(0, 841);
        }
      },
      { threshold: 0.5 }
    );
    observer2.observe(bottomBoundry.current);
    middle.current.scrollIntoView();
  }, []);

  return (
    <div className="App">
      <div className="BlocksContainer" id="container">
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
          <div ref={topBoundry}>
            <Block
              size="small"
              title="S3"
              image="https://picsum.photos/170?random=4"
            ></Block>
          </div>
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
          {/* loop */}
          <div ref={middle}>
            <Block
              size="small"
              title="S1"
              image="https://picsum.photos/200?random=1"
            ></Block>
          </div>

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
          {/* loop */}
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
          <div ref={bottomBoundry}>
            <Block
              size="small"
              title="S7"
              image="https://picsum.photos/170?random=9"
            ></Block>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default App;
