function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*hitclub*") || shExpMatch(host, "*.hit.club")) {
        return "PROXY 103.152.118.50:8080"; 
    }
    return "DIRECT";
}
