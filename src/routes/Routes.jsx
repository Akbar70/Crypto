import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { HomePage, RoadMap } from '../pages'
import { paths } from '../constans/Constans'
import Layout from '../layout/Layout'
export const Routes = createBrowserRouter([
{
  path: paths.home,
  element: <Layout/>,
  children:[
    {
      index: true,
      element: <HomePage/>
    },
    {
      path:paths.RoadMap,
      element: <RoadMap/>
    }

  ]
}
])
  

