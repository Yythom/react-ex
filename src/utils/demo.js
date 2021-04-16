/* eslint-disable no-undef */

wx.ready(function () {
    // 1 鍒ゆ柇褰撳墠鐗堟湰鏄惁鏀寔鎸囧畾 JS 鎺ュ彛锛屾敮鎸佹壒閲忓垽鏂�
    document.querySelector('#checkJsApi').onclick = function () {
        wx.checkJsApi({
            jsApiList: [
                'getNetworkType',
                'previewImage'
            ],
            success: function (res) {
                alert(JSON.stringify(res));
            }
        });
    };

    // 2. 鍒嗕韩鎺ュ彛
    // 2.1 鐩戝惉鈥滃垎浜粰鏈嬪弸鈥濓紝鎸夐挳鐐瑰嚮銆佽嚜瀹氫箟鍒嗕韩鍐呭鍙婂垎浜粨鏋滄帴鍙�
    document.querySelector('#onMenuShareAppMessage').onclick = function () {
        wx.onMenuShareAppMessage({
            title: '浜掕仈缃戜箣瀛�',
            desc: '鍦ㄩ暱澶х殑杩囩▼涓紝鎴戞墠鎱㈡參鍙戠幇锛屾垜韬竟鐨勬墍鏈変簨锛屽埆浜鸿窡鎴戣鐨勬墍鏈変簨锛岄偅浜涙墍璋撴湰鏉ュ姝わ紝娉ㄥ畾濡傛鐨勪簨锛屽畠浠叾瀹炴病鏈夐潪寰楀姝わ紝浜嬫儏鏄彲浠ユ敼鍙樼殑銆傛洿閲嶈鐨勬槸锛屾湁浜涗簨鏃㈢劧閿欎簡锛岄偅灏辫鍋氬嚭鏀瑰彉銆�',
            link: 'http://movie.douban.com/subject/25785114/',
            imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
            trigger: function (res) {
                // 涓嶈灏濊瘯鍦╰rigger涓娇鐢╝jax寮傛璇锋眰淇敼鏈鍒嗕韩鐨勫唴瀹癸紝鍥犱负瀹㈡埛绔垎浜搷浣滄槸涓€涓悓姝ユ搷浣滐紝杩欐椂鍊欎娇鐢╝jax鐨勫洖鍖呬細杩樻病鏈夎繑鍥�
                alert('鐢ㄦ埛鐐瑰嚮鍙戦€佺粰鏈嬪弸');
            },
            success: function (res) {
                alert('宸插垎浜�');
            },
            cancel: function (res) {
                alert('宸插彇娑�');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
        alert('宸叉敞鍐岃幏鍙栤€滃彂閫佺粰鏈嬪弸鈥濈姸鎬佷簨浠�');
    };

    // 2.2 鐩戝惉鈥滃垎浜埌鏈嬪弸鍦堚€濇寜閽偣鍑汇€佽嚜瀹氫箟鍒嗕韩鍐呭鍙婂垎浜粨鏋滄帴鍙�
    document.querySelector('#onMenuShareTimeline').onclick = function () {
        wx.onMenuShareTimeline({
            title: '浜掕仈缃戜箣瀛�',
            link: 'http://movie.douban.com/subject/25785114/',
            imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
            trigger: function (res) {
                // 涓嶈灏濊瘯鍦╰rigger涓娇鐢╝jax寮傛璇锋眰淇敼鏈鍒嗕韩鐨勫唴瀹癸紝鍥犱负瀹㈡埛绔垎浜搷浣滄槸涓€涓悓姝ユ搷浣滐紝杩欐椂鍊欎娇鐢╝jax鐨勫洖鍖呬細杩樻病鏈夎繑鍥�
                alert('鐢ㄦ埛鐐瑰嚮鍒嗕韩鍒版湅鍙嬪湀');
            },
            success: function (res) {
                alert('宸插垎浜�');
            },
            cancel: function (res) {
                alert('宸插彇娑�');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
        alert('宸叉敞鍐岃幏鍙栤€滃垎浜埌鏈嬪弸鍦堚€濈姸鎬佷簨浠�');
    };

    // 2.3 鐩戝惉鈥滃垎浜埌QQ鈥濇寜閽偣鍑汇€佽嚜瀹氫箟鍒嗕韩鍐呭鍙婂垎浜粨鏋滄帴鍙�
    document.querySelector('#onMenuShareQQ').onclick = function () {
        wx.onMenuShareQQ({
            title: '浜掕仈缃戜箣瀛�',
            desc: '鍦ㄩ暱澶х殑杩囩▼涓紝鎴戞墠鎱㈡參鍙戠幇锛屾垜韬竟鐨勬墍鏈変簨锛屽埆浜鸿窡鎴戣鐨勬墍鏈変簨锛岄偅浜涙墍璋撴湰鏉ュ姝わ紝娉ㄥ畾濡傛鐨勪簨锛屽畠浠叾瀹炴病鏈夐潪寰楀姝わ紝浜嬫儏鏄彲浠ユ敼鍙樼殑銆傛洿閲嶈鐨勬槸锛屾湁浜涗簨鏃㈢劧閿欎簡锛岄偅灏辫鍋氬嚭鏀瑰彉銆�',
            link: 'http://movie.douban.com/subject/25785114/',
            imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
            trigger: function (res) {
                alert('鐢ㄦ埛鐐瑰嚮鍒嗕韩鍒癚Q');
            },
            complete: function (res) {
                alert(JSON.stringify(res));
            },
            success: function (res) {
                alert('宸插垎浜�');
            },
            cancel: function (res) {
                alert('宸插彇娑�');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
        alert('宸叉敞鍐岃幏鍙栤€滃垎浜埌 QQ鈥濈姸鎬佷簨浠�');
    };

    // 2.4 鐩戝惉鈥滃垎浜埌寰崥鈥濇寜閽偣鍑汇€佽嚜瀹氫箟鍒嗕韩鍐呭鍙婂垎浜粨鏋滄帴鍙�
    document.querySelector('#onMenuShareWeibo').onclick = function () {
        wx.onMenuShareWeibo({
            title: '浜掕仈缃戜箣瀛�',
            desc: '鍦ㄩ暱澶х殑杩囩▼涓紝鎴戞墠鎱㈡參鍙戠幇锛屾垜韬竟鐨勬墍鏈変簨锛屽埆浜鸿窡鎴戣鐨勬墍鏈変簨锛岄偅浜涙墍璋撴湰鏉ュ姝わ紝娉ㄥ畾濡傛鐨勪簨锛屽畠浠叾瀹炴病鏈夐潪寰楀姝わ紝浜嬫儏鏄彲浠ユ敼鍙樼殑銆傛洿閲嶈鐨勬槸锛屾湁浜涗簨鏃㈢劧閿欎簡锛岄偅灏辫鍋氬嚭鏀瑰彉銆�',
            link: 'http://movie.douban.com/subject/25785114/',
            imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
            trigger: function (res) {
                alert('鐢ㄦ埛鐐瑰嚮鍒嗕韩鍒板井鍗�');
            },
            complete: function (res) {
                alert(JSON.stringify(res));
            },
            success: function (res) {
                alert('宸插垎浜�');
            },
            cancel: function (res) {
                alert('宸插彇娑�');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
        alert('宸叉敞鍐岃幏鍙栤€滃垎浜埌寰崥鈥濈姸鎬佷簨浠�');
    };

    // 2.5 鐩戝惉鈥滃垎浜埌QZone鈥濇寜閽偣鍑汇€佽嚜瀹氫箟鍒嗕韩鍐呭鍙婂垎浜帴鍙�
    document.querySelector('#onMenuShareQZone').onclick = function () {
        wx.onMenuShareQZone({
            title: '浜掕仈缃戜箣瀛�',
            desc: '鍦ㄩ暱澶х殑杩囩▼涓紝鎴戞墠鎱㈡參鍙戠幇锛屾垜韬竟鐨勬墍鏈変簨锛屽埆浜鸿窡鎴戣鐨勬墍鏈変簨锛岄偅浜涙墍璋撴湰鏉ュ姝わ紝娉ㄥ畾濡傛鐨勪簨锛屽畠浠叾瀹炴病鏈夐潪寰楀姝わ紝浜嬫儏鏄彲浠ユ敼鍙樼殑銆傛洿閲嶈鐨勬槸锛屾湁浜涗簨鏃㈢劧閿欎簡锛岄偅灏辫鍋氬嚭鏀瑰彉銆�',
            link: 'http://movie.douban.com/subject/25785114/',
            imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
            trigger: function (res) {
                alert('鐢ㄦ埛鐐瑰嚮鍒嗕韩鍒癚Zone');
            },
            complete: function (res) {
                alert(JSON.stringify(res));
            },
            success: function (res) {
                alert('宸插垎浜�');
            },
            cancel: function (res) {
                alert('宸插彇娑�');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
        alert('宸叉敞鍐岃幏鍙栤€滃垎浜埌QZone鈥濈姸鎬佷簨浠�');
    };


    // 3 鏅鸿兘鎺ュ彛
    var voice = {
        localId: '',
        serverId: ''
    };
    // 3.1 璇嗗埆闊抽骞惰繑鍥炶瘑鍒粨鏋�
    document.querySelector('#translateVoice').onclick = function () {
        if (voice.localId == '') {
            alert('璇峰厛浣跨敤 startRecord 鎺ュ彛褰曞埗涓€娈靛０闊�');
            return;
        }
        wx.translateVoice({
            localId: voice.localId,
            complete: function (res) {
                if (res.hasOwnProperty('translateResult')) {
                    alert('璇嗗埆缁撴灉锛�' + res.translateResult);
                } else {
                    alert('鏃犳硶璇嗗埆');
                }
            }
        });
    };

    // 4 闊抽鎺ュ彛
    // 4.2 寮€濮嬪綍闊�
    document.querySelector('#startRecord').onclick = function () {
        wx.startRecord({
            cancel: function () {
                alert('鐢ㄦ埛鎷掔粷鎺堟潈褰曢煶');
            }
        });
    };

    // 4.3 鍋滄褰曢煶
    document.querySelector('#stopRecord').onclick = function () {
        wx.stopRecord({
            success: function (res) {
                voice.localId = res.localId;
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
    };

    // 4.4 鐩戝惉褰曢煶鑷姩鍋滄
    wx.onVoiceRecordEnd({
        complete: function (res) {
            voice.localId = res.localId;
            alert('褰曢煶鏃堕棿宸茶秴杩囦竴鍒嗛挓');
        }
    });

    // 4.5 鎾斁闊抽
    document.querySelector('#playVoice').onclick = function () {
        if (voice.localId == '') {
            alert('璇峰厛浣跨敤 startRecord 鎺ュ彛褰曞埗涓€娈靛０闊�');
            return;
        }
        wx.playVoice({
            localId: voice.localId
        });
    };

    // 4.6 鏆傚仠鎾斁闊抽
    document.querySelector('#pauseVoice').onclick = function () {
        wx.pauseVoice({
            localId: voice.localId
        });
    };

    // 4.7 鍋滄鎾斁闊抽
    document.querySelector('#stopVoice').onclick = function () {
        wx.stopVoice({
            localId: voice.localId
        });
    };

    // 4.8 鐩戝惉褰曢煶鎾斁鍋滄
    wx.onVoicePlayEnd({
        complete: function (res) {
            alert('褰曢煶锛�' + res.localId + '锛夋挱鏀剧粨鏉�');
        }
    });

    // 4.8 涓婁紶璇煶
    document.querySelector('#uploadVoice').onclick = function () {
        if (voice.localId == '') {
            alert('璇峰厛浣跨敤 startRecord 鎺ュ彛褰曞埗涓€娈靛０闊�');
            return;
        }
        wx.uploadVoice({
            localId: voice.localId,
            success: function (res) {
                alert('涓婁紶璇煶鎴愬姛锛宻erverId 涓�' + res.serverId);
                voice.serverId = res.serverId;
            }
        });
    };

    // 4.9 涓嬭浇璇煶
    document.querySelector('#downloadVoice').onclick = function () {
        if (voice.serverId == '') {
            alert('璇峰厛浣跨敤 uploadVoice 涓婁紶澹伴煶');
            return;
        }
        wx.downloadVoice({
            serverId: voice.serverId,
            success: function (res) {
                alert('涓嬭浇璇煶鎴愬姛锛宭ocalId 涓�' + res.localId);
                voice.localId = res.localId;
            }
        });
    };

    // 5 鍥剧墖鎺ュ彛
    // 5.1 鎷嶇収銆佹湰鍦伴€夊浘
    var images = {
        localId: [],
        serverId: []
    };
    document.querySelector('#chooseImage').onclick = function () {
        wx.chooseImage({
            success: function (res) {
                images.localId = res.localIds;
                alert('宸查€夋嫨 ' + res.localIds.length + ' 寮犲浘鐗�');
            }
        });
    };

    // 5.2 鍥剧墖棰勮
    document.querySelector('#previewImage').onclick = function () {
        wx.previewImage({
            current: 'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
            urls: [
                'http://img3.douban.com/view/photo/photo/public/p2152117150.jpg',
                'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
                'http://img3.douban.com/view/photo/photo/public/p2152134700.jpg'
            ]
        });
    };

    // 5.3 涓婁紶鍥剧墖
    document.querySelector('#uploadImage').onclick = function () {
        if (images.localId.length == 0) {
            alert('璇峰厛浣跨敤 chooseImage 鎺ュ彛閫夋嫨鍥剧墖');
            return;
        }
        var i = 0, length = images.localId.length;
        images.serverId = [];
        function upload() {
            wx.uploadImage({
                localId: images.localId[i],
                isShowProgressTips: 1,
                success: function (res) {
                    i++;
                    //alert('宸蹭笂浼狅細' + i + '/' + length);
                    images.serverId.push(res.serverId);
                    if (i < length) {
                        upload();
                    }
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
        }
        upload();
    };

    // 5.4 涓嬭浇鍥剧墖
    document.querySelector('#downloadImage').onclick = function () {
        if (images.serverId.length === 0) {
            alert('璇峰厛浣跨敤 uploadImage 涓婁紶鍥剧墖');
            return;
        }
        var i = 0, length = images.serverId.length;
        images.localId = [];
        function download() {
            wx.downloadImage({
                serverId: images.serverId[i],
                success: function (res) {
                    i++;
                    alert('宸蹭笅杞斤細' + i + '/' + length);
                    images.localId.push(res.localId);
                    if (i < length) {
                        download();
                    }
                }
            });
        }
        download();
    };

    // 6 璁惧淇℃伅鎺ュ彛
    // 6.1 鑾峰彇褰撳墠缃戠粶鐘舵€�
    document.querySelector('#getNetworkType').onclick = function () {
        wx.getNetworkType({
            success: function (res) {
                alert(res.networkType);
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
    };

    // 7 鍦扮悊浣嶇疆鎺ュ彛
    // 7.1 鏌ョ湅鍦扮悊浣嶇疆
    document.querySelector('#openLocation').onclick = function () {
        wx.openLocation({
            latitude: 23.099994,
            longitude: 113.324520,
            name: 'TIT 鍒涙剰鍥�',
            address: '骞垮窞甯傛捣鐝犲尯鏂版腐涓矾 397 鍙�',
            scale: 14,
            infoUrl: 'http://weixin.qq.com'
        });
    };

    // 7.2 鑾峰彇褰撳墠鍦扮悊浣嶇疆
    document.querySelector('#getLocation').onclick = function () {
        wx.getLocation({
            success: function (res) {
                alert(JSON.stringify(res));
            },
            cancel: function (res) {
                alert('鐢ㄦ埛鎷掔粷鎺堟潈鑾峰彇鍦扮悊浣嶇疆');
            }
        });
    };

    // 8 鐣岄潰鎿嶄綔鎺ュ彛
    // 8.1 闅愯棌鍙充笂瑙掕彍鍗�
    document.querySelector('#hideOptionMenu').onclick = function () {
        wx.hideOptionMenu();
    };

    // 8.2 鏄剧ず鍙充笂瑙掕彍鍗�
    document.querySelector('#showOptionMenu').onclick = function () {
        wx.showOptionMenu();
    };

    // 8.3 鎵归噺闅愯棌鑿滃崟椤�
    document.querySelector('#hideMenuItems').onclick = function () {
        wx.hideMenuItems({
            menuList: [
                'menuItem:readMode', // 闃呰妯″紡
                'menuItem:share:timeline', // 鍒嗕韩鍒版湅鍙嬪湀
                'menuItem:copyUrl' // 澶嶅埗閾炬帴
            ],
            success: function (res) {
                alert('宸查殣钘忊€滈槄璇绘ā寮忊€濓紝鈥滃垎浜埌鏈嬪弸鍦堚€濓紝鈥滃鍒堕摼鎺モ€濈瓑鎸夐挳');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
    };

    // 8.4 鎵归噺鏄剧ず鑿滃崟椤�
    document.querySelector('#showMenuItems').onclick = function () {
        wx.showMenuItems({
            menuList: [
                'menuItem:readMode', // 闃呰妯″紡
                'menuItem:share:timeline', // 鍒嗕韩鍒版湅鍙嬪湀
                'menuItem:copyUrl' // 澶嶅埗閾炬帴
            ],
            success: function (res) {
                alert('宸叉樉绀衡€滈槄璇绘ā寮忊€濓紝鈥滃垎浜埌鏈嬪弸鍦堚€濓紝鈥滃鍒堕摼鎺モ€濈瓑鎸夐挳');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
    };

    // 8.5 闅愯棌鎵€鏈夐潪鍩烘湰鑿滃崟椤�
    document.querySelector('#hideAllNonBaseMenuItem').onclick = function () {
        wx.hideAllNonBaseMenuItem({
            success: function () {
                alert('宸查殣钘忔墍鏈夐潪鍩烘湰鑿滃崟椤�');
            }
        });
    };

    document.querySelector('#showAllNonBaseMenuItem').onclick = function () {
        wx.showAllNonBaseMenuItem({
            success: function () {
                alert('宸叉樉绀烘墍鏈夐潪鍩烘湰鑿滃崟椤�');
            }
        });
    };

    document.querySelector('#closeWindow').onclick = function () {
        wx.closeWindow();
    };


    document.querySelector('#scanQRCode0').onclick = function () {
        wx.scanQRCode();
    };


    document.querySelector('#scanQRCode1').onclick = function () {
        wx.scanQRCode({
            needResult: 1,
            desc: 'scanQRCode desc',
            success: function (res) {
                alert(JSON.stringify(res));
            }
        });
    };


    document.querySelector('#chooseWXPay').onclick = function () {
        wx.chooseWXPay({
            timestamp: 1414723227,
            nonceStr: 'noncestr',
            package: 'addition=action_id%3dgaby1234%26limit_pay%3d&bank_type=WX&body=innertest&fee_type=1&input_charset=GBK&notify_url=http%3A%2F%2F120.204.206.246%2Fcgi-bin%2Fmmsupport-bin%2Fnotifypay&out_trade_no=1414723227818375338&partner=1900000109&spbill_create_ip=127.0.0.1&total_fee=1&sign=432B647FE95C7BF73BCD177CEECBEF8D',
            signType: 'SHA1',
            paySign: 'bd5b1933cda6e9548862944836a9b52e8c9a2b69'
        });
    };


    document.querySelector('#openProductSpecificView').onclick = function () {
        wx.openProductSpecificView({
            productId: 'pDF3iY_m2M7EQ5EKKKWd95kAxfNw',
            extInfo: '123'
        });
    };


    document.querySelector('#addCard').onclick = function () {
        wx.addCard({
            cardList: [
                {
                    cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
                    cardExt: '{"code": "", "openid": "", "timestamp": "1418301401", "signature":"f6628bf94d8e56d56bfa6598e798d5bad54892e5"}'
                },
                {
                    cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
                    cardExt: '{"code": "", "openid": "", "timestamp": "1418301401", "signature":"f6628bf94d8e56d56bfa6598e798d5bad54892e5"}'
                }
            ],
            success: function (res) {
                alert('宸叉坊鍔犲崱鍒革細' + JSON.stringify(res.cardList));
            },
            cancel: function (res) {
                alert(JSON.stringify(res))
            }
        });
    };

    var codes = [];
    document.querySelector('#chooseCard').onclick = function () {
        wx.chooseCard({
            cardSign: '1fdb2640c60e41f8823e9f762e70c531d161ae76',
            timestamp: 1437997723,
            nonceStr: 'k0hGdSXKZEj3Min5',
            success: function (res) {
                res.cardList = JSON.parse(res.cardList);
                encrypt_code = res.cardList[0]['encrypt_code'];
                alert('宸查€夋嫨鍗″埜锛�' + JSON.stringify(res.cardList));
                decryptCode(encrypt_code, function (code) {
                    codes.push(code);
                });
            },
            cancel: function (res) {
                alert(JSON.stringify(res))
            }
        });
    };

    document.querySelector('#openCard').onclick = function () {
        if (codes.length < 1) {
            alert('璇峰厛浣跨敤 chooseCard 鎺ュ彛閫夋嫨鍗″埜銆�');
            return false;
        }
        var cardList = [];
        for (var i = 0; i < codes.length; i++) {
            cardList.push({
                cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
                code: codes[i]
            });
        }
        wx.openCard({
            cardList: cardList,
            cancel: function (res) {
                alert(JSON.stringify(res))
            }
        });
    };

    var shareData = {
        title: 'JS-SDK Demo',
        desc: '111',
        link: 'http://demo.open.weixin.qq.com/jssdk/',
        imgUrl: 'http://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRt8Qia4lv7k3M9J1SKqKCImxJCt7j9rHYicKDI45jRPBxdzdyREWnk0ia0N5TMnMfth7SdxtzMvVgXg/0'
    };
    wx.onMenuShareAppMessage(shareData);
    wx.onMenuShareTimeline(shareData);

    function decryptCode(code, callback) {
        $.getJSON('/jssdk/decrypt_code.php?code=' + encodeURI(code), function (res) {
            if (res.errcode == 0) {
                codes.push(res.code);
            }
        });
    }
});

wx.error(function (res) {
    alert(res.errMsg);
});