# EndMatch

结束正在进行中的比赛，而这是当前玩家的回合。

目标是末端匹配回调代理

## 图示

![](/uploads/projects/ue-bluprint/20221218-20163981.png)

## Inputs

在。执行。

播放器控制器。播放器控制器对象参考。

比赛演员。基于回合的比赛界面界面。

匹配 ID：字符串。

本地玩家的结果。EMPMatchOutcome Enum.

其他球员的结果。EMPMatchOutcome Enum.

## Outputs

出：执行。

关于成功。执政。On Success:.匹配成功结束时调用。

失败时。执行。失败时：。结束比赛失败时调用。

<hr>

End a match that is in progress while it is the current player's turn

Target is End Match Callback Proxy

## 图示

![](/uploads/projects/ue-bluprint/20221218-20163981.png)

## Inputs

In: Exec.

Player Controller: Player Controller Object Reference.

Match Actor: Turn Based Match Interface Interface.

Match ID: String.

Local Player Outcome: EMPMatchOutcome Enum.

Other Players Outcome: EMPMatchOutcome Enum.

## Outputs

Out: Exec.

On Success: Exec. On Success:. Called when the match ends successfully.

On Failure: Exec. On Failure:. Called when ending the match fails.
