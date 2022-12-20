# MakeViewTargetTransitionParams

Adds a node that create a 'ViewTargetTransitionParams' from its members

## 图示

![]($-20221218-15041256.png)

## Inputs

Blend Time: Float (single-precision). Blend Time:. Total duration of blend to pending view target. 0 means no blending..

Blend Function: EViewTargetBlendFunction Enum. Blend Function:. Function to apply to the blend parameter..

Blend Exp: Float (single-precision). Blend Exp:. Exponent, used by certain blend functions to control the shape of the curve..

Lock Outgoing: Boolean. Lock Outgoing:. If true, lock outgoing viewtarget to last frame's camera POV for the remainder of the blend.. This is useful if you plan to teleport the old viewtarget, but don't want to affect the blend..  

## Outputs

View Target Transition Params: View Target Transition Params Structure.

