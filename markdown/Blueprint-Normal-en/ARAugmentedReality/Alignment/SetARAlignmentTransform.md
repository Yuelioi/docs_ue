# SetARAlignmentTransform

Set a transform that will be applied to the tracking space. This effectively moves any camera. possessed by the Augmented Reality system such that it is pointing at a different spot. in Unreal's World Space. This is often done to support AR scenarios that rely on static. geometry and/or lighting.

Note: any movable components that are pinned will appear to stay in place, while anything. not pinned or is not movable (static or stationary) will appear to move.

\see PinComponent. \see PinComponentToTraceResult

Target is ARBlueprint Library

## 图示

![]($-20221218-17560502.png)

## Inputs

In: Exec.

In Alignment Transform: Transform (by ref).  

## Outputs

Out: Exec.

