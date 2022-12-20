# BreakSoundModulationParameterSet-

Adds a node that breaks a 'SoundModulationParameterSettings' into its member fields

## 图示

![]($-20221218-14431028.png)

## Inputs

Sound Modulation Parameter Settings: Sound Modulation Parameter Settings Structure (by ref).  

## Outputs

Value Normalized: Float (single-precision). Value Normalized:. Normalized, unitless default value of modulator. To ensure bypass functionality of mixing, patching, and modulating. functions as anticipated, value should be selected such that GetMixFunction (see USoundModulationParameter). reduces to an identity function (i.e. function acts as a "pass-through" for all values in the range [0.0, 1.0]).. If GetMixFunction performs the mathematical operation f(x1, x2), then the default ValueNormalized should result in. f(x1, d) = x1 where d is ValueNormalized..

