function dynamicUpdate(dynamicCache, req, res) {
    if (res.ok) {
        caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
        });
    } else {
        return res;
    }
}