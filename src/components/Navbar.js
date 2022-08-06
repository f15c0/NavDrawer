import {AppBar, Box, Button, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useState } from "react";
import NavDrawer from "./NavDrawer";

const Navbar = ({links}) => {
        const [value, setValue] = useState(0);
        const theme= useTheme();
        const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    
    return ( 
        
            <AppBar sx={{backgroundImage:"radial-gradient(at 81% 26%, hsla(206,80%,78%,1) 0px, transparent 50%)"
            }}>
                <Toolbar>
                { isMatch ? (<>
                                <Typography>
                                    <LocalGroceryStoreIcon/>
                                </Typography>
                                <NavDrawer links={links}/>
                        </>):   (<Grid sx={{placeItems:"center"}} container>
                        <Grid item xs={2}>
                        <Typography>
                            <LocalGroceryStoreIcon/>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Tabs value={value}
                                    onChange={(e, val)=>setValue(val)}
                                    textColor="inherit"
                                    indicatorColor="secondary"
                            >
                                    {links.map((item, index)=>(
                                    <Tab label={item} key={index}/>
                                    ))}
                            </Tabs>
                        </Grid>
                        <Grid item xs={1}/>
                        <Grid item xs={3}>
                            <Box display="flex">
                                <Button sx={{marginLeft:"auto"}}  variant="contained" color="secondary">Login</Button>
                                <Button sx={{marginLeft:1}}  variant="contained" color="warning">Sign up</Button>
                            </Box>
                        </Grid>
                    </Grid>)}
                 
                </Toolbar>
               
            </AppBar>
            
        
     );
}
 
export default Navbar;
 