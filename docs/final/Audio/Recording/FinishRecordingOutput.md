# FinishRecordingOutput

停止录制音频。路径可以是绝对的，也可以是相对的（到/Saved/BouncedWavFiles 文件夹）。把 Submix To Record 字段留空，就可以录制游戏的主输出。

目标是音频混合器蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18073389.png)

## Inputs

在。执行。

输出类型。EAudioRecordingExportType 枚举。

名称。字符串。

路径。字符串。

Submix to Record: Sound Submix Object Reference.

要覆盖的现有音波。Sound Wave Object Reference.

## Outputs

输出。执行：执行。

返回值。声波对象参考。停止录制音频。路径可以是绝对的，也可以是相对的（到/Saved/BouncedWavFiles 文件夹）。把 Submix To Record（子混音）字段留空，你可以录制游戏的主输出。

<hr>

Stop recording audio. Path can be absolute, or relative (to the /Saved/BouncedWavFiles folder). By leaving the Submix To Record field blank, you can record the master output of the game.

Target is Audio Mixer Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18073389.png)

## Inputs

In: Exec.

Export Type: EAudioRecordingExportType Enum.

Name: String.

Path: String.

Submix to Record: Sound Submix Object Reference.

Existing Sound Wave to Overwrite: Sound Wave Object Reference.

## Outputs

Out: Exec.

Return Value: Sound Wave Object Reference. Stop recording audio. Path can be absolute, or relative (to the /Saved/BouncedWavFiles folder). By leaving the Submix To Record field blank, you can record the master output of the game..
