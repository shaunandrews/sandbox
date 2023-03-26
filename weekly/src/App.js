import { useState } from "react";
import classnames from "classnames";

// Components
import UseSupabase from "./UseSupabase";
import ModeSelector from "./ModeSelector";
import Plan from "./Plan";
import Work from "./Work";
import Review from "./Review";

// CSS
import './App.scss';

function App() {
  // Supabase Hooks
  const {
    updates,
    getUpdates,
    deleteUpdate
  } = UseSupabase();

  // State: Mode
  const [mode, setMode] = useState('work');

  return (
    <div className="App">
      <h1>Weekly</h1>
      <ModeSelector
        options={['plan', 'work', 'review']}
        selectedOption={mode}
        setSelectedOption={setMode}
      />
      <div
        className={
          classnames({
            "modes": true,
            "is-plan": mode === 'plan',
            "is-work": mode === 'work',
            "is-review": mode === 'review',
          })
        }
      >
        {mode === 'plan' && <Plan />}
        {mode === 'work' && <Work />}
        {mode === 'review' && <Review />}
        {/* <Plan />
        <Work />
        <Review /> */}
      </div>
    </div>
  );
}

export default App;