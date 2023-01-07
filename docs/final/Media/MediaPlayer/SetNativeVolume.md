# SetNativeVolume

如果不与 Sound Wave 资产混合，在本地播放器上设置音量。

SetNativeVolume 可以用来在运行时改变音频输出音量。请注意，不是所有的媒体播放器插件都可能支持所有平台上的本地音频输出。

目标是媒体播放器

## 图示

![](/uploads/projects/ue-bluprint/20221218-20014564.png)

## Inputs

在。执行。

目标。媒体播放器对象参考。

体积。Float（单精度）。要设置的音量。

## Outputs

出：执行。

返回值。布尔值。成功时为真，否则为假。

<hr>

Set the volume on the native player if not mixing with Sound Wave asset.

The SetNativeVolume can be used to change the audio output volume at runtime. Note that. not all media player plug-ins may support native audio output on all platforms.

Target is Media Player

## 图示

![](/uploads/projects/ue-bluprint/20221218-20014564.png)

## Inputs

In: Exec.

Target: Media Player Object Reference.

Volume: Float (single-precision). The volume to set..

## Outputs

Out: Exec.

Return Value: Boolean. true on success, false otherwise..
