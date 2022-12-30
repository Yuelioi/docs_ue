# GetTime_Double

Gets the time for this key from the owning channel.

Target is Movie Scene Scripting Double Key

## 图示

![]($-20221218-20493344.png)

## Inputs

Target: Movie Scene Scripting Double Key Object Reference.

Time Unit: ESequenceTimeUnit Enum. Should the time be returned in Display Rate frames (possibly with a sub-frame value) or in Tick Resolution with no sub-frame values?.  

## Outputs

Return Value: Frame Time Structure. The time of this key which combines both the frame number and the sub-frame it is on. Sub-frame will be zero if you request Tick Resolution..

