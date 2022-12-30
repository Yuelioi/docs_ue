# BreakViewTargetTransitionParams

添加一个节点，将'ViewTargetTransitionParams'分解成其成员字段

## 图示

![]($-20221218-14451537.png)

## Inputs

查看目标过渡期参数。查看目标过渡参数结构（通过参考）。  

## Outputs

混合时间。Float（单精度）。混合时间：。混合到待定视图目标的总时间。0表示没有混合。

混合功能。EViewTargetBlendFunction Enum.混合功能：.应用于混合参数的函数。

Blend Exp: Float (single-precision).Blend Exp:.指数，被某些混合函数用来控制曲线的形状。

锁定外发。布尔值。锁定传出：。如果为真，则在剩余的混合过程中，将出场目标锁定为上一帧的摄像机POV。如果你打算传送旧的视点，但又不想影响到混合，那么这很有用。
