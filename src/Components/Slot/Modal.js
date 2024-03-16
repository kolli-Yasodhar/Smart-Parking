import React from "react";
import "./Modal.css";
import { Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

function Modal({onClose, isOpen}) {
  
    return (
      <>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              I am Sai Kumar
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  
}

export default Modal;

// return (
//   // <div className="modalBackground">
//     //   <div className="modalContainer">
//     //     <div className="titleCloseBtn">
//     //       <button
//     //         onClick={() => {
//     //           setOpenModal(false);
//     //         }}
//     //       >
//     //         X
//     //       </button>
//     //     </div>
//     //     <div className="title">
//     //       <h1>Are You Sure You Want to Continue? to Book?</h1>
//     //     </div>
//     //     {/* <div className="body">
//     //       <p>The next page looks amazing. Hope you want to go there!</p>
//     //     </div> */}
//     //     <div className="footer">
//     //       <button
//     //         onClick={() => {
//     //           setOpenModal(false);
//     //         }}
//     //         id="cancelBtn"
//     //       >
//     //         Cancel
//     //       </button>
//     //       <button>Continue</button>
//     //     </div>
//     //   </div>
//     // </div>
//   );