import React, { Component } from 'react'
import uuid from 'uuid'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Login from './components/Login'
import Registration from './components/Registration'
import { BrowserRouter as Routes ,  Switch, Route } from 'react-router-dom'
import Todo from './components/Todo'

function App() {
		return (
			
			<div>
			
			
			<Routes>
			  		<Switch>
					  <Route  exact path="/" component={Registration}></Route>
					<Route path="/login" component={Login}></Route>
					<Route path="/todo" component={Todo}></Route>
					</Switch>
					
   		 	</Routes>
  		
				</div>
		)
		}
		
export default App;
