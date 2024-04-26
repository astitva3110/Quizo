const redis = require('redis');
const client = redis.createClient();

const getData = (key, retries = 3) => {
    return new Promise((resolve, reject) => {
        client.get(key, (err, data) => {
            if (err) {
                if (retries > 0) {
                    // Retry fetching data
                    setTimeout(() => {
                        getData(key, retries - 1).then(resolve).catch(reject);
                    }, 1000); // Retry after 1 second
                } else {
                    reject(err);
                }
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
};

const fetch = (req, res, next) => {
    const key = req.redisKey; 
    if (!key) {
        return res.status(400).json({ message: 'key not provided' });
    }

    getData(key)
        .then(data => {
            if (data) {
                res.json(data);
            } else {
                next();
            }
        })
        .catch(err => {
            console.error(err);
            next();
        });
};

module.exports = fetch;
