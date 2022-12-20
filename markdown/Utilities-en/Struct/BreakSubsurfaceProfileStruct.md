# BreakSubsurfaceProfileStruct

Adds a node that breaks a 'SubsurfaceProfileStruct' into its member fields

## 图示

![]($-20221218-14440930.png)

## Inputs

Subsurface Profile Struct: Subsurface Profile Struct Structure (by ref).  

## Outputs

Surface Albedo: Linear Color Structure. Surface Albedo:. It should match The base color of the corresponding material as much as possible..

Mean Free Path Color: Linear Color Structure. Mean Free Path Color:. Controls how far light goes into the subsurface in the Red, Green and Blue channel. It is scaled by Mean Free path distance..

Mean Free Path Distance: Float (single-precision). Mean Free Path Distance:. Subsurface mean free path distance in world/unreal units (cm).

World Unit Scale: Float (single-precision). World Unit Scale:. Control the scale of world/unreal units (cm).

Enable Burley: Boolean. Enable Burley:. Effective only when Burley subsurface scattering is enabled in cmd..

Tint: Linear Color Structure. Tint:. Specifies the how much of the diffuse light gets into the material,. can be seen as a per-channel mix factor between the original image,. and the SSS-filtered image. It introduces Non-PBR looks..

Scatter Radius: Float (single-precision). Scatter Radius:. in world/unreal units (cm).

Subsurface Color: Linear Color Structure. Subsurface Color:. Specifies the how much of the diffuse light gets into the material,. can be seen as a per-channel mix factor between the original image,. and the SSS-filtered image (called "strength" in SeparableSSS, default there: 0.48, 0.41, 0.28).

Falloff Color: Linear Color Structure. Falloff Color:. defines the per-channel falloff of the gradients. produced by the subsurface scattering events, can be used to fine tune the color of the gradients. (called "falloff" in SeparableSSS, default there: 1, 0.37, 0.3).

Boundary Color Bleed: Linear Color Structure. Boundary Color Bleed.

Extinction Scale: Float (single-precision). Extinction Scale.

Normal Scale: Float (single-precision). Normal Scale.

Scattering Distribution: Float (single-precision). Scattering Distribution.

IOR: Float (single-precision). IOR.

Roughness 0: Float (single-precision). Roughness 0.

Roughness 1: Float (single-precision). Roughness 1.

Lobe Mix: Float (single-precision). Lobe Mix.

Transmission Tint Color: Linear Color Structure. Transmission Tint Color:. Transmission tint control. It is multiplied on the transmission results. Works only when Burley is enabled..

