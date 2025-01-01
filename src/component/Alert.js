import React from "react";
import PropTypes from "prop-types";
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
// import"../images"
function Alert(props) {
  const capitalize = (word) => {
    if (word === "Danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "1px" }}>
      {props.alert && props.alert.type && props.alert.msg && (
        <div
          className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

// Define PropTypes for better validation
Alert.propTypes = {
  alert: PropTypes.shape({
    Type: PropTypes.string,
    msg: PropTypes.string,
  }),
};

export default Alert;
