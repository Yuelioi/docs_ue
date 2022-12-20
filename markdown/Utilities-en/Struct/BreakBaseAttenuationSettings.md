# BreakBaseAttenuationSettings

Adds a node that breaks a 'BaseAttenuationSettings' into its member fields

## 图示

![]($-20221218-14314316.png)

## Inputs

Base Attenuation Settings: Base Attenuation Settings Structure (by ref).  

## Outputs

Attenuation Function: EAttenuationDistanceModel Enum. Distance Algorithm:. The type of attenuation as a function of distance to use..

Attenuation Shape: EAttenuationShape Enum. Attenuation Shape:. The shape of the non-custom attenuation method..

Attenuation at Max (D B): Float (single-precision). D BAttenuation at Max:. The attenuation volume at the falloff distance in decibels (Only for 'Natural Sound' Distance Algorithm)..

Falloff Mode: ENaturalSoundFalloffMode Enum. Falloff Mode:. Whether to continue attenuating, go silent, or hold last volume value when beyond falloff bounds and. 'Attenuation At Max (dB)' is set to a value greater than -60dB.. (Only for 'Natural Sound' Distance Algorithm). */.

Attenuation Shape Extents: Vector. Attenuation Shape Extents:. The dimensions to use for the attenuation shape. Interpretation of the values differ per shape.. Sphere - X is Sphere Radius. Y and Z are unused. Capsule - X is Capsule Half Height, Y is Capsule Radius, Z is unused. Box - X, Y, and Z are the Box's dimensions. Cone - X is Cone Radius, Y is Cone Angle, Z is Cone Falloff Angle.

Cone Offset: Float (single-precision). Cone Offset:. The distance back from the sound's origin to begin the cone when using the cone attenuation shape..

Falloff Distance: Float (single-precision). Falloff Distance:. The distance over which volume attenuation occurs..

Cone Sphere Radius: Float (single-precision). Cone Sphere Radius:. An optional attenuation radius (sphere) that extends from the cone origin..

Cone Sphere Falloff Distance: Float (single-precision). Cone Sphere Falloff Distance:. The distance over which volume attenuation occurs for the optional sphere shape..

Custom Attenuation Curve: Runtime Float Curve Structure. Custom Attenuation Curve:. The custom volume attenuation curve to use..

