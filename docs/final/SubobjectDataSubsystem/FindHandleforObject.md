# FindHandleforObject

试图为给定的对象找到一个现有的句柄。

目标是子对象数据子系统

## 图示

![]($-20221218-21055388.png)

## Inputs

目标。子对象数据子系统对象参考。

语境。子对象数据处理结构（通过引用）。要查找的对象所处的上下文。

寻找的对象。对象参考。你想在上下文中找到手柄的对象。

BPContext。蓝图对象参考。  

## Outputs

返回值。子对象数据句柄结构。FSubobjectDataHandle 该对象的子对象句柄，如果没有找到，则句柄无效。

Attempt to find an existing handle for the given object.

Target is Subobject Data Subsystem

## 图示

![]($-20221218-21055388.png)

## Inputs

Target: Subobject Data Subsystem Object Reference.

Context: Subobject Data Handle Structure (by ref). The context that the object to find is within.

Object to Find: Object Reference. The object that you want to find the handle for within the context.

BPContext: Blueprint Object Reference.  

## Outputs

Return Value: Subobject Data Handle Structure. FSubobjectDataHandle The subobject handle for the object, Invalid handle if not found..

