#vcs #vcs/commands #vcs/howto #vcs/arrangement 

Например, если было установлено

```bash
git config --global user.name "Your Name"
git config --global user.email "Your E-mail@example.com"
```

То посредством команды

```bash
git config --list
```

Можно "list all the configurations that Git knows about":

```bash
core.symlinks=false
core.autocrlf=true
color.diff=auto
color.status=auto
color.branch=auto
color.interactive=true
pack.packsizelimit=2g
help.format=html
http.sslcainfo=/bin/curl-ca-bundle.crt
sendemail.smtpserver=/bin/msmtp.exe
diff.astextplain.textconv=astextplain
rebase.autosquash=true
user.name=Rick Umali
user.email=rickumali@gmail.com
gui.recentrepo=C:/Users/Rick/Documents/gitbook
gui.recentrepo=C:/Users/Rick/Documents/RUVW
```
