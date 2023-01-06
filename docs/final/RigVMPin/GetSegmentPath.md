# GetSegmentPath

返回一个.分隔的路径，包含针脚在其主.内存所有者/存储中的所有名称。这通常用于在内存中创建一个偏移指针（FRigVMRegisterOffset）。因此，例如，对于 "Node.Transform.Translation.X "这样的PinPath，相应的SegmentPath是 "Translation.X"，因为Transform是存储/内存。

目标是Rig VMPin

## 图示

![]($-20221218-20461060.png)

## Inputs

目标。Rig VMPin对象参考。

包括根针：布尔值。  

## Outputs

返回值。字符串。返回一个分开的路径，其中包含所有针脚在其主、内存所有者/存储中的名称。这通常用于在内存中创建一个偏移指针（FRigVMRegisterOffset）。因此，例如，对于 "Node.Transform.Translation.X "这样的PinPath，相应的SegmentPath是 "Translation.X"，因为Transform是存储/内存。

Returns a . separated path containing all names of the pin within its main. memory owner / storage. This is typically used to create an offset pointer. within memory (FRigVMRegisterOffset).. So for example for a PinPath such as "Node.Transform.Translation.X" the. corresponding SegmentPath is "Translation.X", since the transform is the. storage / memory.

Target is Rig VMPin

## 图示

![]($-20221218-20461060.png)

## Inputs

Target: Rig VMPin Object Reference.

Include Root Pin: Boolean.  

## Outputs

Return Value: String. Returns aseparated path containing all names of the pin within its main. memory owner / storage. This is typically used to create an offset pointer. within memory (FRigVMRegisterOffset).. So for example for a PinPath such as "Node.Transform.Translation.X" the. corresponding SegmentPath is "Translation.X", since the transform is the. storage / memory..

