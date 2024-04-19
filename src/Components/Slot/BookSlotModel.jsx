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
import { getPriceByType, getPrices } from "../../Redux/Admin/Action";
import { bookParkingSlot } from "../../Redux/User/Action";



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

const BookSlotModel = ({ Open, Close, slotId, vehicleType }) => {

    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialValues = { bookedTime: "", parkHours : "",  vehicleNumber : "" };
    const price = useSelector(store => store?.admin?.priceByType);
    const data = {
      type : vehicleType
    }
    // console.log("Prices --- ", price);

    function handleSubmit(values, actions) {
        //  dispatch(signInAction(values));
        // toast.success("Slot booked successfully ");
        console.log("Submitting Values ")
        actions.setSubmitting(false);
        values.slotId = slotId;
        // values.vehicleType = vehicleType;
        bookvalues = values;
        // var type = vehicleType;
        amount =  price * values.parkHours;
  
        console.log("values : ", values);
        // console.log("Amount = ", amount);
        // console.log("Vehicle Typee -- ", type);
        // console.log("Parking Price ======= ", values.amount)
        // var amount_ = prices.type * (values.parkHours);
        // console.log("Amount --- ", amount_);
        // console.log("Book Values - ", bookvalues);
        // dispatch(bookParkingSlot(values))
        onOpen();

      }

      function handleClick(e) {
        onClose()
      }
      // console.log("Amount -- ", amount);
      useEffect(()=>{
        dispatch(getPriceByType(data));
      },[])


  return (
    <div>
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
      </Modal>
    
      <ToastContainer  />

      {/* {console.log(bookvalues)} */}
      <PaymentModal isOpen={isOpen}  onClose={onClose} price={price} amount={amount} hour={initialValues.parkHours}  />
     
    </div>
  );
};

export default BookSlotModel;
