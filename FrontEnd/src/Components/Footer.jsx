import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './style.css';
import MenuItem from '@mui/material/MenuItem';


function Footer() {



    return (

        <>
 {/* className="fixed-bottom"  */}
        {/* <div  >


        <footer className="bg-dark text-white text-center">

  <div className="container p-4 pb-0">

    <section className="mb-4">

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FacebookOutlinedIcon/></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        > <TwitterIcon/> </a>


      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><GoogleIcon/>  </a>


      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><InstagramIcon/></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><LinkedInIcon/></a>


      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><GitHubIcon/></a>
    </section>

  </div>



  <div className="text-center p-3" style={{'backgroundColor': 'rgba(0, 0, 0, 0.2)'}}>

    <Typography variant="h5" component="div">Online Shopping Store</Typography>

    
  </div>

        </footer>
    </div> */}
    <footer className="footer-07" style={{'padding' : '30px'}}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12 text-center">
						{/* <h2 className="footer-heading"><a href="#" className="logo">Colorlib.com</a></h2> */}

            <Typography className="footer-heading" variant="h5" component="div" color="white">Online Shopping Store</Typography>
						<p className="menu">
              <Button className="m-2" color="primary" variant="outlined"  style={{color: '#FFFFFF' , border : '1px solid #ffff'}}>
                Home
                </Button>

              <Button className="m-2" color="primary" variant="outlined"  style={{color: '#FFFFFF' , border : '1px solid #ffff'}}>
                About Us
                </Button>


              <Button className="m-2" color="primary" variant="outlined"  style={{color: '#FFFFFF' , border : '1px solid #ffff'}}>
                Help
              </Button>

						</p>
						<ul className="ftco-footer-social p-0">
           <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FacebookOutlinedIcon/></a>
           <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        > <TwitterIcon/> </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><GoogleIcon/>  </a>

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><InstagramIcon/></a>

<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><LinkedInIcon/></a>

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><GitHubIcon/></a>

            </ul> 
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-md-12 text-center ">
						<p className="copyright"  style={{color : '#ffff'}}>
					  Copyright &copy; 2022 All rights reserved | This website is made with by 
            <Button  variant="text" color="primary"> 
            Humail Saleem</Button>
            </p>
					</div>
				</div>
			</div>
		</footer>

</>
    )
}

export default Footer;
