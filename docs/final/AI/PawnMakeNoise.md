# PawnMakeNoise

通知 AIControllers 你发出了一个他们可能会听到的声音（如果他们有 bHearNoises==true，他们会被发送一个 HearNoise 消息）。这个声音的煽动者是用于调用 MakeNoise 的卒子。

目标是卒子

## 图示

![](/uploads/projects/ue-bluprint/20221218-17480144.png)

## Inputs

在。执行。

目标。卒子对象参考。

响度。Float（单精度）。是这个噪音的相对响度（范围是 0.0 到 1.0）。直接影响 AI 的 HearingThreshold 所指定的听力范围。

噪声位置。矢量。噪声源的位置。如果是零向量，使用演员的位置。

使用制造噪音的位置。布尔值。如果是 true，使用 NoiseMaker 的位置而不是 NoiseLocation。如果是假的，则使用 NoiseLocation。

噪声制造者。Actor Object Reference。哪个角色是噪声的来源。不要与负责制造噪音的 Noise Instigator 混淆，后者负责制造噪音（也是调用此函数的棋子）。如果没有指定，煽动噪音的棋子将被用作 NoiseMaker。

## Outputs

输出。执行。

<hr>

Inform AIControllers that you've made a noise they might hear (they are sent a HearNoise message if they have bHearNoises==true). The instigator of this sound is the pawn which is used to call MakeNoise.

Target is Pawn

## 图示

![](/uploads/projects/ue-bluprint/20221218-17480144.png)

## Inputs

In: Exec.

Target: Pawn Object Reference.

Loudness: Float (single-precision). is the relative loudness of this noise (range 0.0 to 1.0). Directly affects the hearing range specified by the AI's HearingThreshold..

Noise Location: Vector. Position of noise source. If zero vector, use the actor's location..

Use Noise Maker Location: Boolean. If true, use the location of the NoiseMaker rather than NoiseLocation. If false, use NoiseLocation..

Noise Maker: Actor Object Reference. Which actor is the source of the noise. Not to be confused with the Noise Instigator, which is responsible for the noise (and is the pawn on which this function is called). If not specified, the pawn instigating the noise will be used as the NoiseMaker.

## Outputs

Out: Exec.
