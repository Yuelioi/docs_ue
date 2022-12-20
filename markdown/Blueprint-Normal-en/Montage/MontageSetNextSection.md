# MontageSetNextSection

Relink new next section AFTER SectionNameToChange in run-time. You can link section order the way you like in editor, but in run-time if you'd like to change it dynamically,. use this function to relink the next section. For example, you can have Start->Loop->Loop->Loop.... but when you want it to end, you can relink. next section of Loop to be End to finish the montage, in which case, it stops looping by Loop->End.

Target is Anim Instance

## 图示

![]($-20221218-20071655.png)

## Inputs

In: Exec.

Target: Anim Instance Object Reference.

Section Name to Change: Name. : This should be the name of the Montage Section after which you want to insert a new next section.

Next Section: Name. : new next section.

Montage: Anim Montage Object Reference.  

## Outputs

Out: Exec.

