# CreateOSCServer

创建一个 OSC 服务器。如果 ReceiveIPAddress 为空（或'0'），则尝试使用 LocalHost IP 地址。如果设置 StartListening，则在创建时立即开始监听。

目标是 OSCManager

## 图示

![](/uploads/projects/ue-bluprint/20221218-18052757.png)

## Inputs

在。执行。

接收 IPAddress。字符串。

端口: 整数。

Multicast Loopback: Boolean.

开始监听。布尔值。

服务器名称。字符串。

外层。对象参考。

## Outputs

输出。执行：执行。

返回值。OSCServer 对象参考。创建一个 OSC 服务器。如果 ReceiveIPAddress 为空（或'0'），则尝试使用 LocalHost IP 地址。如果设置 StartListening，则立即开始监听创建。

<hr>

Creates an OSC Server. If ReceiveIPAddress left empty (or '0'),. attempts to use LocalHost IP address. If StartListening set,. immediately begins listening on creation.

Target is OSCManager

## 图示

![](/uploads/projects/ue-bluprint/20221218-18052757.png)

## Inputs

In: Exec.

Receive IPAddress: String.

Port: Integer.

Multicast Loopback: Boolean.

Start Listening: Boolean.

Server Name: String.

Outer: Object Reference.

## Outputs

Out: Exec.

Return Value: OSCServer Object Reference. Creates an OSC Server. If ReceiveIPAddress left empty (or '0'),. attempts to use LocalHost IP address. If StartListening set,. immediately begins listening on creation..
