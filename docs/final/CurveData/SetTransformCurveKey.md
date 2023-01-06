# SetTransformCurveKey

Sets a single key for the transform curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveChanged notify if successful.. In case a key for any of the individual transform channel curves already exists the value is replaced.

Target is Animation Data Controller

## 图示

![]($-20221218-18335709.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the transform curve for which the key is to be set.

Time: Float (single-precision). Time of the key to be set.

Value: Transform (by ref). Value of the key to be set.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the transform curve key was successfully set.

Sets a single key for the transform curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveChanged notify if successful.. In case a key for any of the individual transform channel curves already exists the value is replaced.

Target is Animation Data Controller

## 图示

![]($-20221218-18335709.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the transform curve for which the key is to be set.

Time: Float (single-precision). Time of the key to be set.

Value: Transform (by ref). Value of the key to be set.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the transform curve key was successfully set.

