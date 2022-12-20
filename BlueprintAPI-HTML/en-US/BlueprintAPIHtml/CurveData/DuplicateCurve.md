# DuplicateCurve

Duplicated the curve with the identifier. Broadcasts a EAnimDataModelNotifyType::CurveAdded notify if successful.

Target is Animation Data Controller

## 图示

![]($-20221218-18332659.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Copy Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the to-be-duplicated curve.

New Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the to-be-added curve.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the curve was successfully duplicated.

