# MakeGameplayAbilityTargetingLoca-

添加一个节点，从其成员中创建一个 "GameplayAbilityTargetingLocationInfo"。

## 图示

![]($-20221218-14531395.png)

## Inputs

位置类型。EGameplayAbilityTargetingLocationType枚举。位置类型：。使用的位置类型 - 将决定哪些数据通过网络传输，以及在计算位置时使用哪些字段。

字面意义上的转化。转化。字面转换：。如果在演员之外使用能力计算了一个字面世界的变换，就可以使用。

源演员。Actor Object Reference.源演员：。基于演员的定位需要一个源演员，但基于插座的定位则不需要。

源组件。网格组件对象参考。源组件：.基于套接字的定位需要一个骨架网状结构组件来检查命名的套接字。

源能力。游戏性能力对象参考。源能力：。将使用目标数据的能力。

源插座名称。名称。源套接字名称：。如果SourceComponent是有效的，这就是将被使用的Socket变换的名称。如果没有提供Socket，将使用SourceComponent的转换。  

## Outputs

游戏能力瞄准位置信息。游戏性能力瞄准位置信息结构。
