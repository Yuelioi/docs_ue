# FindClosestBone

finds the closest bone to the given location

Target is Skinned Mesh Component

## 图示

![]($-20221218-18263827.png)

## Inputs

Target: Skinned Mesh Component Object Reference.

Test Location: Vector. the location to test against.

Ignore Scale: Float (single-precision). (optional) if specified, only bones with scaling larger than the specified factor are considered.

Require Physics Asset: Boolean. (optional) if true, only bones with physics will be considered.  

## Outputs

Bone Location: Vector. (optional, out) if specified, set to the world space location of the bone that was found, or (0,0,0) if no bone was found.

Return Value: Name. the name of the bone that was found, or 'None' if no bone was found.

