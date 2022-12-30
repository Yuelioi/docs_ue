# SpeakonChannel

Immediately vocalizes the requested string asynchronously on the requested text to speech channel, interrupting any string that is already being vocalized on the channel.. If the provided channel Id does not exist, nothing will be vocalized.. Before executing this function, a text to speech channel must be added and activated.. To create a platform default text to speech channel, use AddDefaultChannel.. To create a custom text to speech channel with a user-implemented C++ text to speech class, use AddCustomChannel.. This function is not intended for long strings that span multiple sentences or paragraphs.

Target is Text to Speech Engine Subsystem

## 图示

![]($-20221218-21114654.png)

## Inputs

In: Exec.

Target: Text To Speech Engine Subsystem Object Reference.

Channel Id: Name. The Id of the channel to speak on..

String to Speak: String (by ref). The string to speak on the requested channel. See: AddDefaultChannel, AddCustomChannel, ActivateChannel, ActivateAllChannels.  

## Outputs

Out: Exec.

