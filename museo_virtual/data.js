var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -0.9831467305958874,
        "pitch": 0.21266459337685895,
        "fov": 1.3401592523986738
      },
      "linkHotspots": [
        {
          "yaw": 2.8880764304518447,
          "pitch": 0.8007668738548546,
          "rotation": 6.283185307179586,
          "target": "1-muestrario"
        },
        {
          "yaw": -0.8848602510731141,
          "pitch": 0.7257868420742888,
          "rotation": 0,
          "target": "3-cuadros"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-muestrario",
      "name": "Muestrario",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7719152202328488,
          "pitch": 0.8337600300945169,
          "rotation": 0,
          "target": "2-oficina"
        },
        {
          "yaw": -0.07662539762929299,
          "pitch": 0.7477088285604978,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-oficina",
      "name": "Oficina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4790437368446785,
          "pitch": 0.9204512632081929,
          "rotation": 0,
          "target": "1-muestrario"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cuadros",
      "name": "Cuadros",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5247763661954856,
          "pitch": 0.3551453582599944,
          "rotation": 0,
          "target": "4-dormitorio"
        },
        {
          "yaw": 1.7485730841425715,
          "pitch": 0.32503326262082943,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dormitorio",
      "name": "Dormitorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8351571741444737,
          "pitch": 0.7021787431218804,
          "rotation": 0,
          "target": "3-cuadros"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
