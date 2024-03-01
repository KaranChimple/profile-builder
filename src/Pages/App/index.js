import React, { Component } from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";
import store from "../../store";
import NavBar from "../NavBar";
import Home from "../Containers/home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <NavBar />
          <div style={{ height: "100%", flex: 1 }}>
            <Home />
          </div>
        </Layout>
      </Provider>
    );
  }
}

export default App;
