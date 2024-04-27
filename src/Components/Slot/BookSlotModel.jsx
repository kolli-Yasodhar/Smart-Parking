import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
    Box,
    FormControl,
    FormErrorMessage,
    Input,
  } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentModal from "./PaymentModal";
import { useDispatch, useSelector } from "react-redux";
// <<<<<<< HEAD
// import { getPriceByType, getPrices } from "../../Redux/Admin/Action";
// =======
import { findAllSlots, getPriceByType, getPrices } from "../../Redux/Admin/Action";
// >>>>>>> 69aac93c2cd34452166b67bd54c277d567736f39
import { bookParkingSlot, clearParkingSlot } from "../../Redux/User/Action";



const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address ")
      .required("Email is required"),
    time: Yup.date()
      .required("Time is required"),
    parkHours : Yup.number()
                    .required("Enter the number of hours")
  });

  var bookvalues = null;
  var amount = null;

  var priceByType = 0;

const BookSlotModel = ({ Open, Close, slotId, vehicleType, prices, status }) => {

    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialValues = { bookedTime: "", parkHours : "",  vehicleNumber : "" };


   function handleSubmit(values, actions) {
     
        console.log("Submitting Values ")
        actions.setSubmitting(false);
        values.slotId = slotId;
        bookvalues = values;

        var wheelerTypePrice = vehicleType + "WheelerPrice";
        priceByType = (vehicleType == "two" ? prices.twoWheelerPrice : (vehicleType == "three" ? prices.threeWheelerPrice : prices.fourWheelerPrice));
        amount =  priceByType * values.parkHours;
        values.amount = amount;
        // console.log("WheelerTypePrice - ", wheelerTypePrice);
        // console.log("Price by type = ", priceByType);
        // console.log("Amount - ", amount);
        console.log("Values = ", values);

        dispatch(bookParkingSlot(values))
        // const delay = values.parkHours * 60 * 60 * 1000;
        // console.log("Delay Time in millseconds -- ", delay);
        console.log("Before setTimeOut")
       
        // setTimeout(() => {
        //   console.log("Vehicle parking time is over on slot id -- ", slotId);
        // }, delay);
        
        // console.log("After setTimeOut");
        onOpen();

  
      }
      
      function handleClick(e) {
        onClose()
      }
      


  return (
    <div>
     { status === "free" &&
       <Modal isOpen={Open} onClose={Close} isCentered >
        <ModalOverlay backdropInvert={"80%"} backdropBlur={"2px"} />
        <ModalContent>
          <ModalHeader placeContent={"center"}>Enter your details </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="">
              <Box
                p={4}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                //   validationSchema={validateSchema}
                >
                  {(formkProps) => (
                    <Form className="space-y-4">

                      {/* <Field name="vehicleType">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.email && form.touched.email}
                          >

                            <FormLabel>Vehicle Type <sup className="text-red-500">*</sup></FormLabel>
                            <Select 
                                className="w-full"
                               {...field}
                               id="vehicleType"
                               placeholder='Select vehicle Type'>
                                <option value={'two'}>Two</option>
                                <option value={'three'}>Three</option>
                                <option value={'four'}>Four</option>
                            </Select>

                            <FormErrorMessage>
                              {" "}
                              {form.errors.email}{" "}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field> */}

                      <Field name="bookedTime">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.password && form.touched.password
                            }
                          >
                            <label htmlFor="time" className="mb-2">
                              Visit Time <sup className="text-red-500">*</sup>{" "}
                            </label>
                            <input
                              type="time"
                              className="w-full"
                              {...field}
                              id="bookedTime"
                              placeholder="At time you visit "
                            ></input>

                            <FormErrorMessage>
                              {" "}
                              {form.errors.password}{" "}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                     
                      <Field name="parkHours">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.password && form.touched.password
                            }
                          >
                            <label htmlFor="parkHours" className="mb-2">
                              Park time in hours <sup className="text-red-500">*</sup>{" "}
                            </label>
                            <Input
                              type="number"
                              className="w-full"
                              {...field}
                              id="parkHours"
                              placeholder="How many hours "
                            ></Input>

                            <FormErrorMessage>
                              {" "}
                              {form.errors.password}{" "}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      
                      <Field name="vehicleNumber">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.password && form.touched.password
                            }
                          >
                            <label htmlFor="vehicleNumber" className="mb-2">
                              Vehicle Number <sup className="text-red-500">*</sup>{" "}
                            </label>
                            <Input
                              type="text"
                              className="w-full"
                              {...field}
                              id="vehicleNumber"
                              placeholder="Enter your vehicle number"
                            ></Input>

                            <FormErrorMessage>
                              {" "}
                              {form.errors.password}{" "}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      <Button
                        className="w-full"
                        mt={4}
                        colorScheme="green"
                        type="submit"
                        isLoading={formkProps.isSubmitting}
                        onClick={handleClick}
                      >
                        Book Slot
                      </Button>
                      
                      
                    </Form>
                  )}
                </Formik>
              </Box>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={Close}>
              Cancel
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
            
          </ModalFooter>
        </ModalContent>
      </Modal>}
    
      <ToastContainer  />

      {/* {console.log(bookvalues)} */}

      <PaymentModal isOpen={isOpen}  onClose={onClose} price={priceByType} amount={amount} hour={bookvalues?.parkHours}  />

    </div>
  );
};

export default BookSlotModel;
