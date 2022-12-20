# BreakDMXEntityFixturePatchConstr-

Adds a node that breaks a 'DMXEntityFixturePatchConstructionParams' into its member fields

## 图示

![]($-20221218-14345207.png)

## Inputs

DMXEntity Fixture Patch Construction Params: DMXEntity Fixture Patch Construction Params Structure (by ref).  

## Outputs

Fixture Type: DMX Fixture Type Ref Structure. Fixture Type Ref:. Property to point to the template parent fixture for details panel purposes.

Active Mode: Integer. Active Mode:. The Index of the Mode in the Fixture Type the Patch uses.

Universe: Integer. Universe ID:. The local universe of the patch.

Starting Address: Integer. Starting Address:. Starting channel for when auto-assign address is false.

