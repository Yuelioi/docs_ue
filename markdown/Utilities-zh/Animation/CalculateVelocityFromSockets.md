# CalculateVelocityFromSockets

This function calculates the velocity of an offset position on a bone / socket over time.. The bone's / socket's motion can be expressed within a reference frame (another bone / socket).. You need to hook up a valid PositionHistory variable to this for storage.

Target is Kismet Animation Library

## 图示

![]($-20221218-12164312.png)

## Inputs

In: Exec.

Delta Seconds: Float (single-precision). The time passed in seconds.

Component: Skeletal Mesh Component Object Reference. The skeletal component to look for the bones / sockets.

Socket or Bone Name: Name. The name of the bone / socket to track..

Reference Socket or Bone: Name. The name of the bone / socket to use as a frame of reference (or None if no frame of reference == world space)..

Socket Space: ERelativeTransformSpace Enum. The space to use for the two sockets / bones.

Offset in Bone Space: Vector. The relative position in the space of the bone / socket to track over time..

History: Position History Structure (by ref). The history to use for storage..

Number Of Samples: Integer. The number of samples to use for the history. The higher the number of samples - the smoother the velocity changes..

Velocity Min: Float (single-precision). The minimum velocity to use for normalization (if both min and max are set to 0, normalization is turned off).

Velocity Max: Float (single-precision). The maximum velocity to use for normalization (if both min and max are set to 0, normalization is turned off).

Easing Type: EEasingFuncType Enum. The easing function to use.

Custom Curve: Runtime Float Curve Structure (by ref). The curve to use if the easing type is "Custom".  

## Outputs

Out: Exec.

Return Value: Float (single-precision).

