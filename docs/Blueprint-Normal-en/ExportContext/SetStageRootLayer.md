# SetStageRootLayer

Opens or creates a USD stage using StageRootLayerPath as root layer, creating the root layer if needed.. All future conversions will fetch prims and get/set USD data to/from this stage.. Note: You must remember to call Cleanup() when done, or else this object will permanently hold a reference to the opened stage!

Target is Usd Conversion Blueprint Context

## 图示

![]($-20221218-18593169.png)

## Inputs

In: Exec.

Target: Usd Conversion Blueprint Context Object Reference.

Stage Root Layer Path: File Path Structure.  

## Outputs

Out: Exec.

