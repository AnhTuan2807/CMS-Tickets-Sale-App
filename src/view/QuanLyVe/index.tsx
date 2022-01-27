import React, { useState } from "react";
import MainTitleComponent from "@shared/components/MainTitleComponent";
import { IModal } from "./interface";
import { useAltaIntl } from "@shared/hook/useTranslate";
import InputSearch from "@shared/components/SearchComponentFull";


const QuanLyVe = () => {
  // useState và useEffect nên đặt ở đầu  
  const [modal, setModal] = useState<IModal>({
    isVisible: false,
    dataEdit: null,
  });
  const { formatMessage } = useAltaIntl();
  
  return (
    <div className='QuanLyVe'>
        <div className='qlv-container'>
          <div className='qlv-title'>
            <h1>Danh sách vé</h1>
          </div>
          <div className='qlv-body-content'>
            <div className='body-title'>
              <div className='qlv-search'>
                <input type='text' placeholder='Tìm bằng số vé' />
                <i className='fas fa-search'></i>
              </div>
              <div className='qlv-filter-container'>
                <div className='filter' >
                  <i className='fas fa-filter'></i>Lọc vé
                </div>
              {/* <FilterModal /> */}
              <div className='export'>Xuất file(.csv)</div>
          </div>
            </div>
          </div>     
        </div> 
    </div>
  );
};

export default React.memo(QuanLyVe);