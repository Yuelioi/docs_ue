# BreakDynamicPlayRateSettings

Adds a node that breaks a 'DynamicPlayRateSettings' into its member fields

## 图示

![]($-20221218-14353798.png)

## Inputs

Dynamic Play Rate Settings: Dynamic Play Rate Settings Structure (by ref).  

## Outputs

Enabled: Boolean. Enabled:. Enable/Disable dynamic play rate adjusment.

Scale Bias Clamp: Input Scale Bias Clamp Structure. Scale Bias Clamp:. Optional scaling, biasing, and clamping controls for play rate adjustment.

Remapping Curve: Curve Float Object Reference. Remapping Curve:. Optional play rate remapping curve (X axis: Source play rate, Y axis: Target play rate).

Root Motion Sample Rate: Float (single-precision). Root Motion Sample Rate:. Root motion time step (per second) used for analyzing and determining future zero velocities.

Zero Root Motion Angle Threshold: Float (single-precision). Zero Root Motion Angle Threshold:. Root motion angle threshold for determining significant changes in direction (ex: Identifying pivots).

Zero Root Motion Displacement Error: Float (single-precision). Zero Root Motion Displacement Error:. Root motion displacement error tolerance, for identifying false positive associated with ZeroRootMotionAngleThreshold.

