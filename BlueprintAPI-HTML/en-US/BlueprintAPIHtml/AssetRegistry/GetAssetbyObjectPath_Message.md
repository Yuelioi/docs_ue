# GetAssetbyObjectPath_Message

Gets the asset data for the specified object path

Target is Asset Registry

## 图示

![]($-20221218-18003036.png)

## Inputs

In: Exec.

Target: Object Reference.

Object Path: Name. the path of the object to be looked up.

Include Only on Disk Assets: Boolean. if true, in-memory objects will be ignored. The call will be faster..  

## Outputs

Out: Exec.

Return Value: Asset Data Structure. the assets data;Will be invalid if object could not be found.

