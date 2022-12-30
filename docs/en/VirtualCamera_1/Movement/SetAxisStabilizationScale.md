# SetAxisStabilizationScale

Sets the stabilization rate for a given lock.

Target is Virtual Camera Player Controller Base

## 图示

![]($-20221218-21285876.png)

## Inputs

In: Exec.

Target: Virtual Camera Player Controller Base Object Reference.

Axis to Adjust: EVirtualCameraAxis Enum. The axis whose stabilization rate should be changed.

New Stabilization Amount: Float (single-precision). The stabilization amount we should attempt to set the value.  

## Outputs

Out: Exec.

Return Value: Float (single-precision). the actual value the stabilization amount was set to after clamping.

