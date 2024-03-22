// Page.js
"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Box, Button, Typography } from '@mui/material';

function Page() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePostClick = (postId) => {
    setSelectedPost(posts.find(post => post.id === postId));
  };

  return (
    <div style={{width:'100%', mx:'auto'}}>
    <nav
        style={{
          background:
            "linear-gradient(to left, rgb(255, 0, 110), #fb0b4c9e, #ff006e4a, #b44593)", 
          width:'100%',
          minWidth:'700px'
        }}
        className=" text-white py-4 px-5 flex justify-between items-center"
      >
        <h3 className="text-xl font-bold ">LOGO</h3>
       
      </nav>
      <Navbar/>
      {selectedPost ? (
        <Box sx={{border:'1px solid #8080804f' , p:2 , boxShadow:2 ,borderRadius:3, my:2 , width:"70%" , mx:'auto'}}>
        <Box sx={{background:'#1e8acf', color:'white' , height:'30px' , width:'30px' ,  borderRadius:'20px' , alignItems:'center' , display:'flex' , justifyContent:'center'}}>{selectedPost.id}</Box>
          <Typography   sx={{ fontSize:'22px'}}>{selectedPost.title}</Typography>
          <Typography sx={{mt:2 , ":hover":{color:'#1e8acf' , fontFamily:'sans-serif'}}}>{selectedPost.body}</Typography>
          <Button sx={{color:'orange'}} onClick={() => setSelectedPost(null)}>Back</Button>
        </Box>
      ) : (
        <Box sx={{width:'75%', mx:'auto' }}>
          {posts.slice(0, 10).map(post => (
            <Box key={post.id} sx={{display:'flex' , gap:2 , mt:2 ,border:'1px solid #8080804f' , p:1 , boxShadow:2 ,borderRadius:3, cursor: 'pointer' }} onClick={() => handlePostClick(post.id)}>
              <Box sx={{background:'#1e8acf', color:'white' , height:'30px' , width:'30px' ,  borderRadius:'20px' , alignItems:'center' , display:'flex' , justifyContent:'center'}}>{post.id}</Box>
              <Box sx={{":hover":{color:'#1e8acf' , fontFamily:'sans-serif'}}}>{post.title}</Box>
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
}

export default Page;
