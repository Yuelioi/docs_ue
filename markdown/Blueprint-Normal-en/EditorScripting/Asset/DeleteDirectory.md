# DeleteDirectory

Delete the packages inside a directory. If the directory is then empty, delete the directory.. This is a Force Delete. It doesn't check if the assets have references in other Levels or by Actors.. It will close all the asset editors and may clear the Transaction buffer (Undo History).. Will try to mark the file as deleted. Assets will be loaded before being deleted.. The search is always recursive. It will try to delete the sub folders.

Target is Editor Asset Library

## 图示

![]($-20221218-18470460.png)

## Inputs

In: Exec.

Directory Path: String. Directory that will be mark for delete and deleted..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..

