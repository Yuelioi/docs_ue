# BreakDisplayClus-_27

Adds a node that breaks a 'DisplayClusterConfigurationViewport_RenderSettings' into its member fields

## 图示

![]($-20221218-14341608.png)

## Inputs

Display Cluster Configuration Viewport Render Settings: Display Cluster Configuration Viewport Render Settings Structure (by ref).  

## Outputs

Stereo Mode: EDisplayClusterConfigurationViewport_StereoMode Enum. Stereo Mode:. Enables and sets Stereo mode.

Screen Percentage: Float (single-precision). Buffer Ratio:. Adjust resolution scaling for an individual viewport. Viewport Screen Percentage Multiplier is applied to this value..

Replace: Display Cluster Configuration Post Render Override Structure. Replace:. Override viewport render from source texture.

Postprocess Blur: Display Cluster Configuration Post Render Blur Postprocess Structure. Postprocess Blur:. Add postprocess blur to viewport.

Generate Mips: Display Cluster Configuration Post Render Generate Mips Structure. Generate Mips:. Generate Mips texture for this viewport (used, only if projection policy supports this feature).

Overscan: Display Cluster Configuration Viewport Overscan Structure. Overscan:. Render a larger frame than specified in the configuration to achieve continuity across displays when using post-processing effects..

