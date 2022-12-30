# CreateAttributeIdentifier

Constructs a valid FAnimationAttributeIdentifier instance. Ensuring that the underlying BoneName exists on the Skeleton for the provided AnimationAsset.

Target is Animation Attribute Identifier Extensions

## 图示

![]($-20221218-18021561.png)

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

