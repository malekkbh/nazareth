import React, {useState} from 'react';
import NazarethContext from './nazarethContext';

const NazarethProvider = props => {
  const [cart, setCart] = useState([]);

  const stateValue = {
    cart,
    setCart,
  };

  return (
    <NazarethContext.Provider value={stateValue}>
      {props.children}
    </NazarethContext.Provider>
  );
};

export default NazarethProvider;
