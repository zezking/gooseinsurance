import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import AppContainer from './src/AppContainer';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
