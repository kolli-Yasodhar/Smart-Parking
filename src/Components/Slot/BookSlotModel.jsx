import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  Select,
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



const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address ")
      .required("Email is required"),
    time: Yup.date()
      .required("Time is required"),
    parkHours : Yup.number()
                    .required("Enter the number of hours")
  });

const BookSlotModel = ({ isOpen, onClose }) => {
    // const{ toast} = useToast();
    const initialValues = { vehicleType: "", time: "", parkHours : "",  vehicleNumber : "" };

    function handleSubmit(values, actions) {
        //  dispatch(signInAction(values));
        toast.success("Slot booked successfully ");
        console.log("Submitting Values ")
        actions.setSubmitting(false);
        console.log("values : ", values);
      }

      function handleClick(e) {
       
        onClose()
      }
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered >
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

                      <Field name="vehicleType">
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
                      </Field>

                      <Field name="time">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.password && form.touched.password
                            }
                          >
                            <label htmlFor="time" className="mb-2">
                              Visit Time <sup className="text-red-500">*</sup>{" "}
                            </label>
                            <Input
                              type="time"
                              className="w-full"
                              {...field}
                              id="time"
                              placeholder="At time you visit "
                            ></Input>

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
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    
      <ToastContainer 
      />
     
    </div>
  );
};

export default BookSlotModel;
