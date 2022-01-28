import { IRouter } from "@routers/interface"

export const routerGoiDichVu: IRouter = {
  path: "/GoiDichVu",
  loader: import("./index"),
  exact: true,

};