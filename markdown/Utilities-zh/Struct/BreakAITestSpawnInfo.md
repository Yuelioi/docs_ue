# BreakAITestSpawnInfo

添加一个节点，将'AITestSpawnInfo'分解为其成员字段

## 图示

![]($-20221218-14304867.png)

## Inputs

AITest再生信息。AITest再生信息结构（通过引用）。 

## Outputs

Pawn Class: 卒类参考。Pawn Class:. 确定要生成的AI。

Controller Class: AIController类参考。Controller Class:.覆盖默认卒的控制器类的类。如果没有，将使用默认值。

Team ID: 通用的团队标识结构。团队ID：团队ID。

Behavior Tree（行为树）。行为树对象参考。Behavior Tree:.如果设置将应用于产卵的AI。

产卵位置。Actor对象参考。Spawn Location:.产卵地点。AI应该在哪里产卵。

Number To Spawn: 整数。产出的数量。

Spawn Delay: Float（单精度）。Spawn Delay: 连续产卵尝试之间的延迟。

Pre Spawn Delay: 浮点数（单精度）。Pre Spawn Delay: 尝试第一次产卵前的延迟。
