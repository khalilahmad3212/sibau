import React from 'react'
import NavigationBar from '../home/NavigationBar';
import Footer from '../home/Footer';


function MainLayout({ children }) {
  return (
    <main style={{ overflowX: "hidden" }}>
      <NavigationBar />
      <div className=" mt-20 mb-10">
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default MainLayout