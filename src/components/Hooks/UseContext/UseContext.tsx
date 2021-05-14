import React, {useContext} from 'react';
import {ThemeContext} from '../../../App';

const UseContext: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <section style={theme}>
      我变色了！
    </section>
  );
};

export default UseContext;
