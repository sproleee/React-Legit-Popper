import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Container, Content, CloseButton, CloseImage } from "./src/components";
import { getDocumentHeight } from "./utils/document";
import { getDataFromStorage, setDataInStorage } from "./utils/localStorage";
import icon from "./src/img/icon.png";

class LegitPopper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: true,
      fadeOut: false,
      show: !(props.showWhen > 0),
      stopRender: false,
    };
    this.shouldRender = !getDataFromStorage();
  }

  componentDidMount() {
    const { timeUntil } = this.props;
    if (timeUntil) this.initiatePopperEnd();
    this.controlPopperFade();
  }

  closePopper = () => {
    const { onlyOnce } = this.props;
    if (onlyOnce) setDataInStorage(true);
    this.setState({
      show: false,
      stopRender: true,
    });
  };

  initiatePopperEnd = () => {
    const { timeUntil } = this.props;
    // state callback to prevent changing state on unmounting component
    this.setState({ stopRender: true }, () => {
      setTimeout(() => {
        this.setState({ show: false });
      }, timeUntil);
    });
  };

  controlPopperFade = () => {
    const { showWhen } = this.props;
    if (this.shouldRender) {
      window.onscroll = () => {
        if (!this.state.stopRender) {
          const scrollTop = window.pageYOffset;
          const documentHeight = getDocumentHeight();
          const windowHeight = window.innerHeight;
          const scrollPercent = scrollTop / (documentHeight - windowHeight);
          const scrollRounded = Math.round(scrollPercent * 100);
          if (scrollRounded >= showWhen) {
            return this.setState({ show: true, fadeIn: true, fadeOut: false });
          }
          this.setState({ fadeIn: false, fadeOut: true });
        }
      };
    }
  };

  render() {
    const { show, fadeIn, fadeOut } = this.state;
    const {
      content,
      position,
      padding,
      bgColor,
      textColor,
      borderWidth,
      borderColor,
      borderRadius,
      width,
      fullWidth,
      boxShadow,
      closeButton,
      closeButtonPosition,
    } = this.props;

    if (show && this.shouldRender) {
      return (
        <Container
          padding={`${padding}px`}
          bgColor={bgColor}
          textColor={textColor}
          borderWidth={`${borderWidth}px`}
          borderColor={borderColor}
          borderRadius={`${borderRadius}px`}
          width={`${width}%`}
          fullWidth={fullWidth}
          boxShadow={boxShadow}
          position={position}
          fadeIn={fadeIn}
          fadeOut={fadeOut}
        >
          <Content>
            {closeButton && (
              <CloseButton onClick={this.closePopper} closeButtonPosition={closeButtonPosition}>
                <CloseImage src={icon} />
              </CloseButton>
            )}
            {content}
          </Content>
        </Container>
      );
    }
    return null;
  }
}

LegitPopper.propTypes = {
  content: PropTypes.string,
  showWhen: PropTypes.number,
  timeUntil: PropTypes.oneOfType(PropTypes.object, PropTypes.number),
  onlyOnce: PropTypes.bool,
  closeButton: PropTypes.bool,
  closeButtonPosition: PropTypes.string,
  position: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  boxShadow: PropTypes.bool,
  width: PropTypes.number,
  fullWidth: PropTypes.bool,
  padding: PropTypes.number,
};

LegitPopper.defaultProps = {
  content: "Thanks for using Legit Popper. Your custom content goes here.",
  showWhen: 0,
  timeUntil: null,
  onlyOnce: false,
  closeButton: true,
  closeButtonPosition: "right",
  position: "br",
  bgColor: "#fff",
  textColor: "#444",
  borderWidth: 1,
  borderColor: "#d6d6d6",
  borderRadius: 3,
  boxShadow: true,
  width: 30,
  fullWidth: false,
  padding: 20,
};

export default LegitPopper;
