# GetGameplayAbilityfromSpecHandle

提供与能力规格手柄相关的游戏能力对象。这可以是一个实例化的能力，或者在共享能力的情况下，是类默认对象。

目标是能力系统蓝图库

## 图示

![]($-20221218-17305333.png)

## Inputs

能力系统。能力系统组件对象参考。

能力规格手柄。Gameplay Ability Spec Handle结构（通过引用）。 

## Outputs

是实例。布尔值。如果这是一个实例能力，而不是一个共享的CDO，则设置为真。

返回值。游戏能力对象参考。指向游戏能力对象的指针。

Provides the Gameplay Ability object associated with an Ability Spec Handle. This can be either an instanced ability, or in the case of shared abilities, the Class Default Object

Target is Ability System Blueprint Library

## 图示

![]($-20221218-17305333.png)

## Inputs

Ability System: Ability System Component Object Reference.

Ability Spec Handle: Gameplay Ability Spec Handle Structure (by ref).  

## Outputs

Is Instance: Boolean. Set to true if this is an instanced ability instead of a shared CDO.

Return Value: Gameplay Ability Object Reference. Pointer to the Gameplay Ability object.

