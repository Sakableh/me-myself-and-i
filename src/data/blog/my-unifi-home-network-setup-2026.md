---
title: "🏠 My UniFi Home Network Setup (2026)"
description: "🧱 Hardware Setup


Core Devices

 * UniFi Fiber Gateway (Router)
 * UniFi Switch 24 PoE Pro Max
 * 2 × U7 Pro XG
 * 7 × G5 Turret Ultra
 * 1 x G6 Turr"
pubDate: 2026-03-25
draft: false
---

* * *

## 🧱 Hardware Setup

### Core Devices

  * **UniFi Fiber Gateway** (Router)
  * **UniFi Switch 24 PoE Pro Max**
  * **2 × U7 Pro XG**
  * **7 × G5 Turret Ultra**
  * **1 x G6 Turret**

* * *

## 🌐 Network Architecture

### Main Subnets

Network| VLAN| Subnet| Purpose  
---|---|---|---  
Default (Home)| 1| 10.10.10.0/24| Main devices  
Cameras| 20| 10.10.20.0/24| UniFi cameras  
Guest| 30| 10.10.30.0/24| Visitors  
  
* * *

## 🧠 IP Addressing Strategy

### Infrastructure IPs
    
    
    10.10.10.1   → Gateway
    10.10.10.2   → AP 1 - Living Room
    10.10.10.3   → AP 2 - Upstairs
    10.10.10.10  → UniFi Switch 24 PoE Pro Max
    

### Infrastructure Camera IPs
    
    
    10.10.20.10   → G5 Camera
    10.10.20.11   → G5 Camera
    10.10.20.12   → G5 Camera
    ...
    

### DHCP Ranges
    
    
    Home:    10.10.10.50 – 10.10.10.254
    Camera:  10.10.20.50 – 10.10.20.254
    Guest:   10.10.30.50 – 10.10.30.254
    

DHCP Ranges 1-49 reserved for infrasturcture

DHCP Ranges 200-254 as extra

* * *

## 🔌 Switch & Port Configuration

### Port Profiles

  * **Default (VLAN 1)** → APs, main devices
  * **Camera (VLAN 20)** → All cameras
  * **Guest (VLAN 30)** → Guests

* * *

## 📡 WiFi Configuration

### 🏡 Home WiFi

  * SSID: `Home`
  * Security: WPA2/WPA3
  * Network: Default (VLAN 1)
  * Bands: 2.4GHz, 5GHz, 6GHz enabled
  * Band Steering: Enabled

* * *

### 👤 Guest WiFi

  * SSID: `Guest`
  * Network: VLAN 30
  * Security: WPA2/WPA3 (I could use hotspot with landing page which is more fancier, but for now using default method)
  * Isolation: Enabled

* * *

## 📷 Camera Network Design

  * All cameras placed in **VLAN 20 (10.10.20.x)**
  * Connected via PoE switch
  * Adopted via UniFi Protect

* * *

## 🔐 DHCP Reservations & Naming

Used DHCP reservations for key devices:

Device| IP| DNS  
---|---|---  
Switch| 10.10.10.10| switch24.local  
AP 1| 10.10.10.2| ap1.local  
AP 2| 10.10.10.3| ap2.local  
  
* * *

## 🔒 Security Strategy

### Network Segmentation

  * Cameras isolated in VLAN 20
  * Guests isolated in VLAN 30

### Planned Firewall Rules

  * ❌ Block Cameras → Internet
  * ✅ Allow Cameras → UniFi Protect
  * ❌ Block Guest → Home network


