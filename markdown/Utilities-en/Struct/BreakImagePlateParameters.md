# BreakImagePlateParameters

Adds a node that breaks a 'ImagePlateParameters' into its member fields

## 图示

![]($-20221218-14380981.png)

## Inputs

Image Plate Parameters: Image Plate Parameters Structure (by ref).  

## Outputs

Material: Material Interface Object Reference. Material:. The material that the image plate is rendered with..

Texture Parameter Name: Name. Texture Parameter Name:. Name of a texture parameter inside the material to patch the render target texture to.

Fill Screen: Boolean. Fill Screen:. Automatically size the plate based on the active camera's lens and filmback settings. Target Camera is found by looking for an active camera component from this component's actor, through its attached parents..

Fill Screen Amount: Vector 2D Structure. Fill Screen Amount:. The amount to fill the screen with when attached to a camera.

Fixed Size: Vector 2D Structure. Fixed Size:. The fixed size of the image plate.

Render Texture: Texture Object Reference. Render Texture:. Transient texture that receives image frames.

