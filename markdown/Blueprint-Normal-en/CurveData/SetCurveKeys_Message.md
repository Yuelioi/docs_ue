# SetCurveKeys_Message

Replace the keys for the curve with provided identifier and name. Broadcasts a EAnimDataModelNotifyType::CurveChanged notify if successful.

Target is Animation Data Controller

## 图示

![]($-20221218-18335477.png)

## Inputs

In: Exec.

Target: Object Reference.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the curve for which the keys are to be replaced.

Curve Keys: Array of Rich Curve Key Structures. Keys with which the existing keys are to be replaced.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not replacing curve keys was successful.

