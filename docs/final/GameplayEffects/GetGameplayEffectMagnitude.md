# GetGameplayEffectMagnitude

问一个游戏效果的大小的原始访问器，不一定总是正确的。外部代码（用户界面等）应该如何询问 "这个游戏效果对我的伤害有多大影响 "这样的问题。 最有可能的是，我们想在后端抓到这个问题--当伤害被应用时，我们可以得到一个完整的转储/历史，了解这个数字是如何达到这个程度的。但我们仍然可能需要像下面这样的投票方法（我的伤害会是多少）。

目标是能力系统组件

## 图示

![]($-20221218-19085782.png)

## Inputs

目标。能力系统组件对象参考。

办理。主动游戏效果手柄结构。

属性。游戏属性结构。  

## Outputs

返回值。Float（单精度）。原始访问器用于询问游戏效果的大小，不一定总是正确的。外部代码（UI等）应该如何询问 "这个游戏效果对我的伤害有多大 "这样的问题。 最有可能的是，我们想在后台捕捉到这个问题--当伤害被应用时，我们可以得到一个完整的转储/历史，了解这个数字是如何达到这个程度的。但我们仍然可能需要像下面这样的投票方法（我的伤害会是多少）。

Raw accessor to ask the magnitude of a gameplay effect, not necessarily always correct. How should outside code (UI, etc) ask things like 'how much is this gameplay effect modifying my damage by'. (most likely we want to catch this on the backend - when damage is applied we can get a full dump/history of how the number got to where it is. But still we may need polling methods like below (how much would my damage be)

Target is Ability System Component

## 图示

![]($-20221218-19085782.png)

## Inputs

Target: Ability System Component Object Reference.

Handle: Active Gameplay Effect Handle Structure.

Attribute: Gameplay Attribute Structure.  

## Outputs

Return Value: Float (single-precision). Raw accessor to ask the magnitude of a gameplay effect, not necessarily always correct. How should outside code (UI, etc) ask things like 'how much is this gameplay effect modifying my damage by'. (most likely we want to catch this on the backend - when damage is applied we can get a full dump/history of how the number got to where it is. But still we may need polling methods like below (how much would my damage be).

