# CreateEvent

Create an event from a previously created blueprint endpoint and a payload. The resulting event should be added only. to a channel of the section that was given as a parameter.

Target is Sequencer Tools Function Library

## 图示

![]($-20221218-18521140.png)

## Inputs

In: Exec.

In Sequence: Movie Scene Sequence Object Reference. Main level sequence that holds the event track and to which the resulting event should be added..

In Section: Movie Scene Event Section Base Object Reference. Section of the event track of the main sequence..

In Endpoint: Sequencer Quick Binding Result Structure (by ref). Previously created endpoint..

In Payload: Array of Strings. Values passed as payload to event, count must match the numbers of payload variable names in.  

## Outputs

Out: Exec.

Return Value: Movie Scene Event Structure. The created movie event..

