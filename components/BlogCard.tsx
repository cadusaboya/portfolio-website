import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const BlogCard = ({ title, description, image, url, date }: { title: string, description: string, image: string, url: string, date: string }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(url);
  };

  return (
    <Card sx={{ maxWidth: 600, width: '100%' }}>
      <CardActionArea onClick={handleCardClick}>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
          <CardContent sx={{ flex: 1 }}>
          <Typography variant="caption" color="text.secondary">
              {date}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
              {description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: { xs: '100%', sm: 200 }, height: 'auto' }}
            image={image}
            alt={title}
          />
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;