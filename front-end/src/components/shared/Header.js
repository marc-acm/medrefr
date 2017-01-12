import React, { Component } from 'react'
import '../../css/style.css'
import logo from '../../../assets/img/Logo-1.png'
import AppBarExampleComposition from './AppBar'

// const style = {
//   position: 'fixed',
//   zIndex: '1000'
// }

class Header extends Component {
    render(){
        return(
          <div className="App-header" >
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <AppBarExampleComposition title="MedRefer"/>
            {/* <h2>Welcome to MedRefer powered by React and Material UI</h2>
            <p>Telehealth for Psychiatry</p> */}
          </div>
        )
    }
}

export default Header
