# SetCurveFlag_Message

Set an individual flag for the curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveFlagsChanged notify if successful.

Target is Animation Data Controller

## 图示

![]($-20221218-18335125.png)

## Inputs

In: Exec.

Target: Object Reference.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the curve for which the flag state is to be set.

Flag: EAnimAssetCurveFlags Enum. Flag for which the state is supposed to be set.

State: Boolean. State of the flag to be, true=set/false=not set.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the flag state was successfully set.

