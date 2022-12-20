# BreakSourceEffectFoldbackDistort-

Adds a node that breaks a 'SourceEffectFoldbackDistortionSettings' into its member fields

## 图示

![]($-20221218-14432927.png)

## Inputs

Source Effect Foldback Distortion Settings: Source Effect Foldback Distortion Settings Structure (by ref).  

## Outputs

Input Gain Db: Float (single-precision). Input Gain Db:. The amount of gain to add to input to allow forcing the triggering of the threshold.

Threshold Db: Float (single-precision). Threshold Db:. If the audio amplitude is higher than this, it will fold back.

Output Gain Db: Float (single-precision). Output Gain Db:. The amount of gain to apply to the output.

