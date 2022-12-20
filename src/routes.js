import React, { Suspense, Fragment, lazy } from "react";
import { Routes, redirect, Route, Navigate, Outlet, Switch, Redirect } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import AuthGuard from "./components/AuthGuard";
import GuestGuard from "./components/GuestGuard";
import SwitchGuard from "./components/SwitchGuard";
import Userlayout from "./layouts/UserLayout/Userlayout";
import Login from "./pages/Auth/login/Login";
import Register from "./pages/Auth/register/Register";
import NotFound from "./pages/Auth/NotFound";
import Profile from "./pages/Profile/Profile";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>

  <Switch>
    {routes.map((route, i) => {
      const Guard = route.guard || Fragment;
      const Layout = route.layout || Fragment;
      const Component = route.component;

      return (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <Guard>
              <Layout>
                {route.routes ? renderRoutes(route.routes) : <Component {...props} />}
              </Layout>
            </Guard>
          )}
        />
      );
    })}
  </Switch>
  </Suspense>


  //V6
  // <Routes>
  //   {/* <Route
  //     path=""
  //     element={
  //       <GuestGuard>
  //         <Fragment> </Fragment>
  //       </GuestGuard>
  //     }
  //   > */}
  //     <Route index path="login" element={<Login />} />

  //     <Route path="signup" element={<Home />} />
  //   {/* </Route> */}

  //   <Route path="*" element={<NotFound />} />
  //   {/* <Route path="404" element={<Navigate to="/login" />} /> */}

  //   {/* protected routes */}
  //   <Route
  //     path="dashboard"
  //     element={
  //       <AuthGuard>
  //         <Userlayout></Userlayout>
  //       </AuthGuard>
  //     }
  //   >
  //     <Route path="profile" element={<Profile />} />
  //     <Route index element={<Home />} />
  //     <Route path="*" element={<NotFound />} />

  //     {/* <Route path="profile" element={<Outlet />}>
  //               <Route path="/" element={<ViewUserProfile />} />
  //               <Route path="create" element={<CreateUserProfile />} />
  //               <Route path="update" element={<UpdateUserProfile />} />
  //             </Route> */}
  //   </Route>
  // </Routes>
);

const routes = [
  {
    exact: true,
    path: "/404",
    component: () => <Redirect to="/" />,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: "/login",
    component: lazy(() => import("./pages/Auth/login/Login")),
  },
  {
    exact: true,
    guard: GuestGuard,
    path: "/signup",
    component: lazy(() => import("./pages/Auth/register/Register")),
  },
  {
    exact: true,
    guard: SwitchGuard,
    path: "/switch",
    component: lazy(() => import("./pages/Auth/Switch")),
  },
  {
    path: "/",
    guard: AuthGuard,
    layout: Userlayout,
    routes: [
      {
        exact: true,
        path: "/profile",
        component: lazy(() => import("./pages/Profile/Profile")),
      },
      {
        exact: true,
        path: "/",
        component: lazy(() => import("./pages/Quizzes/Quizzes")),
      },
      {
        path: "*",
        component: lazy(() => import("./pages/Auth/NotFound")),
      },
    ],
  },
];

export default routes;
