import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { Box, Divider,  Input, StylesProvider, Text } from '@chakra-ui/react';
import  axios from 'axios';
 import { Link, useNavigate } from 'react-router-dom';
 import { TriangleUpIcon } from '@chakra-ui/icons'
import { MdSettings } from 'react-icons/md';

import './styles.module.css'




const HomePage = () => {

  const navigate = useNavigate();
    
    const [data,setData] = useState([]);
    const [search , setSearch] = useState("");

    // const handlechange = (e)=>{
    //   setSearch(e.target.value)
    //   console.log(e)
    // }
   
      const handleKeyDown = event => {
    console.log(event.key);

    if (event.key === 'Enter') {
      event.preventDefault();

     // navigate(`/SearchPage/${search}`)
     navigate(`/Search_Page/${search}`)
      
    }
  };

      
    useEffect(()=>{
        getNews()
    },[])


    const getNews = ()=>{
        
         axios.get("https://hn.algolia.com/api/v1/search?&hitsPerPage=50")
          .then((res)=>{
            setData(res.data);
            console.log(res)
          })
          .catch((err)=>{
            console.log(err)
          })
          
    }
    if(Object.keys(data).length > 0 ){
      return (
      <div >
        <Box className="Container"  w={'100%'} height={"fit-content"} bg="#f6f6ef">
            <Navbar/>
            {data && data.hits.length > 0 ? 
             data.hits.map((item, index)=>{
             return <Box key={index+1} >
                 <Box w={'100%'} h='50px' boxShadow={'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}>
                  <Box display={'flex'} fontSize='18px' >
                  <Text ml={'5px'}>{index}.<TriangleUpIcon color='gray' cursor='pointer' fontSize='14px'  /></Text>
                 <Link to={item.url}><Text Link to='' cursor={'pointer'} ml={'5px'}>{item.title}</Text></Link>
                  </Box>
                   <Box display={'flex'} fontSize='14px' color='gray'>
                   <Text Link to='' cursor={'pointer'} ml={'5px'}> {item.points} Points by</Text>
                   <Text Link to='' cursor={'pointer'} ml={'5px'}>{item.author}</Text>
                   <Text Link to='' cursor={'pointer'} ml={'5px'}>{item.created_at_i}</Text>
                   <Text Link to='' cursor={'pointer'} ml={'5px'}>|</Text>
                   <Text Link to='' cursor={'pointer'} ml={'5px'}>Hide</Text>
                   <Text Link to='' cursor={'pointer'} ml={'5px'}>|</Text>
                   <Text Link to='' cursor={'pointer'} ml={'5px'}>{item.num_comments} Comments</Text>
                   </Box>
                 </Box>
               
                 
             </Box>
             
             
          })
            : <></>
          
          }
          <br />
         <br />
          
          <Box><Text cursor='pointer'>Applications are open for YC Winter 2023</Text></Box>
          <Box  margin='auto' display='flex'>
            <Text ml='32%' color='gray'  cursor='pointer'>Guidlines</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>FAQ</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>Lists</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>API</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>Security</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>Legal</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>Apply to YC</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>Contact</Text>
          </Box>
            
            <Box display='flex' mt='5px'>
              <Text cursor='pointer' color='gray' ml=' 38%'>Search :</Text>
              <Input value={search}  onChange={event => setSearch(event.target.value)}
        onKeyDown={handleKeyDown}  ml='5px' bg='white' w='200px'h='25px' placeholder='' />
            </Box>
        </Box>
        </div>
      )
    }
 
}

export default HomePage