# MakeVREditorFloatingUICreationCo-

Adds a node that create a 'VREditorFloatingUICreationContext' from its members

## 图示

![]($-20221218-15043257.png)

## Inputs

Widget Class: User Widget Class Reference. Widget Class:. Widget to open in the VR window. null to close an open window (if if matches the PanelID).

Panel ID: Name. Panel ID:. ID that the UI system will use to identify the panel. MUST BE UNIQUE!.

Parent Actor: Actor Object Reference. Parent Actor.

Panel Spawn Offset: Transform. Panel Spawn Offset:. Optional offset from HMD where the window opens. Pass FTransform::Identity for default logic - window will open at controller location..

Panel Size: Vector 2D Structure. Panel Size:. Panel size. Should match the size of the UMG passed in..

Panel Mesh: Static Mesh Object Reference. Panel Mesh:. Optional custom mesh to use for the VR window..

Editor UISize: Float (single-precision). Editor UISize:. Optional override for "VREd.EditorUISize". Leave at 0 for default..

Hide Window Handles: Boolean. Hide Window Handles:. Turn off handles under window? (X-To-Close, movement bar...).

Mask Out Widget Background: Boolean. Mask Out Widget Background:. Turn off the widget's background to create a see-through look..

No Close Button: Boolean. No Close Button:. If bHideWindowHandles is false, this window doesn't have a close button. (.  

## Outputs

VREditor Floating UICreation Context: VREditor Floating UICreation Context Structure.

