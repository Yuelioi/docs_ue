# PlayTo

Play from the current position to the requested position and pause. If requested position is before the current position,. playback will be reversed. Playback to the requested position will be cancelled if Stop() or Pause() is invoked during this. playback.

Target is Movie Scene Sequence Player

## 图示

![]($-20221218-20515072.png)

## Inputs

In: Exec.

Target: Movie Scene Sequence Player Object Reference.

Playback Params: Movie Scene Sequence Playback Params Structure. The position settings (ie. the position to play to).

Play to Params: Movie Scene Sequence Play To Params Structure.  

## Outputs

Out: Exec.

