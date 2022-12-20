# BreakDisplayClus-_7

Adds a node that breaks a 'DisplayClusterConfigurationICVFX_CameraSettings' into its member fields

## 图示

![]($-20221218-14342050.png)

## Inputs

Display Cluster Configuration ICVFX Camera Settings: Display Cluster Configuration ICVFX Camera Settings Structure (by ref).  

## Outputs

Enable Inner Frustum: Boolean. Enable:. Render the inner frustum for this ICVFX camera..

Cine Camera Actor: Cine Camera Actor Soft Object Reference. External Camera Actor:. Specify a Cine Camera Actor for this ICVFX camera to use instead of the default nDisplay camera..

Inner Frustum Screen Percentage: Float (single-precision). Buffer Ratio:. Adjust resolution scaling for the inner frustum..

Inner Frustum Overscan: Display Cluster Configuration ICVFX Camera Custom Frustum Structure. Custom Frustum:. Render a larger or smaller inner frame.

Soft Edge: Display Cluster Configuration ICVFX Camera Soft Edge Structure. Soft Edge:. Soften the edges of the inner frustum to help avoid hard lines in reflections seen by the live-action camera..

Inner Frustum Rotation: Rotator. Frustum Rotation:. Rotate the inner frustum..

Inner Frustum Offset: Vector. Frustum Offset:. Specify an offset on the inner frustum..

Inner Frustum Border: Display Cluster Configuration ICVFX Camera Border Structure. Border:. Border for the inner frustum..

Camera Motion Blur: Display Cluster Configuration ICVFX Camera Motion Blur Structure. Camera Motion Blur:. Render motion blur more accurately by subtracting blur from camera motion and avoiding amplification of blur by the physical camera..

Render Settings: Display Cluster Configuration ICVFX Camera Render Settings Structure. Render Settings:. Configure global render settings for this viewport.

Chromakey: Display Cluster Configuration ICVFX Chromakey Settings Structure. Chromakey.

All Nodes OCIO Configuration: Display Cluster Configuration OCIOConfiguration Structure. All Nodes OCIOConfiguration:. OCIO Display look configuration for this camera.

Per- Node OCIO Overrides: Array of Display Cluster Configuration OCIOProfile Structures. Per Node OCIOProfiles:. Apply an OpenColorIO configuration on a per-node or group-of-nodes basis..

All Nodes Color Grading: Display Cluster Configuration Viewport All Nodes Color Grading Structure. All Nodes Color Grading:. All Nodes Color Grading.

Per- Node Color Grading: Array of Display Cluster Configuration Viewport Per Node Color Grading Structures. Per Node Color Grading:. Perform advanced color grading operations for the inner frustum on a per-node or group-of-nodes basis..

Content Hidden From Inner Frustum: Display Cluster Configuration ICVFX Visibility List Structure. Camera Hide List:. Content specified here will not appear in the inner frustum, but can appear in the nDisplay viewports..

Inner Frustum Hidden In Viewports: Display Cluster Configuration Cluster Item Reference List Structure. Hidden ICVFXViewports:. A list of viewports that the inner frustum is not rendered to..

