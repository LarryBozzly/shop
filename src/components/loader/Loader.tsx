import './Loader.scss';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Box sx={{ display: 'flex' }}>
        <CircularProgress size={100} thickness={3}  />
      </Box>
    </div>
  );
};

export default Loader;
