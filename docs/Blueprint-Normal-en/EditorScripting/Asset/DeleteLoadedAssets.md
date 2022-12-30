# DeleteLoadedAssets

Delete assets from the Content Browser that are already loaded.. This is a Force Delete. It doesn't check if the assets have references in other Levels or by Actors.. It will close all the asset editors and may clear the Transaction buffer (Undo History).. Will try to mark the files as deleted.

Target is Editor Asset Library

## 图示

![]($-20221218-18470694.png)

## Inputs

In: Exec.

Assets to Delete: Array of Object References. Assets that we want to delete..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..

