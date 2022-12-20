# SaveGametoSlot

Save the contents of the SaveGameObject to a platform-specific save slot/file.. Note: This will write out all non-transient properties, the SaveGame property flag is not checked

Target is Gameplay Statics

## 图示

![]($-20221218-20470619.png)

## Inputs

In: Exec.

Save Game Object: Save Game Object Reference. Object that contains data about the save game that we want to write out.

Slot Name: String. Name of save game slot to save to..

User Index: Integer. For some platforms, master user index to identify the user doing the saving..  

## Outputs

Out: Exec.

Return Value: Boolean. Whether we successfully saved this information.

