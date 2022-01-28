import React, { memo, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { privatePage } from "@routers/mainRouter";
import MenuItem from "./ItemMenu";
import CheckPermission from "@shared/hoc/CheckPermission";
import { logo } from "@shared/assets/images";
import { TrangChu, QuanLyVe, DoiSoatVe, CaiDat } from "@shared/assets/svg";
import { UilAngleRight } from '@iconscout/react-unicons'
import { IRouter } from "@routers/interface";

interface IRenderMenuProps {
  listNav: Array<IRouter>;
  location: string;
}

const _RenderMenu: React.FC<IRenderMenuProps> = (props: IRenderMenuProps) => {
  // cắt home ra
  const listNav = props.listNav.slice(1, props.listNav.length + 1);
  return (
    <>
      {listNav.map((item: IRouter, index) => {
        if (item.menu == null || item.menu?.hideInNavbar) {
          return <React.Fragment key={index}></React.Fragment>;
        } else if (item.permissionCode) {
          return (
            <CheckPermission permissionCode={item.permissionCode} key={index}>
              <MenuItem data={item} key={index} />
            </CheckPermission>
          );
        } else {
          return <MenuItem data={item} key={index} />;
        }
      })}
    </>
  );
};

const RenderMenu = memo(_RenderMenu);


const SiderComponent: React.FC<{ className: string, setClassName: (className: string) => void }> = (props) => {
  const location = useLocation();
  const { className, setClassName } = props;
  const [width, setWidth] = useState<string | number>()
  const onClick = (e) => {
    setClassName("sider-component big");
    e.preventDefault();
    e.stopPropagation();
  }

  useEffect(() => {
    // if (className == "sider-component") {
    //   setWidth(0)
    // } else {
      
    // }
    setWidth("100%")
  }, [className])

  return (
    <div className={className} onClick={onClick}>
      <div className="icon" >
        <UilAngleRight color="#2F67BA" />
      </div>
      <div className="mask" style={{ width }}>
        <div className="logo">
          <img src={logo} alt="logo" width="133px" height="58px"/>
        </div>
        <div className="menu">
          <RenderMenu listNav={privatePage} location={location.pathname} />
          <div className="sidebar-sidebar-menu">
            <ul className="sidebar-menu">
                <li className='sidebar has-child'>
                    <NavLink to='/'><img src={TrangChu} /> Trang chủ </NavLink>
                </li>
                <li className="sidebar has-child">
                    <NavLink to='/QuanLyVe'><img src={QuanLyVe} /> Quản lý vé </NavLink>
                </li>
                <li className="sidebar has-child">
                    <NavLink to='/DoiSoatVe'><img src={DoiSoatVe} /> Đối soát vé </NavLink> 
                </li>
                <li className="sidebar has-child">
                    <NavLink to='/'><img src={CaiDat} /> Cài đặt </NavLink>
                    <ul className="sidebar has-child menu-sub" >
                        <li>
                            <NavLink to='/GoiDichVu'> Gói dịch vụ </NavLink>
                        </li>
                    </ul> 
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiderComponent;
