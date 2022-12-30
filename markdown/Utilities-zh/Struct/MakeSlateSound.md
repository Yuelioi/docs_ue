# MakeSlateSound

添加一个节点，从其成员中创建一个 "SlateSound"。

## 图示

![]($-20221218-15012799.png)

## Inputs

声音。对象参考。资源对象：。指向USoundBase的指针。因为USoundBase在Slate核心中是不可用的，所以把它作为一个UObject来保存。通过FSlateSoundStructCustomization编辑，以确保你只能在它上面设置USoundBase资产。  

## Outputs

石板的声音。板岩的声音结构。
