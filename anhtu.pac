function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*hitclub*") || shExpMatch(host, "*.hit.club")) {
        return "PROXY IP_PROXY_CỦA_BẠN:PORT"; 
    }
    return "DIRECT";
}
