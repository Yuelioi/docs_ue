# BreakUsdStageOptions

Adds a node that breaks a 'UsdStageOptions' into its member fields

## 图示

![]($-20221218-14450492.png)

## Inputs

Usd Stage Options: Usd Stage Options Structure (by ref).  

## Outputs

Meters Per Unit: Float (single-precision). Meters Per Unit:. MetersPerUnit to use for the stage. Defaults to 0.01 (i.e. 1cm per unit, which equals UE units).

Up Axis: EUsdUpAxis Enum. Up Axis:. UpAxis to use for the stage. Defaults to ZAxis, which equals the UE convention.

