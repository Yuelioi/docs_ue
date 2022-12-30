# LineTraceComponent

Perform a line trace against a single component

Target is Primitive Component

## 图示

![]($-20221218-18191826.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Trace Start: Vector. The start of the trace in world-space.

Trace End: Vector. The end of the trace in world-space.

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

