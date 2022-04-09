import { Container, Divider, Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import MuiNextLink from "./MuiNextLink";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Stack } from "@mui/material";

import { useTheme, useMediaQuery } from "@mui/material";

const SideDrawer = ({ navLinks }) => {
  const [state, setState] = useState({
    right: false,
  });

  const themes = useTheme();
  const isSmall = useMediaQuery(themes.breakpoints.down("sm"));

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Container
      sx={{
        // width: 375,
        width: "100%",
        height: 812,
        mt: "38px",
        overflowX: "hidden",
        padding: "0px !important",
      }}
    >
      {/*close Icon added: left*/}
      {/* <Box>
        <IconButton
          onClick={toggleDrawer(anchor, false)}
          sx={{ ml: -1, mt: 1, mb: -3, color: 'primary.contrastText' }}
        >
          <CloseIcon />
        </IconButton>
      </Box> */}

      {/*close Icon added: right */}
      <Box sx={{ position: "absolute", right: 6, top: 10 }}>
        <IconButton
          aria-label="close"
          onClick={toggleDrawer(anchor, false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 5,
            color: "primary.contrastText",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Stack alignItems="center">
        <Box
          sx={{
            width: 375,
            pt: 3,
            textAlign: "center",
          }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          {navLinks.map(({ title, path }, i) => (
            <Typography
              variant="h1"
              key={`${title}${i}`}
              sx={{
                mt: "2px",
                mb: "24px",
                textTransform: `uppercase`,
              }}
            >
              <MuiNextLink
                href={path}
                variant="button"
                underline="hover"
                sx={{
                  fontWeight: "fontWeightBold",
                  fontSize: "24px",
                  color: "primary.contrastText",
                  opacity: 1,
                  textTransform: "none",
                  "&:hover": {
                    color: "secondary.main",
                    backgroundColor: "transparent",
                    textUnderlineOffset: "50%",
                  },
                }}
              >
                {title}
              </MuiNextLink>
            </Typography>
          ))}
        </Box>
      </Stack>

      {/* <Box sx={{ mt: 4 }}></Box> */}
      <Divider sx={{ backgroundColor: "#808080" }} />

      <Stack alignItems="center">
        {/* <Box sx={{ textAlign: "center" }}> */}
        <Typography
          color="primary.contrastText"
          textalign="center"
          fontWeight={"fontWeightBold"}
          sx={{
            mt: "30px",
            color: "secondary.main",
            fontSize: "18px", //h4 적용시 fontsize=18 안됨
          }}
        >
          Find Sushi Rollin’ On
        </Typography>
        {/* </Box> */}

        <Box textAlign="center">
          <Grid
            container
            item
            align="column"
            alignItems="center"
            justifyContent="center"
            md={12}
            sm={12}
            xs={12}
            sx={{ my: "30px" }}
          >
            <MuiNextLink
              sx={{
                textDecoration: "none",
                color: "primary.contrastText",
                display: "flex",
                justifyContent: "center",
              }}
              href="https://www.doordash.com/store/sushi-rollin-garland-1775965/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="highlight">
                <svg
                  width="154"
                  height="17"
                  viewBox="0 0 154 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1449_2343)">
                    <path
                      d="M44.6741 4.76867V12.1603H46.6351C47.1355 12.1533 47.6294 12.0521 48.0875 11.8626C48.5456 11.6731 48.9586 11.3991 49.3021 11.057C50.007 10.3555 50.3927 9.42315 50.3771 8.45839C50.392 7.97919 50.3061 7.50194 50.1241 7.05405C49.9422 6.60617 49.668 6.19648 49.3171 5.84852C48.9722 5.50589 48.5563 5.23324 48.095 5.04737C47.6338 4.8615 47.1369 4.76633 46.6351 4.76773H44.6751L44.6741 4.76867ZM46.6351 2.45108C50.2901 2.45108 53.0551 5.11264 53.0551 8.45839C53.0551 11.8041 50.2901 14.4807 46.6351 14.4807H42.3101C42.2688 14.4802 42.2281 14.4721 42.1902 14.4568C42.1523 14.4415 42.118 14.4194 42.0892 14.3916C42.0604 14.3639 42.0377 14.3311 42.0224 14.2951C42.0071 14.2591 41.9995 14.2206 42.0001 14.1819V2.76216C42.0001 2.59675 42.1391 2.46236 42.3101 2.46236L46.6351 2.45108ZM62.4761 12.4178C64.1361 12.4225 65.6351 11.463 66.2741 9.98653C66.5871 9.26515 66.6707 8.47393 66.5149 7.70876C66.3591 6.9436 65.9704 6.23734 65.3961 5.67559C64.8318 5.12307 64.1024 4.74444 63.3043 4.58973C62.5062 4.43501 61.6769 4.5115 60.9261 4.80908C59.3921 5.41808 58.3901 6.85882 58.3871 8.45839C58.3871 10.6388 60.2151 12.4075 62.4771 12.4178H62.4761ZM62.4771 2.17854C66.3241 2.17854 69.2651 5.02806 69.2651 8.45839C69.2651 11.8887 66.3241 14.7382 62.4761 14.7382C58.6291 14.7382 55.7131 11.9028 55.7131 8.45839C55.7131 5.01396 58.6541 2.17854 62.4761 2.17854H62.4771ZM78.6101 12.4178C80.8731 12.4122 82.7041 10.6416 82.7021 8.46121C82.6991 6.27895 80.8641 4.5121 78.6021 4.51116C76.3381 4.51116 74.5021 6.27707 74.4991 8.45839C74.4991 9.5091 74.9321 10.5166 75.7031 11.259C76.0804 11.6249 76.532 11.916 77.0312 12.115C77.5303 12.3141 78.0669 12.417 78.6091 12.4178H78.6101ZM78.6091 2.17854C82.4441 2.17854 85.3851 5.01396 85.3851 8.45839C85.3851 11.9028 82.4321 14.7382 78.6091 14.7382C74.7871 14.7382 71.8211 11.9028 71.8211 8.45839C71.8211 5.01396 74.7621 2.17854 78.6091 2.17854ZM94.3551 4.76867H91.5901V7.94995H94.3551C94.5735 7.95905 94.7917 7.92597 94.996 7.85274C95.2003 7.77952 95.3865 7.66771 95.5431 7.52421C95.8631 7.23287 96.0451 6.82875 96.0491 6.40395C96.0571 6.18844 96.0188 5.97362 95.9363 5.77239C95.8538 5.57116 95.7289 5.38767 95.5691 5.23294C95.4122 5.08066 95.2231 4.96094 95.014 4.88147C94.8049 4.80199 94.5805 4.76453 94.3551 4.77149V4.76867ZM88.9151 2.76216C88.9151 2.59675 89.0551 2.46236 89.2261 2.46236H94.4321C96.9141 2.46236 98.7101 4.21512 98.7101 6.41617C98.7291 7.90484 97.8641 9.27227 96.4831 9.9386L98.8841 14.0296C98.9173 14.0766 98.936 14.1314 98.9381 14.1878C98.9402 14.2442 98.9257 14.3 98.8961 14.3492C98.8671 14.3975 98.8241 14.437 98.7719 14.463C98.7198 14.489 98.6609 14.5004 98.6021 14.4958H96.4951C96.4366 14.4965 96.3791 14.4818 96.3292 14.4532C96.2794 14.4246 96.2391 14.3833 96.2131 14.3341L93.8991 10.2854H91.5801V14.1725C91.5807 14.2113 91.5732 14.2499 91.558 14.286C91.5427 14.3221 91.5201 14.355 91.4913 14.3829C91.4625 14.4107 91.4281 14.4329 91.3902 14.4483C91.3522 14.4636 91.3114 14.4718 91.2701 14.4723H89.2401C89.1987 14.4718 89.1579 14.4636 89.12 14.4483C89.082 14.4329 89.0476 14.4107 89.0188 14.3829C88.99 14.355 88.9674 14.3221 88.9521 14.286C88.9369 14.2499 88.9294 14.2113 88.9301 14.1725L88.9161 2.7631L88.9151 2.76216ZM105.682 4.82506V12.2177H107.642C108.142 12.2113 108.636 12.1107 109.095 11.9218C109.553 11.733 109.966 11.4596 110.31 11.1181C111.015 10.4175 111.402 9.48575 111.387 8.52135C111.403 8.04157 111.318 7.56355 111.137 7.11482C110.955 6.66609 110.681 6.25553 110.33 5.90679C109.985 5.56358 109.568 5.2906 109.106 5.1047C108.644 4.91881 108.146 4.82396 107.643 4.826L105.682 4.82506ZM107.642 2.50465C111.297 2.50465 114.062 5.16903 114.062 8.52135C114.062 11.8737 111.297 14.5381 107.642 14.5381H103.33C103.289 14.5376 103.248 14.5294 103.21 14.5141C103.172 14.4987 103.138 14.4765 103.109 14.4486C103.08 14.4208 103.057 14.3879 103.042 14.3518C103.027 14.3157 103.019 14.2771 103.02 14.2383V2.81949C103.02 2.65314 103.159 2.51875 103.33 2.51875L107.643 2.50465H107.642ZM122.218 5.4444L120.701 9.39726H123.732L122.218 5.4444ZM119.811 11.6312L118.818 14.2627C118.798 14.3246 118.757 14.3785 118.701 14.416C118.645 14.4534 118.577 14.4722 118.508 14.4694H116.354C116.299 14.4743 116.244 14.4651 116.194 14.4429C116.144 14.4208 116.102 14.3864 116.071 14.3435C116.04 14.3001 116.021 14.2498 116.016 14.1974C116.011 14.1451 116.021 14.0924 116.044 14.0447L120.698 2.63623C120.72 2.57606 120.762 2.52422 120.818 2.48859C120.874 2.45296 120.941 2.4355 121.008 2.43887H123.418C123.486 2.43529 123.553 2.45265 123.609 2.4883C123.665 2.52394 123.707 2.5759 123.729 2.63623L128.383 14.0447C128.406 14.0925 128.416 14.1452 128.411 14.1975C128.406 14.2499 128.387 14.3002 128.355 14.3435C128.324 14.3863 128.282 14.4204 128.232 14.4424C128.182 14.4644 128.127 14.4734 128.072 14.4685H125.919C125.85 14.4713 125.783 14.4525 125.726 14.415C125.67 14.3776 125.629 14.3237 125.609 14.2618L124.616 11.6303H119.811V11.6312ZM130.88 5.70097C130.88 3.81194 132.574 2.17854 135.249 2.17854C136.69 2.1483 138.084 2.65473 139.129 3.58732C139.161 3.6156 139.186 3.6497 139.204 3.68751C139.221 3.72532 139.23 3.76606 139.23 3.80724C139.23 3.84841 139.221 3.88915 139.204 3.92696C139.186 3.96478 139.161 3.99887 139.129 4.02715L137.936 5.16903C137.908 5.19677 137.873 5.21883 137.836 5.2339C137.798 5.24896 137.757 5.25673 137.716 5.25673C137.675 5.25673 137.634 5.24896 137.597 5.2339C137.559 5.21883 137.525 5.19677 137.496 5.16903C136.934 4.67405 136.196 4.3936 135.426 4.38241C134.356 4.38241 133.565 4.98107 133.565 5.67183C133.565 7.90484 139.888 6.61635 139.888 10.9132C139.885 13.0907 138.178 14.7382 135.16 14.7382C134.322 14.7463 133.491 14.5959 132.716 14.2959C131.941 13.9959 131.238 13.5525 130.649 12.9921C130.617 12.9638 130.592 12.9297 130.575 12.8919C130.557 12.8541 130.548 12.8133 130.548 12.7721C130.548 12.731 130.557 12.6902 130.575 12.6524C130.592 12.6146 130.617 12.5805 130.649 12.5522L131.803 11.4395C131.832 11.4104 131.867 11.3872 131.905 11.3713C131.944 11.3554 131.986 11.3473 132.028 11.3473C132.07 11.3473 132.112 11.3554 132.151 11.3713C132.19 11.3872 132.224 11.4104 132.253 11.4395C132.979 12.1161 133.957 12.5003 134.98 12.5109C136.317 12.5109 137.198 11.8229 137.198 10.9611C137.198 8.72717 130.878 10.0166 130.878 5.71882L130.88 5.70097ZM151.354 2.74713V7.262H146.002V2.74713C146.003 2.70837 145.995 2.6699 145.98 2.6339C145.964 2.59791 145.942 2.5651 145.913 2.53735C145.884 2.5096 145.85 2.48744 145.812 2.47216C145.774 2.45687 145.733 2.44875 145.692 2.44826H143.662C143.621 2.44875 143.58 2.45687 143.542 2.47216C143.504 2.48744 143.47 2.5096 143.441 2.53735C143.412 2.5651 143.39 2.59791 143.374 2.6339C143.359 2.6699 143.352 2.70837 143.352 2.74713V14.1537C143.352 14.3191 143.492 14.4535 143.662 14.4535H145.692C145.862 14.4535 146.002 14.3191 146.002 14.1537V9.56737H151.35V14.1537C151.35 14.3191 151.49 14.4535 151.66 14.4535H153.69C153.861 14.4535 154 14.3191 154 14.1537V2.74713C154.001 2.70837 153.993 2.6699 153.978 2.6339C153.962 2.59791 153.94 2.5651 153.911 2.53735C153.882 2.5096 153.848 2.48744 153.81 2.47216C153.772 2.45687 153.731 2.44875 153.69 2.44826H151.66C151.577 2.45024 151.499 2.48271 151.442 2.53865C151.384 2.59459 151.353 2.6695 151.354 2.74713ZM30.6051 3.97077C29.1971 1.51785 26.4421 -0.00935503 23.4461 4.31283e-05H0.778058C0.624975 0.000627116 0.475459 0.0435334 0.348139 0.123416C0.22082 0.203298 0.121327 0.316625 0.0620576 0.449275C0.00365406 0.581075 -0.0115568 0.726259 0.0183732 0.866233C0.0483033 1.00621 0.122012 1.1346 0.230058 1.23496L5.16806 5.84006C5.60406 6.24794 6.19806 6.47632 6.81606 6.47632H22.7961C23.9351 6.46504 24.8661 7.31275 24.8781 8.36817C24.8901 9.42358 23.9771 10.2882 22.8381 10.2985H11.8211C11.6679 10.2986 11.5181 10.3411 11.3904 10.4206C11.2627 10.5002 11.1628 10.6133 11.1031 10.7459C11.0441 10.8778 11.0285 11.0234 11.0582 11.1637C11.088 11.3041 11.1618 11.4328 11.2701 11.5335L16.2111 16.1423C16.6498 16.55 17.2421 16.7783 17.8591 16.7776H22.8421C29.3251 16.7776 34.2271 10.3493 30.6051 3.96795"
                      fill="#FBF8ED"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1449_2343">
                      <rect width="154" height="16.9167" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </MuiNextLink>
          </Grid>

          <Grid
            container
            item
            ditection="column"
            alignItems="center"
            justifyContent="center"
            md={12} //2->12
            sm={12}
            xs={12}
            sx={{ my: "30px" }}
          >
            <MuiNextLink
              sx={{
                textDecoration: "none",
                color: "primary.contrastText",
              }}
              href="https://www.grubhub.com/restaurant/sushi-rollin-6850-n-shiloh-rd-garland/2769858"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="highlight">
                <svg
                  width="72"
                  height="16"
                  viewBox="0 0 72 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1449_2345)">
                    <path
                      d="M60.2607 1.14174H57.7595C57.6184 1.14174 57.548 1.21224 57.548 1.35317V11.2527C57.548 11.7459 57.3895 12.1157 57.178 12.3977C56.9668 12.6796 56.685 12.75 56.3325 12.75C55.9803 12.75 55.6808 12.609 55.4694 12.3977C55.2581 12.1157 55.1172 11.7459 55.1172 11.2527V1.35317C55.1172 1.21224 54.9761 1.14174 54.9058 1.14174H52.3868C52.2458 1.14174 52.1754 1.21224 52.1754 1.35317V11.3232C52.1754 12.6091 52.4573 13.8245 53.2499 14.6171C54.025 15.4098 55.0995 15.8326 56.3325 15.8326C57.6184 15.8326 58.6929 15.4099 59.4151 14.6171C60.1902 13.8422 60.4897 12.6972 60.4897 11.3232V1.35317C60.5601 1.28279 60.4192 1.14174 60.2607 1.14174V1.14174ZM69.8609 8.17022C70.2836 7.74736 71.0764 6.74334 71.0764 5.43986C71.0764 3.92507 70.4951 3.00907 70.0547 2.49813C69.262 1.65262 68.205 1.21224 66.9721 1.21224H63.0263C62.8678 1.21224 62.7973 1.35317 62.7973 1.42355V15.4098C62.7973 15.5507 62.9382 15.6213 63.0263 15.6213H67.201C68.4869 15.6213 69.7023 15.128 70.4951 14.1064C70.9178 13.5427 71.4286 12.5914 71.4286 11.1647C71.2877 9.45606 70.2308 8.45198 69.8609 8.17022V8.17022ZM65.7037 4.08342H66.9897C67.342 4.08342 67.6238 4.1538 67.8352 4.43573C68.0641 4.66469 68.1347 5.01705 68.1347 5.45739C68.1347 5.89772 68.0641 6.23234 67.8352 6.53196C67.6238 6.74328 67.342 6.88422 67.0601 6.88422H65.7743V4.08342H65.7037ZM67.9937 12.3272C67.7823 12.6091 67.5005 12.6795 67.0601 12.6795H65.6334V9.64968H67.0601C67.4124 9.64968 67.6943 9.8082 67.9056 10.0197C68.1346 10.3015 68.2756 10.6538 68.2756 11.0941C68.346 11.6754 68.2227 12.0278 67.9937 12.3272V12.3272ZM16.9809 9.3855C17.2627 9.17418 17.4917 9.03325 17.7031 8.73379C18.1963 8.17016 18.848 7.16597 18.848 5.58069C18.848 4.06578 18.2667 3.0794 17.7031 2.49813C16.9809 1.65262 15.9063 1.21224 14.6909 1.14174H10.5338C10.3928 1.14174 10.3224 1.28279 10.3224 1.35317V15.3219C10.3224 15.4628 10.4633 15.5332 10.5338 15.5332H13.035C13.176 15.5332 13.2465 15.3922 13.2465 15.3219V10.1606H14.1096L15.6773 15.4628C15.6773 15.5332 15.8358 15.6036 15.9063 15.6036H18.5486C18.619 15.6036 18.6895 15.5332 18.7599 15.5332C18.8304 15.5332 18.8304 15.3922 18.8304 15.3219L16.9809 9.3855ZM15.3955 6.79603C15.1841 7.07807 14.8318 7.23641 14.3914 7.23641H13.1759V4.08342H14.3914C14.8141 4.08342 15.1664 4.22435 15.3955 4.50617C15.6773 4.80573 15.7653 5.15799 15.7653 5.65124C15.7653 6.16201 15.6949 6.51421 15.3955 6.79603V6.79603ZM38.1716 8.17022C38.612 7.74736 39.3871 6.74334 39.3871 5.43986C39.3871 3.92507 38.8234 3.00907 38.383 2.49813C37.5904 1.65262 36.5158 1.21224 35.3004 1.21224H31.3722C31.2313 1.21224 31.1608 1.35317 31.1608 1.42355V15.4098C31.1608 15.5507 31.3018 15.6213 31.3722 15.6213H35.5294C36.8153 15.6213 38.0307 15.128 38.8409 14.1064C39.2638 13.5427 39.7746 12.5914 39.7746 11.1647C39.6866 9.45606 38.612 8.45198 38.1716 8.17022V8.17022ZM34.032 4.08342H35.318C35.6703 4.08342 35.9522 4.1538 36.1636 4.43573C36.3749 4.66469 36.4454 5.01705 36.4454 5.45739C36.4454 5.89772 36.3749 6.23234 36.1636 6.53196C35.9521 6.74328 35.6703 6.88422 35.3884 6.88422H34.1025V4.08342H34.032ZM36.3925 12.3272C36.1812 12.6091 35.8992 12.6795 35.4589 12.6795H34.032V9.64968H35.4589C35.8111 9.64968 36.093 9.8082 36.3044 10.0197C36.5157 10.3015 36.6743 10.6538 36.6743 11.0941C36.6919 11.6754 36.6215 12.0278 36.3925 12.3272ZM4.13955 0.93042C2.8536 0.93042 1.77914 1.35317 1.05694 2.14576C0.281816 2.93846 0 4.06578 0 5.43981V11.3935C0 12.6796 0.281816 13.8948 1.05694 14.6876C1.84958 15.4804 2.9241 15.9032 4.13955 15.9032C5.42539 15.9032 6.51749 15.4805 7.2397 14.6876C8.01482 13.9125 8.29664 12.7676 8.29664 11.3935V8.11714C8.29664 7.95873 8.1557 7.81785 8.01482 7.81785H4.36851C4.21005 7.81785 4.06912 7.95873 4.06912 8.11714V10.5481C4.06912 10.689 4.21005 10.83 4.36851 10.83H5.30215V11.4112C5.30215 11.9045 5.16122 12.3449 4.9499 12.6267C4.73841 12.9086 4.43907 12.979 4.0867 12.979C3.73444 12.979 3.45257 12.8381 3.22361 12.6267C3.01223 12.3449 2.87135 11.9045 2.87135 11.4112V5.528C2.87135 5.01705 3.01223 4.57666 3.22361 4.31232C3.45262 4.0305 3.73444 3.96012 4.0867 3.96012C4.43907 3.96012 4.73846 4.10106 4.9499 4.31232C5.16127 4.59419 5.30215 5.01705 5.30215 5.528V6.09163C5.30215 6.23239 5.44303 6.32053 5.51353 6.32053H8.01488C8.15576 6.32053 8.22625 6.23239 8.22625 6.09163V5.528C8.22625 4.24193 7.94444 3.02654 7.15179 2.23389C6.51755 1.35317 5.35495 0.93042 4.13955 0.93042ZM28.6596 1.14174H26.1582C26.0173 1.14174 25.9468 1.21224 25.9468 1.35317V11.2527C25.9468 11.7459 25.7883 12.1157 25.5769 12.3977C25.3655 12.6796 25.0836 12.75 24.7314 12.75C24.3791 12.75 24.0796 12.609 23.8683 12.3977C23.6569 12.1157 23.516 11.7459 23.516 11.2527V1.35317C23.516 1.21224 23.3575 1.14174 23.287 1.14174H20.7857C20.6448 1.14174 20.5744 1.21224 20.5744 1.35317V11.3232C20.5744 12.6091 20.8738 13.8245 21.6488 14.6171C22.4415 15.4098 23.516 15.8326 24.7314 15.8326C26.0174 15.8326 27.1095 15.4099 27.8141 14.6171C28.6067 13.8422 28.8885 12.6972 28.8885 11.3232V1.35317C28.8709 1.28279 28.8004 1.14174 28.6596 1.14174ZM49.727 1.14174H47.2257C47.0848 1.14174 47.0143 1.28279 47.0143 1.35317V6.79603H44.513V1.35317C44.513 1.21224 44.3721 1.14174 44.3016 1.14174H41.8003C41.6593 1.14174 41.5889 1.28279 41.5889 1.35317V15.3219C41.5889 15.4628 41.7299 15.5332 41.8003 15.5332H44.3016C44.4425 15.5332 44.513 15.3922 44.513 15.3219V9.73793H47.0143V15.3219C47.0143 15.4628 47.1553 15.5332 47.2257 15.5332H49.727C49.8679 15.5332 49.9384 15.3922 49.9384 15.3219V1.35317C49.9384 1.28279 49.8679 1.14174 49.727 1.14174V1.14174Z"
                      fill="#FBF8ED"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1449_2345">
                      <rect
                        width="71.4286"
                        height="15"
                        fill="white"
                        transform="translate(0 0.916748)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </MuiNextLink>
          </Grid>

          <Grid
            container
            item
            ditection="column"
            alignItems="center"
            justifyContent="center"
            md={12} //2에서 12로 변경 for ceter align @Desktop version
            sm={12}
            xs={12}
            sx={{ my: "30px" }}
          >
            <MuiNextLink
              sx={{
                textDecoration: "none",
                color: "primary.contrastText",
              }}
              href="https://www.yelp.com/biz/sushi-rollin-garland"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="highlight">
                <svg
                  width="68"
                  height="24"
                  viewBox="0 0 68 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M54.3988 14.1283L55.5002 13.9078C55.542 13.8956 55.5699 13.8956 55.6117 13.8833C56.239 13.7364 56.6294 13.1731 56.4761 12.622L56.4621 12.6097C56.4203 12.4873 56.3645 12.3526 56.2809 12.2546C56.1554 12.1199 56.002 12.0097 55.8348 11.9117C55.6256 11.8137 55.4165 11.728 55.1934 11.6545L53.9945 11.2627C53.3253 11.0422 52.6422 10.834 51.9591 10.6259C51.5129 10.4911 51.1365 10.3687 50.8159 10.2707C50.7601 10.2585 50.6904 10.234 50.6346 10.2217C50.2443 10.1115 49.9655 10.0748 49.7284 10.0748C49.5751 10.0748 49.4217 10.0993 49.2684 10.1482C49.115 10.2095 48.9756 10.2952 48.8641 10.3932C48.8083 10.4422 48.7526 10.5034 48.7107 10.5646C48.6131 10.6871 48.5434 10.834 48.4877 10.9687C48.2646 11.5443 48.1531 12.1566 48.1531 12.7689C48.1531 13.32 48.181 14.0303 48.5295 14.5201C48.6131 14.6426 48.7247 14.7528 48.8501 14.8263C49.1011 14.9733 49.352 14.9977 49.603 15.01C49.9794 15.0345 50.3558 14.9488 50.7322 14.8753L54.3988 14.1283ZM66.6393 9.00935C66.3326 8.45827 65.9422 7.95618 65.4543 7.51531C65.3846 7.46633 65.3288 7.4051 65.2452 7.36836C65.1754 7.31938 65.1057 7.28264 65.036 7.2459C64.9663 7.20916 64.8827 7.18467 64.813 7.14793C64.6596 7.09894 64.4923 7.07445 64.325 7.07445C64.1717 7.0867 64.0183 7.12344 63.8789 7.18467C63.6698 7.28264 63.4467 7.42959 63.14 7.67452C63.0982 7.71125 63.0424 7.74799 63.0006 7.78473C62.7497 7.99292 62.4708 8.25009 62.1502 8.544C61.6483 8.99711 61.1464 9.45022 60.6445 9.90333L59.7523 10.7116C59.585 10.8585 59.4456 11.0177 59.3061 11.1892C59.1946 11.3361 59.111 11.4953 59.0691 11.6668C59.0413 11.8015 59.0413 11.9362 59.0831 12.0587L59.097 12.0709C59.2364 12.6342 59.8638 12.9894 60.5051 12.8792C60.5469 12.8669 60.5887 12.8669 60.6166 12.8547L65.3567 11.8872C65.7331 11.8137 66.1095 11.7403 66.4441 11.5688C66.6672 11.4586 66.8902 11.3361 67.0296 11.1035C67.1133 10.981 67.1551 10.834 67.1691 10.6993C67.2388 10.1482 66.9042 9.51145 66.6393 9.00935ZM58.149 10.7606C58.4975 10.3809 58.4975 9.8176 58.5254 9.35225C58.623 7.80922 58.7345 6.2662 58.8182 4.71093C58.86 4.13536 58.9297 3.54754 58.8879 2.95972C58.8461 2.46988 58.8461 1.9188 58.4975 1.51467C57.8841 0.816636 56.5597 0.877868 55.6675 0.975838C55.3886 1.01258 55.1098 1.04931 54.8449 1.11055C54.5661 1.17178 54.3012 1.23301 54.0363 1.30649C53.172 1.55141 51.9591 2.00452 51.7499 2.874C51.6384 3.3761 51.9033 3.87819 52.1264 4.31905C52.3773 4.87013 52.7398 5.35998 53.0604 5.87432C53.8969 7.2459 54.7613 8.59298 55.6256 9.94006C55.8905 10.3442 56.1693 10.8463 56.6573 11.0545C56.6991 11.0667 56.727 11.079 56.7549 11.0912C56.9779 11.1647 57.2289 11.1769 57.4519 11.1279L57.4938 11.1157C57.7029 11.0667 57.8981 10.9565 58.0514 10.8218C58.0932 10.8095 58.1211 10.7851 58.149 10.7606ZM57.7308 14.8998C57.4519 14.5569 56.964 14.4099 56.5039 14.5446C56.4482 14.5569 56.4063 14.5814 56.3506 14.5936C56.2669 14.6304 56.1972 14.6671 56.1415 14.7161C55.9463 14.8385 55.779 15.01 55.6256 15.1814C55.5838 15.2182 55.5559 15.2794 55.5002 15.3162L54.7334 16.2346C54.3012 16.749 53.869 17.2633 53.4508 17.7899C53.172 18.1328 52.935 18.4144 52.7398 18.6716C52.698 18.7206 52.6701 18.7818 52.6282 18.8186C52.4052 19.1247 52.2797 19.3452 52.21 19.5411C52.1682 19.6758 52.1403 19.8228 52.1682 19.9575C52.1821 20.1044 52.2379 20.2391 52.3215 20.3616C52.3634 20.4228 52.4191 20.4841 52.4749 20.5453C52.5864 20.6555 52.7119 20.7657 52.8652 20.8514C53.395 21.1698 53.9666 21.4025 54.58 21.5862C55.0819 21.7332 55.6117 21.8189 56.1415 21.8434C56.2391 21.8434 56.3227 21.8434 56.4203 21.8434C56.5039 21.8311 56.5876 21.8311 56.6712 21.8066C56.7549 21.7944 56.8385 21.7699 56.9082 21.7454C57.2149 21.6474 57.4659 21.4393 57.5774 21.1698C57.6611 20.9739 57.7168 20.729 57.7587 20.3616C57.7587 20.3126 57.7726 20.2514 57.7726 20.1901C57.8005 19.884 57.8144 19.5288 57.8423 19.1125C57.8841 18.4757 57.912 17.8389 57.926 17.1898L57.9678 16.0509C57.9817 15.7815 57.9678 15.4998 57.8841 15.2304C57.8702 15.1202 57.8144 15.01 57.7308 14.8998ZM66.3465 16.6755C66.1932 16.5163 65.9562 16.3693 65.6076 16.1856C65.5519 16.1611 65.4961 16.1244 65.4403 16.0999C65.1476 15.9407 64.7851 15.7815 64.3668 15.5856C63.7255 15.2794 63.0842 14.9733 62.4429 14.6793L61.2998 14.1528C61.244 14.1405 61.1743 14.1038 61.1185 14.0793C60.8955 13.9813 60.6585 13.9078 60.4215 13.8589C60.3378 13.8466 60.2542 13.8344 60.1705 13.8344C60.1147 13.8344 60.059 13.8344 60.0032 13.8466C59.5292 13.9078 59.1667 14.2262 59.0831 14.6426C59.0691 14.7651 59.0691 14.8998 59.097 15.0222C59.1528 15.2917 59.2922 15.5488 59.4316 15.7815L60.045 16.7857C60.3796 17.3613 60.7282 17.9123 61.0767 18.4757C61.2998 18.8431 61.4949 19.1492 61.6762 19.4186C61.7041 19.4676 61.7459 19.5166 61.7738 19.5656C61.9829 19.884 62.1641 20.0799 62.3454 20.2146C62.4569 20.3126 62.5963 20.3861 62.7357 20.4351C62.8891 20.4841 63.0564 20.4963 63.2237 20.4841C63.3073 20.4718 63.391 20.4596 63.4746 20.4473C63.5582 20.4228 63.6419 20.4106 63.7116 20.3861C63.7953 20.3493 63.8789 20.3249 63.9486 20.2881C64.4226 20.0554 64.8409 19.7738 65.2173 19.4554C65.6773 19.0635 66.0816 18.6349 66.3883 18.1328C66.4302 18.0593 66.472 17.9858 66.4999 17.9123C66.5278 17.8389 66.5556 17.7776 66.5835 17.7042C66.5975 17.6307 66.6114 17.5572 66.6253 17.4837C66.6393 17.3368 66.6253 17.1898 66.5696 17.0551C66.5417 16.8959 66.4581 16.7734 66.3465 16.6755Z"
                    fill="#FBF8ED"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.9762 6.90303C26.9762 6.07028 27.743 5.39673 28.6771 5.39673C29.5972 5.39673 30.3361 6.07028 30.3779 6.91527V18.6595C30.3779 19.4922 29.6111 20.1658 28.6771 20.1658C27.743 20.1658 26.9762 19.4922 26.9762 18.6595V6.90303ZM25.4009 14.1528C25.3869 14.3855 25.3172 14.8141 24.9826 15.1325C24.6062 15.4754 24.1043 15.5489 23.8116 15.5489C22.5987 15.5612 21.3858 15.5612 20.1729 15.5612C18.96 15.5612 17.7471 15.5612 16.5342 15.5734C16.6457 15.8673 16.8548 16.3082 17.3288 16.7123C17.6216 16.9573 17.9004 17.092 18.012 17.1532C18.1514 17.2389 18.6672 17.4716 19.2806 17.4716C19.9359 17.4716 20.5214 17.2879 21.093 17.0307L21.1348 17.0062C21.5391 16.8225 21.9434 16.6388 22.3756 16.5776C22.7938 16.5164 23.2539 16.5899 23.5885 16.847C23.9928 17.1532 24.1461 17.5941 23.9928 18.0472C23.8255 18.5615 23.3375 19.0024 22.8078 19.2718C22.515 19.4188 22.1944 19.5535 21.8737 19.6514C21.0512 19.9086 20.1868 20.0311 19.3225 20.0066C19.1133 20.0066 18.8903 20.0066 18.6672 19.9821C18.4302 19.9576 18.1932 19.9209 17.9562 19.8596C17.5937 19.7861 17.2313 19.6882 16.8967 19.5412C16.5621 19.4065 16.2414 19.2473 15.9347 19.0636C15.628 18.8677 15.3492 18.6595 15.0843 18.4146C14.8194 18.1819 14.5963 17.9125 14.3872 17.643C13.6762 16.6878 13.3416 15.5122 13.3974 14.361C13.4532 13.2466 13.8714 12.12 14.6521 11.2137C14.7358 11.1035 14.8194 11.0055 14.917 10.9076C14.9588 10.8708 15.0006 10.8341 15.0285 10.7851C15.9765 9.76866 17.2452 9.45026 17.775 9.31555L17.8028 9.3033C18.8624 9.03389 19.9916 9.03389 21.0512 9.3033C21.3021 9.36454 22.7241 9.74417 23.8255 10.7851C23.8813 10.8341 24.0207 10.981 24.2159 11.2015C24.6899 11.7648 25.0384 12.4016 25.2336 13.0752C25.3312 13.3813 25.4009 13.7242 25.4009 14.1528ZM17.6216 12.2302C17.1058 12.6098 16.7294 13.1242 16.59 13.6997H22.3617C22.2083 13.1242 21.8458 12.5976 21.3161 12.2302C20.7863 11.8628 20.145 11.6546 19.4619 11.6546C19.2249 11.6546 18.4023 11.6913 17.6216 12.2302ZM39.5931 9.1441C38.0735 9.1441 36.7073 9.73192 35.7174 10.6994V10.6749C35.6617 8.70323 32.2739 8.77671 32.3436 10.7606V21.9782C32.3436 22.7987 33.0965 23.4723 34.0445 23.4723C34.9785 23.4723 35.7314 22.811 35.7314 21.9782V18.4758C36.7073 19.431 38.0735 20.0433 39.5931 20.0433C42.6184 20.0433 45.086 17.6308 45.086 14.6182C45.086 11.5934 42.6184 9.1441 39.5931 9.1441ZM38.8403 17.5818C37.1255 17.5818 35.7174 16.2592 35.7174 14.6182C35.7174 12.965 37.1116 11.6423 38.8403 11.6423C40.569 11.6423 41.9631 12.965 41.9631 14.6182C41.9631 16.2715 40.569 17.5818 38.8403 17.5818ZM10.888 15.3775L10.3303 16.4552C10.0794 16.9205 9.82842 17.3981 9.59142 17.8757C9.50777 18.0227 9.43806 18.1696 9.36835 18.3166C8.30882 20.3862 7.0541 22.8477 4.30766 23.3621C2.98324 23.6192 0.975687 23.2641 0.236797 22.1742C-0.502092 21.0598 0.599271 19.7861 2.00734 20.0801C2.2304 20.1168 2.45347 20.2148 2.67653 20.3127C3.05294 20.4719 3.41542 20.6434 3.83366 20.5699C4.21007 20.5087 4.46101 20.2638 4.75378 19.9576C5.07443 19.6147 5.31143 19.2228 5.43691 18.7942C5.42296 18.782 5.42296 18.7697 5.42296 18.7575C5.40902 18.7452 5.40902 18.733 5.39508 18.7207C5.04655 18.1574 4.75378 17.643 4.50284 17.2267C4.33554 16.9573 4.19613 16.7123 4.07066 16.5164L3.49906 15.5612C3.08082 14.8509 3.01112 14.7407 2.81594 14.4345C2.41164 13.7487 1.97946 13.0752 1.5194 12.4139C1.03145 11.6913 0.529565 10.8831 0.933863 10.0258C1.25451 9.34004 2.11887 8.9849 2.91353 9.21758C3.76395 9.43801 4.14036 10.1605 4.50284 10.8218C4.5586 10.9443 4.62831 11.0668 4.69802 11.177C5.26961 12.1689 5.82726 13.1609 6.38492 14.1528C6.42674 14.2508 6.51039 14.3855 6.60798 14.5447C6.69162 14.6917 6.78921 14.8631 6.8868 15.0468C6.94257 15.1448 6.98439 15.2305 7.04016 15.3162C7.09592 15.4142 7.15169 15.5122 7.17957 15.5857C7.44445 15.0223 7.6954 14.459 7.96028 13.8957C8.22517 13.3323 8.49005 12.769 8.741 12.2057C8.741 12.1689 8.8107 12.0587 8.89435 11.875C9.03376 11.6056 9.17318 11.3362 9.29865 11.0668C9.64718 10.332 10.0515 9.45026 10.9716 9.20533C11.6408 9.03388 12.3518 9.25432 12.7561 9.75642C12.9652 10.0013 13.0349 10.283 13.0489 10.5647C13.0628 11.1892 12.7143 11.8505 12.4215 12.4139C12.3518 12.5486 12.2821 12.6833 12.2263 12.818L12.1845 12.8915C12.1009 13.0507 11.8778 13.4793 11.5014 14.2018C11.362 14.459 11.2365 14.7162 11.0971 14.9733C11.0413 15.0958 10.9577 15.2428 10.888 15.3775Z"
                    fill="#FBF8ED"
                  />
                </svg>
              </div>
            </MuiNextLink>
          </Grid>

          <Grid
            container
            item
            ditection="column"
            alignItems="center"
            justifyContent="center"
            md={12}
            sm={12}
            xs={12}
            sx={{ my: "30px" }}
          >
            <MuiNextLink
              sx={{ textDecoration: "none", color: "primary.contrastText" }}
              href="https://www.ubereats.com/store/sushi-rollin/6P3FSDejTAuapBvlNZGQaQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlN1c2hpJTIwUm9sbGluJUUyJTgwJTk5JTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSnRlSFdmeDBjVElZUkpvOWM3djhrczJJJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTMyLjk3NjUzJTJDJTIybG9uZ2l0dWRlJTIyJTNBLTk2LjY2NDIyMzMlN0Q%3D&ps=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="highlight">
                <svg
                  width="93"
                  height="15"
                  viewBox="0 0 93 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M49.0598 0.472412H59.3883V2.84747H51.8498V6.22006H59.1786V8.51437H51.8498V11.944H59.3883V14.319H49.0598V0.472412ZM87.9125 14.5684C91.079 14.5684 92.8632 13.1434 92.8632 11.1863C92.8632 9.79215 91.8068 8.75187 89.5956 8.30061L87.2579 7.85172C85.9008 7.61422 85.4738 7.37671 85.4738 6.9017C85.4738 6.28656 86.1283 5.90892 87.3337 5.90892C88.6403 5.90892 89.6082 6.23906 89.8609 7.37434H92.6004C92.4513 5.23678 90.8162 3.826 87.5005 3.826C84.6347 3.826 82.6231 4.93752 82.6231 7.0917C82.6231 8.58087 83.73 9.54989 86.1182 10.0225L88.7313 10.5902C89.7624 10.7802 90.0378 11.0414 90.0378 11.4428C90.0378 12.0817 89.2595 12.4831 88.0009 12.4831C86.4189 12.4831 85.5142 12.153 85.1629 11.0177H82.4083C82.8101 13.1505 84.4932 14.5684 87.9125 14.5684ZM81.6122 14.3095H78.6479C76.7879 14.3095 75.7568 13.2217 75.7568 11.8489V6.41006H73.6719V4.092H75.7669V1.18256H78.5215V4.092H81.6122V6.41006H78.5215V11.1863C78.5215 11.7302 78.9233 11.9915 79.5526 11.9915H81.6122V14.3095ZM69.7346 4.09675V5.01828C68.7647 4.24777 67.5347 3.82682 66.2648 3.83075C65.5045 3.81572 64.7486 3.94347 64.0415 4.20653C63.3344 4.46959 62.6903 4.86265 62.147 5.36268C61.6036 5.86271 61.1719 6.45965 60.8772 7.1185C60.5825 7.77735 60.4307 8.48487 60.4307 9.19957C60.4307 9.91427 60.5825 10.6218 60.8772 11.2806C61.1719 11.9395 61.6036 12.5364 62.147 13.0365C62.6903 13.5365 63.3344 13.9296 64.0415 14.1926C64.7486 14.4557 65.5045 14.5834 66.2648 14.5684C67.5349 14.5736 68.7654 14.1525 69.7346 13.3809V14.3048H72.4816V4.092L69.7346 4.09675ZM66.4922 12.3263C65.8333 12.3334 65.187 12.1562 64.6354 11.8172C64.0839 11.4783 63.6521 10.9928 63.3948 10.4227C63.1375 9.8525 63.0664 9.22332 63.1906 8.61508C63.3147 8.00685 63.6284 7.44702 64.0919 7.00676C64.5553 6.56649 65.1476 6.26566 65.7935 6.14251C66.4393 6.01935 67.1095 6.07942 67.7189 6.31509C68.3283 6.55076 68.8494 6.95139 69.216 7.46605C69.5825 7.98072 69.778 8.58619 69.7775 9.20551C69.7815 9.61377 69.6993 10.0187 69.5357 10.3969C69.3721 10.7751 69.1303 11.1191 68.8243 11.4089C68.5183 11.6987 68.1542 11.9286 67.753 12.0852C67.3518 12.2419 66.9216 12.3222 66.4872 12.3216L66.4922 12.3263Z"
                    fill="white"
                  />
                  <path
                    d="M42.929 6.00868C41.5466 6.00868 40.5661 7.02521 40.5661 8.58562V14.3095H38.4559V4.23451H40.5408V5.46479C40.798 5.05703 41.1665 4.72133 41.6082 4.49248C42.0499 4.26363 42.5487 4.14996 43.0528 4.16326H43.811V6.00868H42.929ZM36.9977 9.27201C36.9977 6.26756 34.7233 4.02075 31.6452 4.02075C30.9179 4.02539 30.1988 4.16514 29.5292 4.43194C28.8596 4.69875 28.2528 5.08735 27.7436 5.57539C27.2344 6.06343 26.8329 6.64128 26.5622 7.27569C26.2915 7.9101 26.1569 8.58855 26.1663 9.27201C26.1663 12.2741 28.6303 14.5446 31.8448 14.5446C32.7428 14.5606 33.6316 14.3734 34.4365 13.9989C35.2414 13.6245 35.9386 13.0736 36.4696 12.3928L34.9381 11.3383C34.5867 11.7992 34.1218 12.1732 33.5831 12.4284C33.0445 12.6836 32.448 12.8124 31.8448 12.8037C30.9857 12.7999 30.1565 12.507 29.5075 11.978C28.8584 11.4491 28.4325 10.7191 28.3068 9.92041H37.0028L36.9977 9.27201ZM28.3523 8.34811C28.7288 6.81145 30.0354 5.77117 31.6199 5.77117C33.2045 5.77117 34.5085 6.81145 34.8623 8.34811H28.3523ZM19.4819 4.02075C18.7767 4.02131 18.0786 4.1532 17.428 4.4088C16.7773 4.6644 16.187 5.03865 15.6912 5.50992V0.472412H13.581V14.3095H15.6659V13.0317C16.6759 13.992 18.0503 14.5362 19.487 14.5446C20.2323 14.5595 20.9732 14.4344 21.6663 14.1767C22.3595 13.9189 22.9909 13.5337 23.5236 13.0436C24.0563 12.5535 24.4795 11.9684 24.7684 11.3226C25.0573 10.6768 25.2062 9.98328 25.2062 9.2827C25.2062 8.58213 25.0573 7.8886 24.7684 7.24279C24.4795 6.59698 24.0563 6.01187 23.5236 5.52178C22.9909 5.03169 22.3595 4.64648 21.6663 4.38873C20.9732 4.13098 20.2323 4.00587 19.487 4.02075H19.4819ZM19.3303 12.7729C18.5948 12.7761 17.8748 12.574 17.2617 12.1921C16.6486 11.8102 16.17 11.2658 15.8867 10.6279C15.6034 9.98994 15.5281 9.2873 15.6703 8.60909C15.8126 7.93088 16.166 7.30768 16.6858 6.81854C17.2055 6.32941 17.8682 5.99641 18.5896 5.86177C19.311 5.72714 20.0588 5.79696 20.738 6.06236C21.4171 6.32776 21.9971 6.77678 22.4043 7.35245C22.8115 7.92813 23.0275 8.60451 23.025 9.29576C23.0257 9.75171 22.9305 10.2033 22.745 10.6246C22.5595 11.0459 22.2873 11.4286 21.944 11.7508C21.6008 12.073 21.1932 12.3283 20.7446 12.502C20.2961 12.6758 19.8154 12.7646 19.3303 12.7634V12.7729ZM5.80996 12.6779C7.84686 12.6779 9.42886 11.2101 9.42886 9.01076V0.472412H11.6149V14.3095H9.45413V13.0009C8.94932 13.4912 8.34391 13.8802 7.67453 14.1443C7.00516 14.4084 6.28573 14.5422 5.55977 14.5375C2.4185 14.5375 0 12.3857 0 9.12239V0.472412H2.22643V9.02263C2.22643 11.2338 3.74273 12.6779 5.80996 12.6779Z"
                    fill="white"
                  />
                </svg>
              </div>
            </MuiNextLink>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
        sx={{
          color: "primary.main",
          display: { xs: `inline`, md: `none` },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("anchor", true)}
        sx={{
          ".MuiDrawer-paper": {
            bgcolor: "primary.main",
            width: "100%",
            maxWidth: isSmall ? "auto" : 375,
            // maxWidth: 375,
            //display: { md: `none` }
            maxHeight: 812,
          },
          ".MuiBackdrop-root": {
            backgroundColor: "rgba(255,255,255,.6)",
          },
        }}
      >
        {list("right")}
      </SwipeableDrawer>
    </>
  );
};

export default SideDrawer;
