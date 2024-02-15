import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import UserProfile from "./Pages/UserProfile";
import CreatePost from "./Pages/CreatePost";
import EditPost from "./Pages/EditPost";
import CategoryPosts from "./Pages/CategoryPosts";
import AuthorPosts from "./Pages/AuthorPosts";
import Dashboard from "./Pages/Dashboard";
import Logout from "./Pages/Logout";
import Authors from "./Pages/Authors";
import Home from "./Pages/Home";
import PostDetails from "./Pages/PostDetails";
import Register from "./Pages/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "posts/:id", element: <PostDetails /> },
			{ path: "register", element: <Register /> },
			{ path: "login", element: <Login /> },
			{ path: "Profile/:id", element: <UserProfile /> },
			{ path: "authors", element: <Authors /> },
			{ path: "create", element: <CreatePost /> },
			{ path: "posts/categories/:category", element: <CategoryPosts /> },
			{ path: "posts/:user/:id", element: <AuthorPosts /> },
			{ path: "myposts/:id", element: <Dashboard /> },
			{ path: "posts/:id/edit", element: <EditPost /> },
			{ path: "Logout", element: <Logout /> }
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
