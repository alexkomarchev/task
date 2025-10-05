import { createBrowserRouter } from 'react-router';
import { Layout } from './Layout';
import { App } from './App';
import { NotFound } from './NotFount';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        { index: true, element: <App /> },
        { path: "*", element: <NotFound /> },
      ]
    },
  ]);