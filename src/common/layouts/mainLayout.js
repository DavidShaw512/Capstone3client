import React from 'react'

import Header from '../header/header'

import './mainLayout.css'

const MainLayout = ({ children }) => {
    return (
        <div className="App">
          <Header />
          <main className="mainContent">
            {children}
          </main>
        </div>

    )
}

export default MainLayout;