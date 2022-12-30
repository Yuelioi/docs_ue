# MakeViewTargetTransitionParams

添加一个节点，从其成员中创建一个'ViewTargetTransitionParams'。

## 图示

![]($-20221218-15041256.png)

## Inputs

混合时间。Float（单精度）。混合时间：。混合到待定视图目标的总时间。0表示没有混合。

混合功能。EViewTargetBlendFunction Enum.混合功能：.应用于混合参数的函数。

Blend Exp: Float (single-precision).Blend Exp:.指数，被某些混合函数用来控制曲线的形状。

锁定外发。布尔值。锁定传出：。如果为真，则在剩余的混合过程中，将出场目标锁定为上一帧的摄像机POV。如果你打算传送旧的视点，但又不想影响到混合，那么这很有用。

## Outputs

查看目标过渡参数。查看目标过渡参数结构。
