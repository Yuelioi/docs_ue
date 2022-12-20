# BreakSourceEffectMotionFilterSet-

Adds a node that breaks a 'SourceEffectMotionFilterSettings' into its member fields

## 图示

![]($-20221218-14433275.png)

## Inputs

Source Effect Motion Filter Settings: Source Effect Motion Filter Settings Structure (by ref).  

## Outputs

Motion Filter Topology: ESourceEffectMotionFilterTopology Enum. Motion Filter Topology:. In Serial Mode, Filter A will process then Filter B will process; in Parallel mode, Filter A and Filter B will process the dry input seprately, then be mixed together afterward..

Motion Filter Mix: Float (single-precision). Motion Filter Mix:. Filter Mix controls the amount of each filter in the signal where -1.0f outputs Only Filter A, 0.0f is an equal balance between Filter A and B, and 1.0f outputs only Filter B. How this blend works depends on the Topology..

Filter ASettings: Source Effect Individual Filter Settings Structure. Filter ASettings:. Initial settings for Filter A.

Filter BSettings: Source Effect Individual Filter Settings Structure. Filter BSettings:. Initial settings for Filter B.

Modulation Mappings: Map of ESourceEffectMotionFilterModDestination Enums to Source Effect Motion Filter Modulation Settings Structures. Modulation Mappings:. Modulation Mappings.

Dry Volume Db: Float (single-precision). Dry Volume Db:. Dry volume pass-through in dB..

