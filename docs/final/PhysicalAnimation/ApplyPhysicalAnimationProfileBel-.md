# ApplyPhysicalAnimationProfileBel-

对给定的身体和下面的所有身体应用物理动画轮廓。

目标是物理动画组件

## 图示

![]($-20221218-20202408.png)

## Inputs

在。执行。

目标。物理动画组件对象参考。

身体名称。名称。我们想从这个身体开始应用物理动画轮廓。在骨架层次结构中找到下面的所有体。无意味着所有的身体。

资料名称。名称。我们想要应用的物理动画设置。对于物理资产中的每一个体，我们会搜索带有这个名字的物理动画设置。

Include Self：布尔值。是否将所提供的主体名称包含在我们的行为列表中（对于一个根有多个孩子的情况，忽略是很有用的）。

清除未找到。布尔值。如果为true，没有给定资料名称的主体将被清除任何现有的物理动画设置。如果是假的，没有给定资料名称的身体将不被触动。  

## Outputs

出：执行。

Applies the physical animation profile to the body given and all bodies below.

Target is Physical Animation Component

## 图示

![]($-20221218-20202408.png)

## Inputs

In: Exec.

Target: Physical Animation Component Object Reference.

Body Name: Name. The body from which we'd like to start applying the physical animation profile. Finds all bodies below in the skeleton hierarchy. None implies all bodies.

Profile Name: Name. The physical animation profile we'd like to apply. For each body in the physics asset we search for physical animation settings with this name..

Include Self: Boolean. Whether to include the provided body name in the list of bodies we act on (useful to ignore for cases where a root has multiple children).

Clear Not Found: Boolean. If true, bodies without the given profile name will have any existing physical animation settings cleared. If false, bodies without the given profile name are left untouched..  

## Outputs

Out: Exec.

