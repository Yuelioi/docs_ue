# GenerateSceneVie-

当SceneViewExtensionContext中的FViewport被选择性地激活时，返回一个用于激活场景视图扩展的函数。

  * PIE

  * SIE

  * 编辑的积极性

  * 游戏的主要。如果它不是上述任何一个，它不会发出关于激活场景视图扩展的意见。





目标是VPRendering蓝图库

## 图示

![]($-20221218-21312089.png)

## Inputs

PIE：布尔型。

SIE：布尔型。

编辑活跃。布尔型。

游戏主要内容：布尔值。  

## Outputs

Out是活动函数。场景视图扩展是活动的功能。

Returns a functor to activate a scene view extension when the FViewport in the SceneViewExtensionContext is selectively:

  * PIE

  * SIE

  * Editor's active

  * Game's primary. If it is none of the above, it emits no opinion about activating the Scene View Extension.





Target is VPRendering Blueprint Library

## 图示

![]($-20221218-21312089.png)

## Inputs

PIE: Boolean.

SIE: Boolean.

Editor Active: Boolean.

Game Primary: Boolean.  

## Outputs

Out Is Active Function: Scene View Extension Is Active Functor Structure.

