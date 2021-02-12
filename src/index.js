import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MemeGenerator from "./MemeGenerator";
import reportWebVitals from "./reportWebVitals";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HistoryMemes from "./components/HistoryMemes";
import styles from "./mystyle.module.css";

ReactDOM.render(
  <React.StrictMode>
    <div className={styles.header}> Meme Creator </div>

    <Tabs className={styles.tabs}>
      <TabList>
        <Tab>Home</Tab>
        <Tab>Memes History</Tab>
      </TabList>

      <TabPanel>
        <MemeGenerator />
      </TabPanel>
      <TabPanel>
        <HistoryMemes />
      </TabPanel>
    </Tabs>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
