# MakePoseSearchChannelDynamicWeig-

Adds a node that create a 'PoseSearchChannelDynamicWeightParams' from its members

## 图示

![]($-20221218-14592054.png)

## Inputs

Channel Weight Scale: Float (single-precision). Channel Weight Scale:. Multiplier for the contribution of this score component. Final weight will be normalized with other channels after scaling..

History Weight Scale: Float (single-precision). History Weight Scale:. Multiplier for history score contribution. Normalized with prediction weight after scaling..

Prediction Weight Scale: Float (single-precision). Prediction Weight Scale:. Multiplier for prediction score contribution. Normalized with history weight after scaling..  

## Outputs

Pose Search Channel Dynamic Weight Params: Pose Search Channel Dynamic Weight Params Structure.

