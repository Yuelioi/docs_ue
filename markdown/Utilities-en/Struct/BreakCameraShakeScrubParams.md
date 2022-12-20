# BreakCameraShakeScrubParams

Adds a node that breaks a 'CameraShakeScrubParams' into its member fields

## 图示

![]($-20221218-14321020.png)

## Inputs

Camera Shake Scrub Params: Camera Shake Scrub Params Structure (by ref).  

## Outputs

Absolute Time: Float (single-precision). Absolute Time:. The time to scrub to.

Shake Scale: Float (single-precision). Shake Scale:. The base scale for this shake.

Dynamic Scale: Float (single-precision). Dynamic Scale:. The dynamic scale being passed down from the camera manger for the next update.

Blending Weight: Float (single-precision). Blending Weight:. The auto-computed blend in/out scale, when blending is handled by externally (see UCameraShakeBase::GetShakeInfo).

POV: Minimal View Info Structure. POV:. The current view that this camera shake should modify.

