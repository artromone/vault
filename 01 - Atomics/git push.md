#vcs #vcs/arrangement 

Команда для отправки изменений в репу
![[git push-1714658434760.jpeg]]

При создании новой ветки надо явно указать, куда будем пушить ([[remote]])
![[git push-1714658445766.jpeg]]

Это делается вот такой командой
```
fatal: The current branch new_branch has no upstream branch.
To push the current branch and set the remote as upstream, use

git push --set-upstream origin new_branch
```

![[git push-1714658536268.jpeg]]

[[Список конфигураций git]]: `push.default` настройка

| push.default | value                                                                            |
| ------------ | -------------------------------------------------------------------------------- |
| nothing      | Don’t push unless a source and a destination are specified.                      |
| current      | Push current branch to update a branch with the same name.                       |
| upstream     | Similar to current.                                                              |
| simple       | Similar to upstream, but check that the branch name matches what<br>is upstream. |
| matching     | Push all branches that have corresponding branches on the remote.                |
