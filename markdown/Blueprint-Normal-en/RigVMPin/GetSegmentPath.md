# GetSegmentPath

Returns a . separated path containing all names of the pin within its main. memory owner / storage. This is typically used to create an offset pointer. within memory (FRigVMRegisterOffset).. So for example for a PinPath such as "Node.Transform.Translation.X" the. corresponding SegmentPath is "Translation.X", since the transform is the. storage / memory.

Target is Rig VMPin

## 图示

![]($-20221218-20461060.png)

## Inputs

Target: Rig VMPin Object Reference.

Include Root Pin: Boolean.  

## Outputs

Return Value: String. Returns aseparated path containing all names of the pin within its main. memory owner / storage. This is typically used to create an offset pointer. within memory (FRigVMRegisterOffset).. So for example for a PinPath such as "Node.Transform.Translation.X" the. corresponding SegmentPath is "Translation.X", since the transform is the. storage / memory..

