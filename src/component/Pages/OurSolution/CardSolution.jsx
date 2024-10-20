import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import "./solution.css";

const CardSolution = () => {
  return (
    <div>
      <Card className="card-solution" >

        <div>

        <CardMedia
          sx={{ height: 140 }} 
          image="/image/mission.jpg"
          title="green iguana"
          style={{borderBottom:"2px solid black", width:"100%", height:"200px"}}
          
        />

        </div>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica 
          </Typography>
        </CardContent>
        
      </Card>
    </div>
  );
};

export default CardSolution;
