# BreakMovieSceneSequencePlaybackS-

Adds a node that breaks a 'MovieSceneSequencePlaybackSettings' into its member fields

## 图示

![]($-20221218-14402912.png)

## Inputs

Movie Scene Sequence Playback Settings: Movie Scene Sequence Playback Settings Structure (by ref).  

## Outputs

Auto Play: Boolean. Auto Play:. Auto-play the sequence when created.

Loop: Movie Scene Sequence Loop Count Structure. Loop Count:. Number of times to loop playback. -1 for infinite, else the number of times to loop before stopping.

Play Rate: Float (single-precision). Play Rate:. The rate at which to playback the animation.

Start Offset: Float (single-precision). Start Time:. Start playback at the specified offset from the start of the sequence's playback range.

Random Start Time: Boolean. Random Start Time:. Start playback at a random time.

Restore State: Boolean. Restore State:. Flag used to specify whether actor states should be restored on stop.

Disable Movement Input: Boolean. Disable Movement Input:. Disable Input from player during play.

Disable Look At Input: Boolean. Disable Look at Input:. Disable LookAt Input from player during play.

Hide Player: Boolean. Hide Player:. Hide Player Pawn during play.

Hide Hud: Boolean. Hide Hud:. Hide HUD during play.

Disable Camera Cuts: Boolean. Disable Camera Cuts:. Disable camera cuts.

Pause At End: Boolean. Pause at End:. Pause the sequence when playback reaches the end rather than stopping it.

