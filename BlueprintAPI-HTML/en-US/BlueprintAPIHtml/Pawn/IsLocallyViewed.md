# IsLocallyViewed

Is this pawn the ViewTarget of a local PlayerController? Helpful for determining whether the pawn is. visible/critical for any VFX. NOTE: Technically there may be some cases where locally controlled pawns return. false for this, such as if you are using a remote camera view of some sort. But generally it will be true for. locally controlled pawns, and it will always be true for pawns that are being spectated in-game or in Replays.

Target is Pawn

## 图示

![]($-20221218-20192474.png)

## Inputs

Target: Pawn Object Reference.  

## Outputs

Return Value: Boolean. Is this pawn the ViewTarget of a local PlayerController? Helpful for determining whether the pawn is. visible/critical for any VFX. NOTE: Technically there may be some cases where locally controlled pawns return. false for this, such as if you are using a remote camera view of some sort. But generally it will be true for. locally controlled pawns, and it will always be true for pawns that are being spectated in-game or in Replays..

