"use client"

import * as React from 'react';
import { Grid, Button, Box } from '@mui/material';
import BlogCard from './BlogCard';

const newsArticles = [
  {
    title: "Building my own portfolio website",
    description: "Building my own portfolio website was a great opportunity for web development. By using Next.js and Tailwind, I was able to build something with more speed and a better UI than my previous website. This really shows the improvement of my Software Engineering skills after building Factor.",
    image: "/personal.png",
    url: "https://medium.com/@carlosepsaboya/building-my-own-portfolio-website-eba5589e7736",
    date: "2024-06-15"
  },
  {
    title: "Factor — Diving into Mobile App Development",
    description: "Factor is a startup in which I joined as a partner by developing the mobile app and backend. It was a challenge for me since I had no previous experience in mobile app development.",
    image: "/factor_main.png",
    url: "https://medium.com/@carlosepsaboya/factor-diving-into-mobile-app-development-cf0266e66511",
    date: "2024-06-14"
  },
  {
    title: "MyRoutine",
    description: "MyRoutine was the first web app I built to conclude CS50 Harvard's course. Although I have a degree in Mechatronical Engineer, we never got to the point of developing softwares.",
    image: "/myroutine.png",
    url: "https://medium.com/@carlosepsaboya/myroutine-68b69c2dbe01",
    date: "2024-06-13"
  }
];

const NewsList = () => {
    const handleViewMore = () => {
      window.location.href = "https://medium.com/@carlosepsaboya";
    };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {newsArticles.map((article, index) => (
          <Grid item xs={12} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <BlogCard
              title={article.title}
              description={article.description}
              image={article.image}
              url={article.url}
              date={article.date}
            />
          </Grid>
        ))}
      </Grid>
      <Button variant="outlined" color="primary" onClick={handleViewMore} sx={{ mt: 2 }}>
        Check my Medium blog
      </Button>
    </Box>
  );
};

export default NewsList;