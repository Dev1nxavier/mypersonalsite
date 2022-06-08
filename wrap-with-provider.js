const React = require("react")
const { Provider } = require("react-redux")

const createStore = require("./src/state/createStore")
const store = createStore()

export default ({ element }) => {
  return (
    <Provider store={store}>
      {element}
    </Provider>
  )
}