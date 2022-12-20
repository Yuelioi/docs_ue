# SetBlockonTime

Set the time on which to block.

If set, this player will block in TickInput or TickFetch until the video sample. for the specified time are actually available.

Target is Media Player

## 图示

![]($-20221218-20014094.png)

## Inputs

In: Exec.

Target: Media Player Object Reference.

Time: Timespan Structure (by ref). The time to block on, or FTimespan::MinValue to disable..  

## Outputs

Out: Exec.

