import React from 'react'
import { Route, Routes } from "react-router-dom";
import PostsList from "../entities/PostsList";
import NotFound from '../pages/NotFound'
import PostPage from "../pages/PostPage";
function AppRoutes() {
	return (
		<Routes>
		<Route path="test-react-and-rtk-query/" element={<PostsList />} />
		<Route path="test-react-and-rtk-query/:id" element={<PostPage />} />
		<Route path="test-react-and-rtk-query/*" element={<NotFound />}></Route>
	</Routes>
	)
}

export default AppRoutes