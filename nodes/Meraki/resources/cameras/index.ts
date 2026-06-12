import type { INodeProperties } from 'n8n-workflow';

export const camerasDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					]
				}
			},
			"options": [
				{
					"name": "Get Device Camera Quality And Retention Settings",
					"value": "Get Device Camera Quality And Retention Settings",
					"action": "Returns quality and retention settings for the given camera",
					"description": "Returns quality and retention settings for the given camera",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"serial\"]}}/camera/qualityAndRetentionSettings"
						}
					}
				},
				{
					"name": "Update Device Camera Quality And Retention Settings",
					"value": "Update Device Camera Quality And Retention Settings",
					"action": "Update quality and retention settings for the given camera",
					"description": "Update quality and retention settings for the given camera",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/devices/{{$parameter[\"serial\"]}}/camera/qualityAndRetentionSettings"
						}
					}
				},
				{
					"name": "Get Device Camera Video Settings",
					"value": "Get Device Camera Video Settings",
					"action": "Returns video settings for the given camera",
					"description": "Returns video settings for the given camera",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"serial\"]}}/camera/video/settings"
						}
					}
				},
				{
					"name": "Update Device Camera Video Settings",
					"value": "Update Device Camera Video Settings",
					"action": "Update video settings for the given camera",
					"description": "Update video settings for the given camera",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/devices/{{$parameter[\"serial\"]}}/camera/video/settings"
						}
					}
				},
				{
					"name": "Get Network Camera Schedules",
					"value": "Get Network Camera Schedules",
					"action": "Returns a list of all camera recording schedules.",
					"description": "Returns a list of all camera recording schedules.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/camera/schedules"
						}
					}
				},
				{
					"name": "Generate Network Camera Snapshot",
					"value": "Generate Network Camera Snapshot",
					"action": "Generate a snapshot of what the camera sees at the specified time and return a link to that image.",
					"description": "Generate a snapshot of what the camera sees at the specified time and return a link to that image.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/cameras/{{$parameter[\"serial\"]}}/snapshot"
						}
					}
				},
				{
					"name": "Get Network Camera Video Link",
					"value": "Get Network Camera Video Link",
					"action": "Returns video link to the specified camera",
					"description": "Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/cameras/{{$parameter[\"serial\"]}}/videoLink"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /devices/{serial}/camera/qualityAndRetentionSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Device Camera Quality And Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Device Camera Quality And Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Device Camera Quality And Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /devices/{serial}/camera/qualityAndRetentionSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Quality And Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Quality And Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Audio Recording Enabled",
			"name": "audioRecordingEnabled",
			"type": "boolean",
			"default": true,
			"description": "Boolean indicating if audio recording is enabled(true) or disabled(false) on the camera",
			"routing": {
				"send": {
					"property": "audioRecordingEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Quality And Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Motion Based Retention Enabled",
			"name": "motionBasedRetentionEnabled",
			"type": "boolean",
			"default": true,
			"description": "Boolean indicating if motion-based retention is enabled(true) or disabled(false) on the camera",
			"routing": {
				"send": {
					"property": "motionBasedRetentionEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Quality And Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Motion Detector Version",
			"name": "motionDetectorVersion",
			"type": "options",
			"default": 1,
			"description": "The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.",
			"options": [
				{
					"name": "1",
					"value": 1
				},
				{
					"name": "2",
					"value": 2
				}
			],
			"routing": {
				"send": {
					"property": "motionDetectorVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Quality And Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Profile ID",
			"name": "profileId",
			"type": "string",
			"default": "",
			"description": "The ID of a quality and retention profile to assign to the camera. The profile's settings will override all of the per-camera quality and retention settings. If the value of this parameter is null, any existing profile will be unassigned from the camera.",
			"routing": {
				"send": {
					"property": "profileId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Quality And Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"type": "options",
			"default": "Enhanced",
			"description": "Quality of the camera. Can be one of 'Standard', 'High' or 'Enhanced'. Not all qualities are supported by every camera model.",
			"options": [
				{
					"name": "Enhanced",
					"value": "Enhanced"
				},
				{
					"name": "High",
					"value": "High"
				},
				{
					"name": "Standard",
					"value": "Standard"
				}
			],
			"routing": {
				"send": {
					"property": "quality",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Quality And Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Resolution",
			"name": "resolution",
			"type": "options",
			"default": "1080x1080",
			"description": "Resolution of the camera. Can be one of '1280x720', '1920x1080', '1080x1080' or '2058x2058'. Not all resolutions are supported by every camera model.",
			"options": [
				{
					"name": "1080 X 1080",
					"value": "1080x1080"
				},
				{
					"name": "1280 X 720",
					"value": "1280x720"
				},
				{
					"name": "1920 X 1080",
					"value": "1920x1080"
				},
				{
					"name": "2058 X 2058",
					"value": "2058x2058"
				}
			],
			"routing": {
				"send": {
					"property": "resolution",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Quality And Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Restricted Bandwidth Mode Enabled",
			"name": "restrictedBandwidthModeEnabled",
			"type": "boolean",
			"default": true,
			"description": "Boolean indicating if restricted bandwidth is enabled(true) or disabled(false) on the camera. This setting does not apply to MV2 cameras.",
			"routing": {
				"send": {
					"property": "restrictedBandwidthModeEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Quality And Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Quality And Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{serial}/camera/video/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Device Camera Video Settings"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Device Camera Video Settings"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Device Camera Video Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /devices/{serial}/camera/video/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Video Settings"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Video Settings"
					]
				}
			}
		},
		{
			"displayName": "External Rtsp Enabled",
			"name": "externalRtspEnabled",
			"type": "boolean",
			"default": true,
			"description": "Boolean indicating if external rtsp stream is exposed",
			"routing": {
				"send": {
					"property": "externalRtspEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Video Settings"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Update Device Camera Video Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/camera/schedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Network Camera Schedules"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Network Camera Schedules"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Network Camera Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/cameras/{serial}/snapshot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Generate Network Camera Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Generate Network Camera Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Generate Network Camera Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Fullframe",
			"name": "fullframe",
			"type": "boolean",
			"default": true,
			"description": "[optional] If set to \"true\" the snapshot will be taken at full sensor resolution. This will error if used with timestamp.",
			"routing": {
				"send": {
					"property": "fullframe",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Generate Network Camera Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"type": "string",
			"default": "",
			"description": "[optional] The snapshot will be taken from this time on the camera. The timestamp is expected to be in ISO 8601 format. If no timestamp is specified, we will assume current time.",
			"routing": {
				"send": {
					"property": "timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Generate Network Camera Snapshot"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Generate Network Camera Snapshot"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/cameras/{serial}/videoLink",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Network Camera Video Link"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Network Camera Video Link"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Network Camera Video Link"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"description": "[optional] The video link will start at this timestamp. The timestamp is in UNIX Epoch time (milliseconds). If no timestamp is specified, we will assume current time.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "timestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Network Camera Video Link"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cameras"
					],
					"operation": [
						"Get Network Camera Video Link"
					]
				}
			}
		},
];
