#bugfix #configuration 

```bash
sudo apt-key list
```

```bash
apt-key export <last 8> | sudo gpg --dearmour -o /etc/apt/trusted.gpg.d/keepassxc_key.gpg
```

```bash
sudo apt-key --keyring /etc/apt/trusted.gpg del <last 8>
```
