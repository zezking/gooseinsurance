import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppContainer from './src/AppContainer';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
