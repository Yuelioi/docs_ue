# BreakInheritedTagContainer

Adds a node that breaks a 'InheritedTagContainer' into its member fields

## 图示

![]($-20221218-14381951.png)

## Inputs

Inherited Tag Container: Inherited Tag Container Structure (by ref).  

## Outputs

Combined Tags: Gameplay Tag Container Structure. Combined Tags:. Tags that I inherited and tags that I added minus tags that I removed.

Added: Gameplay Tag Container Structure. Added:. Tags that I have in addition to my parent's tags.

Removed: Gameplay Tag Container Structure. Removed:. Tags that should be removed if my parent had them.

