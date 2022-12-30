# CreateOSCServer

Creates an OSC Server. If ReceiveIPAddress left empty (or '0'),. attempts to use LocalHost IP address. If StartListening set,. immediately begins listening on creation.

Target is OSCManager

## 图示

![]($-20221218-18052757.png)

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

