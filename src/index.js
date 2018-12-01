import React from 'react';
import ReactDom from 'react-dom';

const Header = ({message}) => {
  return(
    <h2 className="Header text-center">
      {message}
    </h2>
  );
};
//validation with propTypes
Header.propTypes = {
  message: React.PropTypes.string
};

const App = () =>{
  return (
    <div className="App">
      <Header message="Naming contest"/>
      <div>
      ...
      </div>
    </div>
  );
};

ReactDom.render(
  <App />,
  document.getElementById('root')
);