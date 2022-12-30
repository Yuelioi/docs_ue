# SpawnDecalatLocation

Spawns a decal at the given location and rotation, fire and forget. Does not replicate.

Target is Gameplay Statics

## 图示

![]($-20221218-20362102.png)

## Inputs

In: Exec.

Decal Material: Material Interface Object Reference. decal's material.

Decal Size: Vector. size of decal.

Location: Vector. location to place the decal in world space.

Rotation: Rotator. rotation to place the decal in world space.

Life Span: Float (single-precision). destroy decal component after time runs out (0 = infinite).  

## Outputs

Out: Exec.

Return Value: Decal Component Object Reference.

