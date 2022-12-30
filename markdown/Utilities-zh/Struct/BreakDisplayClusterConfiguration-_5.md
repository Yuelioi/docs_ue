# BreakDisplayClusterConfiguration-_5

Adds a node that breaks a 'DisplayClusterConfigurationICVFX_StageSettings' into its member fields

## 图示

![]($-20221218-14344155.png)

## Inputs

Display Cluster Configuration ICVFX Stage Settings: Display Cluster Configuration ICVFX Stage Settings Structure (by ref).  

## Outputs

Enable Inner Frustum: Boolean. Enable Inner Frustums:. Enable/disable the inner frustum on all ICVFX cameras..

Default Frame Size: Display Cluster Configuration ICVFX Size Structure. Default Frame Size:. Default incameras RTT texture size..

Lightcard: Display Cluster Configuration ICVFX Lightcard Settings Structure. Lightcard.

Freeze Viewports: Boolean. Freeze Render Outer Viewports:. Freeze rendering for viewports. This improves performance..

Content Hidden From Entire Cluster: Display Cluster Configuration ICVFX Visibility List Structure. Hide List:. Content specified here will not appear anywhere in the nDisplay cluster.

Content Hidden From Viewports: Display Cluster Configuration ICVFX Visibility List Structure. Outer Viewport Hide List:. Content specified here will not appear in the nDisplay viewports, but can appear in the inner frustum..

Entire Cluster: Display Cluster Configuration Viewport Entire Cluster Color Grading Structure. Entire Cluster Color Grading:. Entire Cluster Color Grading.

Per- Viewport Color Grading: Array of Display Cluster Configuration Viewport Per Viewport Color Grading Structures. Per Viewport Color Grading:. Perform advanced color grading operations on a per-viewport or group-of-viewports basis..

Enable Viewport OCIO: Boolean. Use Overall Cluster OCIOConfiguration:. Enable the application of an OpenColorIO configuration to all viewports..

All Viewports Color Configuration: Display Cluster Configuration OCIOConfiguration Structure. All Viewports OCIOConfiguration:. Apply this OpenColorIO configuration to all viewports..

Per- Viewport OCIO Overrides: Array of Display Cluster Configuration OCIOProfile Structures. Per Viewport OCIOProfiles:. Apply an OpenColorIO configuration on a per-viewport or group-of-viewports basis..
