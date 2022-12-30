# BreakGameplayCueNotify_Placement-

添加一个打破'GameplayCueNotify_PlacementInfo'的节点到其成员字段中。

## 图示

![]($-20221218-14363413.png)

## Inputs

Gameplay Cue Notify Placement Info。Gameplay Cue Notify Placement Info结构（通过引用）。 

## Outputs

插座名称。名称。插座名称：。用于定位和旋转的目标插座（或骨骼）。如果是 "无"，它使用目标的根。

附加政策。EGameplayCueNotify_AttachPolicy枚举。附加政策：。是否附加到目标角色上，或不附加。

Attachment Rule: EAttachmentRule枚举。附加规则:. 附加时如何处理变换。

Override Rotation（覆盖旋转）。Boolean（布尔）。覆盖旋转：。如果启用，将始终使用旋转覆盖生成。

Override Scale（覆盖比例）。Boolean（布尔）。Override Scale（覆盖比例）：。如果启用，将总是使用覆盖的比例生成。

Rotation Override（旋转覆盖）。旋转器。Rotation Override:（旋转覆盖）。如果启用，将总是使用旋转覆盖来生成。这也会将旋转设置为绝对的，所以在附加之后，对父体旋转的任何改变都会被忽略。

规模覆盖。矢量。Scale Override:. 如果启用，将总是使用scale override来生成。这也会将比例设置为绝对值，所以任何对父体比例的改变都会在附加后被忽略。