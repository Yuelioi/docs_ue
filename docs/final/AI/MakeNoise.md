# MakeNoise

触发由特定卒子在特定位置引起的噪音。注意，NoiseInstigator卒必须有一个PawnNoiseEmitterComponent，才能被PawnSensingComponent检测到噪音。MakeNoise的发送者如果不是卒子，应该有一个Instigator，或者传递一个NoiseInstigator。

目标是行为体

## 图示

![]($-20221218-17470090.png)

## Inputs

在。执行。

目标。Actor对象参考。

响度。Float（单精度）。这个噪音的相对响度。通常的范围是0（无噪音）到1（全音量）。如果使用了MaxRange，这将缩放最大范围，否则将影响传感器指定的听力范围。

噪声唆使者。卒子对象参考。负责这个噪声的卒子。如果NoiseInstigator为空，则使用角色的Instigator。

噪声位置。矢量。噪声源的位置。如果是零向量，使用角色的位置。

最大范围。浮点数（单精度）。可以听到声音的最大范围。值为0表示没有最大范围（尽管感知可能有自己的范围）。响度会影响范围。(注意：不支持传统的PawnSensingComponent，只支持AIPerception）。

标签。名称。噪声的标识符。 

## Outputs

Out: 输出。执行。

Trigger a noise caused by a given Pawn, at a given location.. Note that the NoiseInstigator Pawn MUST have a PawnNoiseEmitterComponent for the noise to be detected by a PawnSensingComponent.. Senders of MakeNoise should have an Instigator if they are not pawns, or pass a NoiseInstigator.

Target is Actor

## 图示

![]($-20221218-17470090.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

Loudness: Float (single-precision). The relative loudness of this noise. Usual range is 0 (no noise) to 1 (full volume). If MaxRange is used, this scales the max range, otherwise it affects the hearing range specified by the sensor..

Noise Instigator: Pawn Object Reference. Pawn responsible for this noise. Uses the actor's Instigator if NoiseInstigator is null.

Noise Location: Vector. Position of noise source. If zero vector, use the actor's location..

Max Range: Float (single-precision). Max range at which the sound may be heard. A value of 0 indicates no max range (though perception may have its own range). Loudness scales the range. (Note: not supported for legacy PawnSensingComponent, only for AIPerception).

Tag: Name. Identifier for the noise..  

## Outputs

Out: Exec.

