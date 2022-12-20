# BreakAbcCompressionSettings

Adds a node that breaks a 'AbcCompressionSettings' into its member fields

## 图示

![]($-20221218-14303115.png)

## Inputs

Abc Compression Settings: Abc Compression Settings Structure (by ref).  

## Outputs

Merge Meshes: Boolean. Merge Meshes:. Whether or not the individual meshes should be merged for compression purposes.

Bake Matrix Animation: Boolean. Bake Matrix Animation:. Whether or not Matrix-only animation should be baked out as vertex animation (or skipped?).

Base Calculation Type: EBaseCalculationType Enum. Base Calculation Type:. Determines how the final number of bases that are stored as morph targets are calculated.

Percentage Of Total Bases: Float (single-precision). Percentage Of Total Bases:. Will generate given percentage of the given bases as morph targets.

Max Number Of Bases: Integer. Max Number Of Bases:. Will generate given fixed number of bases as morph targets.

Minimum Number Of Vertex Influence Percentage: Float (single-precision). Minimum Number Of Vertex Influence Percentage:. Minimum percentage of influenced vertices required for a morph target to be valid.

