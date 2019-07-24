import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import MyPromise from './promise'

class App extends Component {

  constructor (props) {
    super(props)
    let pro = new MyPromise((resolve) => {
      resolve(1)
    })
    console.log(pro)
    pro.then((res) => {
      console.log(`resolved: ${res}`)
    })

    const fib = (n) => {
      let fibArr = []
      for (let i = 0; i <= n; i++) {
        if (i > 1) {
          fibArr.push(fibArr[i - 1] + fibArr[i - 2])
        } else {
          fibArr.push(i)
        }
      }
      return fibArr
    }
    console.log(fib(10))
  }

  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={Detail} />
        </BrowserRouter>

      </Provider>
    )
  }
}

export default App
