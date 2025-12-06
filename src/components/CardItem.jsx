import React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function CardItem({ id, title, description, onDelete }) {
  return (
    <Card sx={{ minHeight: 140, display: "flex", flexDirection: "column" }}>
      <CardHeader
        avatar={<Avatar>{title ? title[0]?.toUpperCase() : "N"}</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={new Date().toLocaleDateString()}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {description || "Опис відсутній"}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="error"
            onClick={() => onDelete(id)} // видалення
          >
            Видалити
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
