/* eslint-disable no-undef */
import React, { useState } from 'react'
import { mapStateToProps, mapDispatchToProps } from './redux/actionCreator'
import { connect } from 'react-redux'
import adapter from 'webrtc-adapter';
import { BrowserMultiFormatReader, BrowserBarcodeReader, BrowserQRCodeReader } from '@zxing/library';
import { Upload, message, Button } from 'antd';
import Axios from 'axios';
function _App(props) {
    const [url1, setUrl1] = useState('')
    const [url2, setUrl2] = useState('')
    const init = async (type, src) => {
        var form = new FormData();
        form.append("image", src);
        form.append("image_url", '');
        form.append("type", 'https://aip.baidubce.com/rest/2.0/ocr/v1/qrcode');

        Axios.post('https://ai.baidu.com/aidemo', form).then(res => {
            console.log(res);
        })
        // let codeReader = null;
        // let el = null
        // if (type === 'qr') {
        //     codeReader = new BrowserQRCodeReader()
        //     el = document.querySelector('#img-qr')
        // } else {
        //     codeReader = new BrowserBarcodeReader();
        //     el = document.querySelector('#img')
        // }

        // // console.log(el, codeReader);
        // const decodeFun = () => {
        //     codeReader.decodeFromImage(el)
        //         .then(result => {
        //             console.log(result);  //扫码码结果
        //         })
        //         .catch(err => {
        //             console.error(err);
        //         });
        // };
        // decodeFun()
    }


    async function change(file, qr) {
        var reader = new FileReader(); //新建获取file的读取文件
        var imgsrc = null;
        const img = await readImg(file)
        compressImg(img, '', 1600, 1600).then(res => {
            reader.readAsDataURL(res); //输出base64图片
            reader.onload = function (e) { //字面理解是加载图片，得到结果吧，不是很理解
                imgsrc = reader.result; //输出结果
                // 压缩
                if (qr) {
                    setUrl2(imgsrc);
                    setTimeout(() => {
                        init('qr', imgsrc)
                    }, 400);
                } else {
                    setUrl1(imgsrc);
                    setTimeout(() => {
                        init('', imgsrc)
                    }, 400);
                }
            }
        })

    }

    // 压缩前将file转换成img对象
    function readImg(file) {
        return new Promise((resolve, reject) => {
            const img = new Image()
            const reader = new FileReader()
            reader.onload = function (e) {
                img.src = e.target.result
            }
            reader.onerror = function (e) {
                reject(e)
            }
            reader.readAsDataURL(file)
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (e) {
                reject(e)
            }
        })
    }

    /**
     * 压缩图片
     *@param img 被压缩的img对象
     * @param type 压缩后转换的文件类型
     * @param mx 触发压缩的图片最大宽度限制
     * @param mh 触发压缩的图片最大高度限制
    */
    function compressImg(img, type, mx, mh) {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement('canvas')

            const context = canvas.getContext("2d")
            const { width: originWidth, height: originHeight } = img
            // console.log(width, height);

            // 最大尺寸限制
            const maxWidth = mx
            const maxHeight = mh
            // 目标尺寸
            let targetWidth = originWidth
            let targetHeight = originHeight
            if (originWidth > maxWidth || originHeight > maxHeight) {
                if (originWidth / originHeight > 1) {
                    // 宽图片
                    targetWidth = maxWidth
                    targetHeight = Math.round(maxWidth * (originHeight / originWidth))
                } else {
                    // 高图片
                    targetHeight = maxHeight
                    targetWidth = Math.round(maxHeight * (originWidth / originHeight))
                }
            }
            canvas.width = targetWidth
            canvas.height = targetHeight
            context.clearRect(0, 0, targetWidth, targetHeight)
            // 图片绘制
            context.drawImage(img, 0, 0, targetWidth, targetHeight)
            canvas.toBlob(function (blob) {
                resolve(blob)
            }, type || 'image/png')
        })
    }

    return (
        <>
            <div>

                {/* <div onClick={() => {
                    console.log(1);
                    wx.scanQRCode({
                        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                        scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
                        success: function (res) {
                            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                        }
                    })
                }}>扫一扫</div> */}
                <div>
                    <input type="button" onClick={() => document.querySelector('.i_1').click()} id="btn" value="请上传一维码" /><span id="text"></span>
                    <input capture="camera" type="file" className='i_1' style={{ position: 'fixed', top: '-99999px' }} onChange={(e) => {
                        if (e.target.files[0]) {
                            change(e.target.files[0])
                        }
                    }} />
                </div>
                <div>
                    <input type="button" onClick={() => document.querySelector('.i_2').click()} id="btn" value="请上传二维码" /><span id="text"></span>
                    <input capture="camera" type="file" className='i_2' style={{ position: 'fixed', top: '-99999px' }} onChange={(e) => {
                        if (e.target.files[0]) {
                            change(e.target.files[0], 'qr');
                        }
                    }} />
                </div>
                <br /><br />


                {/* <Upload beforeUpload={beforeUpload2}>
                    <Button >二维码</Button>
                </Upload> */}


                <div>二维码</div>
                <img src={url2} id='img-qr' alt="" onClick={(e) => {
                    init('qr', url2)
                }} />
                <div>一维码</div>
                <img src={url1} id='img' alt="" onClick={(e) => {
                    init()
                }} />
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(_App)
