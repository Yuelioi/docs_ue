# AsyncLoadGamefromSlot

Schedule an async load of a specific slot. UGameplayStatics::AsyncLoadGameFromSlot is the native version of this.. When the load has succeeded or failed, the completed pin is activated with success/failure and the newly loaded save game object if valid.. Keep in mind that some platforms may not support trying to load and save at the same time.

Target is Async Action Handle Save Game

## 图示

![]($-20221218-20465898.png)

## Inputs

In: Exec.

Slot Name: String. Name of the save game slot to load from..

User Index: Integer. For some platforms, master user index to identify the user doing the loading..  

## Outputs

Out: Exec.

Completed: Exec. Completed:. Delegate called when the save/load completes.

Save Game: Save Game Object Reference.

Success: Boolean.

