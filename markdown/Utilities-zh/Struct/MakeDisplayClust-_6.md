# MakeDisplayClust-_6

Adds a node that create a 'DisplayClusterConfigurationICVFX_CameraRenderSettings' from its members

## 图示

![]($-20221218-14504424.png)

## Inputs

Custom Frame Size: Display Cluster Configuration ICVFX Custom Size Structure. Custom Frame Size:. Define custom inner camera viewport size.

Render Order: Integer. Render Order:. Camera render order, bigger value is over.

Use Camera Component Postprocess: Boolean. Use Camera Component Postprocess:. Use postprocess settings from camera component.

Mipmapping: Display Cluster Configuration Post Render Override Structure. Replace:. Replace viewport render from source texture.

Mipmapping: Display Cluster Configuration Post Render Generate Mips Structure. Generate Mips:. Mipmapping can help avoid visual artifacts when the inner frustum is rendered at a lower resolution than specified in the configuration and is smaller on screen than the available pixels on the display device..

Advanced Render Settings: Display Cluster Configuration ICVFX Camera Advanced Render Settings Structure. Advanced Render Settings:. Advanced render settings.  

## Outputs

Display Cluster Configuration ICVFX Camera Render Settings: Display Cluster Configuration ICVFX Camera Render Settings Structure.

