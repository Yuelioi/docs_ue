# GetAIController

具体的工作方式是，如果传入的角色是一个卒子，那么该函数就会检索。 卒子的控制器投给AIController。否则，该函数会返回演员，并将其投给AIController。

目标是AIBlueprint Helper Library

## 图示

![]($-20221218-17463467.png)

## Inputs

被控制的演员。Actor对象参考。 

## Outputs

返回值。AIController对象参考。它的具体工作方式是，如果传入的角色是一个小兵，那么该函数就会检索小兵的控制器，并将其转换为AIController。否则，该函数返回演员的控制器，并投给AIController。

The way it works exactly is if the actor passed in is a pawn, then the function retrieves. pawn's controller cast to AIController. Otherwise the function returns actor cast to AIController.

Target is AIBlueprint Helper Library

## 图示

![]($-20221218-17463467.png)

## Inputs

Controlled Actor: Actor Object Reference.  

## Outputs

Return Value: AIController Object Reference. The way it works exactly is if the actor passed in is a pawn, then the function retrieves. pawn's controller cast to AIController. Otherwise the function returns actor cast to AIController..

