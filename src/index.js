import React from 'react'
import { render } from 'react-dom'
import 'fabric-webpack'

import Canvas from './Canvas'
import Rectangle from './Rectangle'




const App = () => (
  <div>
    <Canvas>
      
      <Rectangle width={40} height={40} fill="red" />
    </Canvas>
  </div>
)

render(<App />, document.getElementById('root'))
