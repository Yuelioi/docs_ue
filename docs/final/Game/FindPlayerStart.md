# FindPlayerStart

返回应该用于下一次产卵的特定玩家起始演员。这将使用一个先前保存的启动器，或者调用 ChoosePlayerStart。

目标是游戏模式基础

## 图示

![](/uploads/projects/ue-bluprint/20221218-19055654.png)

## Inputs

目标。游戏模式基本对象参考。

播放器。控制器对象参考。我们为其选择一个播放器开始的 AController。

来电名称。字符串。指定要使用的播放器启动的标签。

## Outputs

返回值。Actor 对象参考。被选为玩家起点的角色（通常是一个 PlayerStart）。

<hr>

Return the specific player start actor that should be used for the next spawn. This will either use a previously saved startactor, or calls ChoosePlayerStart

Target is Game Mode Base

## 图示

![](/uploads/projects/ue-bluprint/20221218-19055654.png)

## Inputs

Target: Game Mode Base Object Reference.

Player: Controller Object Reference. The AController for whom we are choosing a Player Start.

Incoming Name: String. Specifies the tag of a Player Start to use.

## Outputs

Return Value: Actor Object Reference. Actor chosen as player start (usually a PlayerStart).
