import React, { useEffect, useState } from 'react'
import { Button, Drawer } from 'antd'
import dayjs from 'dayjs'
import './error.scss'

function _App(props) {
    const [list, setList] = useState([])
    const [_list, set_List] = useState([])

    useEffect(() => {
        let i = localStorage.getItem('_data')
        if (!i) {
            localStorage.setItem('_data', `[{"category":"lifecycle","type":"Page On Show","data":{"path":"pages/index/index","query":{}},"level":"info","time":1618299765845,"page":"pages/index/index"},{"type":"Console","category":"debug","data":{"args":["10889563535280672 is beyond boundary when transfer to integer, the results may not be accurate"],"level":"warn"},"level":"warning","time":1618299766783,"page":"pages/index/index"},{"type":"Console","category":"debug","data":{"args":["10889563535280672 is beyond boundary when transfer to integer, the results may not be accurate"],"level":"warn"},"level":"warning","time":1618299766783,"page":"pages/index/index"},{"type":"Console","category":"debug","data":{"args":["10889563535280672 is beyond boundary when transfer to integer, the results may not be accurate"],"level":"warn"},"level":"warning","time":1618299766789,"page":"pages/index/index"},{"type":"Console","category":"debug","data":{"args":["10889563535280672 is beyond boundary when transfer to integer, the results may not be accurate"],"level":"warn"},"level":"warning","time":1618299766790,"page":"pages/index/index"},{"type":"Console","category":"debug","data":{"args":["10889563535280672 is beyond boundary when transfer to integer, the results may not be accurate"],"level":"warn"},"level":"warning","time":1618299766876,"page":"pages/index/index"},{"type":"Console","category":"debug","data":{"args":["10889563535280672 is beyond boundary when transfer to integer, the results may not be accurate"],"level":"warn"},"level":"warning","time":1618299766877,"page":"pages/index/index"},{"type":"Console","category":"debug","data":{"args":["10889563535280672 is beyond boundary when transfer to integer, the results may not be accurate"],"level":"warn"},"level":"warning","time":1618299767010,"page":"pages/index/index"},{"type":"Console","category":"debug","data":{"args":["10889563535280672 is beyond boundary when transfer to integer, the results may not be accurate"],"level":"warn"},"level":"warning","time":1618299767011,"page":"pages/index/index"},{"type":"Console","category":"debug","data":{"args":["10889563535280672 is beyond boundary when transfer to integer, the results may not be accurate"],"level":"warn"},"level":"warning","time":1618299767392,"page":"pages/index/index"},{"type":"Console","category":"debug","data":{"args":["10889563535280672 is beyond boundary when transfer to integer, the results may not be accurate"],"level":"warn"},"level":"warning","time":1618299767393,"page":"pages/index/index"},{"type":"Route","category":"user","data":{"from":"pages/index/index?","to":"/pages/center/index"},"level":"info","time":1618299767470,"page":"pages/index/index"},{"category":"lifecycle","type":"Page On Hide","data":{"path":"pages/index/index","query":{}},"level":"info","time":1618299767581,"page":"pages/index/index"},{"category":"lifecycle","type":"Page On Show","data":{"path":"pages/center/index","query":{}},"level":"info","time":1618299767589,"page":"pages/center/index"},{"category":"user","type":"UI.Tap","data":"<element  id='_n_173'/>","level":"info","pages":"pages/center/index","time":1618299769389,"page":"pages/center/index"},{"type":"Route","category":"user","data":{"from":"pages/center/index?","to":"/subpages/center_handle/user_info/index?__key_=16182997657441"},"level":"info","time":1618299769390,"page":"pages/center/index"},{"type":"Route","category":"exception","data":{"from":"pages/center/index?","to":"/subpages/center_handle/user_info/index?__key_=16182997657441","isFail":true,"message":"navigateTo:fail page 'subpages/center_handle/user_info/index?__key_=16182997657441' is not found"},"level":"error","time":1618299769391,"page":"pages/center/index"}]`)
        }
        set_List([1])
        setList(JSON.parse(i))
    }, [])
    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    };
    let item = {
        category: "debug",
        data: { args: ['123'], level: "error" },
        level: "error",
        page: "pages/center/index",
        time: 1618298513839,
        type: "Console",
    }


    return (
        <div className='error_wrap'>
            <div className='title'>小程序错误列表</div>
            <div className='stack_list'>
                {
                    _list[0] && _list.map((e, i) => {
                        return (
                            <div className={item.level === 'error' ? 'item act_item' : 'item'} key={item.time + '_' + i} onClick={() => {
                                setVisible(true)
                            }}>
                                <div className='error'  >
                                    类型 ：{item.category}
                                </div>
                                <div className='error' style={{ fontSize: '14px' }}>
                                    操作分类 ：{item.type}
                                </div>
                                <div className='error'  >
                                    级别 ：{item.level}
                                </div>
                                <div className='error'>发生页面 ：{item.page}</div>
                                <div className='error'>时间: {dayjs(item.time).format('YYYY-MM-DD HH:mm:ss')}</div>
                                <Button className='error btn' onClick={(event) => { event.stopPropagation(); console.log(item.data); }}>控制台查看报错信息</Button>
                            </div>
                        )
                    })
                }
            </div>

            <Drawer
                width={300}
                title="stack"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                className='stack_wrap'
            >
                <div className='stack_list'>
                    {
                        list[0] && list.map((e, i) => {
                            return (
                                <div className={e.level === 'error' ? 'item act_item' : 'item'} key={e.time + '__' + i} onClick={() => {

                                    setVisible(true)
                                }}>
                                    <div className='error'  >
                                        类型 ：{e.category}
                                    </div>
                                    <div className='error' style={{ fontSize: '14px' }}>
                                        操作分类 ：{e.type}
                                    </div>
                                    <div className='error'  >
                                        级别 ：{e.level}
                                    </div>
                                    <div className='error'>发生页面 ：{e.page}</div>
                                    <div className='error'>时间: {dayjs(e.time).format('YYYY-MM-DD HH:mm:ss')}</div>
                                    {e.level === 'error' && <Button className='error btn' onClick={(event) => { event.stopPropagation(); console.log(e.data); }}>控制台查看报错信息</Button>}
                                </div>
                            )
                        })
                    }
                </div>
            </Drawer>
        </div>
    )
}

export default _App
