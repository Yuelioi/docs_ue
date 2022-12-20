# BreakAttenuationSubmixSendSettin-

Adds a node that breaks a 'AttenuationSubmixSendSettings' into its member fields

## 图示

![]($-20221218-14312647.png)

## Inputs

Attenuation Submix Send Settings: Attenuation Submix Send Settings Structure (by ref).  

## Outputs

Submix: Sound Submix Base Object Reference. Submix:. Submix to send audio to based on distance..

Submix Send Method: ESubmixSendMethod Enum. Submix Send Method:. What method to use to use for submix sends..

Submix Min Send Level: Float (single-precision). Submix Send Level Min:. The amount to send to the Submix when the sound is located at a distance equal to value specified in the submix send distance min..

Submix Max Send Level: Float (single-precision). Submix Send Level Max:. The amount to send to the Submix when the sound is located at a distance equal to value specified in the reverb max send distance..

Submix Min Send Distance: Float (single-precision). Submix Send Distance Min:. The min distance to send to the Submix..

Submix Max Send Distance: Float (single-precision). Submix Send Distance Max:. The max distance to send to the Submix..

Manual Submix Send Level: Float (single-precision). Manual Submix Send Level:. The manual Submix send level to use. Doesn't change as a function of distance..

Custom Submix Send Curve: Runtime Float Curve Structure. Custom Submix Send Curve:. The custom Submix send curve to use for distance-based send level..

