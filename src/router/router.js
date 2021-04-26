import Demo from '../pages/demo/index'
let url = '/';

let router = () => {
    return {
        // index: {
        //     url: url,
        //     icon: home,
        //     activeIcon: sHome,
        //     desc: '主页',
        //     page: Index
        // },
        demo: {
            url: url + 'demo',
            desc: '主页',
            page: Demo
        },
        // // 副包 （不在tabbar显示）
        // shopDetail: {
        //     url: url + '/shopdetail',
        //     page: Shop_detail,
        //     isShow: true, // 不现实tab
        // },

    }
}
export default router();