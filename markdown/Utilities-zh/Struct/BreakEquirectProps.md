# BreakEquirectProps

Adds a node that breaks a 'EquirectProps' into its member fields

## 图示

![]($-20221218-14355369.png)

## Inputs

Equirect Props: Equirect Props Structure (by ref).  

## Outputs

Left UVRect: Box 2D Structure. Left UVRect:. Left source texture UVRect, specifying portion of input texture corresponding to left eye..

Right UVRect: Box 2D Structure. Right UVRect:. Right source texture UVRect, specifying portion of input texture corresponding to right eye..

Left Scale: Vector 2D Structure. Left Scale:. Left eye's texture coordinate scale after mapping to 2D..

Right Scale: Vector 2D Structure. Right Scale:. Right eye's texture coordinate scale after mapping to 2D..

Left Bias: Vector 2D Structure. Left Bias:. Left eye's texture coordinate bias after mapping to 2D..

Right Bias: Vector 2D Structure. Right Bias:. Right eye's texture coordinate bias after mapping to 2D..

