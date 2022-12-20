# DeleteLoadedAsset

Delete an asset from the Content Browser that is already loaded.. This is a Force Delete. It doesn't check if the asset has references in other Levels or by Actors.. It will close all the asset editors and may clear the Transaction buffer (Undo History).. Will try to mark the file as deleted.

Target is Editor Asset Library

## 图示

![]($-20221218-18470578.png)

## Inputs

In: Exec.

Asset to Delete: Object Reference. Asset that we want to delete..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..

