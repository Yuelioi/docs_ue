# GetAllChannels

Find all channels that belong to the specified UMovieSceneSection. Some sections have many channels (such as. Transforms containing 9 double channels to represent Translation/Rotation/Scale), and a section may have mixed. channel types.

Target is Movie Scene Section Extensions

## 图示

![]($-20221218-20521553.png)

## Inputs

In: Exec.

Section: Movie Scene Section Object Reference. The section to use..  

## Outputs

Out: Exec.

Return Value: Array of Movie Scene Scripting Channel Object References. An array containing any key channels that match the type specified.

