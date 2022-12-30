# PlayAnimationTimeRangewithFinish-

Play Animation Time Range on widget and trigger Finish event when the animation is done.

Target is Widget Animation Play Callback Proxy

## 图示

![]($-20221218-21213520.png)

## Inputs

In: Exec.

Widget: User Widget Object Reference.

In Animation: Widget Animation Object Reference.

Start at Time: Float (single-precision).

End at Time: Float (single-precision).

Num Loops to Play: Integer.

Play Mode: EUMGSequencePlayMode Enum.

Playback Speed: Float (single-precision).  

## Outputs

Out: Exec.

Result: UMGSequence Player Object Reference.

Finished: Exec. Finished:. Called when animation has been completed.

