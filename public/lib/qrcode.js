/* eslint-disable no-undef */
(function ($) {
    var Qrcode = function (tempBtn) {
        var _this_ = this;
        var isWeiboWebView = /__weibo__/.test(navigator.userAgent); // 浏览器检测

        if (isWeiboWebView) { // 浏览器判断
            // if (window.WeiboJSBridge) {
            //     _this_.bridgeReady(tempBtn);
            // } 
        } else {
            _this_.nativeReady(tempBtn);
        }
    };

    Qrcode.prototype = {
        nativeReady: function (tempBtn) {
            $('[node-type=jsbridge]', tempBtn).on('click', function (e) {
                e.stopPropagation();
            });

            $(tempBtn).bind('click', function (e) {
                $(this).find('input[node-type=jsbridge]').trigger('click');
            });

            // $(tempBtn).bind('change', this.getImgFile);
        },
        getImgFile: function () {
            var _this_ = this;
            var inputDom = $('input[node-type=jsbridge]')
            console.log(this);
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
                qrcode.decode(oFREvent.target.result); // 开始解码


                qrcode.callback = function (data) { // 成功回调
                    localStorage.setItem('qr_code', JSON.stringify(data))
                    localStorage.setItem('qr_code_img', oFREvent.target.result)
                    //得到扫码的结果
                };
            };

            oFReader.readAsDataURL(oFile);
        },
        destory: function () {
            $(tempBtn).off('click');
        }
    };

    Qrcode.init = function (tempBtn) {
        var _this_ = this;

        tempBtn.each(function () {
            new _this_($(this));
        });
    };
    window.Qrcode = Qrcode;
})(window.Zepto ? Zepto : jQuery);
