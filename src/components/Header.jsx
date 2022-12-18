import { Typography,Box } from "@mui/material";


const Header =({title, subtitle})=>{
    return (
        <Box mb="30px">
            <Typography>{title}</Typography>
            <Typography>{subtitle}</Typography>
        </Box>
    )
}

export default Header;