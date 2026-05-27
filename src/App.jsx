import './App.css'

import { Sprig } from './main'

function buttonClick() {
  Sprig.identifyAndTrack({eventName: 'buttonClick'});
}

function App() {
  return (
    <>
      <section id="center">
        <button
          type="button"
          className="event-trigger"
          onClick={buttonClick}
        >
          Event Trigger
        </button>
      </section>
    </>
  )
}

export default App
