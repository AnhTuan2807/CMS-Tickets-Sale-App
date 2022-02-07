import React, { useState } from "react";
import MainTitleComponent from "@shared/components/MainTitleComponent";
import { IModal } from "./interface";
import { useAltaIntl } from "@shared/hook/useTranslate";
import InputSearch from "@shared/components/SearchComponentFull";
import { SearchOutlined } from "@ant-design/icons";


const DoiSoatVe = () => {
  // useState và useEffect nên đặt ở đầu  
  const [modal, setModal] = useState<IModal>({
    isVisible: false,
    dataEdit: null,
  });
  const { formatMessage } = useAltaIntl();
  
  return (
    <div className='DoiSoatVe'>
        <div className='dsv-container'>
          <div className='dsv-title'>
            <h1>Đối soát vé</h1>
          </div>
          <div className='dsv-body-content'>
            <div className='body-title'>
              <div className='dsv-search'>
                <input type='text' placeholder='Tìm bằng số vé' />
                {/* <i className='fas fa-search'></i> */}
                <SearchOutlined className='icon-control' />
              </div>
              <div className='dsv-filter-container'>
              {/* <FilterModal /> */}
              <div className='export'>Chốt đối soát</div>
          </div>
            </div>
          </div>     
        </div> 
    </div>
  );
};

export default React.memo(DoiSoatVe);