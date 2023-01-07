# CreateAttributeIdentifier

构建一个有效的 FAnimationAttributeIdentifier 实例。确保所提供的 AnimationAsset 的基础 BoneName 在骨架上存在。

目标是动画属性标识符扩展

## 图示

![](/uploads/projects/ue-bluprint/20221218-18021561.png)

## Inputs

在。执行。

Animation Asset: 动画资产对象参考。要检索骨架的动画资产。

Attribute Name（属性名称）。名称。属性的名称。

骨骼名称。名称。此属性应归属的骨的名称。

Attribute Type（属性类型）。脚本结构对象参考。此属性所存储的基础数据（将）的类型。

Validate Exists on Asset（验证资产存在）：布尔值。该属性是否应该存在于 AnimationAsset 上。默认为 "假"。

## Outputs

输出。执行：执行。

返回值。Animation Attribute Identifier 结构。如果操作成功，是有效的 FAnimationCurveIdentifier。

<hr>

Constructs a valid FAnimationAttributeIdentifier instance. Ensuring that the underlying BoneName exists on the Skeleton for the provided AnimationAsset.

Target is Animation Attribute Identifier Extensions

## 图示

![](/uploads/projects/ue-bluprint/20221218-18021561.png)

## Inputs

In: Exec.

Animation Asset: Animation Asset Object Reference. Animation asset to retrieve Skeleton from.

Attribute Name: Name. Name of the attribute.

Bone Name: Name. Name of the bone this attribute should be attributed to.

Attribute Type: Script Struct Object Reference. Type of the underlying data (to-be) stored by this attribute.

Validate Exists on Asset: Boolean. Whether or not the attribute should exist on the AnimationAsset. False by default..

## Outputs

Out: Exec.

Return Value: Animation Attribute Identifier Structure. Valid FAnimationCurveIdentifier if the operation was successful.
