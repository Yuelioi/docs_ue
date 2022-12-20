# MakeSoundModulationTransform

Adds a node that create a 'SoundModulationTransform' from its members

## 图示

![]($-20221218-15015239.png)

## Inputs

Curve Type: ESoundModulatorCurve Enum. Curve:. The curve to apply when transforming the output..

Exponential Scalar: Float (single-precision). Scalar:. When curve set to log, exponential or exponential inverse, value is factor 'b' in following equations with output 'y' and input 'x':. Exponential: y = x 10^-b(1-x). Exponential (Inverse): y = ((x - 1) 10^(-bx)) + 1. Logarithmic: y = b * log(x) + 1.

Asset: Curve Float Object Reference. Curve Shared:. Asset curve reference to apply if output curve type is set to 'Shared.'.  

## Outputs

Sound Modulation Transform: Sound Modulation Transform Structure.

