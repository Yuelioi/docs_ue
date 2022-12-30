# BreakWalkableSlopeOverride

添加一个打破'WalkableSlopeOverride'的节点到其成员字段中

## 图示

![]($-20221218-14453654.png)

## Inputs

可行走的坡度超限。可行走坡度覆盖结构（按参考）。  

## Outputs

可行走的坡度行为。EWalkableSlopeBehavior Enum.可行走的坡度行为：.这个表面的行为（我们是否影响可行走的坡度）。@见GetWalkableSlopeBehavior(), SetWalkableSlopeBehavior()。

可行走的斜面角度。Float（单精度）。可行走的坡度角：.覆盖可行走坡度角（单位：度），应用可行走坡度行为的规则。参见GetWalkableSlopeAngle(), SetWalkableSlopeAngle()。
