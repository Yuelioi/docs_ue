# EndMatch

End a match that is in progress while it is the current player's turn

Target is End Match Callback Proxy

## 图示

![]($-20221218-20163981.png)

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

