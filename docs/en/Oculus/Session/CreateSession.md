# CreateSession

Kick off CreateSession check. Asynchronous-- see OnCreateSessionCompleteDelegate for results.

Target is Oculus Create Session Callback Proxy

## 图示

![]($-20221218-20145282.png)

## Inputs

In: Exec.

Public Connections: Integer.

Oculus Matchmaking Pool: String.  

## Outputs

Out: Exec.

On Success: Exec. On Success:. Called when the session was created successfully.

On Failure: Exec. On Failure:. Called when there was an error creating the session.

