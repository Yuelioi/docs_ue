# DeleteGameinSlot

Delete a save game in a particular slot.

Target is Gameplay Statics

## 图示

![]($-20221218-20470259.png)

## Inputs

In: Exec.

Slot Name: String. Name of save game slot to delete..

User Index: Integer. For some platforms, master user index to identify the user doing the deletion..  

## Outputs

Out: Exec.

Return Value: Boolean. True if a file was actually able to be deleted. use DoesSaveGameExist to distinguish between delete failures and failure due to file not existing..

