# CreateOSCServer

创建一个OSC服务器。如果ReceiveIPAddress为空（或'0'），则尝试使用LocalHost IP地址。如果设置StartListening，则在创建时立即开始监听。

目标是OSCManager

## 图示

![]($-20221218-18052757.png)

## Inputs

在。执行。

接收IPAddress。字符串。

端口: 整数。

Multicast Loopback: Boolean.

开始监听。布尔值。

服务器名称。字符串。

外层。对象参考。 

## Outputs

输出。执行：执行。

返回值。OSCServer对象参考。创建一个OSC服务器。如果ReceiveIPAddress为空（或'0'），则尝试使用LocalHost IP地址。如果设置StartListening，则立即开始监听创建。
