# UpdateActorVisibility

Updates the provided actors visibility in the viewports

Target is Data Layer Editor Subsystem

## 图示

![]($-20221218-18353085.png)

## Inputs

In: Exec.

Target: Data Layer Editor Subsystem Object Reference.

Actor: Actor Object Reference. Actor to update.

Notify Selection Change: Boolean. If true the Editor is notified of the selection change; if false, the Editor will not be notified.

Redraw Viewports: Boolean. If true the viewports will be redrawn; if false, they will not.  

## Outputs

Out: Exec.

Out Selection Changed: Boolean. [OUT] Whether the Editors selection changed.

Out Actor Modified: Boolean. [OUT] Whether the actor was modified.

Return Value: Boolean.

