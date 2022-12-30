# ResetOrientationandPosition

Resets orientation by setting roll and pitch to 0, assuming that current yaw is forward direction and assuming. current position as a 'zero-point' (for positional tracking).

Target is Head Mounted Display Function Library

## 图示

![]($-20221218-19240677.png)

## Inputs

In: Exec.

Yaw: Float (single-precision). (in) the desired yaw to be set after orientation reset..

Options: EOrientPositionSelector Enum. (in) specifies either position, orientation or both should be reset..  

## Outputs

Out: Exec.

