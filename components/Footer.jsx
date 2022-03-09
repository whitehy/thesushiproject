import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { CopyrightTwoTone, Instagram } from '@mui/icons-material';
import MuiNextLink from '@components/MuiNextLink';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
//Add logo and icons

import Link from '@mui/material/Link';

// import IconButton from '@mui/material/IconButton';
import NextLink from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const mobileView = useMediaQuery('(min-width: 375px)');
  return (
    <Container
      component="footer"
      sx={{
        py: 5,
        px: mobileView ? 4 : 8,
        bgcolor: '#262626',
        textDecoration: 'none',
        color: 'common.white',
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* Logo */}
        <Grid item sx={{ align: 'center' }}>
          <MuiNextLink href="/" underline="none">
            <Image
              src="/footer/footer_rollinlogo_white.svg"
              alt="logo"
              // layout="responsive"
              width={195.18}
              height={23.86}
            />
            {/* <FooterLogo /> weppack*/}
          </MuiNextLink>
        </Grid>
        {/* Contaact us and Find us on */}
        <Box>
          <Grid item xs={12}>
            <Grid
              container
              display="flex"
              direction="row"
              wrap="wrap"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              // need to edit
              spacing={47}
            >
              {/* Contact us */}
              <Grid item sx={{ mt: 2 }}>
                <Image
                  src="/footer/contactus.svg"
                  alt="email"
                  // layout="responsive"
                  width="127"
                  height="16"
                />

                {/* <Typography sx={{ mb: 3 }} gutterBottom>
                CONTACT US
              </Typography> */}
                {/* <Box sx={{ mb: 3 }}>CONTACT US</Box> */}
                <Box sx={{ mb: 2, mt: 2 }}>
                  <Link
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="mailto:info@rollinsushi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/footer/email.svg"
                      alt="email"
                      // layout="responsive"
                      width="313"
                      height="29"
                    />
                    {/* <Email /> */}
                  </Link>
                </Box>
                <Box>
                  {/* <Link href=""> */}
                  <Image
                    src="/footer/phone.svg"
                    alt="phone number"
                    // layout="responsive"
                    width="263"
                    height="29"
                  />
                  {/* <Phone /> */}
                  {/* </Link> */}
                </Box>
              </Grid>

              {/* Find us on */}
              <Grid item sx={{ mt: 4 }}>
                <Image
                  src="/footer/findus.svg"
                  alt="email"
                  // layout="responsive"
                  width="114"
                  height="16"
                />
                {/* <Box sx={{ mt: 3 }}>FOLLOW ON US</Box> */}
                {/* <Typography textAlign="left" gutterBottom>
                FOLLOW ON US
              </Typography> */}

                <Box>
                  <Stack direction="row" spacing={5} sx={{ mb: 5, py: 2 }}>
                    <MuiNextLink
                      sx={{ textDecoration: 'none', color: 'common.white' }}
                      href="https://YourInstagramLink/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram fontSize="large" />
                    </MuiNextLink>
                    <MuiNextLink
                      sx={{ textDecoration: 'none', color: 'common.white' }}
                      href="https://YourInstagramLink/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram fontSize="large" />
                    </MuiNextLink>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {/* Copyright */}
        <Grid item xs={12}>
          <Typography align="center" color="common.white">
            Copyright by ©{new Date().getFullYear()} Sushi Rollin. All rights
            reserved.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

// 2/20

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         py: 5,
//         bgcolor: '#262626',
//         textDecoration: 'none',
//         color: 'common.white',
//       }}
//     >
//       <Container maxwidth="sm">
//         {/* Logo Grid */}
//         <Grid
//           container
//           direction="column"
//           justifyContent="center"
//           alignItems="center"
//           // margin bottom
//           sx={{ mb: 2 }}
//         >
//           <Grid item sx={12}>
//             <Box sx={{ align: 'center' }}>
//               <MuiNextLink href="/" underline="none">
//                 {/* <Image
//                   src="/footer_rollinlogo_white.svg"
//                   alt="logo"
//                   layout="responsive"
//                   width={195.18}
//                   height={23.86}
//                 /> */}
//                 <FooterLogo />
//               </MuiNextLink>
//             </Box>
//           </Grid>
//         </Grid>
//         {/* Second Grid with Contact and Follow on us */}
//         <Container>
//           <Grid container spacing={2} direction="row">
//             <Grid item xs={8}>
//               <Box>CONTACT US</Box>
//               <Box sx={{ py: 1 }}></Box>
//               {/* <Box>Email 956-249-0167</Box> */}
//               <Box>
//                 <Link
//                   sx={{ textDecoration: 'none', color: 'common.white' }}
//                   href="mailto:info@rollinsushi.com"
//                   target="_blank"
//                   // rel="noopener noreferrer"
//                 >
//                   <Email />
//                 </Link>
//               </Box>
//               <Box>
//                 {/* <Link href=""> */}
//                 <Phone />
//                 {/* </Link> */}
//               </Box>

//               {/* <Box>Phone 956-249-0167</Box> */}
//             </Grid>

//             {/* Follow on us Grid */}

//             <Grid item xs={4}>
//               <Box>FOLLOW ON US</Box>
//               <Box>
//                 <Stack direction="row" spacing={5} sx={{ mb: 5, py: 2 }}>
//                   <MuiNextLink
//                     sx={{ textDecoration: 'none', color: 'common.white' }}
//                     href="https://YourInstagramLink/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Instagram fontSize="large" />
//                   </MuiNextLink>
//                   <MuiNextLink
//                     sx={{ textDecoration: 'none', color: 'common.white' }}
//                     href="https://YourFacebookLink/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Facebook fontSize="large" />
//                   </MuiNextLink>
//                   <MuiNextLink
//                     sx={{ textDecoration: 'none', color: 'common.white' }}
//                     href="https://YourTwitterLink/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Twitter fontSize="large" />
//                   </MuiNextLink>
//                 </Stack>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>

//         <Grid>
//           <Typography align="center" color="common.white">
//             © 2022 Sushi Rollin'
//           </Typography>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;
//

// 2/20 svg image
{
  /* <Image
                  src="/footer_rollinlogo_white.svg"
                  alt="logo"
                  layout="responsive"
                  width={205}
                  height={35}
                /> */
}

{
  /* <Image
                      src="/footer/email-icon.svg"
                      alt="Phone"
                      layout="responsive"
                      width={29}
                      height={29}
                    /> */
}
