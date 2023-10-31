import React, { useState } from 'react';
import classnames from 'classnames';

// Components
import Toolbar from './Components/Toolbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Collection from './Components/Collection/Collection';
import Canvas from './Components/Canvas';

// CSS
import './App.scss';

function Stagehand({ setSidebarMode, setCollectionMode, setCanvasMode, setCanvasScreenName }) {
  return (
    <div className="stagehand">
      <button onClick={() => {
        setSidebarMode('default');
        setCollectionMode('default');
        setCanvasMode('default');
        setCanvasScreenName('Home');
      }}>Home (Page)</button>

      <button onClick={() => {
        setSidebarMode('default');
        setCollectionMode('default');
        setCanvasMode('default');
        setCanvasScreenName('Shop');
      }}>Shop (Page)</button>

      <button onClick={() => {
        setSidebarMode('default');
        setCollectionMode('default');
        setCanvasMode('mini');
        setCanvasScreenName('Products');
      }}>Products</button>

      <button onClick={() => {
        setSidebarMode('default');
        setCollectionMode('wide');
        setCanvasMode('pip');
        setCanvasScreenName('Products');
      }}>Products Wide</button>

      {/* <button
        onClick={() => {
          setSidebarMode('wide')
          setCanvasMode('mini')
        }}
      >wide+mini</button>
      <button
        onClick={() => {
          setSidebarMode('default')
          setCanvasMode('default')
        }}
      >default</button>
      <button
        onClick={() => setSidebarMode('default')}
      >
        Sidebar Default
      </button>
      <button
        onClick={() => setSidebarMode('wide')}
      >
        Sidebar Wide
      </button>

      <button
        onClick={() => setCanvasMode('full')}
      >
        Canvas Full
      </button>
      <button
        onClick={() => setCanvasMode('default')}
      >
        Canvas Default
      </button>
      <button
        onClick={() => setCanvasMode('mini')}
      >
        Canvas Mini
      </button>
      <button
        onClick={() => setCanvasMode('pip')}
      >
        Canvas PIP
      </button> */}
    </div>
  )
}

function App() {
  const [sidebarMode, setSidebarMode] = useState('default');
  const [collectionMode, setCollectionMode] = useState('default');
  const [collectionScreen, setCollectionScreen] = useState('products');
  const [canvasMode, setCanvasMode] = useState('mini');
  const [canvasScreenName, setCanvasScreenName] = useState('Products');

  return (
    <div className={
      classnames(
        "wordpress",
      )
    }>
      {/* <Stagehand
        setSidebarMode={setSidebarMode}
        setCollectionMode={setCollectionMode}
        setCanvasMode={setCanvasMode}
        setCanvasScreenName={setCanvasScreenName}
      /> */}

      <Toolbar />

      <Sidebar
        selected="products"
        mode={sidebarMode}
        setSidebarMode={setSidebarMode}
        setCollectionMode={setCollectionMode}
        setCanvasMode={setCanvasMode}
        setCanvasScreenName={setCanvasScreenName}
        setCollectionScreen={setCollectionScreen}
      />

      <Collection
        title="Products"
        mode={collectionMode}
        screen={collectionScreen}
      />

      <Canvas
        mode={canvasMode}
        setMode={setCanvasMode}
        screenName={canvasScreenName}
        // onClick={() => {
        //   if (canvasMode === 'pip' && canvasScreenName === 'Products') {
        //     setCollectionMode('default');
        //     setCanvasMode('mini');
        //   }
        // }}
      />
    </div>
  );
}

export default App;
