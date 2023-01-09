import React from 'react'
import { Box,  Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'



const HeroBanner = () => {
  return (
    <Box xs={{
        mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}
    }} position='relative' p='20px'>
        <Typography color="#FF2526" fontSize="26px" fontWeight="600">
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{fontSize: {lg: '44px', xs: '40px'}}} mb='23px' mt='30px'
        >
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Get the most effective exercise tips
        </Typography>
        <Button variant="contained" color="error" href="#exercises"sx={{backgroundColor: '#ff2526', padding:'10px'}}>Explore Exercises</Button>
        <Typography fontWeight={600} color="#ff2526" sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}}} fontSize='200px'>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner