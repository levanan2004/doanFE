import Header from './Components/layout/header'
import Footer from './Components/layout/footer';
import { DataProvider } from './Provider/dataProvider';
import React from 'react';
function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <Footer />
      </DataProvider>
    </>
  );
}
export default App;
