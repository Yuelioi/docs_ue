# BoxOverlapComponent

Perform a box overlap against a single component as an AABB (No rotation)

Target is Primitive Component

## 图示

![]($-20221218-18183062.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

In Box Centre: Vector. The centre of the box to overlap with the component.

In Box: Box Structure. Description of the box to use in the overlap.

Trace Complex: Boolean. Whether or not to trace the complex physics representation or just the simple representation.

Show Trace: Boolean. Whether or not to draw the trace in the world (for debugging).

Persistent Show Trace: Boolean. Whether or not to make the debugging draw stay in the world permanently.  

## Outputs

Out: Exec.

Hit Location: Vector.

Hit Normal: Vector.

Bone Name: Name.

Out Hit: Hit Result Structure.

Return Value: Boolean.

