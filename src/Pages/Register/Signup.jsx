import { Box, Button, FormControl, FormErrorMessage, Input} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'

import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'



const validateSchema = Yup.object().shape({
  email : Yup.string().email("Invalid email address ").required("Email is required"),
  password : Yup.string().min(10,"Password must be atleast 10 characters")
                         .required("Password is required"),
  name : Yup.string().required("Username is required")
})

const Signup = () => {

  const navigate = useNavigate();



  const initialValues = {email:"", name:"", password:""}

  function handleNavigate() {
    navigate('/login')
  }

  function handleSubmit(values,actions) {
   console.log("values", values);
    actions.setSubmitting(false);
  }



  return (
    <div className='h-full w-full flex flex-col justify-between items-center space-y-10 mt-10'  >

      <div className=''>
            
            <h1 className='text-5xl  italic font-black space-x-4 '> <span className='text-blue-400'>Park</span> <span className='text-orange-500'>Now!</span></h1>
         
    </div>

      <div>
       <div className='border ' >
            <Box p={8} display={'flex'} flexDirection={'column'} alignItems={'center'} >
                
                
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={validateSchema}
                >

                    {(formkProps) => (<Form className='space-y-8' >

                    <Field name="name" >
                              {({field, form}) => <FormControl isInvalid={form.errors.name && form.touched.name} >
                                     <label className='mb-2'>Full Name</label>
                                      <Input
                                       className="w-full"
                                        {...field} id="name" 
                                        placeholder='Enter your full Name' >
                                      </Input>

                                      <FormErrorMessage> {form.errors.name} </FormErrorMessage>
                              </FormControl> }
                          </Field>

                          <Field name="email" >
                              {({field, form}) => <FormControl isInvalid={form.errors.email && form.touched.email} >
                                     <p className='mb-2'>Email Id <sup className='text-red-500'>*</sup></p>
                                      <Input
                                       className="w-full"
                                        {...field} id="email" 
                                        placeholder='Enter your email' >
                                      </Input>

                                      <FormErrorMessage> {form.errors.email} </FormErrorMessage>
                              </FormControl> }
                          </Field>

                          
                          


                          <Field name="password" >
                              {({field, form}) => <FormControl isInvalid={form.errors.password && form.touched.password} >
                                     
                                   <p className='mb-2'>Password <sup className='text-red-500'>*</sup></p>
                                     <Input
                                       className="w-full"
                                        {...field} id="password" 
                                        placeholder='Enter your password' >
                                      </Input>

                                      <FormErrorMessage> {form.errors.password} </FormErrorMessage>
                              </FormControl> }
                          </Field>

                        
                          <Button className='w-full' mt={4} colorScheme='blue' type='submit' isLoading={formkProps.isSubmitting} >
                            Sign Up
                          </Button>

                    </Form>) }

                          
               
                </Formik>


            </Box>
        </div>

        <div className='border w-full border-slate-300 my-5' >
          <p className='text-center py-2 ' >If You Have Account Already <span onClick={handleNavigate} className='ml-2 text-blue-700 cursor-pointer' >Sign In</span> </p>
        </div>
        </div>
    </div>
  )
}

export default Signup