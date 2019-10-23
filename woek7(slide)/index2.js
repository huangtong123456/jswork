function sort(method){
    //读取待排序数据
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    
    if(method=='bubble'){
        logs = bubbleSort(origin)
    }else
        if(method=='insert'){
            logs = insertSort(origin)
        }
        showDiv = document.getElementById('Anim')
        showDiv.innerHTML = logs

        logValues = logs.values()
        console.log(logValues.next())
        setTimeout("showLog(logValues,showDiv)",50)
}