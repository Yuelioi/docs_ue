# BreakSTMapInfo

Adds a node that breaks a 'STMapInfo' into its member fields

## 图示

![]($-20221218-14435396.png)

## Inputs

STMap Info: STMap Info Structure (by ref).  

## Outputs

Distortion Map: Texture Object Reference. Distortion Map:. Pre calibrated UVMap/STMap. RG channels are expected to have undistortion map (from distorted to undistorted). BA channels are expected to have distortion map (from undistorted (CG) to distorted).

