# AddKey_String

Add a key to this channel. This initializes a new key and returns a reference to it.

Target is Movie Scene Scripting String Channel

## 图示

![]($-20221218-20484387.png)

## Inputs

In: Exec.

Target: Movie Scene Scripting String Channel Object Reference.

In Time: Frame Number Structure (by ref). The frame this key should go on. Respects TimeUnit to determine if it is a display rate frame or a tick resolution frame..

New Value: String. The value that this key should be created with..

Sub Frame: Float (single-precision). Optional [0-1) clamped sub-frame to put this key on. Ignored if TimeUnit is set to Tick Resolution..

Time Unit: ESequenceTimeUnit Enum. Is the specified InTime in Display Rate frames or Tick Resolution..  

## Outputs

Out: Exec.

Return Value: Movie Scene Scripting String Key Object Reference. The key that was created with the specified values at the specified time..

