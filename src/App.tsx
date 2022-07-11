import { NotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import { LoginPage } from 'features/auth/pages/LoginPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={LoginPage} />

        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>

        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
