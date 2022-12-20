# BreakDisplayClus-_26

Adds a node that breaks a 'DisplayClusterConfigurationViewport_PerViewportColorGrading' into its member fields

## 图示

![]($-20221218-14341520.png)

## Inputs

Display Cluster Configuration Viewport Per Viewport Color Grading: Display Cluster Configuration Viewport Per Viewport Color Grading Structure (by ref).  

## Outputs

Enable Per- Viewport Color Grading: Boolean. Is Enabled:. Enable the color grading settings for the viewport(s) specified and add them to nDisplay's color grading stack. This will not affect the inner frustum..

Include Entire Cluster Color Grading: Boolean. Is Entire Cluster Enabled:. Optionally include the Entire Cluster Color Grading settings specified above in nDisplay's color grading stack for these viewports..

Color Grading: Display Cluster Configuration Viewport Color Grading Rendering Settings Structure. Color Grading Settings:. Color Grading.

Apply Color Grading To Viewports: Array of Strings. Apply Post Process to Objects:. Specify the viewports to apply these color grading settings..

