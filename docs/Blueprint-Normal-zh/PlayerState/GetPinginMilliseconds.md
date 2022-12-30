# GetPinginMilliseconds

返回ping（以毫秒为单位）。

如果有的话，返回ExactPing（本地玩家或在服务器上运行时），否则，返回复制的CompressedPing（转换为毫秒）。

请注意，CompressedPing的复制是由bShouldUpdateReplicatedPing控制的，如果禁用，那么对于与本地玩家无关的玩家状态，这将在客户端返回0或一个陈旧的值。

目标是玩家状态

## 图示

![]($-20221218-20300504.png)

## Inputs

目标。玩家状态对象参考。  

## Outputs

返回值。浮点数（单精度）。返回ping（以毫秒为单位）。如果有的话，返回ExactPing（本地玩家或在服务器上运行时），否则，返回复制的CompressedPing（转换为毫秒）。注意CompressedPing的复制是由bShouldUpdateReplicatedPing控制的，如果禁用，那么对于与本地玩家无关的玩家状态，这将在客户端返回0或一个陈旧的值。
