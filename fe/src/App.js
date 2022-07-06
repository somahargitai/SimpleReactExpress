import logo from "./logo.svg";
import "./App.css";
import ActionPage from "./pages/ActionPage";
import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Container,
  Chip,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material/";

const Welcome = () => {
  return (
    <div className="App">
      <Container sx={{ paddingTop: "50px" }}>
        <Button component={Link} to={"/actionpage"} variant="contained">
          Go to the Action Page
        </Button>
      </Container>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/actionpage" exact element={<ActionPage />} />
      <Route path="/" exact element={<Welcome />} />
    </Routes>
  );
}

export default App;
