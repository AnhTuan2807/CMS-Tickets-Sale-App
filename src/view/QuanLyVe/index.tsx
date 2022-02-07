import React, { useState } from "react";
import MainTitleComponent from "@shared/components/MainTitleComponent";
import { IModal } from "./interface";
import { useAltaIntl } from "@shared/hook/useTranslate";
import InputSearch from "@shared/components/SearchComponentFull";
import { SearchOutlined } from "@ant-design/icons";
import { Filter } from "@assets/svg";
import firebase from "../../config/firebaseConfig";

const QuanLyVe = () => {
  // useState và useEffect nên đặt ở đầu  

  // 28/01
  // const [data, setData] = useState([])
  // const [modalShow, setModalShow] = useState(false)
  // //Lọc vé theo status
  // const ref = firebase.collection('ticket')
  // const filterStatus = (status: String) => {
  //   ref.where('status', '==', status).onSnapshot((querySnapshot) => {
  //     const tickets: any = []
  //     querySnapshot.forEach((doc) => {
  //       tickets.push(doc.data())
  //     })
  //     setData(tickets)
  //   })
  // }

  // const statusValue = (status: any) => {
  //   if (status !== '') {
  //     filterStatus(status)
  //   } else {
  //     setData(ticketData.tickets)
  //   }
  // }

  // useEffect(() => {
  //   fetchTickets()
  // }, [])

  // useEffect(() => {
  //   setData(ticketData.tickets)
  // }, [ticketData.tickets])
  // const [modal, setModal] = useState<IModal>({
  //   isVisible: false,
  //   dataEdit: null,
  // });
  // const { formatMessage } = useAltaIntl();
  
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
                {/* <i className='fas fa-search'></i> */}
                <SearchOutlined className='icon-control' />
              </div>
              <div className='qlv-filter-container'>
                <div className='filter' >
                  <img src={Filter}></img> Lọc vé
                </div>
              {/* <FilterModal /> */}
              <div className='export'>Xuất file(.csv)</div>
              {/* <div className='body-table'>
                <table>
                  <tr>
                    <th>STT</th>
                    <th>Booking code</th>
                    <th>Số vé</th>
                    <th>Tình trạng sử dụng</th>
                    <th>Ngày sử dụng</th>
                    <th>Ngày xuất vé</th>
                    <th>Cổng check-in</th>
                    <th></th>
                  </tr>
                  {data && data.length
                    ? data.map((item: any, index: any) => {
                        return (
                          <tr key={index} className='row-table'>
                            <td>{index + 1}</td>
                            <td>{item.bookingcode}</td>
                            <td>{item.ticketId}</td>
                            <td
                              className={
                                item.status && item.status === 'Chưa sử dụng'
                                  ? 'unused'
                                  : item.status === 'Đã sử dụng'
                                  ? 'used'
                                  : 'expired'
                              }
                            >
                              <i className='fas fa-circle'></i>
                              {item.status}
                            </td>
                            <td>{item.ticketDate}</td>
                            <td>{item.ticketReleaseDate}</td>
                            <td>{item.checkin}</td>
                            <th>
                              {item.status === 'Chưa sử dụng' ? (
                                <i className='fas fa-ellipsis-v'></i>
                              ) : (
                                ''
                              )}
                            </th>
                          </tr>
                        )
                      })
                    : ''}
                </table> */}
              {/* </div> */}
          </div>
            </div>
          </div>     
        </div> 
    </div>
  );
};

export default React.memo(QuanLyVe);