import React from "react"
import PropTypes from "prop-types"
import Header from "./component/header"
import Headline from "./component/headline"
import "./app.scss"

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true,
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header={"Posts"}
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
      </section>
    </div>
  )
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    })
  ),
}

export default App
