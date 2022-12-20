# MakeCameraShakeUpdateParams

Adds a node that create a 'CameraShakeUpdateParams' from its members

## 图示

![]($-20221218-14481679.png)

## Inputs

Delta Time: Float (single-precision). Delta Time:. The time elapsed since last update.

Shake Scale: Float (single-precision). Shake Scale:. The base scale for this shake.

Dynamic Scale: Float (single-precision). Dynamic Scale:. The dynamic scale being passed down from the camera manger for the next update.

Blending Weight: Float (single-precision). Blending Weight:. The auto-computed blend in/out scale, when blending is handled by externally (see UCameraShakeBase::GetShakeInfo).

POV: Minimal View Info Structure. POV:. The current view that this camera shake should modify.  

## Outputs

Camera Shake Update Params: Camera Shake Update Params Structure.

