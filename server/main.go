package main

import (
	"os"
	"log"
	//"fmt"
	"net/http"
	"golang.org/x/net/websocket"
	"strings"
	//"bytes"
	//"runtime"
	//"strconv"
	"server/store"
)

var (
	DEFALUT_LISTEN_ADDR string= ":8090" // 默认全网卡8090端口, 支持ipv4和ipv6
	CLIENT_WEBSOCKET_URI string = "/client/"
)

func wsAccapt(ws *websocket.Conn) {
	clientAddr := ws.Request().RemoteAddr
	log.Println("new connect at "+CLIENT_WEBSOCKET_URI+":", clientAddr)
	arrClientAddr := strings.Split(clientAddr, ":")
	clientIp := arrClientAddr[0]
	log.Println("client ip:", clientIp)
	// TODO 实例化客户端
}

/*
 go start with main
 listen addr for client connect by websocket
 uri = /client
 handle function = wsAccapt
*/
func main() {
	addr := "" 

	if len(os.Args) == 2 { // 启动时运行参数指定了监听端口
		addr = os.Args[1]
		log.Println("Listening:", addr)
	} else{
		// 启动默认的监听地址
		addr = DEFALUT_LISTEN_ADDR
		log.Println("USEAGE: TaskTalk {listenAddr}")
		log.Println("Listening Default:", addr)
	}

	store.Connect() // TODO keke 连接失败检查一下

	http.Handle(CLIENT_WEBSOCKET_URI, websocket.Handler(wsAccapt))
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Println(err)
		os.Exit(1)
	}
}

