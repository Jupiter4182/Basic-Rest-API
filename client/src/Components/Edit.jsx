import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from '../Components/Navbar';
import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from "@mui/material/Button";
import { useEffect } from 'react';
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';

export default function Edit() {
const BASE_URL = 'https://66797cc818a459f6395011d7.mockapi.io'

const [loading, setLoading] = useState(true);
const [todo,setTodos]= useState({
    name:'',
    date:''
})
const {id} = useParams();


useEffect(()=>{
  async function fetchTodo(todoId){
    try {
   setTimeout(async() => {
    
     const response = await axios.get(`${BASE_URL}/test/${todoId}`)
     if (!response == 200)  {
      throw new Error(`HTTP error! Status: ${response.status}`);
      // console.log(response.status);
    }
    setTodos(response.data)    
    setLoading(false);
    }, 1000);
    }
    catch(error){
      console.log('error',error);
      setError('An error occurred while fetching the data. Please try again later.');
      setLoading(false);
    }
  }
  fetchTodo(id)
},[id])
const [autocreatedAt, setautocreatedAt] = useState(getDate());

function getDate() {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}
function handleChange(event){
    setTodos((previousState) =>({
        ...previousState,
        name: event.target.value,
   
    }))
}
    


async function Update(id){
     try {
    await axios.put(`${BASE_URL}/test/${id}`,{
        name:todo.name,
        createdAt:autocreatedAt
      })
    alert(` Successfully updated `)
    window.location.href=("/")
  }
catch(error){
    console.log('error',error);
  }

}
  return (
    <React.Fragment>

      <CssBaseline />
      <Navbar />
        {loading ? (
         <Box sx={{ display: 'flex' , alignItems:"center" ,justifyContent:"center" , p: 1,
          m: 1,  }}>
         <CircularProgress />
       </Box>
        ):(

          <Container maxWidth="sm" sx={{p:2}}>
        <Typography variant='h6' component="div">
        <Avatar alt="Remy Sharp" src={todo.avatar} />
         Edit id : {id}
        </Typography>
       
        {/* {todo.name} */}
        {/* <br/> */}
        {/* {'ข้อมูลเก่า'+todo.createdAt} */}
   
        <Grid container spacing={2}  >
          <Grid item xs={12} sm={6} >{/* screen xs = 12" ขนาดsmall 6 เหลือครึ่งนึง */}
          <TextField id="name" value={todo.name} type="text" label="name" variant="standard" onChange={handleChange} />
          </Grid>
       
        </Grid>
            <Grid item xs={12} mt={2} >
        <Button variant="contained" fullWidth onClick={()=>Update(id)}>Edit</Button>
            </Grid>     
      </Container>
          )}
      </React.Fragment>
    );
}