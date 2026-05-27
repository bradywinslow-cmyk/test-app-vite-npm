import './App.css'

import { Sprig } from './main'

function eventTriggerButtonClick() {
  Sprig.track({eventName: 'eventTriggerButtonClick'});
}

function eventTriggerButtonClick2() {
  Sprig.track({eventName: 'eventTriggerButtonClick2'});
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

        <button
          type="button"
          className="event-trigger-2"
          onClick={eventTriggerButtonClick2}
        >
          Event Trigger 2
        </button>
      </section>
    </>
  )
}

export default App
