import { observer } from "mobx-react"
import React, { createElement, StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { store } from "./store"

let Main = observer(() => {
  return <div>
    <div>count: {store.count}</div>
    <button onClick={()=>{store.inc()}}>inc</button>
  </div>
})

function render(comp: React.JSX.Element){
  let root0 = document.createElement('div')
  let root = ReactDOM.createRoot(root0)
  document.body.appendChild(root0)
  root.render(comp)
}

render(<Main />)