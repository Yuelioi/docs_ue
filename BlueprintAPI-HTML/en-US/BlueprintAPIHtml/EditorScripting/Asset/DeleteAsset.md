# DeleteAsset

Delete the package the assets live in. All objects that live in the package will be deleted.. This is a Force Delete. It doesn't check if the asset has references in other Levels or by Actors.. It will close all the asset editors and may clear the Transaction buffer (Undo History).. Will try to mark the file as deleted. The Asset will be loaded before being deleted.

Target is Editor Asset Library

## 图示

![]($-20221218-18470344.png)

## Inputs

In: Exec.

Asset Path to Delete: String. Asset Path of the asset that we want to delete..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..

