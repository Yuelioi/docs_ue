# BreakPassiveSoundMixModifier

添加一个节点，将'PassiveSoundMixModifier'分解成其成员字段

## 图示

![]($-20221218-14410353.png)

## Inputs

被动式声音混合修改器。被动声音混合修改器的结构（按参考）。  

## Outputs

声音混合。声音混合对象参考。Sound Mix:.要激活的SoundMix。

最小音量阈值。Float (single-precision).最小音量阈值：。激活SoundMix所需的最小音量。低于这个值，SoundMix将不会被激活。

最大音量阈值。Float (single-precision).最大音量阈值：。激活SoundMix所需的最大音量水平。超过这个值，SoundMix就不会被激活。
