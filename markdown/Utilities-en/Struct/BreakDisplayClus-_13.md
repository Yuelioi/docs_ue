# BreakDisplayClus-_13

Adds a node that breaks a 'DisplayClusterConfigurationICVFX_LightcardSettings' into its member fields

## 图示

![]($-20221218-14340260.png)

## Inputs

Display Cluster Configuration ICVFX Lightcard Settings: Display Cluster Configuration ICVFX Lightcard Settings Structure (by ref).  

## Outputs

Enable Light Cards: Boolean. Enable:. Enable Light Cards.

Ignore Freezing Of Outer Viewports For Lightcards: Boolean. Ignore Outer Viewports Freezing for Lightcards:. Enable\Disable freeze rendering for lightcards when outer viewports rendering also freezed. This will impact performance..

Blending Mode: EDisplayClusterConfigurationICVFX_LightcardRenderMode Enum. Blendingmode:. Specify how to render Light Cards in relation to the inner frustum..

Light Cards Content: Display Cluster Configuration ICVFX Visibility List Structure. Show Only List:. Content specified here will be treated as a Light Card and adhere to the Blending Mode setting.

Render Settings: Display Cluster Configuration ICVFX Lightcard Render Settings Structure. Render Settings:. Configure global render settings for this viewport.

