import { Box } from "@mui/material";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
//   backgroundColor: theme.status.danger,
//   backgroundColor: theme.palette.neutral?.main,
  backgroundColor: theme.palette.neutral?.darker
}));

export const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          // bgcolor : 'primary.main' ,
          // bgcolor : 'secondary.main' ,
          // bgcolor : 'secondary.light' ,
          bgcolor: "secondary.dark",
        }}
      ></Box>
      <StyledBox  />
    </>
  );
};
