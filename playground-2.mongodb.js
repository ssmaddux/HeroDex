

// Select the database to use.
use('game');

db.player.insertOne({
    "_id": "sgosh",
    "name": "Sageh badesh",
    "stats": {
        "wins": 5,
        "losses": 10,
        "xp": 300
    },
    "achievements": [
        {"name": "Massive XP", "timestamp" : 15989616000000},
        {"name": "Instant Loss", "timestamp" : 15989616000022}
    ]
})