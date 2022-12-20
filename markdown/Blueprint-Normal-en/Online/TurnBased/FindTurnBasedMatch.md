# FindTurnBasedMatch

Use the platform matchmaking service (like Game Center) to find a match.

Target is Find Turn Based Match Callback Proxy

## 图示

![]($-20221218-20164227.png)

## Inputs

In: Exec.

Player Controller: Player Controller Object Reference.

Match Actor: Turn Based Match Interface Interface.

Min Players: Integer.

Max Players: Integer.

Player Group: Integer.

Show Existing Matches: Boolean.  

## Outputs

Out: Exec.

On Success: Exec. On Success:. Called when matchmaking succeeded..

On Failure: Exec. On Failure:. Called when matchmaking failed.

Match ID: String.

