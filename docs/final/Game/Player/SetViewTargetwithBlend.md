# SetViewTargetwithBlend

用变量控制设置视图目标混合

目标是玩家控制器

## 图示

![]($-20221218-19072093.png)

## Inputs

在。执行。

目标。玩家控制器对象参考。

新的视图目标。Actor Object Reference.新的演员要设置为视图目标。

混合时间。Float（单精度）。混合所需的时间。

Blend Func:EViewTargetBlendFunction Enum.用于混合的立方、线性等函数。

混合指数：浮点数（单精度）。指数，被某些混合函数用来控制曲线的形状。

锁定外发。布尔值。如果为真，在剩余的混合过程中，将出场目标锁定在上一帧的摄像机位置。

## Outputs

出：执行。

Set the view target blending with variable control

Target is Player Controller

## 图示

![]($-20221218-19072093.png)

## Inputs

In: Exec.

Target: Player Controller Object Reference.

New View Target: Actor Object Reference. new actor to set as view target.

Blend Time: Float (single-precision). time taken to blend.

Blend Func: EViewTargetBlendFunction Enum. Cubic, Linear etc functions for blending.

Blend Exp: Float (single-precision). Exponent, used by certain blend functions to control the shape of the curve..

Lock Outgoing: Boolean. If true, lock outgoing viewtarget to last frame's camera position for the remainder of the blend..  

## Outputs

Out: Exec.

