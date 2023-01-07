# SetCubemapBlend

通过两个 cubemaps 之间的混合创建天空照明，只有当 SourceType 被设置为 SpecifiedCubemap 时才有效。这可以用来在一天中的不同时段无缝过渡天空照明。调用者应该继续更新混合，直到 BlendFraction 为 0 或 1，以降低渲染成本。调用者要负责避免因改变源点或终点而产生的弹出。

目标是天灯组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20583858.png)

## Inputs

在。执行。

目标。天空之光组件对象参考。

源自立方体地图。纹理立方体对象参考。

目的地立方体地图。纹理立方体对象参考。

在混合的分数。Float（单精度）。

## Outputs

出：执行。

<hr>

Creates sky lighting from a blend between two cubemaps, which is only valid when SourceType is set to SpecifiedCubemap.. This can be used to seamlessly transition sky lighting between different times of day.. The caller should continue to update the blend until BlendFraction is 0 or 1 to reduce rendering cost.. The caller is responsible for avoiding pops due to changing the source or destination.

Target is Sky Light Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20583858.png)

## Inputs

In: Exec.

Target: Sky Light Component Object Reference.

Source Cubemap: Texture Cube Object Reference.

Destination Cubemap: Texture Cube Object Reference.

In Blend Fraction: Float (single-precision).

## Outputs

Out: Exec.
