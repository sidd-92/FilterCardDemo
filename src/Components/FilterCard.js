import React, { Component } from "react";
import filterStyles from "./FilterCard.module.css";
import PropTypes from "prop-types";
const expandedStyle = {
  width: "300px",
  height: "190px",
  background: "red",
  borderRadius: "10px",
  cursor: "pointer"
};
const smallCardStyle = {
  width: "190px",
  height: "120px",
  background: "red",
  borderRadius: "10px",
  cursor: "pointer"
};
class FilterCard extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isExpanded && (
          <CloseIcon position={this.props.closeIconPosition} />
        )}
        <div
          onClick={this.props.expandCard}
          style={this.props.isExpanded ? expandedStyle : smallCardStyle}
          className={filterStyles.transform}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

function CloseIcon({ iconImage, bgcolor, position, isRound }) {
  return (
    position === "TOP_RIGHT" && (
      <span className={`${filterStyles.closeIcon} ${filterStyles.topRight} `}>
        <img
          src="https://image.flaticon.com/icons/svg/463/463065.svg"
          width="20"
          height="20"
          alt="close"
        />
      </span>
    )
  );
}

/* <div
        style={{
          background: `${this.props.background}`,
          border: `${this.props.border}`
        }}
        className={filterStyles.main}
      >
        {this.props.children}
      </div> */
FilterCard.propTypes = {
  background: PropTypes.string, //"#000 or gradient or url(image)"
  border: PropTypes.string, // "1px solid green",
  children: PropTypes.any.isRequired,
  expandCard: PropTypes.func.isRequired,
  closeIconPosition: PropTypes.string
};
export default FilterCard;
