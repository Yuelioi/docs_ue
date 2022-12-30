# GetAttributeValue

Retrieves the value of an Attribute. Will fail and return 0 if the Attribute doesn't exist.

Target is DMX Fixture Patch

## 图示

![]($-20221218-18433915.png)

## Inputs

In: Exec.

Target: DMX Fixture Patch Object Reference.

Attribute: DMXAttribute Name Structure. The Attribute to try to get the value from..  

## Outputs

Out: Exec.

Success: Boolean. Whether the Attribute was found in this Fixture Patch.

Return Value: Integer. The value of the Function mapped to the selected Attribute, if found..

