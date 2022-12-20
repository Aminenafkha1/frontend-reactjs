import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { makeStyles } from '@mui/styles';
import { Box, LinearProgress } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    minHeight: '100%',
    padding: 3,
  },
}));

const LoadingScreen = () => {
  const classes = useStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={classes.root}>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </div>
  );
};

export default LoadingScreen;
