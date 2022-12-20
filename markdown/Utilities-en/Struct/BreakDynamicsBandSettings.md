# BreakDynamicsBandSettings

Adds a node that breaks a 'DynamicsBandSettings' into its member fields

## 图示

![]($-20221218-14353885.png)

## Inputs

Dynamics Band Settings: Dynamics Band Settings Structure (by ref).  

## Outputs

Crossover Top Frequency: Float (single-precision). Crossover Top Frequency:. Frequency of the crossover between this band and the next. The last band will have this property ignored.

Attack Time Msec: Float (single-precision). Attack Time Msec:. The amount of time to ramp into any dynamics processing effect in milliseconds..

Release Time Msec: Float (single-precision). Release Time Msec:. The amount of time to release the dynamics processing effect in milliseconds.

Threshold Db: Float (single-precision). Threshold Db:. The threshold at which to perform a dynamics processing operation.

Ratio: Float (single-precision). Ratio:. The dynamics processor ratio -- has different meaning depending on the processor type..

Knee Bandwidth Db: Float (single-precision). Knee Bandwidth Db:. The knee bandwidth of the compressor to use in dB.

Input Gain Db: Float (single-precision). Input Gain Db:. The input gain of the dynamics processor in dB.

Output Gain Db: Float (single-precision). Output Gain Db:. The output gain of the dynamics processor in dB.

