# BreakMovieSceneSkeletalAnimation-

Adds a node that breaks a 'MovieSceneSkeletalAnimationParams' into its member fields

## 图示

![]($-20221218-14403087.png)

## Inputs

Movie Scene Skeletal Animation Params: Movie Scene Skeletal Animation Params Structure (by ref).  

## Outputs

Animation: Anim Sequence Base Object Reference. Animation:. The animation this section plays.

First Loop Start Frame Offset: Frame Number Structure. First Loop Start Frame Offset:. The offset into the beginning of the animation clip for the first loop of play..

Start Frame Offset: Frame Number Structure. Start Frame Offset:. The offset into the beginning of the animation clip.

End Frame Offset: Frame Number Structure. End Frame Offset:. The offset into the end of the animation clip.

Play Rate: Float (single-precision). Play Rate:. The playback rate of the animation clip.

Reverse: Boolean. Reverse:. Reverse the playback of the animation clip.

Slot Name: Name. Slot Name:. The slot name to use for the animation.

Mirror Data Table: Mirror Data Table Object Reference. Mirror Data Table.

Skip Anim Notifiers: Boolean. Skip Anim Notifiers:. If on will skip sending animation notifies.

