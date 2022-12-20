# GetGameplayEffectMagnitude

Raw accessor to ask the magnitude of a gameplay effect, not necessarily always correct. How should outside code (UI, etc) ask things like 'how much is this gameplay effect modifying my damage by'. (most likely we want to catch this on the backend - when damage is applied we can get a full dump/history of how the number got to where it is. But still we may need polling methods like below (how much would my damage be)

Target is Ability System Component

## 图示

![]($-20221218-19085782.png)

## Inputs

Target: Ability System Component Object Reference.

Handle: Active Gameplay Effect Handle Structure.

Attribute: Gameplay Attribute Structure.  

## Outputs

Return Value: Float (single-precision). Raw accessor to ask the magnitude of a gameplay effect, not necessarily always correct. How should outside code (UI, etc) ask things like 'how much is this gameplay effect modifying my damage by'. (most likely we want to catch this on the backend - when damage is applied we can get a full dump/history of how the number got to where it is. But still we may need polling methods like below (how much would my damage be).

