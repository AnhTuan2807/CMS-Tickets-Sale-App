import { IRouter } from "@routers/interface"

export const routerDoiSoatVe: IRouter = {
  path: "/DoiSoatVe",
  loader: import("./index"),
  exact: true,

};