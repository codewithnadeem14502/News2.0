import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "../styles";
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant="body1" component="h2">
        Created by
        <a
          className={classes.link}
          href="https://www.linkedin.com/in/mohd-nadeem-8128311bb/"
        >
          {" "}
          Tech maniaz{" "}
        </a>{" "}
        -
      </Typography>
    </div>
  );
};

export default Footer;
