import { IRouter } from "@routers/interface"

export const routerQuanLyVe: IRouter = {
  path: "/QuanLyVe",
  loader: import("./index"),
  exact: true,
  // routes: [
  //   {
  //     path: "/",
  //     loader: import("@view/QuanLyVe"),
  //     exact: true,
  //   },
  // ],
};