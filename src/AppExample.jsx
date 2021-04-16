/* eslint-disable no-undef */
import React, { useState } from 'react'
import { mapStateToProps, mapDispatchToProps } from './redux/actionCreator'
import { connect } from 'react-redux'

//布局组件
import { useEffect } from 'react'
// import { setCookie } from './utils/utils'
import { message } from 'antd'
import configState from './utils/state'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import BaseLayout from './component/layout/BaseLayout'
import Quagga from 'quagga';
import JsBarcode from 'jsbarcode';
import temp from './code128.png'


import Picker from 'better-picker'
import { data1, data2, data3 } from './utils/picker_data'


let picker = new Picker({
    data: [data1, data2, data3],
    selectedIndex: [0, 1, 2],
    title: '我们都是小学生'
});




function _App(props) {
    function ready() {
        console.log(window.__wxjs_environment === 'miniprogram') // true
    }
    useEffect(() => {
        console.log(Picker);
        if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
            document.addEventListener('WeixinJSBridgeReady', ready, false)
        } else {
            ready()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    const [timer, setTimer] = useState(null)


    function makeCode(value) {
        var qrcode = new QRCode(document.querySelector(".qrcode"), {
            width: 100,
            height: 100
        });

        if (!value) {
            alert("Input a text");
            return;
        }

        qrcode.makeCode(value);
    }


    //////////////////////
    const [code, setCode] = useState('');
    const [img, setImg] = useState('');
    useEffect(() => {
        // if ($('[node-type=qr-btn]')) {
        //     Qrcode.init($('[node-type=qr-btn]'));
        // }
    }, []);
    function getImgFile() {
        var inputDom = $('input[node-type=jsbridge]');
        var imgFile = inputDom[0].files;
        var oFile = imgFile[0];
        var oFReader = new FileReader();
        var rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

        if (imgFile.length === 0) {
            return;
        }

        if (!rFilter.test(oFile.type)) {
            alert("选择正确的图片格式!");
            return;
        }

        oFReader.onload = function (oFREvent) {
            qrcode.decode(oFREvent.target.result); // 获取静态缓存图片地址
            qrcode.callback = function (data) {
                setCode(JSON.stringify(data));
                alert(JSON.stringify(data))
                setImg(oFREvent.target.result)
                //得到扫码的结果
            };
        };
        oFReader.readAsDataURL(oFile);
    }
    //////////////////////

    const [code_obj, setCode_obj] = useState(null)
    const init = () => {


    }


    useEffect(() => {
        console.log(code, 'code---');
    }, [code])
    return (
        <div>
            <div >
                <div style={{ display: 'flex' }}>
                    <canvas className='barcode'></canvas>
                    <div className="qrcode" style={{ width: '100px', height: '100px', marginTop: '15px' }}></div>
                </div>
                <div>
                    <button onClick={() => {
                        makeCode('786268190');
                    }} >生成二维码</button>
                    <button onClick={() => {
                        JsBarcode(".barcode", "1231312312");
                    }} >生成条形码</button>
                </div>
            </div>

            <div className="edit" onClick={() => {
                picker.show();
                document.querySelector('.picker-mask').addEventListener('click', function () {
                    picker.hide();
                });
                picker.on('picker.select', function (selectedVal, selectedIndex) {
                    console.log('picker.select', selectedVal, selectedIndex);
                })

                /**
                 * @param {*} index -当前在第几列操作的
                 * @param {*} selectedIndex -操作当前列下的index
                 * @return {*} arr[selectedIndex] -更改的数据
                 */
                picker.on('picker.change', function (index, selectedIndex) {
                    if (index === 2) {
                        picker.refill([data3, data3, data3]); // 重填数据列表
                    }
                    console.log('picker.change', index, selectedIndex);
                });

                picker.on('picker.valuechange', function (selectedVal, selectedIndex) {
                    console.log('picker.valuechange', selectedVal, selectedIndex);
                });
            }}>
                h5选择器
            </div>
            {/* ...
            <button onClick={() => {
                wx.miniProgram.navigateBack({ delta: 1 })
                Wx.miniProgram.getEnv(function (res) {
                    console.log(res);
                    if (res.miniprogram) {

                        //如果当前是小程序环境
                        Wx.miniProgram.postMessage({
                            data: {
                                name: 'name',
                                age: 12
                            }
                        })
                    }
                })

            }}>向小程序post ——m</button>
            <button onClick={() => {
                wx.miniProgram.switchTab({ url: '/pages/test/index' })
            }}>跳转</button> */}


            <div >
                一维码解析：
                <input type="file"
                    onChange={(e) => {
                        console.log(e.target.files[0]);
                        // 一维码解码
                        let file = e.target.files[0];
                        var oFReader = new FileReader();
                        oFReader.readAsDataURL(file)
                        oFReader.onload = function (event) {
                            // 文件里的文本会在这里被打印出来
                            let state = {
                                inputStream: {
                                    size: 800,
                                    singleChannel: false
                                },
                                locator: {
                                    patchSize: "medium",
                                    halfSample: true
                                },
                                decoder: {
                                    readers: [{
                                        format: "code_128_reader",
                                        config: {}
                                    }]
                                },
                                locate: true,
                                src: null
                            }
                            console.log(event.target.result);
                            let config = {
                                ...state,
                                src: event.target.result

                            }
                            Quagga.decodeSingle(config, function (result) {
                                if (result.codeResult) {
                                    console.log(result.codeResult);
                                    setCode(result.codeResult.code);
                                    setImg(event.target.result)
                                } else {
                                    console.log('失败');
                                }
                            });
                        };

                    }}
                />
            </div>
            <div>
                <div className="qr-btn" node-type="qr-btn">
                    二维码解析：
                    <input node-type="jsbridge" type='file' name="myPhoto" onChange={() => getImgFile()} />
                </div>
                <div onClick={() => {
                    localStorage.clear();
                    setCode('')
                }}> 重试</div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(_App)
