import './App.css'

import { Sprig } from './main'

function eventTriggerButtonClick() {
  Sprig.identifyAndTrack({eventName: 'buttonClick'});
}

function App() {
  return (
    <>
      <section id="center">
        <button
          type="button"
          className="event-trigger"
          onClick={eventTriggerButtonClick}
        >
          Event Trigger
        </button>
      </section>
    </>
  )
}

export default App
