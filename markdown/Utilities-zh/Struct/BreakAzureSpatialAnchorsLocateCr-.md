# BreakAzureSpatialAnchorsLocateCr-

Adds a node that breaks a 'AzureSpatialAnchorsLocateCriteria' into its member fields

## 图示

![]($-20221218-14314051.png)

## Inputs

Azure Spatial Anchors Locate Criteria: Azure Spatial Anchors Locate Criteria Structure (by ref).  

## Outputs

Bypass Cache: Boolean. Bypass Cache:. If true the device local cache of anchors is ignored..

Identifiers: Array of Strings. Identifiers:. List of specific anchor identifiers to locate..

Near Anchor: Azure Cloud Spatial Anchor Object Reference. Near Anchor:. Specify (optionally) an anchor around which to locate anchors..

Near Anchor Distance: Float (single-precision). Near Anchor Distance:. Specify the distance at which to locate anchors near the NearAnchor, in cm..

Near Anchor Max Result Count: Integer. Near Anchor Max Result Count:. Specify the maximum number of anchors around the NearAnchor to locate..

Search Near Device: Boolean. Search Near Device:. Specify whether to search near the device location..

Near Device Distance: Float (single-precision). Near Device Distance:. Specify the distance at which to locate anchors near the device, in cm..

Near Device Max Result Count: Integer. Near Device Max Result Count:. Specify the maximum number of anchors around the device to locate..

Requested Categories: EAzureSpatialAnchorDataCategory Enum. Requested Categories:. Specify what data to retrieve..

Strategy: EAzureSpatialAnchorsLocateStrategy Enum. Strategy:. Specify the method by which anchors will be located..

