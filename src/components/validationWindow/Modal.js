import React from "react";
import Card from "./Card";
import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <div>
      <div>
        <div className={classes.backdrop} onClick={props.whenPressOk} />
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h3>{props.title}</h3>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>

          <footer className={classes.actions}>
            <button onClick={props.whenPressOk}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>Ok
            </button>
          </footer>
        </Card>
      </div>
    </div>
  );
}

export default Modal;
