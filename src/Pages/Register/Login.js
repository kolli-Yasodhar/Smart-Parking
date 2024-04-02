import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signInAction } from "../../Redux/Auth/Action";

const validateSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address ")
    .required("Email is required"),
  password: Yup.string()
    .min(10, "Password must be atleast 10 characters")
    .required("Password is required"),
});

const Login = () => {
  const initialValues = { email: "", password: "" };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    //  dispatch(signInAction(values));
    actions.setSubmitting(false);
    console.log("values : ", values);
    const data = values;
    dispatch(signInAction(data));
    navigate("/")
  }

  function handleNavigate() {
    navigate("/signup");
  }

  function handleCustomerClick() {
    navigate("/user");
  }

  return (
    <div className="h-full w-full flex flex-col justify-between items-center  mt-5">
      <div className="">
        {/* <h1 className='text-5xl  italic font-black space-x-4 '> <span className='text-blue-400'>Park</span> <span className='text-orange-500'>Now!</span></h1> */}
        {/* <img
          className="h-[130px] w-[400px]"
          src="https://plat4mation.com/wp-content/uploads/2019/11/PARK-NOW-logo-450x160-1.png"
          alt=""
        /> */}
      </div>

      <div className=" w-full flex justify-around " >
        <div>
            <img src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4511.jpg?size=626&ext=jpg&ga=GA1.1.641528390.1709542908&semt=sph" alt="" />
        </div>
       <div className="mr-8" >

          <div>
          {/* <h1 className='text-5xl  italic font-black space-x-4 '> <span className='text-blue-400'>Login </span> </h1> */}
          <img
          className="h-[130px] w-[400px]"
          src="https://plat4mation.com/wp-content/uploads/2019/11/PARK-NOW-logo-450x160-1.png"
          alt=""
        /> 
          </div>

          <div className="border">
            <Box
              p={8}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validateSchema}
              >
                {(formkProps) => (
                  <Form className="space-y-8">
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <label htmlFor="email">
                            Email Id <sup className="text-red-500">*</sup>{" "}
                          </label>
                          <Input
                            className="w-full"
                            {...field}
                            id="email"
                            placeholder="Enter your email address"
                          ></Input>

                          <FormErrorMessage>
                            {" "}
                            {form.errors.email}{" "}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <label htmlFor="password" className="mb-2">
                            Password <sup className="text-red-500">*</sup>{" "}
                          </label>
                          <Input
                            className="w-full"
                            {...field}
                            id="password"
                            placeholder="Enter your password"
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
                      colorScheme="blue"
                      type="submit"
                      isLoading={formkProps.isSubmitting}
                    >
                      Sign In
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>
          </div>

          <div className="border w-full border-slate-300 mt-5">
            <p className="text-center py-2 ">
              If You Don't Have Account{" "}
              <span
                onClick={handleNavigate}
                className="ml-2 text-blue-700 cursor-pointer"
              >
                Sign Up
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// space-y-10 space-x-10
// <span className='text-orange-500'>Now!</span>
