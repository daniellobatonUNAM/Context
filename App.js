import React from 'react';
import Navigation from './Navigation';
import { Provider } from './src/context/BlogContext';


export default function App() {

  return (

    <Provider>
      
      <Navigation/>

    </Provider>

  );
}