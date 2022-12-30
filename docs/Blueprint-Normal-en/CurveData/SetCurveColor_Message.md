# SetCurveColor_Message

Changes the color of the curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveRenamed notify if successful.. Currently changing curve colors is only supported for float curves.

Target is Animation Data Controller

## 图示

![]($-20221218-18334643.png)

## Inputs

In: Exec.

Target: Object Reference.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier of the curve to change the color for.

Color: Linear Color Structure. Color to which the curve is to be set.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the curve color was successfully changed.

