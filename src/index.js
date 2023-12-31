import React from 'react';
import ReactDOM from 'react-dom/client';
import AppPhoneBook from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <AppPhoneBook />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
