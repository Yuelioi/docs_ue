# GetGameplayAttributeValue

Returns the current value of the given gameplay attribute, or zero if the attribute is not found.. NOTE: This doesn't take predicted gameplay effect modifiers into consideration, so the value may not be accurate on clients at all times.

Target is Ability System Component

## 图示

![]($-20221218-19083208.png)

## Inputs

Target: Ability System Component Object Reference.

Attribute: Gameplay Attribute Structure. The gameplay attribute to query.  

## Outputs

Found: Boolean. Set to true if the attribute exists in this component.

Return Value: Float (single-precision).

