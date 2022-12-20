# SaveDirectory

Save the packages the assets live in inside the directory. All objects that are in the directory will be saved.. Will try to checkout the file first. Assets will be loaded before being saved.

Target is Editor Asset Library

## 图示

![]($-20221218-18473127.png)

## Inputs

In: Exec.

Directory Path: String. Directory that will be checked out and saved..

Only if Is Dirty: Boolean. Only checkout asset that are dirty..

Recursive: Boolean. The search will be recursive and it will save the asset in the sub folders..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..

