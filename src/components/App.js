
import React from "react";
import './../styles/App.css';
import {Provider} from "react-redux";
import store from "./store";
import UserForm from "./UserForm";



const App = () => {
  return (

      <Provider store={store}>
        <div>
          <UserForm />
        </div>
      </Provider>
  )
}

export default App;
