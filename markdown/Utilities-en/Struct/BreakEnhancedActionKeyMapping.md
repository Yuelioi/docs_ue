# BreakEnhancedActionKeyMapping

Adds a node that breaks a 'EnhancedActionKeyMapping' into its member fields

## 图示

![]($-20221218-14354930.png)

## Inputs

Enhanced Action Key Mapping: Enhanced Action Key Mapping Structure (by ref).  

## Outputs

Action: Input Action Object Reference. Action:. Action to be affected by the key.

Key: Key Structure. Key:. Key that affect the action..

Is Player Mappable: Boolean. Is Player Mappable:. If true than this ActionKeyMapping will be exposed as a player bindable key.

Player Mappable Options: Player Mappable Key Options Structure. Player Mappable Options:. Options for making this a player mappable keymapping.

Triggers: Array of Input Trigger Object References. Triggers:. Trigger qualifiers. If any trigger qualifiers exist the mapping will not trigger unless:. If there are any Explicit triggers in this list at least one of them must be met.. All Implicit triggers in this list must be met..

Modifiers: Array of Input Modifier Object References. Modifiers:. Modifiers applied to the raw key value.. These are applied sequentially in array order..

