const redis = require('redis');
const client = redis.createClient();


const getdata = (key) => {
    return new Promise((resolve, reject) => {
        client.get(key, (err, data) => {
            if (err) {
                reject(err);
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

    getdata(key)
        .then(data => {
            if (data) {
                res.json(data);
            } else {
                next();
            }
        })
        .catch(err => {
            console.error( err);
            next();
        });
};

module.exports = fetch;