# PlayWorldCameraShake

Plays an in-world camera shake that affects all nearby local players, with distance-based attenuation. Does not replicate.

Target is Gameplay Statics

## 图示

![]($-20221218-18131696.png)

## Inputs

In: Exec.

Shake: Camera Shake Base Class Reference. Camera shake asset to use.

Epicenter: Vector. location to place the effect in world space.

Inner Radius: Float (single-precision). Cameras inside this radius are ignored.

Outer Radius: Float (single-precision). Cameras outside of InnerRadius and inside this are effected.

Falloff: Float (single-precision). Affects falloff of effect as it nears OuterRadius.

Orient Shake Towards Epicenter: Boolean. Changes the rotation of shake to point towards epicenter instead of forward.  

## Outputs

Out: Exec.

