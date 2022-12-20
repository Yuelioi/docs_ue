# SetViewTargetwithBlend

Set the view target blending with variable control

Target is Player Controller

## 图示

![]($-20221218-19072093.png)

## Inputs

In: Exec.

Target: Player Controller Object Reference.

New View Target: Actor Object Reference. new actor to set as view target.

Blend Time: Float (single-precision). time taken to blend.

Blend Func: EViewTargetBlendFunction Enum. Cubic, Linear etc functions for blending.

Blend Exp: Float (single-precision). Exponent, used by certain blend functions to control the shape of the curve..

Lock Outgoing: Boolean. If true, lock outgoing viewtarget to last frame's camera position for the remainder of the blend..  

## Outputs

Out: Exec.

