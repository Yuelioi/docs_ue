# MakeControlRigComponentMappedEle-

添加一个节点，从其成员中创建一个 "ControlRigComponentMappedElement"。

## 图示

![]($-20221218-14492728.png)

## Inputs

元素参考。组件参考结构。组件参考：。要映射到控制装置的组件。

转化指数。整数。变换索引：。一个可选的索引，可以与组件一起使用。有多个变换（例如，InstancedStaticMechComponent）。

改造名称。名称。变形名称：。一个可选择的名称，可与组件一起使用。有插座的（例如SkeletalMeshComponent）。

元素类型。ERigElementType枚举。元素类型：。这个元素的类型被映射到。

元素名称。名称。元素名称：。要映射到的元素的名称。

方向。EControlRigComponentMapDirection Enum.方向：。用于映射元素的方向（输入/输出）。

偏移。变换。偏移：。要应用的偏移变换。

重量。Float（单精度）。Weight:.定义了映射的元素应该被驱动的程度。

空间。EControlRigComponentSpace枚举。空间：.发生映射的空间。  

## Outputs

控制钻机组件映射的元素。映射的元素结构。
