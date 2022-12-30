# PawnMakeNoise

通知AIControllers你发出了一个他们可能会听到的声音（如果他们有bHearNoises==true，他们会被发送一个HearNoise消息）。这个声音的煽动者是用于调用MakeNoise的卒子。

目标是卒子

## 图示

![]($-20221218-17480144.png)

## Inputs

在。执行。

目标。卒子对象参考。

响度。Float（单精度）。是这个噪音的相对响度（范围是0.0到1.0）。直接影响AI的HearingThreshold所指定的听力范围。

噪声位置。矢量。噪声源的位置。如果是零向量，使用演员的位置。

使用制造噪音的位置。布尔值。如果是true，使用NoiseMaker的位置而不是NoiseLocation。如果是假的，则使用NoiseLocation。

噪声制造者。Actor Object Reference。哪个角色是噪声的来源。不要与负责制造噪音的Noise Instigator混淆，后者负责制造噪音（也是调用此函数的棋子）。如果没有指定，煽动噪音的棋子将被用作NoiseMaker。 

## Outputs

输出。执行。
