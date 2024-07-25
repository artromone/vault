#configuration

Файл `/etc/udev/rules.d/99-headphones.rules`

```bash
SUBSYSTEM=="sound", ACTION=="add|change", RUN+="/home/art/.config/waybar/scripts/auto_switch_audio.sh"
# sudo nano /etc/udev/rules.d/99-headphones.rules
# sudo udevadm control --reload-rules
# sudo udevadm trigger
```
