# BreakConstraintDescription

Adds a node that breaks a 'ConstraintDescription' into its member fields

## 图示

![]($-20221218-14325073.png)

## Inputs

Constraint Description: Constraint Description Structure (by ref).  

## Outputs

Translation: Boolean. Translation.

Rotation: Boolean. Rotation.

Scale: Boolean. Scale.

Parent: Boolean. Parent:. this does composed transform - where as individual will accumulate per component.

Translation Axes: Filter Option Per Axis Structure. Translation Axes.

Rotation Axes: Filter Option Per Axis Structure. Rotation Axes.

Scale Axes: Filter Option Per Axis Structure. Scale Axes.

