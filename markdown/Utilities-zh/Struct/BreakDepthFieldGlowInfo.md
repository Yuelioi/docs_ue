# BreakDepthFieldGlowInfo

添加一个节点，将'DepthFieldGlowInfo'分解成其成员字段

## 图示

![]($-20221218-14335031.png)

## Inputs

深度场辉光信息。深度场辉光信息结构（通过引用）。 

## Outputs

Enable Glow（启用发光）。布尔值。Enable Glow:（启用辉光）。是否开启轮廓辉光（仅限深度场字体）。

Glow Color（发光颜色）：线性颜色结构。Glow Color（发光颜色）：。辉光使用的基础颜色。

Glow Outer Radius（发光外半径）。矢量2D结构。Glow Outer Radius:.辉光外半径。如果bEnableGlow，则勾勒出辉光的外半径（0到1，0.5是角色轮廓的边缘）。辉光影响在GlowOuterRadius.X处为0，在GlowOuterRadius.Y处为1。

Glow Inner Radius（发光内半径）。矢量2D结构。Glow Inner Radius:. 如果bEnableGlow，则勾勒出辉光内半径（0到1，0.5是角色轮廓的边缘）。辉光影响将在GlowInnerRadius.X处为1，在GlowInnerRadius.Y处为0。
