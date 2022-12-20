# SetCurveKey_Message

Sets a single key for the curve with provided identifier and name. Broadcasts a EAnimDataModelNotifyType::CurveChanged notify if successful.. In case a key for the provided key time already exists the key is replaced.

Target is Animation Data Controller

## 图示

![]($-20221218-18335595.png)

## Inputs

In: Exec.

Target: Object Reference.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the curve for which the key is to be set.

Key: Rich Curve Key Structure (by ref). Key to be set.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the curve key was successfully set.

