# EnableMotionTrackingOfSource

Enable tracking of the specified controller, by player index and tracked device type.

Target is Motion Tracked Device Function Library

## 图示

![]($-20221218-19273906.png)

## Inputs

In: Exec.

Player Index: Integer. (in) The index of the player..

Source Name: Name. (in) The device id..  

## Outputs

Out: Exec.

Return Value: Boolean. (Boolean) true if the specified device is now set to be tracked. This could fail due to tracking limits, or on invalid input..

