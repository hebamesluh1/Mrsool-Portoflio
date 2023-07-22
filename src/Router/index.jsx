import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/index';
import About from '../pages/About/index';
import Contact from '../pages/Contact/index';
import ForBusiness from '../pages/ForBusiness/index';

const Router = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />

      <Route
        path='/about'
        element={<About />}
      />

      <Route
        path='/contact'
        element={<Contact />}
      />

      <Route
        path='/business'
        element={<ForBusiness />}
      />

    </Routes>
  )
}

export default Router