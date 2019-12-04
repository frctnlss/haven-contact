import * as React from "react";
import Modal from 'react-bootstrap/Modal'

export const LargeModal = (props) => {
   return (
      <Modal show={props.show} onHide={props.closed} centered size='lg'>
         <Modal.Header closeButton>
            <Modal.Title>
               {props.title}
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {props.children}
         </Modal.Body>
      </Modal>
   );
};
