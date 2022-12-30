# BreakControlRigComponentMappedEl-

添加一个节点，将'ControlRigComponentMappedElement'分解成其成员字段

## 图示

![]($-20221218-14331187.png)

## Inputs

控制钻机组件映射元素。映射的元素结构（通过参考）。 

## Outputs

组件参考。组件参考结构。组件参考：。要映射到控制钻机上的组件。

Transform Index（变换索引）。整数。变换索引：。一个可选的索引，可以与组件一起使用。有多个变换（例如InstancedStaticMechComponent）。

变形名称。名称。变换名称：。一个可选的名称，可用于有插座的组件（例如SkeletalMeshComponent）。

元素类型。ERigElementType枚举。元素类型：。这是映射到的元素的类型。

元素名称。名称。元素名称:. 要映射到的元素的名称。

方向。EControlRigComponentMapDirection Enum。方向:。用于映射元素的方向（输入/输出）。

偏移。变换。偏移：。要应用的偏移变换。

Weight（重量）。Float（单精度）。Weight：.定义了映射元素应该被驱动的程度。

空间。EControlRigComponentSpace枚举。Space:.发生映射的空间。
