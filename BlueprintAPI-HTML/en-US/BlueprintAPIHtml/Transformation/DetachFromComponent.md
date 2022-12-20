# DetachFromComponent

Detach this component from whatever it is attached to. Automatically unwelds components that are welded together (See WeldTo)

Target is Scene Component

## 图示

![]($-20221218-21144454.png)

## Inputs

In: Exec.

Target: Scene Component Object Reference.

Location Rule: EDetachmentRule Enum. How to handle translations when detaching..

Rotation Rule: EDetachmentRule Enum. How to handle rotation when detaching..

Scale Rule: EDetachmentRule Enum. How to handle scales when detaching..

Call Modify: Boolean. If true, call Modify() on the component and the current attach parent component.  

## Outputs

Out: Exec.

