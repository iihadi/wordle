import React, { useState } from "react";
import { ListGroup, Offcanvas } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Letter from "./Letter";

function Board() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="col-md-12">
        <Button
          variant="dark"
          onClick={handleShow}
        >
          How to Play!
        </Button>
      </div>
      <div className="board">
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>How to Play</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup>
              <ListGroup.Item>
                You have six tries to guess the five-letter Wordle of the day.
              </ListGroup.Item>
              <ListGroup.Item>
                Type in your guess and submit your word by hitting the “enter”
                key on the Wordle keyboard.
              </ListGroup.Item>
              <ListGroup.Item>
                The color of the tiles will change after you submit your word. A
                yellow tile indicates that you picked the right letter but it’s
                in the wrong spot. The green tile indicates that you picked the
                right letter in the correct spot. The gray tile indicates that
                the letter you picked is not included in the word at all.
              </ListGroup.Item>
              <ListGroup.Item>
                Continue until you solve the Wordle or run out of guesses. Good
                luck!
              </ListGroup.Item>
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
        <div className="boardrow">
          <Letter letterPosition={0} attemptValue={0} />
          <Letter letterPosition={1} attemptValue={0} />
          <Letter letterPosition={2} attemptValue={0} />
          <Letter letterPosition={3} attemptValue={0} />
          <Letter letterPosition={4} attemptValue={0} />
        </div>
        <div className="boardrow">
          <Letter letterPosition={0} attemptValue={1} />
          <Letter letterPosition={1} attemptValue={1} />
          <Letter letterPosition={2} attemptValue={1} />
          <Letter letterPosition={3} attemptValue={1} />
          <Letter letterPosition={4} attemptValue={1} />
        </div>
        <div className="boardrow">
          <Letter letterPosition={0} attemptValue={2} />
          <Letter letterPosition={1} attemptValue={2} />
          <Letter letterPosition={2} attemptValue={2} />
          <Letter letterPosition={3} attemptValue={2} />
          <Letter letterPosition={4} attemptValue={2} />
        </div>
        <div className="boardrow">
          <Letter letterPosition={0} attemptValue={3} />
          <Letter letterPosition={1} attemptValue={3} />
          <Letter letterPosition={2} attemptValue={3} />
          <Letter letterPosition={3} attemptValue={3} />
          <Letter letterPosition={4} attemptValue={3} />
        </div>
        <div className="boardrow">
          <Letter letterPosition={0} attemptValue={4} />
          <Letter letterPosition={1} attemptValue={4} />
          <Letter letterPosition={2} attemptValue={4} />
          <Letter letterPosition={3} attemptValue={4} />
          <Letter letterPosition={4} attemptValue={4} />
        </div>
        <div className="boardrow">
          <Letter letterPosition={0} attemptValue={5} />
          <Letter letterPosition={1} attemptValue={5} />
          <Letter letterPosition={2} attemptValue={5} />
          <Letter letterPosition={3} attemptValue={5} />
          <Letter letterPosition={4} attemptValue={5} />
        </div>
      </div>
    </>
  );
}

export default Board;
