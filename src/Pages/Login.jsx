import { Box, Button, Heading, Input, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../Redux/AuthReducer/action';
import { USER_LOGIN_SUCCESS } from '../Redux/AuthReducer/actionTypes';

 const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || '/'

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password}))
      .then((r)=>{
        if(r.type===USER_LOGIN_SUCCESS){
          navigate(comingFrom,{replace:true})
        }
      })
    }
  }

  return (
    <>
    <Box>
      <Heading as="h2" size="xl" mt={5}>LOGIN PAGE</Heading>
      <form onSubmit={handleSubmit} style={{border:"1px solid grey",width:"30%",margin:"auto",marginTop:'4%',padding:"4%"}}>
         <Box >
            <Text fontWeight="semibold" mb={2}>USER NAME/EMAIL</Text>
            <Input value={email} onChange={(e)=>setEmail(e.target.value)} width='80%' margin="auto" border="1px solid" variant="filled" placeholder="enter email"/>
         </Box>
         <Box mt={5}>
            <Text fontWeight="semibold" mb={2}>PASSWORD</Text>
            <Input value={password} onChange={(e)=>setPassword(e.target.value)} width='80%' margin="auto" border="1px solid" variant="filled" placeholder="enter password"/>
         </Box>
         <Box mt={5}>
            <Button colorScheme="red" type='submit'>LOGIN</Button>
         </Box>
      </form>
    </Box>
    </>
  )
}
export default Login
