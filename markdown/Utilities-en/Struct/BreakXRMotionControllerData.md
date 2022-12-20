# BreakXRMotionControllerData

Adds a node that breaks a 'XRMotionControllerData' into its member fields

## 图示

![]($-20221218-14460577.png)

## Inputs

XRMotion Controller Data: XRMotion Controller Data Structure (by ref).  

## Outputs

Valid: Boolean. Valid.

Device Name: Name. Device Name.

Application Instance ID: Guid Structure. Application Instance ID.

Device Visual Type: EXRVisualType Enum. Device Visual Type.

Hand Index: EControllerHand Enum. Hand Index.

Tracking Status: ETrackingStatus Enum. Tracking Status.

Grip Position: Vector. Grip Position.

Grip Rotation: Quat Structure. Grip Rotation.

Aim Position: Vector. Aim Position:. for hand controllers, provides a more steady vector based on the elbow.

Aim Rotation: Quat Structure. Aim Rotation.

Hand Key Positions: Array of Vectors. Hand Key Positions:. The indices of this array are the values of EHandKeypoint (Palm, Wrist, ThumbMetacarpal, etc)..

Hand Key Rotations: Array of Quat Structures. Hand Key Rotations:. The indices of this array are the values of EHandKeypoint (Palm, Wrist, ThumbMetacarpal, etc)..

Hand Key Radii: Array of Float (single-precision)s. Hand Key Radii:. The indices of this array are the values of EHandKeypoint (Palm, Wrist, ThumbMetacarpal, etc)..

Is Grasped: Boolean. Is Grasped.

