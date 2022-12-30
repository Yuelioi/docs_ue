# BreakSlateSound

添加一个节点，将 "SlateSound "分解成其成员字段。

## 图示

![]($-20221218-14424925.png)

## Inputs

石板的声音。石板的声音结构（由参考文献）。  

## Outputs

声音。对象参考。资源对象：。指向USoundBase的指针。因为USoundBase在Slate核心中是不可用的，所以把它作为一个UObject来保存。通过FSlateSoundStructCustomization编辑，以确保你只能在它上面设置USoundBase资产。
