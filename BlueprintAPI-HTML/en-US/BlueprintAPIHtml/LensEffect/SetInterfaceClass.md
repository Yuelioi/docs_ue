# SetInterfaceClass

Set the represented class of the passed in variable. Note: Check the tooltips on the individual pins.. You cannot bypass the validation by connecting a wires to this node!!

Target is Camera Lens Effect Interface Class Support Library

## 图示

![]($-20221218-19403660.png)

## Inputs

In: Exec.

Class: Actor Class Reference. MUST implement CameraLensEffectInterface - when connecting variables to the input, take care that the input class does in fact implement the interface..

Var: Camera Lens Interface Class Support Structure (by ref). The wrapper (for validation purposes) of the lens effect class..  

## Outputs

Valid: Exec.

Invalid: Exec.

