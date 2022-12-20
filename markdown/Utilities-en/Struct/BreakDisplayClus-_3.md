# BreakDisplayClus-_3

Adds a node that breaks a 'DisplayClusterConfigurationICVFX_CameraCustomFrustum' into its member fields

## 图示

![]($-20221218-14341698.png)

## Inputs

Display Cluster Configuration ICVFX Camera Custom Frustum: Display Cluster Configuration ICVFX Camera Custom Frustum Structure (by ref).  

## Outputs

Estimated Overscan Resolution: Int Point Structure. Estimated Overscan Resolution.

Inner Frustum Resolution: Int Point Structure. Inner Frustum Resolution.

Overscan Pixels Increase: Float (single-precision). Overscan Pixels Increase.

Enable Inner Frustum Overscan: Boolean. Enable:. Enable Custom Frustum Frustum..

Adapt Resolution: Boolean. Adapt Resolution:. Enable Custom Frustum Frustum..

Overscan Multiplier: Float (single-precision). Field Of View Multiplier:. Multiply the field of view for the ICVFX camera by this value. This can increase the overall size of the inner frustum to help provide a buffer against latency when moving the camera..

Overscan Units: EDisplayClusterConfigurationViewportCustomFrustumMode Enum. Mode:. Enable/disable inner camera custom frustum and specify units as percent or pixel values..

Left: Float (single-precision). Left:. Pixel/Percent value to alter the frustum to the left side.

Right: Float (single-precision). Right:. Pixel/Percent value to alter the frustum to the right side.

Top: Float (single-precision). Top:. Pixel/Percent value to alter the frustum to the top.

Bottom: Float (single-precision). Bottom:. Pixel/Percent value to alter the frustum to the bottom.

