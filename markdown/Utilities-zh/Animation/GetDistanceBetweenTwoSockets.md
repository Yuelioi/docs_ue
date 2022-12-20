# GetDistanceBetweenTwoSockets

Computes the distance between two bones / sockets and can remap the range.

Target is Kismet Animation Library

## 图示

![]($-20221218-12164579.png)

## Inputs

Component: Skeletal Mesh Component Object Reference. The skeletal component to look for the sockets / bones within.

Socket or Bone Name A: Name. The name of the first socket / bone.

Socket Space A: ERelativeTransformSpace Enum. The space for the first socket / bone.

Socket or Bone Name B: Name. The name of the second socket / bone.

Socket Space B: ERelativeTransformSpace Enum. The space for the second socket / bone.

Remap Range: Boolean. If set to true, the distance will be remapped using the range parameters.

In Range Min: Float (single-precision). The minimum for the input range (commonly == 0.0).

In Range Max: Float (single-precision). The maximum for the input range (the max expected distance).

Out Range Min: Float (single-precision). The minimum for the output range (commonly == 0.0).

Out Range Max: Float (single-precision). The maximum for the output range (commonly == 1.0).  

## Outputs

Return Value: Float (single-precision).

