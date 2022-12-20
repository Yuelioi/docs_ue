# BreakDisplayClusterClusterEventJ-

Adds a node that breaks a 'DisplayClusterClusterEventJson' into its member fields

## 图示

![]($-20221218-14342494.png)

## Inputs

Display Cluster Cluster Event Json: Display Cluster Cluster Event Json Structure (by ref).  

## Outputs

Name: String. Name:. Event name (used for discarding outdated events).

Type: String. Type:. Event type (used for discarding outdated events).

Category: String. Category:. Event category (used for discarding outdated events).

Parameters: Map of Strings to Strings. Parameters:. Event parameters.

Is Sytem Event. ' True' Is Reserved For N Display Internals.: Boolean. Is System Event:. Is nDisplay internal event (should never be true for end users).

Should Discard On Repeat: Boolean. Should Discard on Repeat:. Should older events with the same Name/Type/Category (for JSON) or ID (for binary) be discarded if a new one received.

