const redis = require("redis"),
    client = redis.createClient();


function get(search, cb) {

    client.hgetall(search, function (err, obj) {
        const sorted = sortAssocObject(obj);
        cb(sorted)
    });

    function sortAssocObject(list) {
        var sortable = [];
        for (var key in list) {
            let integerify = parseInt(list[key]);
            sortable.push([key, integerify]);
        }
        sortable.sort(function (a, b) {
            return (a[1] > b[1] ? -1 : (a[1] < b[1] ? 1 : 0));
        });

        var orderedList = {};
        for (var i = 0; i < sortable.length; i++) {
            orderedList[sortable[i][0]] = sortable[i][1];
        }
        return orderedList;
    }

}

export default get;