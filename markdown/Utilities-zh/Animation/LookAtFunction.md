# LookAtFunction

Computes the transform which is "looking" at target position with a local axis.

Target is Kismet Animation Library

## 图示

![]($-20221218-12164668.png)

## Inputs

Current Transform: Transform (by ref). The input transform to modify.

Target Position: Vector (by ref). The position this transform should look at.

Look at Vector: Vector. The local vector to align with the target.

Use Up Vector: Boolean. If set to true the lookat will also perform a twist rotation.

Up Vector: Vector. The position to use for the upvector target (only used is bUseUpVector is turned on).

Clamp Cone in Degree: Float (single-precision). A limit for only allowing the lookat to rotate as much as defined by the float value.  

## Outputs

Return Value: Transform.

