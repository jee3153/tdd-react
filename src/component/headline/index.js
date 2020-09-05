import React, { Component } from "react"

const Headline = (props) => {
  const { header, desc } = props
  if (!header) {
    return null
  }
  return (
    <div data-test="HeadlineComponent">
      <h1 data-test="header">{header}</h1>
      <p data-test="desc">{desc}</p>
    </div>
  )
}

// class Headline extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const { header, desc } = this.props

//     if (!header) {
//       return null
//     }

//     return (
//       <div>
//         <h1>{header}</h1>
//         <p>{desc}</p>
//       </div>
//     )
//   }
// }

export default Headline
