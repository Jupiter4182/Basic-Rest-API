import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
// Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// -----Table
import Link from '@mui/material/Link';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import Navbar from '../Components/Navbar.jsx'
import { Avatar } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
export default function User() {
const url ='https://66797cc818a459f6395011d7.mockapi.io/test'
  async function deleteTodo(id){
    try {
      const response = await axios.delete(`${url}/${id}`)
      await fetchTodo()
    }
    catch(error){
      console.log('error',error);
    }
  }



  const [todos,setTodos]= useState([])

  
  const fetchTodo = async()=>{
    try {
      const response = await axios.get(`${url}`)
      
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
      <Navbar/>
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Paper sx={{p:2}}>
          <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                CRUD data Test From RAPIDapi
              </Typography>
            </Box>
            <Box>
            <Link href="create">
              <Button variant="contained">Create</Button>
            </Link>
            </Box>
          </Box>

          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">name</TableCell>
            <TableCell align="right">avatar</TableCell>
            <TableCell align="right">createdAt</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {todos.map((row,index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          
              <TableCell align="center">
                <Box display="flex" justifyContent="center">
                <Avatar alt={row.name} src={row.avatar} />
                </Box>
                </TableCell>
              <TableCell align="right">{row.name}</TableCell>
                
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">
              <Link href={`/edit/${row.id}`} >
              <Button variant="contained" mg={2}>Edit</Button>
              </Link>
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={ ()=>{ deleteTodo(row.id)}} >Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </Paper>
      </Container>
    </React.Fragment>
  );
}
