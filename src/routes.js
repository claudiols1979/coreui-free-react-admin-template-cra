import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// Base
const AskToPdf = React.lazy(() => import('./views/base/ask-to-pdf/Ask_to_pdf'))
const Disclaimer = React.lazy(() => import('./views/base/disclaimer/Disclaimer'))
const Support = React.lazy(() => import('./views/base/support/Support'))
const Howto = React.lazy(() => import('./views/base/howto/Howto'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/base', name: 'Base', element: AskToPdf, exact: true },
  { path: '/base/ask-to-pdf', name: 'Asktopdf', element: AskToPdf },
  { path: '/base/disclaimer', name: 'Disclaimer', element: Disclaimer },
  { path: '/base/support', name: 'Support', element: Support },
  { path: '/base/howto', name: 'Howto', element: Howto },
]

export default routes
