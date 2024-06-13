"use client"

import * as React from 'react';
import { Grid, Button, Box } from '@mui/material';
import BlogCard from './BlogCard';
import { useRouter } from 'next/navigation';

const newsArticles = [
  {
    title: "MyRoutine",
    description: "MyRoutine was the first web app I built to conclude CS50 Harvard's course. Although I have a degree in Mechatronical Engineer, we never got to the point of developing softwares.",
    image: "/myroutine.png",
    url: "/blog/myroutine",
    date: "2024-06-13"
  },
  {
    title: "Article 2",
    description: "This is the description for article 2.",
    image: "/loading.jpg",
    url: "/blog/article2",
    date: "2024-06-12"
  },
  {
    title: "Article 3",
    description: "This is the description for article 2.",
    image: "/loading.jpg",
    url: "/blog/article3",
    date: "2024-06-11"
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