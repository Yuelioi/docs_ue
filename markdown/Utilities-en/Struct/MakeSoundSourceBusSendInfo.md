# MakeSoundSourceBusSendInfo

Adds a node that create a 'SoundSourceBusSendInfo' from its members

## 图示

![]($-20221218-15015328.png)

## Inputs

Min Send Level: Float (single-precision). Min Send Level:. The amount to send to the bus when sound is located at a distance equal to value specified in the min send distance..

Max Send Level: Float (single-precision). Max Send Level:. The amount to send to the bus when sound is located at a distance equal to value specified in the max send distance..

Min Send Distance: Float (single-precision). Min Send Distance:. The distance at which the min send Level is sent to the bus.

Max Send Distance: Float (single-precision). Max Send Distance:. The distance at which the max send level is sent to the bus.

Custom Send Level Curve: Runtime Float Curve Structure. Custom Send Level Curve:. The custom curve to use for distance-based bus send level..  

## Outputs

Sound Source Bus Send Info: Sound Source Bus Send Info Structure.

