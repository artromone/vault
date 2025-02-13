#vcs #vcs/branching #vcs/arrangement 

Если есть ветка `new`, которая была начата от `master`, и на момент попытки слияния `new` с `master` не было новых коммитов в `master`:

**git** переместит указатель `master` на последний коммит `new`. Получится линейная история коммитов

![[Fast forward merge-1714658939000.jpeg]]