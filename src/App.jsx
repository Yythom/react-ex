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
import { message } from 'antd'

function _App(props) {


    return (
        <>
            <Router>
                <Switch>
                    {/* <Route path='/integral/login' exact component={Login}></Route> */}
                    <Route path='/integral' component={BaseLayout} ></Route>
                    <Route path='/404' exact component={() => <h2>404</h2>}></Route>
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(_App)
