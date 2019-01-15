function verify() {
    var jqObj = $("#userName");
    //两次encodeURI 一次URLDecode 解决中文乱码问题
    var userName = encodeURI(encodeURI(jqObj.val()));
    //doGet()方式 发送数据给服务器端处理 返回参数给回调函数
    $.get("AJAXServer?name="+userName,null,callback);
}

function callback(data) {
    var resultObj = $("#result");
    resultObj.html(data);
}