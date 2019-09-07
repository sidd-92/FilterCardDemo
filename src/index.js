import React from "react";
import ReactDOM from "react-dom";
import FilterCard from "./Components/FilterCard";
import "./styles.css";

/* const bg = {
  backgroundImage: "url(https://image.flaticon.com/icons/svg/59/59919.svg)",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  backgroundOrigin: "content-box",
  backgroundPosition: "center"
}; */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandCard: false
    };
  }
  render() {
    return (
      <div>
        <FilterCard
          closeIconPosition="TOP_LEFT"
          expandCard={() =>
            this.setState({ expandCard: !this.state.expandCard })
          }
          isExpanded={this.state.expandCard}
        >
          {this.state.expandCard ? (
            <h1
              style={{
                width: "300px",
                height: "190px"
              }}
            >
              Open
            </h1>
          ) : (
            <h1
              style={{
                width: "190px",
                height: "120px"
              }}
            >
              Closed
            </h1>
          )}
        </FilterCard>
        <FilterCard
          closeIconPosition="TOP_RIGHT"
          expandCard={() =>
            this.setState({ expandCard: !this.state.expandCard })
          }
          isExpanded={this.state.expandCard}
        >
          {this.state.expandCard ? (
            <h1
              style={{
                width: "300px",
                height: "190px"
              }}
            >
              Open
            </h1>
          ) : (
            <h1
              style={{
                width: "190px",
                height: "120px"
              }}
            >
              Closed
            </h1>
          )}
        </FilterCard>
        {/* <FilterCard background="red" border="3px solid green">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "100%"
          }}
        >
          <div style={bg} />
          <div>
            <p>Right</p>
          </div>
        </div>
      </FilterCard> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
