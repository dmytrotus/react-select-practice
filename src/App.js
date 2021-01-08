import React, { Fragment, useRef, useState } from 'react';

import Select from 'react-select';
import { colourOptions } from './data';

function App(){

  const innerRef = useRef(null);

  const makeFocus = () => {
    innerRef.current.focus();
  }

  const disableFocus = () => {
    innerRef.current.blur();
  }

  const[placeholder, setPlaceholder] = useState('Wybierz typ')
  const handleMenuOpen = () => {
    console.log('open')
    setPlaceholder('Zacznij pisać...')
    console.log(innerRef.current)
    //innerRef.current.blur();
  }
  const handleMenuClose = () => {
    console.log('Close')
    setPlaceholder('Wybierz typ')
    console.log(innerRef.current)
    //innerRef.current.blur();
  }

  return(
    <Fragment>
    <Select
    placeholder={placeholder}
    ref={innerRef} 
    options={colourOptions}
    onMenuOpen={handleMenuOpen}
    onMenuClose={handleMenuClose}
    />
    <button onClick={makeFocus}>Focus</button>
    <button onClick={disableFocus}>Disable Focus</button>
    </Fragment>
    )
}

export default App;