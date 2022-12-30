# SetSpeechRate

Sets the rate text to speech will be speaking at for a screen reader user.. If the provided user Id doesn't exist, nothing will happen.

Target is Slate Screen Reader Engine Subsystem

## 图示

![]($-20221218-20585571.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user to set the text to speech rate for.

Rate: Float (single-precision). The rate text to speech will be set at for the provided screen reader user. Value will be clamped between 0.0f and 1.0f..  

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() is returned if the speech rate is successfully set for the screen reader user. Otherwise, FScreenReaderReply::Unhandled() is returned..

