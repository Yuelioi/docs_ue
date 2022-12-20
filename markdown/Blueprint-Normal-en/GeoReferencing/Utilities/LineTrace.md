# LineTrace

LineTrace at specific location/direction

Target is Geo Referencing Editor BPLibrary

## 图示

![]($-20221218-19144167.png)

## Inputs

In: Exec.

World Location: Vector. Location of viewport origin (camera) in world space.

World Direction: Vector. Direction of viewport (camera) in world space.

Actors to Ignore: Array of Actor Object References.

Trace Complex: Boolean. Whether we should trace against complex collision.

Show Trace: Boolean. Whether we should debug draw the trace.  

## Outputs

Out: Exec.

Success: Boolean. If the Level editor not are in focus it will return false, and same if nothing is hit..

Hit Result: Hit Result Structure. The trace hits result..

