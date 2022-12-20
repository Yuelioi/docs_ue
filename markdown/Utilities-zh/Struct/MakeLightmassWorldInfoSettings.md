# MakeLightmassWorldInfoSettings

Adds a node that create a 'LightmassWorldInfoSettings' from its members

## 图示

![]($-20221218-14564421.png)

## Inputs

Static Lighting Level Scale: Float (single-precision). Static Lighting Level Scale:. Warning: Setting this to less than 1 will greatly increase build times!. Scale of the level relative to real world scale (1 Unreal Unit = 1 cm).. All scale-dependent Lightmass setting defaults have been tweaked to work well with real world scale,. Any levels with a different scale should use this scale to compensate.. For large levels it can drastically reduce build times to set this to 2 or 4..

Num Indirect Lighting Bounces: Integer. Num Indirect Lighting Bounces:. Number of light bounces to simulate for point / spot / directional lights, starting from the light source.. 0 is direct lighting only, 1 is one bounce, etc.. Bounce 1 takes the most time to calculate and contributes the most to visual quality, followed by bounce 2.. Successive bounces don't really affect build times, but have a much lower visual impact, unless the material diffuse colors are close to 1..

Num Sky Lighting Bounces: Integer. Num Sky Lighting Bounces:. Number of skylight and emissive bounces to simulate.. Lightmass uses a non-distributable radiosity method for skylight bounces whose cost is proportional to the number of bounces..

Indirect Lighting Quality: Float (single-precision). Indirect Lighting Quality:. Warning: Setting this higher than 1 will greatly increase build times!. Can be used to increase the GI solver sample counts in order to get higher quality for levels that need it.. It can be useful to reduce IndirectLightingSmoothness somewhat (~.75) when increasing quality to get defined indirect shadows.. Note that this can't affect compression artifacts, UV seams or other texture based artifacts..

Indirect Lighting Smoothness: Float (single-precision). Indirect Lighting Smoothness:. Smoothness factor to apply to indirect lighting. This is useful in some lighting conditions when Lightmass cannot resolve accurate indirect lighting.. 1 is default smoothness tweaked for a variety of lighting situations.. Higher values like 3 smooth out the indirect lighting more, but at the cost of indirect shadows losing detail..

Environment Color: Color Structure. Environment Color:. Represents a constant color light surrounding the upper hemisphere of the level, like a sky.. This light source currently does not get bounced as indirect lighting and causes reflection capture brightness to be incorrect. Prefer using a Static Skylight instead..

Environment Intensity: Float (single-precision). Environment Intensity:. Scales EnvironmentColor to allow independent color and brightness controls..

Diffuse Boost: Float (single-precision). Diffuse Boost:. Scales the diffuse contribution of all materials in the scene..

Volume Lighting Method: EVolumeLightingMethod Enum. Volume Lighting Method:. Technique to use for providing precomputed lighting at all positions inside the Lightmass Importance Volume.

Use Ambient Occlusion: Boolean. Use Ambient Occlusion:. If true, AmbientOcclusion will be enabled..

Generate Ambient Occlusion Material Mask: Boolean. Generate Ambient Occlusion Material Mask:. Whether to generate textures storing the AO computed by Lightmass.. These can be accessed through the PrecomputedAOMask material node,. Which is useful for blending between material layers on environment assets.. Be sure to set DirectIlluminationOcclusionFraction and IndirectIlluminationOcclusionFraction to 0 if you only want the PrecomputedAOMask!.

Visualize Material Diffuse: Boolean. Visualize Material Diffuse:. If true, override normal direct and indirect lighting with just the exported diffuse term..

Visualize Ambient Occlusion: Boolean. Visualize Ambient Occlusion:. If true, override normal direct and indirect lighting with just the AO term..

Compress Lightmaps: Boolean. Compress Lightmaps:. Whether to compress lightmap textures. Disabling lightmap texture compression will reduce artifacts but increase memory and disk size by 4x.. Use caution when disabling this..

Volumetric Lightmap Detail Cell Size: Float (single-precision). Volumetric Lightmap Detail Cell Size:. Size of an Volumetric Lightmap voxel at the highest density (used around geometry), in world space units.. This setting has a large impact on build times and memory, use with caution.. Halving the DetailCellSize can increase memory by up to a factor of 8x..

Volumetric Lightmap Maximum Brick Memory Mb: Float (single-precision). Volumetric Lightmap Maximum Brick Memory Mb:. Maximum amount of memory to spend on Volumetric Lightmap Brick data. High density bricks will be discarded until this limit is met, with bricks furthest from geometry discarded first..

Volumetric Lightmap Spherical Harmonic Smoothing: Float (single-precision). Volumetric Lightmap Spherical Harmonic Smoothing:. Controls how much smoothing should be done to Volumetric Lightmap samples during Spherical Harmonic de-ringing.. Whenever highly directional lighting is stored in a Spherical Harmonic, a ringing artifact occurs which manifests as unexpected black areas on the opposite side.. Smoothing can reduce this artifact. Smoothing is only applied when the ringing artifact is present.. 0 = no smoothing, 1 = strong smooth (little directionality in lighting)..

Volume Light Sample Placement Scale: Float (single-precision). Volume Light Sample Placement Scale:. Scales the distances at which volume lighting samples are placed. Volume lighting samples are computed by Lightmass and are used for GI on movable components.. Using larger scales results in less sample memory usage and reduces Indirect Lighting Cache update times, but less accurate transitions between lighting areas..

Direct Illumination Occlusion Fraction: Float (single-precision). Direct Illumination Occlusion Fraction:. How much of the AO to apply to direct lighting..

Indirect Illumination Occlusion Fraction: Float (single-precision). Indirect Illumination Occlusion Fraction:. How much of the AO to apply to indirect lighting..

Occlusion Exponent: Float (single-precision). Occlusion Exponent:. Higher exponents increase contrast..

Fully Occluded Samples Fraction: Float (single-precision). Fully Occluded Samples Fraction:. Fraction of samples taken that must be occluded in order to reach full occlusion..

Max Occlusion Distance: Float (single-precision). Max Occlusion Distance:. Maximum distance for an object to cause occlusion on another object..  

## Outputs

Lightmass World Info Settings: Lightmass World Info Settings Structure.

