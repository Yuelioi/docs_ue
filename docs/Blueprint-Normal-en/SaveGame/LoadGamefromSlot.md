# LoadGamefromSlot

Load the contents from a given slot.

Target is Gameplay Statics

## 图示

![]($-20221218-20470505.png)

## Inputs

In: Exec.

Slot Name: String. Name of the save game slot to load from..

User Index: Integer. For some platforms, master user index to identify the user doing the loading..  

## Outputs

Out: Exec.

Return Value: Save Game Object Reference. Object containing loaded game state (nullptr if load fails).

