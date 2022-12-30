# MakeDepthFieldGlowInfo

添加一个节点，从其成员中创建一个'DepthFieldGlowInfo'。

## 图示

![]($-20221218-14501796.png)

## Inputs

启用辉光。布尔值。启用辉光：。是否开启轮廓辉光（仅限深度场字体）。

发光颜色：线性颜色结构。辉光颜色：。用于发光的底色。

辉光外半径。矢量2D结构。辉光外半径：。如果bEnableGlow，勾勒出辉光外半径（0到1，0.5是人物轮廓的边缘）。辉光影响在GlowOuterRadius.X处为0，在GlowOuterRadius.Y处为1。

辉光内半径。矢量2D结构。Glow Inner Radius:.辉光内半径。如果bEnableGlow，勾勒出辉光内半径（0到1，0.5是人物轮廓的边缘）。辉光影响将在GlowInnerRadius.X处为1，在GlowInnerRadius.Y处为0。

## Outputs

深度场辉光信息。深度场辉光信息结构。
