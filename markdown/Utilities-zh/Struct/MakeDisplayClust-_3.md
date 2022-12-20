# MakeDisplayClust-_3

Adds a node that create a 'DisplayClusterConfigurationICVFX_CameraCustomFrustum' from its members

## 图示

![]($-20221218-14504123.png)

## Inputs

Enable Inner Frustum Overscan: Boolean. Enable:. Enable Custom Frustum Frustum..

Adapt Resolution: Boolean. Adapt Resolution:. Enable Custom Frustum Frustum..

Overscan Multiplier: Float (single-precision). Field Of View Multiplier:. Multiply the field of view for the ICVFX camera by this value. This can increase the overall size of the inner frustum to help provide a buffer against latency when moving the camera..

Overscan Units: EDisplayClusterConfigurationViewportCustomFrustumMode Enum. Mode:. Enable/disable inner camera custom frustum and specify units as percent or pixel values..

Left: Float (single-precision). Left:. Pixel/Percent value to alter the frustum to the left side.

Right: Float (single-precision). Right:. Pixel/Percent value to alter the frustum to the right side.

Top: Float (single-precision). Top:. Pixel/Percent value to alter the frustum to the top.

Bottom: Float (single-precision). Bottom:. Pixel/Percent value to alter the frustum to the bottom.  

## Outputs

Display Cluster Configuration ICVFX Camera Custom Frustum: Display Cluster Configuration ICVFX Camera Custom Frustum Structure.

