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
export default function Create() {

 const [name,setName]= useState('')
const [da,setDa]= useState('')
const [todos,setTodos]= useState([])

const fetchTodo = async()=>{
  try {
    const response = await axios.get('https://66797cc818a459f6395011d7.mockapi.io/test')
    setTodos(response.data);
  }
  catch(error){
    console.log('error',error);
  }
}
useEffect(()=>{
  fetchTodo()
},[])
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="sm" sx={{p:2}}>
        <Typography variant='h6' component="div">
            Create Item
        </Typography>
       <form >
        <Grid container spacing={2}  >
          <Grid item xs={12} sm={6} >{/* screen xs = 12" ขนาดsmall 6 เหลือครึ่งนึง */}
          <TextField id="name" value={name} label="name" variant="standard" onChange={(e)=>setName(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>{/* screen xs = 12" ขนาดsmall 6 เหลือครึ่งนึง */}
          <TextField id="da" value={da} label="da" variant="standard" onChange={(e)=>setDa(e.target.value)} />
          </Grid>
        </Grid>
            <Grid item xs={12} mt={2} >

        <Button type="submit" variant="contained" fullWidth>Create</Button>
            </Grid>
       </form>
      </Container>
    </React.Fragment>
  );
}