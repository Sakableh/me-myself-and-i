---
title: "ControlD & Unifi"
description: "Gateway IP: 192.168.1.1

1. Enable SSH Access on UniFi

https://unifi.ui.com/
Control Plane → Console → SSH


Authentication

 * Username: root
 * Pas"
pubDate: 2025-11-08
draft: false
---

**Gateway IP:** `192.168.1.1`

1\. Enable SSH Access on UniFi
    
    
    https://unifi.ui.com/
    Control Plane → Console → SSH
    

Authentication

  * Username: root
  * Password: (password manager)

  2. SSH into the Router

Example below using PuTTY
    
    
    Host Name: 192.168.1.1
    Port: 22
    Connection Type: SSH
    

4\. Run the ControlD Upgrade Command
    
    
    ctrld upgrade

Upgrade command to line general 

ipaddress: 192.168.1.1

DONE!

