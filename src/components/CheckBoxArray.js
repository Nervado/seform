import React, { Component } from "react";

import { Checkbox } from "material-ui";

export default class CheckBoxArray extends Component {
  render() {
    const { programFeatures } = this.props;
    return (
      <ul style={styles.lista}>
        {programFeatures.map(feature => (
          <li style={styles.elemento} key={feature}>
            {feature}
            <Checkbox primary />
          </li>
        ))}
      </ul>
    );
  }
}

const styles = {
  lista: {
    paddingleft: "10",
    margin: "10",
    display: "grid",

    gridTemplateColumns: "repeat(6, 1fr)",
    gridgap: "10",
    justifycontent: "space-evenly",
    textdecoration: "none",
    background: "#fafafa"
    //flexWrap: "wrap"
  },
  elemento: {
    //minwidth: "70",
    display: "flex",
    //alignItens: "center",
    justifycontent: "space-between"
  }
};
