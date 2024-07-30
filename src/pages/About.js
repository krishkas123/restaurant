import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography, Grid, Paper } from "@mui/material"; // Import Grid and Paper here
import "../styles/About.css";
import restGif from '../images/rest.gif';

const About = () => {
  return (
    <Layout> {/* Wrap the content in Layout if needed */}
      <Box sx={{ padding: 3, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Welcome To SunRiseDelights
        </Typography>

        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <img src={restGif} alt="Restaurant GIF" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
        </Grid>

        <Typography variant="body1" paragraph>
          Welcome to SunRiseDelights, where breakfast is not just a meal but an experience. Located in the vibrant heart of Chennai, our restaurant is dedicated to bringing you a delightful array of breakfast specialties that are steeped in tradition and bursting with flavor.
        </Typography>

        <Typography variant="body1" paragraph>
          At SunRiseDelights, we believe in the magic of mornings. Our culinary journey began with a passion for creating authentic, home-style breakfast dishes that bring comfort and joy to our guests. Each item on our menu is a testament to our commitment to quality and taste.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Our History
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2018, SunRiseDelights has been serving the Chennai community with love and dedication. Our story started with a small family kitchen and has grown into a beloved local restaurant known for its exceptional breakfast offerings and warm atmosphere.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Our Team
        </Typography>
        <Typography variant="body1" paragraph>
          Meet our dedicated team of chefs and staff who make every visit to SunRiseDelights special. From our skilled chefs who craft each dish with care to our friendly servers who ensure you have a pleasant dining experience, we are all committed to delivering the best.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Our Values
        </Typography>
        <Typography variant="body1" paragraph>
          At SunRiseDelights, we value authenticity, quality, and community. We believe in using the freshest ingredients, maintaining high standards in our cooking processes, and fostering a welcoming environment for all our guests.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Customer Testimonials
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="body1" paragraph>
                "SunRiseDelights is my go-to place for breakfast. The idlis are always soft, and the dosas are perfectly crispy. A great start to the day!" – Alex P.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="body1" paragraph>
                "The best puris I’ve ever had! The atmosphere is cozy and inviting. Highly recommend for anyone who loves a good breakfast." – Priya S.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout> 
  );
};

export default About;
