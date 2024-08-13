import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/img5.png";
import { LightPurpleButton } from '../components/buttonStyles';

// const Homepage = () => {
//     return (
//         <StyledContainer>
//             <Grid container spacing={0}>
//                 <Grid item xs={12} md={6}>
//                     <img src={Students} alt="students" style={{ width: '100%' }} />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <StyledPaper elevation={3}>
//                         <StyledTitle>
//                             Welcome to
//                             <br />
//                             School Management
//                             <br />
//                             System
//                         </StyledTitle>
//                         <StyledText>
//                             Streamline school management, class organization, and add students and faculty.
//                             Seamlessly track attendance, assess performance, and provide feedback.
//                             Access records, view marks, and communicate effortlessly.
//                         </StyledText>
//                         <StyledBox>
//                             <StyledLink to="/choose">
//                                 <LightPurpleButton variant="contained" fullWidth>
//                                     Login
//                                 </LightPurpleButton>
//                             </StyledLink>
//                             <StyledLink to="/chooseasguest">
//                                 <Button variant="outlined" fullWidth
//                                     sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
//                                 >
//                                     Login as Guest
//                                 </Button>
//                             </StyledLink>
//                             <StyledText>
//                                 Don't have an account?{' '}
//                                 <Link to="/Adminregister" style={{color:"#550080"}}>
//                                     Sign up
//                                 </Link>
//                             </StyledText>
//                         </StyledBox>
//                     </StyledPaper>
//                 </Grid>
//             </Grid>
//         </StyledContainer>
//     );
// };

const Homepage = () => {
        return (
            <div >
            <StyledContainer>
                
                    <h1 style={{textAlign:'center',fontSize:'3rem',fontWeight:'bold'}}>
                                Welcome to
                              
                                E-Learning
                            
                                Platform
                                </h1>
                           
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                        <img src={Students} alt="students" style={{ paddingTop:'0px',width: '50%',display:'flex',justifyContent:'center',alignItems:'center' }} />
                        
                       <div style={{paddingRight:'50px',textAlign:'center',justifyContent:'center',paddingTop:'140px'}}>
                      
                           
                            <h2 style={{paddingBottom:'50px'}}>
                       Let's make Learning easier...<br></br>
                       with e-learning platform.
                       </h2>
                                <StyledLink to="/choose">
                                    <LightPurpleButton variant="contained" fullWidth>
                                        Login
                                    </LightPurpleButton>
                                </StyledLink>
                                <StyledLink to="/chooseasguest">
                                    <Button variant="outlined" fullWidth
                                        sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                    >
                                        Login as Guest
                                    </Button>
                                </StyledLink>
                                <StyledText>
                                    Don't have an account?{' '}
                                    <Link to="/Adminregister" style={{color:"#550080"}}>
                                        Sign up
                                    </Link>
                                </StyledText>
                            
                            </div>
                            </div>
                   
                
            </StyledContainer>
            </div>
        );
    };
    

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
 
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  
  color: #252525;
justify-content:center;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 10px;
  
  
  
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px; 
 
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
