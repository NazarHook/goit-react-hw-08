import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import Layout from '../Layout/Layout';
import './App.module.css';
import { fetchContacts } from '../../redux/contacts/operations';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { selectContacts, selectError, selectLoading } from '../../redux/contacts/selectors';
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute'

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));

function App() {
  const loader = useSelector(selectLoading)

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user please wait...</p>
  ) :  (
    <Layout>
      <Suspense fallback={<Loader></Loader>}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage/>} redirectTo="/login" />
            }
          />
      </Routes>
      </Suspense>
      {loader && <Loader />}
      {/* {error && <ErrorMessage message={error} />} */}
    </Layout>
  );
}

export default App;


