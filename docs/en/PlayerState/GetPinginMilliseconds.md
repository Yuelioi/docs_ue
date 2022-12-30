# GetPinginMilliseconds

Returns the ping (in milliseconds)

Returns ExactPing if available (local players or when running on the server), and. the replicated CompressedPing (converted back to milliseconds) otherwise.

Note that replication of CompressedPing is controlled by bShouldUpdateReplicatedPing,. and if disabled then this will return 0 or a stale value on clients for player states. that aren't related to local players

Target is Player State

## 图示

![]($-20221218-20300504.png)

## Inputs

Target: Player State Object Reference.  

## Outputs

Return Value: Float (single-precision). Returns the ping (in milliseconds): Returns ExactPing if available (local players or when running on the server), and. the replicated CompressedPing (converted back to milliseconds) otherwise.: Note that replication of CompressedPing is controlled by bShouldUpdateReplicatedPing,. and if disabled then this will return 0 or a stale value on clients for player states. that aren't related to local players.

