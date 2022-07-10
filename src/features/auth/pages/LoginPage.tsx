import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
}));

export function LoginPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper>
        <Typography variant='h5' component='h1'>
          Student Management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant='contained' color='primary'>
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}