# InsertModifier

在堆栈中插入一个具有给定名称和索引的修改器。如果这个名字已经被使用，那么这个修改器将不会被添加。索引必须在零和现有修改器的数量之间，包括在内。如果添加成功，返回创建的修改器。

目标是VCAM组件

## 图示

![]($-20221218-21284622.png)

## Inputs

在。执行。

目标。VCam组件对象参考。

姓名：姓名

索引：整数。

修改器类。VCam修改器类参考。  

## Outputs

出：执行。

创建的修改器。VCam修改器对象参考。

成功。布尔值。在堆栈中插入一个具有给定名称和索引的修改器。如果该名称已经被使用，那么该修改器将不会被添加。索引必须在0和现有修改器的数量之间，包括在内。如果添加成功，返回创建的修改器。

Insert a modifier to the stack with a given name and index.. If that name is already in use then the modifier will not be added.. The index must be between zero and the number of existing modifiers inclusive. Returns the created modifier if the Add succeeded

Target is VCam Component

## 图示

![]($-20221218-21284622.png)

## Inputs

In: Exec.

Target: VCam Component Object Reference.

Name: Name.

Index: Integer.

Modifier Class: VCam Modifier Class Reference.  

## Outputs

Out: Exec.

Created Modifier: VCam Modifier Object Reference.

Success: Boolean. Insert a modifier to the stack with a given name and index.. If that name is already in use then the modifier will not be added.. The index must be between zero and the number of existing modifiers inclusive. Returns the created modifier if the Add succeeded.

