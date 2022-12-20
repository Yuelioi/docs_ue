# AsyncSaveGametoSlot

Schedule an async save to a specific slot. UGameplayStatics::AsyncSaveGameToSlot is the native version of this.. When the save has succeeded or failed, the completed pin is activated with success/failure and the save game object.. Keep in mind that some platforms may not support trying to load and save at the same time.

Target is Async Action Handle Save Game

## 图示

![]($-20221218-20470021.png)

## Inputs

In: Exec.

Save Game Object: Save Game Object Reference. Object that contains data about the save game that we want to write out..

Slot Name: String. Name of the save game slot to load from..

User Index: Integer. For some platforms, master user index to identify the user doing the loading..  

## Outputs

Out: Exec.

Completed: Exec. Completed:. Delegate called when the save/load completes.

Save Game: Save Game Object Reference.

Success: Boolean.

