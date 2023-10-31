import React, { useState, createContext, useContext } from 'react';

import Stack from './Components/Base/Stack';
import Button from './Components/Base/Button';
import Sidebar from './Components/Sidebar/Sidebar';

import './App.scss';

function Toolbar() {
  const section = useContext(SectionContext);
  const screen = useContext(ScreenContext);
  return (
    <Stack
      direction="horizontal"
      className="toolbar"
      centered
    >
      <div className="toolbar__site">
        <img src="https://picsum.photos/42" alt="logo" />
      </div>
      <div className="toolbar__document">
        <Button>{section} / {screen}</Button>
      </div>
      <Stack
        direction="horizontal"
        gap="small"
        className="toolbar__actions"
      >
        <Button type="primary" icon="content">Save</Button>
        <Button>Inspect</Button>
        <Button icon="more" style="icon-only">Options</Button>
      </Stack>
    </Stack>
  );
}

function Canvas() {
  return (
    <div className="canvas">
      <Stack
        direction="horizontal"
        gap="small"
        className="canvas__tabs"
      >
        <Button>Display</Button>
        <Button>Variations</Button>
        <Button>Properties</Button>
      </Stack>
      <div className="canvas__content">
        <img src="https://picsum.photos/800/600" alt="canvas" />
      </div>
    </div>
  );
}

export const SectionContext = createContext("WooCommerce");
export const ScreenContext = createContext("WooCommerce");

function App() {
  
  return (
    <SectionContext.Provider value="WooCommerce">
      <ScreenContext.Provider value="WooCommerce">
        <div className="app">
          <Toolbar />

          <Stack
            direction="horizontal"
            gap="none"
            className="main"
          >
            <Sidebar />

            <Canvas />
          </Stack>
        </div >
      </ScreenContext.Provider >
    </SectionContext.Provider >
  );
}

export default App;
