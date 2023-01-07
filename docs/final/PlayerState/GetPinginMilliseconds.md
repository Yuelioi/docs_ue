# GetPinginMilliseconds

返回 ping（以毫秒为单位）。

如果有的话，返回 ExactPing（本地玩家或在服务器上运行时），否则，返回复制的 CompressedPing（转换为毫秒）。

请注意，CompressedPing 的复制是由 bShouldUpdateReplicatedPing 控制的，如果禁用，那么对于与本地玩家无关的玩家状态，这将在客户端返回 0 或一个陈旧的值。

目标是玩家状态

## 图示

![](/uploads/projects/ue-bluprint/20221218-20300504.png)

## Inputs

目标。玩家状态对象参考。

## Outputs

返回值。浮点数（单精度）。返回 ping（以毫秒为单位）。如果有的话，返回 ExactPing（本地玩家或在服务器上运行时），否则，返回复制的 CompressedPing（转换为毫秒）。注意 CompressedPing 的复制是由 bShouldUpdateReplicatedPing 控制的，如果禁用，那么对于与本地玩家无关的玩家状态，这将在客户端返回 0 或一个陈旧的值。

<hr>

Returns the ping (in milliseconds)

Returns ExactPing if available (local players or when running on the server), and. the replicated CompressedPing (converted back to milliseconds) otherwise.

Note that replication of CompressedPing is controlled by bShouldUpdateReplicatedPing,. and if disabled then this will return 0 or a stale value on clients for player states. that aren't related to local players

Target is Player State

## 图示

![](/uploads/projects/ue-bluprint/20221218-20300504.png)

## Inputs

Target: Player State Object Reference.

## Outputs

Return Value: Float (single-precision). Returns the ping (in milliseconds): Returns ExactPing if available (local players or when running on the server), and. the replicated CompressedPing (converted back to milliseconds) otherwise.: Note that replication of CompressedPing is controlled by bShouldUpdateReplicatedPing,. and if disabled then this will return 0 or a stale value on clients for player states. that aren't related to local players.
