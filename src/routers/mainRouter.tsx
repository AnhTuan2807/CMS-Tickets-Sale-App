import React from "react";
import { ReactNode } from "react";

import { routerPageError } from "@view/PageError/router";
import { routerLogin, routerMainPublicPage } from "@view/Login/routerLogin";
import { AppstoreOutlined } from "@ant-design/icons";
import { IRouter } from "./interface";
import {routerHome} from '@view/Home/router'
import { routerQuanLyVe } from "@view/QuanLyVe/routerQuanLyVe";
import { routerDoiSoatVe } from "@view/DoiSoatVe/routerDoiSoatVe";
import { routerGoiDichVu } from "@view/GoiDichVu/routerGoiDichVu";

export const privatePage: IRouter[] = [
  routerHome,
  routerQuanLyVe,
  routerDoiSoatVe,
  routerGoiDichVu,
];

export const publicPage: IRouter[] = [
  routerMainPublicPage,
  routerLogin,
  {
    path: "/login/otp",
    loader: import("@view/Login/LoginByOTP"),
    exact: true,
  },
  {
    path: "/forgotpass",
    loader: import("@view/login/ForgotPass"),
    exact: true,
  },
  {
    path: "/resetPass/:otp",
    loader: import("@view/login/ResetPass"),
    exact: true,
  },
  routerPageError,
];
