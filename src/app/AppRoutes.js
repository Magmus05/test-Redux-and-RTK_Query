import React from 'react'
import { Route, Routes } from "react-router-dom";
import PostsList from "../entities/PostsList";
import NotFound from '../pages/NotFound'
import PostPage from "../pages/PostPage";
function AppRoutes() {
	return (
		<Routes>
		<Route path="/" element={<PostsList />} />
		<Route path="/:id" element={<PostPage />} />
		<Route path="*" element={<NotFound />}></Route>
	</Routes>
	)
}

export default AppRoutes