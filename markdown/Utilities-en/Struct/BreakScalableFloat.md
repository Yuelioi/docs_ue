# BreakScalableFloat

Adds a node that breaks a 'ScalableFloat' into its member fields

## 图示

![]($-20221218-14421769.png)

## Inputs

Scalable Float: Scalable Float Structure (by ref).  

## Outputs

Value: Float (single-precision). Value:. Raw value, is multiplied by curve.

Curve: Curve Table Row Handle Structure. Curve:. Curve that is evaluated at a specific level. If found, it is multipled by Value.

Registry Type: Data Registry Type Structure. Registry Type:. Name of Data Registry containing curve to use. If set the RowName inside Curve is used as the item name.

