import React, { Component } from 'react'
import { Link, Route, HashRouter as Router } from 'react-router-dom'
import './index.css'
import Frame1 from '../frame1'
export default class index extends Component {
  render() {
    return (
      <Router>
        <div>
            <h1>我是初始化页面</h1>
            <div className="firstPages">
                <Link to="/fame1"> frame页面</Link>
            </div>
            <div>
            {/* <Route path="/"  component={Index} /> */}
            <Route path="/frame1"  component={Frame1} />
          </div>
        </div>
      </Router>
    )
  }
}
