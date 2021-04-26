/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { throttle } from '../../utils/utils';
import './index.scss';


function _Index(props) {

    const history = useHistory();
    // 初始化所有数据
    async function initFn(type) {


    }

    useEffect(() => {
        initFn();
    }, [])


    // 滚动到底部的事件
    const [req, setReq] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [list, setList] = useState([]);

    const scrollFn = throttle(async (h, p, api, params) => {
        console.log(h);
        if (h) {
            if (total > 10 && list.length !== total && !req) {
                if (total === list.length) {
                    console.log('buttom');
                    return
                }
                setReq(true)
                let res = await api({ ...params, page: page + 1 });
                if (res) {
                    setList([...list, ...res.list]);
                    setPage(page + 1);
                    setTotal(res.total);

                    setReq(false)
                }
            }

        }
    }, 10, true);



    return (
        <div className='demo' onScroll={(e) => { scrollFn(e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight, e.target.scrollTop) }}>
            <div style={{ height: '1000px' }}>suqare</div>
        </div>
    )
}
export default _Index