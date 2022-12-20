# BreakNiagaraSpawnInfo

Adds a node that breaks a 'NiagaraSpawnInfo' into its member fields

## 图示

![]($-20221218-14404926.png)

## Inputs

Niagara Spawn Info: Spawn Info Structure (by ref).  

## Outputs

Count: Integer. Count:. How many particles to spawn..

Interp Start Dt: Float (single-precision). Interp Start Dt:. The sub frame delta time at which to spawn the first particle..

Interval Dt: Float (single-precision). Interval Dt:. The sub frame delta time between each particle..

Spawn Group: Integer. Spawn Group:. An integer used to identify this spawn info.. Typically this is unused.. An example usage is when using multiple spawn modules to spawn from multiple discreet locations..

