import React, { useState } from 'react'
import { mapStateToProps, mapDispatchToProps } from './redux/actionCreator'
import { connect } from 'react-redux'

// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom'


//路由
// import router from './router/router'

//布局组件
import BaseLayout from './component/layout/BaseLayout'

import { useEffect } from 'react'
import { Button, Input, message } from 'antd'
import Modal from 'antd/lib/modal/Modal'

function _App(props) {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [url, setUrl] = useState('');
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (value) => {
        function IsURL(str_url) {
            var strRegex = '^((https|http|ftp|rtsp|mms)?://)'
                + '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' //ftp的user@ 
                + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184 
                + '|' // 允许IP和DOMAIN（域名） 
                + '([0-9a-z_!~*\'()-]+.)*' // 域名- www. 
                + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名 
                + '[a-z]{2,6})' // first level domain- .com or .museum 
                + '(:[0-9]{1,4})?' // 端口- :80 
                + '((/?)|' // a slash isn't required if there is no file name 
                + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
            var re = new RegExp(strRegex);
            return re.test(str_url);
        }
        if (IsURL(value)) {
            message.error('url不正确');
            return
        }
        let _url = `http://www.nxflv.com/?url=${value}`.trim();
        window.location.href = _url
    };

    const p = new URLSearchParams(window.location.search);

    return (
        <div className='ifr'  >
            <Modal className='modal' title={null} closable={false} visible={isModalVisible} onOk={handleOk} footer={null} >
                <Input className='video_input' placeholder='打爆西西头头' onBlur={(e) => {
                    handleOk(e.currentTarget.value);
                }} />
            </Modal>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(_App)
