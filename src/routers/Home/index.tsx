import React, { useState } from "react";
import MainTitleComponent from "@shared/components/MainTitleComponent";
import { IModal } from "./interface";
import { useAltaIntl } from "@shared/hook/useTranslate";



const Home = () => {
  // useState và useEffect nên đặt ở đầu  
  const [modal, setModal] = useState<IModal>({
    isVisible: false,
    dataEdit: null,
  });
  const { formatMessage } = useAltaIntl();
  
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='home-menu'>
          <h1>Thống kê</h1>
        </div>
        <div className='home-body-content'>
          <div className='header-title'>
            <span>Doanh thu</span>
            {/* <Calendar /> */}
          </div>

          <div className='body-line-chart'>
              {/* <LineChart /> */}
          </div>

          <div className='body-total'>
            <span>Tổng doanh thu theo tuần</span>
            <div className='total-turnover'>
              <span>525.145.000 </span>đồng
            </div>
          </div>

          <div className='body-circle-chart'>
            {/* <Calendar /> */}
            <div className='circle-chart1'>
              {/* <CircleChart1 /> */}
            </div>
            <div className='circle-chart2'>
              {/* <CircleChart2 /> */}
            </div>
          </div>
        </div>
        <div className='footer-content'></div>
      </div>
    </div>
  );
};

export default React.memo(Home);

