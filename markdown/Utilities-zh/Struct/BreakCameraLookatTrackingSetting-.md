# BreakCameraLookatTrackingSetting-

Adds a node that breaks a 'CameraLookatTrackingSettings' into its member fields

## 图示

![]($-20221218-14320933.png)

## Inputs

Camera Lookat Tracking Settings: Camera Lookat Tracking Settings Structure (by ref).  

## Outputs

Enable Look At Tracking: Boolean. Enable Look at Tracking:. True to enable lookat tracking, false otherwise..

Draw Debug Look At Tracking Position: Boolean. Draw Debug Look at Tracking Position:. True to draw a debug representation of the lookat location.

Look At Tracking Interp Speed: Float (single-precision). Look at Tracking Interp Speed:. Controls degree of smoothing. 0.f for no smoothing, higher numbers for faster/tighter tracking..

Actor To Track: Actor Soft Object Reference. Actor to Track:. If set, camera will track this actor's location.

Relative Offset: Vector. Relative Offset:. Offset from actor position to look at. Relative to actor if tracking an actor, relative to world otherwise..

Allow Roll: Boolean. Allow Roll:. True to allow user-defined roll, false otherwise..

