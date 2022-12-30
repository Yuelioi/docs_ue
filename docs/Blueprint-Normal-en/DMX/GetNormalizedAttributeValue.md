# GetNormalizedAttributeValue

Return the normalized value of an Int value from a Fixture Patch function.

Target is DMXSubsystem

## 图示

![]($-20221218-18442556.png)

## Inputs

Target: DMXSubsystem Object Reference.

In Fixture Patch: DMX Fixture Patch Object Reference.

In Function Attribute: DMXAttribute Name Structure.

In Value: Integer.  

## Outputs

Return Value: Float (single-precision). The normalized value of the passed in Int using the Function's signal format. -1.0 if the Function is not found in the Fixture Patch..

