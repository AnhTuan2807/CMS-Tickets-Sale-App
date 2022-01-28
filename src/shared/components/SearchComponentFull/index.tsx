import React from 'react';
import { AudioOutlined, SearchOutlined } from '@ant-design/icons'
import { icons } from 'antd/lib/image/PreviewGroup';
import "./style.scss"

export default function InputSearch(props:any) {
const {placeholder} = props


return (
    <div className='input-group flex'>
        <input  className='input-control'
        placeholder= "Search"
        />
        <SearchOutlined className='icon-control' />
    </div>
    )
}