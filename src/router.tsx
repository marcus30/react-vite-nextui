import {
    createBrowserRouter,
  } from 'react-router-dom';
import Ready from './components/Ready';
import Player from './components/Player';
import One from './components/One';

const router = createBrowserRouter([
    {
        path: "/",
        element: Ready(),
    },
    {
        path: "/section-one",
        element: Ready(),
    },
    {
        path: "/section-two",
        element: Player(),
    },
    {
        path: "/section-three",
        element: One(),
    },
]);

export default router