# IsLocallyViewed

这个卒子是本地 PlayerController 的 ViewTarget 吗？有助于确定该卒子是否可见/对任何 VFX 都很关键。注意：从技术上讲，在某些情况下，本地控制的棋子可能会返回 false，例如你使用的是某种远程摄像机视图。但一般来说，本地控制的棋子都是真实的，而对于在游戏中或在回放中被观察的棋子来说，它总是真实的。

目标是卒子

## 图示

![](/uploads/projects/ue-bluprint/20221218-20192474.png)

## Inputs

目标。卒子对象参考。

## Outputs

返回值。布尔值。这个卒子是本地 PlayerController 的 ViewTarget 吗？有助于确定该卒子是否可见，对于任何 VFX 来说都是至关重要的。注意：从技术上讲，在某些情况下，本地控制的棋子可能会返回 false，例如你使用的是某种远程摄像机视图。但一般来说，本地控制的棋子都是真实的，而对于在游戏中或在回放中被观察的棋子来说，它总是真实的。

<hr>

Is this pawn the ViewTarget of a local PlayerController? Helpful for determining whether the pawn is. visible/critical for any VFX. NOTE: Technically there may be some cases where locally controlled pawns return. false for this, such as if you are using a remote camera view of some sort. But generally it will be true for. locally controlled pawns, and it will always be true for pawns that are being spectated in-game or in Replays.

Target is Pawn

## 图示

![](/uploads/projects/ue-bluprint/20221218-20192474.png)

## Inputs

Target: Pawn Object Reference.

## Outputs

Return Value: Boolean. Is this pawn the ViewTarget of a local PlayerController? Helpful for determining whether the pawn is. visible/critical for any VFX. NOTE: Technically there may be some cases where locally controlled pawns return. false for this, such as if you are using a remote camera view of some sort. But generally it will be true for. locally controlled pawns, and it will always be true for pawns that are being spectated in-game or in Replays..
