var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 422,
      "initialViewParameters": {
        "yaw": -0.8761014687466542,
        "pitch": 0.1869568927314269,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 3.038809199065537,
          "pitch": 0.14021164173353995,
          "rotation": 0,
          "target": "1-second-floor-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-second-floor-bedroom",
      "name": "Second Floor Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 422,
      "initialViewParameters": {
        "yaw": -1.4900226850357114,
        "pitch": -0.038896680375255954,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 2.2976766551975096,
          "pitch": 0.06899262349903168,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Second Floor Low ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
