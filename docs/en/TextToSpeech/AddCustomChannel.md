# AddCustomChannel

Creates a new text to speech channel where text to speech requests are fulfilled by a user implemented C++ text to speech class.. If you have not specified a custom text to speech class to be used, use AddDefaultChannel instead.. This will not add a channel if the channel Id is not unique or if the user has not specified a custom text to speech class to be used in ITextToSpeechModule.. Newly added channels must be activated to use text to speech functionalities.. See: ITextToSpeechModule, AddDefaultChannel, ActivateChannel, ActivateAllChannels

Target is Text to Speech Engine Subsystem

## 图示

![]($-20221218-21112704.png)

## Inputs

In: Exec.

Target: Text To Speech Engine Subsystem Object Reference.

New Channel Id: Name.  

## Outputs

Out: Exec.

