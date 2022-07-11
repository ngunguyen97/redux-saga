import { Button } from '@material-ui/core';
import cityApi from 'api/cityApi';
import { useAppDispatch } from 'app/hooks';
import { NotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import { authActions } from 'features/auth/authSlice';
import { LoginPage } from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    cityApi.getAll().then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <>
      <Button variant='contained' color='primary' onClick={() => dispatch(authActions.logout())}>
        Logout
      </Button>
      <Switch>
        <Route path='/login' component={LoginPage} />

        <PrivateRoute path='/admin'>
          <AdminLayout />
        </PrivateRoute>

        <Route path='*' component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
