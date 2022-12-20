# BreakLensInfo

Adds a node that breaks a 'LensInfo' into its member fields

## 图示

![]($-20221218-14390182.png)

## Inputs

Lens Info: Lens Info Structure (by ref).  

## Outputs

Lens Model Name: String. Lens Model Name:. Model name of the lens.

Lens Serial Number: String. Lens Serial Number:. Serial number of the lens.

Lens Model: Lens Model Class Reference. Lens Model:. Model of the lens (spherical, anamorphic, etc...).

Sensor Dimensions: Vector 2D Structure. Sensor Dimensions:. Width and height of the calibrated camera's sensor, in millimeters.

Image Dimensions: Int Point Structure. Image Dimensions:. Camera image size, in pixels.

