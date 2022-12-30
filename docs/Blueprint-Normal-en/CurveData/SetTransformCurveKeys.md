# SetTransformCurveKeys

Replace the keys for the transform curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveChanged notify if successful.

Target is Animation Data Controller

## 图示

![]($-20221218-18335825.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the transform curve for which the keys are to be set.

Transform Values: Array of Transforms. Transform Values with which the existing values are to be replaced.

Time Keys: Array of Float (single-precision)s. Time Keys with which the existing keys are to be replaced.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the transform curve keys were successfully set.

