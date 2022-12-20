# MakeScalableFloat

Adds a node that create a 'ScalableFloat' from its members

## 图示

![]($-20221218-15005011.png)

## Inputs

Value: Float (single-precision). Value:. Raw value, is multiplied by curve.

Curve: Curve Table Row Handle Structure. Curve:. Curve that is evaluated at a specific level. If found, it is multipled by Value.

Registry Type: Data Registry Type Structure. Registry Type:. Name of Data Registry containing curve to use. If set the RowName inside Curve is used as the item name.  

## Outputs

Scalable Float: Scalable Float Structure.

