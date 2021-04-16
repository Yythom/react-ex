/* eslint-disable no-multi-str */
/* eslint-disable no-undef */
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
import { Editor } from '@tinymce/tinymce-react'
import rasterizeHTML from 'rasterizehtml'
import html2canvas from 'html2canvas'
import './index.scss'

function _App(props) {
    const [html, setHtml] = useState('')

    const [c, setC] = useState(null)
    useEffect(() => {
        console.log(rasterizeHTML);
    })

    return (
        <div style={{ display: 'flex' }}>

            <Editor
                apiKey='7anc1zvvlj040ca5t1df920g1ozx6gsy9w8oloswpnustqbs'
                initialValue='htmlstr'
                value={html}
                init={{
                    height: 700,
                    width: 600,
                    language: 'zh_CN',
                    branding: false,
                    menubar: false,
                    content_style: "img {max-width:100%;}",
                    autosave_ask_before_unload: false,
                    images_dataimg_filter: function (img) {
                        img.src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F01%2F37%2F17%2F96573c3f71ecd2f.jpg&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618741153&t=93574a33eac20fb3e776d85a18dd4725';
                        console.log(img);
                        return img.hasAttribute('internal-blob');
                    },
                    toolbar_drawer: false,
                    plugins: ["quickbars", "link", "table", "emoticons", "preview",],
                    quickbars_selection_toolbar: `bold italic forecolor | link blockquote quickimage`,
                    toolbar: `link blockquote quickimage | code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
                        styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
                        table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs importword | preview`,
                }}
                onEditorChange={(val) => {
                    setHtml(val);
                }}
            />
            <div className='htmlRender' dangerouslySetInnerHTML={{ __html: html }}></div>
            <div
                onClick={() => {
                    // console.log(html);
                    // rasterizeHTML.drawDocument(
                    //     document.querySelector('.htmlRender'), canvas
                    // ).then(res => {
                    //     console.log(res);
                    // })
                    html2canvas(
                        document.querySelector('.htmlRender'),
                        {
                            useCORS: true
                        }

                    ).then(res => {
                        document.body.appendChild(res);
                    })
                }}
            >按钮</div>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(_App)
