# GetChannelsbyType

Find all channels that belong to the specified UMovieSceneSection that match the specific type. This will filter out any children who do not inherit. from the specified type for you.

Target is Movie Scene Section Extensions

## 图示

![]($-20221218-20522010.png)

## Inputs

In: Exec.

Section: Movie Scene Section Object Reference. The section to use..

Channel Type: Movie Scene Scripting Channel Class Reference. The class type to look for..  

## Outputs

Out: Exec.

Return Value: Array of Movie Scene Scripting Channel Object References. An array containing any key channels that match the type specified.

