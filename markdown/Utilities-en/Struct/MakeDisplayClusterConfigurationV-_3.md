# MakeDisplayClusterConfigurationV-_3

Adds a node that create a 'DisplayClusterConfigurationViewport_RemapData' from its members

## 图示

![]($-20221218-14511410.png)

## Inputs

Viewport Region: Display Cluster Configuration Rectangle Structure. Viewport Region:. The subregion of the viewport to remap; (0,0) x (W, H) will remap the entire viewport.

Output Region: Display Cluster Configuration Rectangle Structure. Output Region:. The region in screen space to output the remapped region to.

Angle: Float (single-precision). Angle:. The angle in degrees to rotate the remapped region by; rotation is performed around the center of the output region.

Flip H: Boolean. Flip H:. Flips the remapped region horizontally.

Flip V: Boolean. Flip V:. Flips the remapped region vertically.  

## Outputs

Display Cluster Configuration Viewport Remap Data: Display Cluster Configuration Viewport Remap Data Structure.

