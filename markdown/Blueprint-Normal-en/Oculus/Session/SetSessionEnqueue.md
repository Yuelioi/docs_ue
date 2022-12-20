# SetSessionEnqueue

Kick off UpdateSession check. Asynchronous-- see OnUpdateCompleteDelegate for results.

Target is Oculus Update Session Callback Proxy

## 图示

![]($-20221218-20145627.png)

## Inputs

In: Exec.

Should Enqueue in Matchmaking Pool: Boolean.  

## Outputs

Out: Exec.

On Success: Exec. On Success:. Called when the session was updated successfully.

On Failure: Exec. On Failure:. Called when there was an error updating the session.

