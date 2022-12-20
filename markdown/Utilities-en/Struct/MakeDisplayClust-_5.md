# MakeDisplayClust-_5

Adds a node that create a 'DisplayClusterConfigurationICVFX_CameraMotionBlurOverridePPS' from its members

## 图示

![]($-20221218-14504336.png)

## Inputs

Enable Settings Override: Boolean. Replace Enable:. If enabled, override the overall motion blur settings that would otherwise come from the current post-process volume or Cine Camera..

Intensity: Float (single-precision). Motion Blur Amount:. Strength of motion blur, 0:off..

Max: Float (single-precision). Motion Blur Max:. Max distortion caused by motion blur in percent of the screen width, 0:off.

Per Object Size: Float (single-precision). Motion Blur Per Object Size:. The minimum projected screen radius for a primitive to be drawn in the velocity pass.Percentage of screen width, smaller numbers cause more draw calls, default: 4 %.  

## Outputs

Display Cluster Configuration ICVFX Camera Motion Blur Override PPS: Display Cluster Configuration ICVFX Camera Motion Blur Override PPS Structure.

