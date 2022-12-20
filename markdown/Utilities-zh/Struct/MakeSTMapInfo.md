# MakeSTMapInfo

Adds a node that create a 'STMapInfo' from its members

## 图示

![]($-20221218-15023635.png)

## Inputs

Distortion Map: Texture Object Reference. Distortion Map:. Pre calibrated UVMap/STMap. RG channels are expected to have undistortion map (from distorted to undistorted). BA channels are expected to have distortion map (from undistorted (CG) to distorted).  

## Outputs

STMap Info: STMap Info Structure.

