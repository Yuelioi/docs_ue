# BreakDisplayClus-_10

Adds a node that breaks a 'DisplayClusterConfigurationICVFX_ChromakeyRenderSettings' into its member fields

## 图示

![]($-20221218-14335997.png)

## Inputs

Display Cluster Configuration ICVFX Chromakey Render Settings: Display Cluster Configuration ICVFX Chromakey Render Settings Structure (by ref).  

## Outputs

Use Custom Chromakey: Boolean. Enable:. Set to True to use custom chromakey content..

Replace Camera Viewport: Boolean. Replace Camera Viewport:. Replace the texture of the camera viewport from this chromakey RTT.

Custom Size: Display Cluster Configuration ICVFX Custom Size Structure. Custom Size:. Performance: Use custom size (low-res) for chromakey RTT frame. Default size same as camera frame.

Custom Chromakey Content: Display Cluster Configuration ICVFX Visibility List Structure. Show Only List:. Content specified here will be overridden to use the chromakey color specified and include chromakey markers if enabled..

Replace: Display Cluster Configuration Post Render Override Structure. Replace:. Replace viewport render from source texture.

Post Process Blur: Display Cluster Configuration Post Render Blur Postprocess Structure. Postprocess Blur:. Apply blur to the Custom Chromakey content..

Generate Mips: Display Cluster Configuration Post Render Generate Mips Structure. Generate Mips.

Advanced Render Settings: Display Cluster Configuration ICVFX Overlay Advanced Render Settings Structure. Advanced Render Settings:. Advanced render settings.

