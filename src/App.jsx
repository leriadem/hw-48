import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import Header from "./components/Header";
import Form from "./components/Form";
import CardItem from "./components/CardItem";

// Тема Material UI
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#deb7e5ff"
    },
    background: {
      default: "#f5f7fb",
      paper: "#ffffff"
    }
  },
  typography: {
    h4: {
      fontWeight: 600
    }
  }
});

export default function App() {
  const [items, setItems] = useState([
    { id: 1, title: "Приклад завдання", description: "Опис прикладу" }
  ]);

  // Нова карточка
  const addItem = (item) => {
    const newItem = { id: Date.now(), ...item };
    setItems((prev) => [newItem, ...prev]);
  };

  // Нема карточки
  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="HW 48 — Інтеграція MUI у React проект" />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            Завдання
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Наша невелика аплікація демонструє використання Material UI: форма додавання та перелік карток.
          </Typography>

          <Form onAdd={addItem} />
        </Paper>

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Список карток
          </Typography>

          <Grid container spacing={2}>
            {items.length === 0 ? (
              <Typography variant="body2">Поки що немає елементів.</Typography>
            ) : (
              items.map((it) => (
                <Grid item xs={12} sm={6} key={it.id}>
                  <CardItem
                    id={it.id}
                    title={it.title}
                    description={it.description}
                    onDelete={deleteItem} // видалення
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
