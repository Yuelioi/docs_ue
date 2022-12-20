# BreakDisplayClus-_14

Adds a node that breaks a 'DisplayClusterConfigurationICVFX_OverlayAdvancedRenderSettings' into its member fields

## 图示

![]($-20221218-14340350.png)

## Inputs

Display Cluster Configuration ICVFX Overlay Advanced Render Settings: Display Cluster Configuration ICVFX Overlay Advanced Render Settings Structure (by ref).  

## Outputs

Buffer Ratio: Float (single-precision). Buffer Ratio:. Allow ScreenPercentage.

Render Target Ratio: Float (single-precision). Render Target Ratio:. Performance: Render to scale RTT, resolved with shader to viewport (Custom value).

GPUIndex: Integer. GPUIndex:. Performance, Multi-GPU: Asign GPU for viewport rendering. The Value '-1' used to default gpu mapping (EYE_LEFT and EYE_RIGHT GPU).

Stereo GPUIndex: Integer. Stereo GPUIndex:. Performance, Multi-GPU: Customize GPU for stereo mode second view (EYE_RIGHT GPU).

Stereo Mode: EDisplayClusterConfigurationViewport_StereoMode Enum. Stereo Mode:. Performance: force monoscopic render, resolved to stereo viewport.

