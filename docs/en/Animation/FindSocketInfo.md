# FindSocketInfo

Find a socket object and asscociated info in this SkeletalMesh by name.. Entering NAME_None will return NULL. If there are multiple sockets with the same name, will return the first one.. Also returns the index for the socket allowing for future fast access via GetSocketByIndex(). Also rteturns the socket loca transform and the bone index (if any)

Target is Skeletal Mesh

## 图示

![]($-20221218-17494006.png)

## Inputs

Target: Skeletal Mesh Object Reference.

In Socket Name: Name.  

## Outputs

Out Transform: Transform.

Out Bone Index: Integer.

Out Index: Integer.

Return Value: Skeletal Mesh Socket Object Reference. Find a socket object and asscociated info in this SkeletalMesh by name.. Entering NAME_None will return NULL. If there are multiple sockets with the same name, will return the first one.. Also returns the index for the socket allowing for future fast access via GetSocketByIndex(). Also rteturns the socket loca transform and the bone index (if any).

