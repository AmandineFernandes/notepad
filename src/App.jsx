/* eslint-disable react/prop-types */
import { useState } from 'react'
import MarkdownInput from './components/MarkdownInput';

import './App.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [MarkdownContent, setMarkdownContent] = useState('');
  
  // eslint-disable-next-line no-unused-vars
  const handleMarketdownChange = (content) => {
    setMarkdownContent(content); 
  };

  return (
    <>
      <div className='note-1'>
        <h2>Ma première note</h2>
        <h4>Courses</h4>
        <ul>
          <li>Papier toilette</li>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <li>Pack d'eau</li> 
          <li>Carottes ...</li>
        </ul>
      </div>

      <div className='note-2'>
        <h4>Recettes</h4>
          <p>Bo bun aux crevettes 
          Crevettes décortiquées (à consommer de préférence entre août et octobre)
          Pousses de soja
          Purée de cahuète sans sucre 
          Citron jaune ...</p>
      </div>
      <MarkdownInput />
      
    </>
  )
}

export default App
