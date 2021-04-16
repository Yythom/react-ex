let initState = {
    tabStatus: 1,
    userStore: getLocal('info') || null,
}
function getLocal(key) {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key))
    } else return false
}

export const reducer = (state = initState, action) => {
    let states = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "TAB":
            states.tabStatus = action.index
            return states;
        case "INFO": // 用户信息
            states.userStore = action.info
            return states;
        default:
            return states;
    }
}



