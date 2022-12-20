# CacheInitialMeshOffset

Cache mesh offset from capsule. This is used as the target for network smoothing interpolation, when the mesh is offset with lagged smoothing.. This is automatically called during initialization; call this at runtime if you intend to change the default mesh offset from the capsule.. See: GetBaseTranslationOffset(), GetBaseRotationOffset()

Target is Character

## 图示

![]($-20221218-18153520.png)

## Inputs

In: Exec.

Target: Character Object Reference.

Mesh Relative Location: Vector.

Mesh Relative Rotation: Rotator.  

## Outputs

Out: Exec.

