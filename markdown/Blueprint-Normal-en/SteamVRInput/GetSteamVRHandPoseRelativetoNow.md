# GetSteamVRHandPoseRelativetoNow

Returns the data for the hand transform at any point in time from current time, given a relative number of seconds

Target is Steam VRInput Device Function Library

## 图示

![]($-20221218-21043829.png)

## Inputs

In: Exec.

Hand: ESteamVRHand Enum. The hand that we're going to retrieve the transform for.

Predicted Seconds from Now: Float (single-precision).  

## Outputs

Out: Exec.

Position: Vector.

Orientation: Rotator.

Return Value: Boolean. Position - The position of the hand at the point in time, given a relative number of seconds, from the current time.

