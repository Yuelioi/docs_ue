# SetSessionEnqueue

启动 UpdateSession 检查。异步的--结果见 OnUpdateCompleteDelegate。

目标是 Oculus 更新会话回调代理

## 图示

![](/uploads/projects/ue-bluprint/20221218-20145627.png)

## Inputs

在。执行。

应在匹配池中排队：布尔值。

## Outputs

出：执行。

关于成功。执政。On Success:.当会话被成功更新时被调用。

失败时。执行。失败时：。当更新会话出现错误时调用。

<hr>

Kick off UpdateSession check. Asynchronous-- see OnUpdateCompleteDelegate for results.

Target is Oculus Update Session Callback Proxy

## 图示

![](/uploads/projects/ue-bluprint/20221218-20145627.png)

## Inputs

In: Exec.

Should Enqueue in Matchmaking Pool: Boolean.

## Outputs

Out: Exec.

On Success: Exec. On Success:. Called when the session was updated successfully.

On Failure: Exec. On Failure:. Called when there was an error updating the session.
