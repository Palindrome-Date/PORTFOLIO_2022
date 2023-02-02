import React from 'react';
import { Route, Routes } from 'react-router';
import Users from './component/Users/Users';
import Layout from './component/Layout/Layout';
import User from './component/User/User';

import './App.scss'

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Layout />}>
				   <Route index element={<Users />} />
				   <Route path='user/:id' element={<User />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
