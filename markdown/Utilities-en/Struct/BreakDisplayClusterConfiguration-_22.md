# BreakDisplayClusterConfiguration-_22

Adds a node that breaks a 'DisplayClusterConfigurationViewport_RemapData' into its member fields

## 图示

![]($-20221218-14343894.png)

## Inputs

Display Cluster Configuration Viewport Remap Data: Display Cluster Configuration Viewport Remap Data Structure (by ref).  

## Outputs

Viewport Region: Display Cluster Configuration Rectangle Structure. Viewport Region:. The subregion of the viewport to remap; (0,0) x (W, H) will remap the entire viewport.

Output Region: Display Cluster Configuration Rectangle Structure. Output Region:. The region in screen space to output the remapped region to.

Angle: Float (single-precision). Angle:. The angle in degrees to rotate the remapped region by; rotation is performed around the center of the output region.

Flip H: Boolean. Flip H:. Flips the remapped region horizontally.

Flip V: Boolean. Flip V:. Flips the remapped region vertically.

