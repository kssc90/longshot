import { Typography, Box } from "@mui/material";
import React from "react";

export const FirstProjectHeader = () => {
  return (
    <Box padding="20px">
      <Typography>
        Keyword Explorer &gt; <b>Keyword Overview</b>
      </Typography>
      <Typography variant="h6">
        <b>Keyword:</b> shopping in barcelona
      </Typography>
      <Typography variant="p2">Database: United States </Typography>
    </Box>
    <Box></Box>
  );
};

export default FirstProjectHeader;
