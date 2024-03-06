import React, { useState } from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";
import store from "../../store";
import NavBar from "../NavBar";
import Home from "../Containers/home";

const App = () => {
  const [isAppPublished, setIsAppPublished] = useState(false);
  return (
    <Provider store={store}>
      <Layout>
        {!isAppPublished && (
          <NavBar
            isAppPublished={isAppPublished}
            setIsAppPublished={setIsAppPublished}
          />
        )}
        <div style={{ height: "100%" }}>
          <Home isAppPublished={isAppPublished} />
        </div>
      </Layout>
    </Provider>
  );
};

export default App;
