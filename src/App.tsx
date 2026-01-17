import './App.css';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { createTheme , colors , ThemeProvider } from '@mui/material';
import { MuiMasonry } from './components/MuiMasonry';
import { MuiResponsiveness } from './components/MuiResponsiveness';
// import { MuiAlert } from './components/MuiAlert';
// import { MuiAvatar } from './components/MuiAvatar';
// import { MuiBadge } from './components/MuiBadge';
// import { MuiBottomNavigation } from './components/MuiBottomNavigation';
// import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
// import { MuiChip } from './components/MuiChip';
// import { MuiDialog } from './components/MuiDialog';
// import { MuiDrawer } from './components/MuiDrawer';
// import { MuiList } from './components/MuiList';
// import { MuiLoadingButton } from './components/MuiLoadingButton';
// import { MuiProgress } from './components/MuiProgress';
// import { MuiSkeleton } from './components/MuiSkeleton';
// import { MuiSnackbar } from './components/MuiSnackbar';
// import { MuiSpeedDial } from './components/MuiSpeedDial';
// import { MuiTooltip } from './components/MuiTooltip';
// import { MuiLink } from './components/MuiLink';
// import { MuiNavbar } from './components/MuiNavbar';
// import { MuiImageList } from './components/MuiImageList';
// import { MuiAccordion } from './components/MuiAccordion';
// import { MuiCard } from './components/MuiCard';
// import { MuiLayout } from './components/MuiLayout';
// import { MuiAutocomplete } from './components/MuiAutocomplete';
// import { MuiRating } from './components/MuiRating';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiCheckbox } from './components/MuiCheckbox';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiButton } from './components/MuiButton';
// import { MuiTypography } from './components/MuiTypography';
// import { MuiTextField } from './components/MuiTextField';

const theme = createTheme({
  status : {
    danger : '#e53e3e'
  } ,
  palette : {
    secondary : {
      main : colors.orange[500] 
    } ,
    neutral : {
      main : colors.grey[500] ,
      darker : colors.grey[700]
    }
  }
}) ;

function App() {
  return (
    <ThemeProvider theme={theme}>

    <LocalizationProvider dateAdapter={AdapterDateFns}>

    <div className="App">
      {/* <MuiTypography/> */}
      {/* <MuiButton/> */}
      {/* <MuiTextField/> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton/> */}
      {/* <MuiCheckbox/> */}
      {/* <MuiSwitch/> */}
      {/* <MuiRating/> */}
      {/* <MuiAutocomplete/> */}
      {/* <MuiLayout/> */}
      {/* <MuiCard/> */}
      {/* <MuiAccordion/> */}
      {/* <MuiImageList/> */}
      {/* <MuiNavbar/> */}
      {/* <MuiLink/> */}
      {/* <MuiBreadcrumbs/> */}
      {/* <MuiDrawer/> */}
      {/* <MuiSpeedDial/> */}
      {/* <MuiBottomNavigation/> */}
      {/* <MuiAvatar/> */}
      {/* <MuiBadge/> */}
      {/* <MuiList/> */}
      {/* <MuiChip/> */}
      {/* <MuiTooltip/> */}
      {/* <MuiAlert/> */}
      {/* <MuiSnackbar/> */}
      {/* <MuiDialog/> */}
      {/* <MuiProgress/> */}
      {/* <MuiSkeleton/> */}
      {/* <MuiLoadingButton/> */}
      {/* <MuiMasonry/> */}
      <MuiResponsiveness/>
    </div>
    </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
