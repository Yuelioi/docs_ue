# GetFloatAttribute

获取浮点类型属性值。

目标是骨架网状结构组件

## 图示

![]($-20221218-18341353.png)

## Inputs

在。执行。

目标。骨骼网组件对象参考。

骨骼名称。名称（通过引用）。检索尝试和检索属性的骨骼的名称。

Attribute Name（属性名称）。名称（通过引用）。要检索的属性的名称。

默认值。Float（单精度）。以防找不到属性。

查询类型。ECustomBoneAttributeLookup枚举。决定如何从指定的BoneName检索属性（见ECustomBoneAttributeLookup）。 

## Outputs

输出。执行：执行。

输出值。Float（单精度）。如果找到的话，检索到的属性值，否则被设置为DefaultValue。

返回值。布尔值。属性是否被成功检索到。
