import { Box,  HStack,  Image, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { TriangleUpIcon } from '@chakra-ui/icons'
import HomePage from './HomePage';



const SearchPage = () => {
  const navigate = useNavigate();
  const { item } = useParams()
  console.log(item)
  const [searchitem , setSearchItem] = useState([])
  const [changeitem , setChangeItem] = useState(item);
 // console.log(setSearchItem)
  

 const handleonchange=(event)=>{
  if (event.key === 'Enter') {
    event.preventDefault();

   // navigate(`/SearchPage/${search}`)
   navigate(`/Search_Page/${changeitem}`)
    
  }
 }
 
    
  useEffect(()=>{
    getNews()
},[])


const getNews = ()=>{
    
     axios.get(`https://hn.algolia.com/api/v1/search?&query=${item , changeitem}&hitsPerPage=50`)
      .then((res)=>{
        setSearchItem(res.data);
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
      
}
if(Object.keys(searchitem).length > 0 ){
  return (
     <Box>
        <Box display='flex' className='Nav' w='100%' h='80px' bg='#ff6600'>
          <Box className='rightBox' display='flex'>
       <Link to='/'> < Image src='https://miro.medium.com/fit/c/176/176/0*_n-7WUDvd4eZ4paf.jpg' alt='' w='100px 'h='79px' border='solid 2px white' /></Link>
          <Box mt='20px'>
            <Text fontSize='22px' fontWeight='bold' >Search</Text>
            <Text mt='-10px' fontSize='22px' fontWeight='bold'>Hacker News</Text>
          </Box>
        </Box>
       <Box ml='50px' w='55%'  className='Middle'>
            <Input mt='10px' h='60px' bg='white'
            value={item , changeitem}
            onKeyDown={handleonchange}
            onChange={event =>setChangeItem(event.target.value)}
            placeholder='Search by algolia'
            
            />

         </Box>
         <Box display='flex' ml='15%' className='leftBox'>
      
         <Icon mt='20px' fontSize='30px' as={MdSettings} />
            <Text ml='5px' fontSize='22px' fontWeight='bold' mt='20px'>Setting</Text>
         </Box>
      </Box>
      {/* Content Start */}

       <Box display='flex' className='filterBox'>
            <Text ml='5px' mt='10px'>Search</Text>
            <Select  ml='10px' w='150px' placeholder='Stories'>
              <option value='option1'>ALL</option>
              <option value='option2'>Comments </option>
             
            </Select>
            <Text ml='5px' mt='10px'>by</Text>
            <Select ml='10px' w='150px' placeholder='Popularity'>
              <option value='option1'>Popularity</option>
              <option value='option2'>Date</option>
            </Select>
            <Text ml='5px' mt='10px'>for</Text>
            <Select ml='10px' w='150px' placeholder='All Time'>
              <option value='option1'>Last 24h</option>
              <option value='option2'>Past Week</option>
              <option value='option3'>Past Month</option>
              <option value='option3'>Past Year</option>
              <option value='option3'>Custom Range</option>
            </Select>
       </Box>



    <Box  className='Main'   w={'100%'} height={"fit-content"} bg="#f6f6ef">
       
        {/* <Navbar/> */}
        {searchitem && searchitem.hits.length > 0 ? 
         searchitem.hits.map((item, index)=>{
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
         
     

     </Box>
     <Box  margin='auto' display='flex'>
            <Text ml='32%'   cursor='pointer'>About</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>Setting</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>Help</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>API Documentation</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>Hacker News</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>Fork/Contribute</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>Cool Apps</Text>
            <Text ml='5px' >|</Text>
            <Text ml='5px' cursor='pointer'>Contact</Text>
          </Box>
    </Box>
  )
 }
}
export default SearchPage