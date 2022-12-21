import { Typography, Box, Stack } from "@mui/material";
import React from "react";

export const FirstProjectHeader = () => {
  return (
    <>
      <Box padding="20px">
        <Typography sx={{ marginBottom: "1rem" }}>
          Keyword Explorer &gt; <b>Keyword Overview</b>
        </Typography>
        <Typography variant="h6">
          <b>Keyword:</b> shopping in barcelona
        </Typography>
        <Stack marginTop='1rem' flexDirection="row" alignItems="center" >
          <Typography variant="p2" marginRight='1rem' >Database: United States </Typography>
          <img
            src="https://images.emojiterra.com/twitter/v14.0/512px/1f1fa-1f1f8.png"
            style={{ height: "30px", aspectratio: "2:3" }}
            alt=""
          />
        </Stack>
      </Box>
      <Box borderBottom="1px solid grey"></Box>
    </>
  );
};

export default FirstProjectHeader;
