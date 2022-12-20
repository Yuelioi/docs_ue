# BreakCameraAnimationParams

Adds a node that breaks a 'CameraAnimationParams' into its member fields

## 图示

![]($-20221218-14320440.png)

## Inputs

Camera Animation Params: Camera Animation Params Structure (by ref).  

## Outputs

Play Rate: Float (single-precision). Play Rate:. Time scale for playing the new camera animation.

Scale: Float (single-precision). Scale:. Global scale to use for the new camera animation.

Ease In Type: ECameraAnimationEasingType Enum. Ease in Type:. Ease-in function type.

Ease In Duration: Float (single-precision). Ease in Duration:. Ease-in duration in seconds.

Ease Out Type: ECameraAnimationEasingType Enum. Ease Out Type:. Ease-out function type.

Ease Out Duration: Float (single-precision). Ease Out Duration:. Ease-out duration in seconds.

Loop: Boolean. Loop:. Whether the camera animation should loop.

Random Start Time: Boolean. Random Start Time:. Whether the camera animation should have a random start time.

Duration Override: Float (single-precision). Duration Override:. Override the duration of the animation with a new duration (including blends).

Play Space: ECameraAnimationPlaySpace Enum. Play Space:. The transform space to use for the new camera shake.

User Play Space Rot: Rotator. User Play Space Rot:. User space to use when PlaySpace is UserDefined.

