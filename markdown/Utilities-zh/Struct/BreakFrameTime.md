# BreakFrameTime

Adds a node that breaks a 'FrameTime' into its member fields

## 图示

![]($-20221218-14361989.png)

## Inputs

Frame Time: Frame Time Structure (by ref).  

## Outputs

Frame Number: Frame Number Structure. Frame Number:. Count of frames from start of timing.

Sub Frame: Float (single-precision). Sub Frame:. Time within a frame, always between >= 0 and < 1.

