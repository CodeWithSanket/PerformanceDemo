import './App.css'
import ButtonWithModal from './ButtonWithModa'
import RefractorComponent from './RefractorComponent'
import SlowComponent from './SlowComponent'

function App() {

  return (
    <>
      <RefractorComponent children = {<div>Hello</div>}>
        <div>
          Something done here
        </div>
        <div>
          Something done here
        </div>
        <SlowComponent />
      </RefractorComponent>
    </>
  )
}

export default App
