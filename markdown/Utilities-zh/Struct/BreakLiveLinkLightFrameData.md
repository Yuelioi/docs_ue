# BreakLiveLinkLightFrameData

Adds a node that breaks a 'LiveLinkLightFrameData' into its member fields

## 图示

![]($-20221218-14392333.png)

## Inputs

Live Link Light Frame Data: Live Link Light Frame Data Structure (by ref).  

## Outputs

Temperature: Float (single-precision). Temperature:. Color temperature in Kelvin of the blackbody illuminant.

Intensity: Float (single-precision). Intensity:. Total energy that the light emits in lux..

Light Color: Color Structure. Light Color:. Filter color of the light..

Inner Cone Angle: Float (single-precision). Inner Cone Angle:. Inner cone angle in degrees for a Spotlight..

Outer Cone Angle: Float (single-precision). Outer Cone Angle:. Outer cone angle in degrees for a Spotlight..

Attenuation Radius: Float (single-precision). Attenuation Radius:. Light visible influence. Works for Pointlight and Spotlight..

Source Radius: Float (single-precision). Source Radius:. Radius of light source shape. Works for Pointlight and Spotlight..

Soft Source Radius: Float (single-precision). Soft Source Radius:. Soft radius of light source shape. Works for Pointlight and Spotlight..

Source Length: Float (single-precision). Source Length:. Length of light source shape. Works for Pointlight and Spotlight..

Transform: Transform. Transform:. Transform of the frame.

Meta Data: Live Link Meta Data Structure. Meta Data:. Frame's metadata..

Property Values: Array of Float (single-precision)s. Property Values:. Values of the properties defined in the static structure. Use FLiveLinkBaseStaticData.FindPropertyValue to evaluate..

