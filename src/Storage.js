const getData = () => {
    const applyData = localStorage.getItem("jobs");
    if (applyData) {
        return JSON.parse(applyData)
    }
    return []


}
const setData = (id) => {
    const prevData = getData();
    if (!prevData.includes(id)) {
        prevData.push(id)
        const strData = JSON.stringify(prevData)
        localStorage.setItem("jobs", strData)
    }
}

export { setData, getData }