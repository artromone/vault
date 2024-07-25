#vcs #vcs/howto #vcs/branching 

<span class="symbols-prettifier-unclear">!</span> Обратить внимание:
- Обычно rebase в публичном репозитории – не самая лучшая идея
- Следует избегать rebase, которые могут привести к сложным [[merge conflict]]

1) Включаем rebase: `File -> Settings -> Extensions`. Перезапускаем.
![[rebase в TortoiseHg-1714656667150.jpeg]]

2) Обновляемся на коммит (changeset), **на который хочется перебазироваться** (который станет началом ветки)
![[rebase в TortoiseHg-1714656729327.jpeg]]

3) Правой кнопкой на коммит, **который хочется перебазировать**. Выбираем `Modify History -> Rebase`
![[rebase в TortoiseHg-1714656913489.jpeg]]
4) Обновляемся на первоначальный коммит

And you should end up with something like this
![[rebase в TortoiseHg-1714657009295.jpeg]]
