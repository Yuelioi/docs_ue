# MakeDisplayClusterClusterEventBi-

Adds a node that create a 'DisplayClusterClusterEventBinary' from its members

## 图示

![]($-20221218-14504856.png)

## Inputs

Event Id: Integer. Event Id:. Event ID (used for discarding outdated events).

Event Data: Array of Bytes. Event Data:. Binary event data.

Is Sytem Event. ' True' Is Reserved For N Display Internals.: Boolean. Is System Event:. Is nDisplay internal event (should never be true for end users).

Should Discard On Repeat: Boolean. Should Discard on Repeat:. Should older events with the same Name/Type/Category (for JSON) or ID (for binary) be discarded if a new one received.  

## Outputs

Display Cluster Cluster Event Binary: Display Cluster Cluster Event Binary Structure.

