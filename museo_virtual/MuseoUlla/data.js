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
        "yaw": 1.4204843244329766,
        "pitch": 0.09042860683417153,
        "fov": 1.2739945160662665
      },
      "linkHotspots": [
        {
          "yaw": 1.4809749539213168,
          "pitch": 1.0180333430695718,
          "rotation": 0,
          "target": "2-muestrario-grande"
        },
        {
          "yaw": -1.5365731746808748,
          "pitch": 1.0284742060828052,
          "rotation": 0,
          "target": "1-muestrario-chico"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-muestrario-chico",
      "name": "Muestrario Chico",
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
          "yaw": 1.5851483173620071,
          "pitch": 0.6830100072716867,
          "rotation": 6.283185307179586,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-muestrario-grande",
      "name": "Muestrario Grande",
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
          "yaw": -1.660363163990585,
          "pitch": 0.4695343065764028,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Museo Ulla",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
