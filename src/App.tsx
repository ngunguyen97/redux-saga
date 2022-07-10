import cityApi from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import { LoginPage } from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  useEffect(() => {
    cityApi.getAll().then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <div>
      <Switch>
        <Route path='/login' component={LoginPage} />

        <PrivateRoute path='/admin'>
          <AdminLayout />
        </PrivateRoute>

        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
