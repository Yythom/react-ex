/* eslint-disable no-undef */
import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from '../../redux/actionCreator'
import { connect } from 'react-redux';
import Header from '../header/header';
import './BaseLayout.scss';
import 'animate.css';
import { getInfoApi } from '../../api/api'
//路由
import router from '../../router/router';
import TabBar from './tabBar/TabBar';
import { useEffect } from 'react';
import { message } from 'antd';
import { getCookie, getAddress } from '../../utils/utils';

function _Layout(props) {
    const history = useHistory();
    let path = history.location.pathname;

    useEffect(() => {
        console.log('layout loading');
        if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
            props.setBrowser('other');

            // props.setBrowser('wx');
        } else if (navigator.userAgent.toLowerCase().indexOf('alipayclient') !== -1) {
            // props.setBrowser('zfb');
            props.setBrowser('other');
        } else {
            props.setBrowser('other');
        }
        // let index = props.location.pathname === '/integral' || props.location.pathname === '/integral/';
        // if (!index) {
        //     if (!localStorage.getItem('info') && !props.userStore) history.push('/integral')
        // }
        // getLocation();

    }, [])




    return (
        <div className='layout animate__fadeIn animate__animated'>
            {
                // history.location.pathname !== '/integral'&&  不需要显示header的页面
                // ?
                <Header />
                //  : null
            }
            { // 路由组件
                Object.values(router).map(e => {
                    return (
                        <Route path={e.url} exact component={e.page} key={'/integral' + e.url} />
                    )
                })

            }

            {
                <TabBar />
            }

        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(_Layout)