

let wsAddr = 'ws://127.0.0.1:8090/client/'

var globleInfo = {} // 全局数据
globleInfo.id = '1111' // 工号
globleInfo.name = '张三' // 姓名

var btns = new Map(); // 所有客户端发起的request形成button
function createBtns() { // --------------->> 单元测试项往这里添加 <<---------------
    {// login
        let req = {}
        req.method = 'auth.login'
        req.params = {}
        req.params.id = globleInfo.id
        req.params.name = globleInfo.name
        btns.set('登录', req)
    }
    // TODO add next test
}

let ws = null
var id = 0 // jsonrpc同步字
function sendRequest(req){
    if (ws === null){
        ws = new WebSocket(wsAddr)
        ws.onopen = function(){
        　　//当WebSocket创建成功时，触发onopen事件
            console.log("open") //将消息发送到服务端
        }
        ws.onmessage = function(e){
        　　//当客户端收到服务端发来的消息时，触发onmessage事件，参数e.data包含server传递过来的数据
        　　console.log(e.data)
            document.getElementById('recvShow').innerHTML = e.data
        }
        ws.onclose = function(e){
        　　//当客户端收到服务端发送的关闭连接请求时，触发onclose事件
        　　console.log("close")
            ws = null
            alert("lost server")
        }
        ws.onerror = function(e){
        　　//如果出现连接、处理、接收、发送数据失败的时候触发onerror事件
        　　console.log(error)
            ws = null
            alert("lost server")
        }
    }
    // 发送jsonrpc请求
    req.id = id ++
    let sReq = JSON.stringify(req)
    ws.send(sReq)
    document.getElementById('sendShow').innerHTML = sReq
}

function showBtns() {
    let btnContainer = document.getElementById('btnContainer')
    let f_sendFun = function(req) {
        console.log(req)
        return function(){
            sendRequest(req)
        }
    }
    
    btns.forEach(function(v, k){    
            let btn = document.createElement("input")
            btn.type = "button"
            btn.value = k
            btn.addEventListener("click",f_sendFun(v))
            btnContainer.appendChild(btn)
        }
    )
}

window.onload = function(){
    createBtns()
    showBtns()
}