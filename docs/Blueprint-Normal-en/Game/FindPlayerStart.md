# FindPlayerStart

Return the specific player start actor that should be used for the next spawn. This will either use a previously saved startactor, or calls ChoosePlayerStart

Target is Game Mode Base

## 图示

![]($-20221218-19055654.png)

## Inputs

Target: Game Mode Base Object Reference.

Player: Controller Object Reference. The AController for whom we are choosing a Player Start.

Incoming Name: String. Specifies the tag of a Player Start to use.  

## Outputs

Return Value: Actor Object Reference. Actor chosen as player start (usually a PlayerStart).

