# SetControlBusMixByFilter

Sets filtered stages of a given class to a provided target value for active instance of mix.. Does not update UObject definition of mix.

Target is Audio Modulation Statics

## 图示

![]($-20221218-18074297.png)

## Inputs

In: Exec.

Mix: Sound Control Bus Mix Object Reference. Mix to modify.

Address Filter: String. (Optional) Address filter to apply to provided mix's stages..

Param Class Filter: Sound Modulation Parameter Class Reference. (Optional) Filters buses by parameter class..

Param Filter: Sound Modulation Parameter Object Reference. (Optional) Filters buses by parameter..

Value: Float (single-precision). Target value to mix filtered stages to..

Fade Time: Float (single-precision). If non-negative, updates the fade time for the resulting bus stages found matching the provided filter..  

## Outputs

Out: Exec.

