发射器状态

![[../../../../_Config/Attatchment/Pasted image 20220505073718.png]]
1）Life Cycle Mode 生命循环模式

Determines whether the life cycle(Managing looping, age, and death) of the Emitter is calculated by the system that owns it, or by the Emitter itself.
Allowing the owning System to calculate life cycle and pass those values down to child Emitters is a significant optimization in most cases.
If working at an Emitter level and not in the context of a System, the passthrough model can still function as Niagara creates an"invisible"system which loops infinitely. This"invisible"
system can still feed the Emitter values until it is placed into an owning Niagara System.

确定 Emitter 的生命周期（管理循环、年龄和死亡）是由拥有它的系统计算，还是由 Emitter 本身计算。
在大多数情况下，允许拥有系统计算生命周期并将这些值传递给子发射器是一项重大的优化。
如果在发射器级别而不是在系统的上下文中工作，则直通模型仍然可以发挥作用，因为 Niagara 创建了一个无限循环的“不可见”系统。这个“隐形”
系统仍然可以提供发射器值，直到它被放入拥有的 Niagara 系统中。

- System 系统
- Self 自身

2）Inactive Response 非活动响应

happy

Determines what happens when the emitter itself enters an Inactive state This state can be reached naturally in the case of a finite loop count, by being deactivated using the blueprint deactivation behavior, or via gameplay code.
"INACTIVE"means dormant and no longer capable of spawning or managing new particles.
Note that Scalability state is not taken into account here. This allows Scalability to have its own behavior independent of the life cycle, for instance moving outside of a distance range can force an emitter to sleep but reawaken later, irrespective of the settings here

当发射器本身进入 Inactive 状态时会发生什么。在有限循环计数的情况下，通过使用蓝图停用行为或通过游戏代码停用，可以自然地达到此状态。
“不活跃”是指休眠并且不再能够产生或管理新粒子。
请注意，此处不考虑可伸缩性状态。这允许可扩展性拥有独立于生命周期的自身行为，例如，移动到距离范围之外可能会强制发射器进入睡眠状态，但稍后会重新唤醒，而与此处的设置无关


Complete(Let Particles Finish then Kill Emitter)
Kill(Emitter and Particles Die Immediately)
Continue (Emitter Deactivates But Doesn't Die Until System Does)

完成（让粒子完成然后杀死发射器）
杀死（发射器和粒子立即死亡）
继续（发射器停用，但在系统执行之前不会死亡）

