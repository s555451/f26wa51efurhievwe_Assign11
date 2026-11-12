// API for our resources
exports.api = function(req, res) {
    res.json([
        {
            resource: "mydatas",
            verbs: ["GET", "POST"]
        }
    ]);
};