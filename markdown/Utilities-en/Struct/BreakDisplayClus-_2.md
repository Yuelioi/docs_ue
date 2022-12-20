# BreakDisplayClus-_2

Adds a node that breaks a 'DisplayClusterConfigurationICVFX_CameraAdvancedRenderSettings' into its member fields

## 图示

![]($-20221218-14340896.png)

## Inputs

Display Cluster Configuration ICVFX Camera Advanced Render Settings: Display Cluster Configuration ICVFX Camera Advanced Render Settings Structure (by ref).  

## Outputs

Render Target Ratio: Float (single-precision). Render Target Ratio:. Performance: Render to scale RTT, resolved with shader to viewport (Custom value).

GPUIndex: Integer. GPUIndex:. Performance, Multi-GPU: Asign GPU for viewport rendering. The Value '-1' used to default gpu mapping (EYE_LEFT and EYE_RIGHT GPU).

Stereo GPUIndex: Integer. Stereo GPUIndex:. Performance, Multi-GPU: Customize GPU for stereo mode second view (EYE_RIGHT GPU).

Stereo Mode: EDisplayClusterConfigurationViewport_StereoMode Enum. Stereo Mode:. Performance: force monoscopic render, resolved to stereo viewport.

