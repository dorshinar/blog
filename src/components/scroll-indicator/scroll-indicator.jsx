import React from "react";
import { Container, Indicator } from "./scroll-indicator.styled";

export default class ScrollIndicator extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  state = {
    width: 0
  };

  handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    this.setState({ width: scrolled });
  };

  render() {
    return (
      <Container>
        <Indicator width={this.state.width} />
      </Container>
    );
  }
}
