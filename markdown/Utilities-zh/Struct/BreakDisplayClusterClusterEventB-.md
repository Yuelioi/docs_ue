# BreakDisplayClusterClusterEventB-

Adds a node that breaks a 'DisplayClusterClusterEventBase' into its member fields

## 图示

![]($-20221218-14342319.png)

## Inputs

Display Cluster Cluster Event Base: Display Cluster Cluster Event Base Structure (by ref).  

## Outputs

Is Sytem Event. ' True' Is Reserved For N Display Internals.: Boolean. Is System Event:. Is nDisplay internal event (should never be true for end users).

Should Discard On Repeat: Boolean. Should Discard on Repeat:. Should older events with the same Name/Type/Category (for JSON) or ID (for binary) be discarded if a new one received.

