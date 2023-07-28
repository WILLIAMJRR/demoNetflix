/* eslint-disable react-refresh/only-export-components */
import "./index.css";
import HelpPage from "../../pages/help/HelpPage";
import { createBrowserRouter } from "react-router-dom";
import Layout from "/src/layout/Layout";
import LayoutPrivate from "/src/layout/LayoutPrivate";
import { lazy, Suspense } from "react";
import Loading from "../../components/loading/Loading";

const Login = lazy(() => import("../../pages/login/LoginPage"));

const Signup = lazy(() => import("../../pages/Signup/SignupPage"));

const Netflix = lazy(() => import("../../pages/netflix/Netflix"));

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: (
						<Suspense fallback={<Loading/>}>
							<Signup />
						</Suspense>
					),
				},
				{
					path: "/login",
					element: (
						<Suspense fallback={<Loading />}>
							<Login />
						</Suspense>
					),
				},
			],
		},
		{
			path: "/netflix",
			element: <LayoutPrivate />,
			children: [
				{
					index: true,
					element: (
						<Suspense fallback={<Loading/>}>
							<Netflix />
						</Suspense>
					),
				},
			],
		},

		{
			path: "/help",
			element: <HelpPage />,
		},
	],
	[
		{
			path: "*",
			element: <h1>404</h1>,
		},
	],
);
