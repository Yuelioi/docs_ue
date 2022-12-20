# GetDeltaTransformfromRefPose

Get delta transform from reference pose based on BaseNode.. This uses last frame up-to-date transform, so it will have a frame delay if you use this info in the AnimGraph

Target is Skinned Mesh Component

## 图示

![]($-20221218-18264286.png)

## Inputs

Target: Skinned Mesh Component Object Reference.

Bone Name: Name. Name of the bone.

Base Name: Name. Name of the base bone - if none, it will use parent as a base.  

## Outputs

Return Value: Transform. the delta transform from refpose in that given space (BaseName).

