import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
  } from '@chakra-ui/react'
import { bookParkingSlot, clearParkingSlot } from "../../Redux/User/Action";
import { useDispatch, useSelector } from "react-redux";


import React, { useEffect } from 'react'
import { getPrices } from '../../Redux/Admin/Action';

const PaymentModal = ({isOpen, onClose, price, amount, hour}) => {

  const dispatch = useDispatch();

  function handleBookingSlot() {
    console.log("Payment Initiated ..!");
    // dispatch()
  }
  
  // console.log("Price - ", price);
  // console.log("Hours - ", hour);
  // console.log("Amount - ", amount);

  return (
    <div>
         <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Details</ModalHeader>
          <ModalCloseButton />
          
          <ModalBody>
                <Box p={2} className='space-y-1' >
                        <div className='flex justify-between'>
                            <p className='font-medium'>Per hour charge </p>
                            <p className='text-green-400'>₹{price}</p>
                        </div>

                        <div className='flex justify-between'>
                            <p>Total hours </p>
                            <p>{hour}</p>
                        </div>

                        <div className='flex justify-between'>
                            <p>Total Amount</p>
                            <p className='text-green-400 font-bold' >₹{amount}</p>
                        </div>
                </Box>
          </ModalBody>

          <ModalFooter  >
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={handleBookingSlot} >Pay</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default PaymentModal