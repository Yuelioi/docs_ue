# CreateAttributeIdentifier

构建一个有效的FAnimationAttributeIdentifier实例。确保所提供的AnimationAsset的基础BoneName在骨架上存在。

目标是动画属性标识符扩展

## 图示

![]($-20221218-18021561.png)

## Inputs

在。执行。

Animation Asset: 动画资产对象参考。要检索骨架的动画资产。

Attribute Name（属性名称）。名称。属性的名称。

骨骼名称。名称。此属性应归属的骨的名称。

Attribute Type（属性类型）。脚本结构对象参考。此属性所存储的基础数据（将）的类型。

Validate Exists on Asset（验证资产存在）：布尔值。该属性是否应该存在于AnimationAsset上。默认为 "假"。 

## Outputs

输出。执行：执行。

返回值。Animation Attribute Identifier结构。如果操作成功，是有效的FAnimationCurveIdentifier。
