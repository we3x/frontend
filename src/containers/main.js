import React from 'react';
import Layout from '../components/layout';
import Login from '../components/auth/login';
import Cluster from '../components/cluster';
import Service from '../components/service';
import Register from '../components/register/register';
import Confirm from '../components/confirm/confirm';
import Provision from '../components/provision';
import Profile from '../components/profile';
import { requireAuth } from '../utils';
import { Router } from 'react-router';
import { history } from '../constants';


const routes = {
  component: 'div',
  childRoutes: [
    {
      path: '/',
      component: Layout,
      onEnter: requireAuth,
      childRoutes: [
        Cluster,
        Service,
        Provision,
        Profile,
      ],
    },
    {
      path: '/login/',
      component: Login,
    },
    {
      path: '/register/',
      component: Register,
    },
    {
      path: '/confirm/:uuid/',
      component: Confirm,
    },
  ],
};

function Main() {
  return (
    <Router history={history} routes={routes} />
  );
}

export default Main;
