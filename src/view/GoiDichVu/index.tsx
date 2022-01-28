import React, { useState } from "react";
import MainTitleComponent from "@shared/components/MainTitleComponent";
import { IModal } from "./interface";
import { useAltaIntl } from "@shared/hook/useTranslate";
import InputSearch from "@shared/components/SearchComponentFull";
import { SearchOutlined } from "@ant-design/icons";


const GoiDichVu = () => {
  // useState và useEffect nên đặt ở đầu  
  const [modal, setModal] = useState<IModal>({
    isVisible: false,
    dataEdit: null,
  });
  const { formatMessage } = useAltaIntl();
  
  return (
    <div className='GoiDichVu'>
        <div className='gdv-container'>
          <div className='gdv-title'>
            <h1>Danh sách gói vé</h1>
          </div>
          <div className='gdv-body-content'>
            <div className='body-title'>
              <div className='gdv-search'>
                <input type='text' placeholder='Tìm bằng số vé' />
                <i className='fas fa-search'></i>
                <SearchOutlined className='icon-control' />
              </div>
              <div className='gdv-filter-container'>
              {/* <FilterModal /> */}
              <div className='export'>Xuất file(.csv)</div>
              <div className='export'>Thêm gói vé</div>
          </div>
            </div>
          </div>     
        </div> 
    </div>
  );
};

export default React.memo(GoiDichVu);