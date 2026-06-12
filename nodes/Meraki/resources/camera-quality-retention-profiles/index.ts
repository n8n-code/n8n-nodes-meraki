import type { INodeProperties } from 'n8n-workflow';

export const cameraQualityRetentionProfilesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Camera Quality Retention Profiles",
					"value": "Get Network Camera Quality Retention Profiles",
					"action": "List the quality retention profiles for this network",
					"description": "List the quality retention profiles for this network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/camera/qualityRetentionProfiles"
						}
					}
				},
				{
					"name": "Create Network Camera Quality Retention Profile",
					"value": "Create Network Camera Quality Retention Profile",
					"action": "Creates new quality retention profile for this network.",
					"description": "Creates new quality retention profile for this network.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/camera/qualityRetentionProfiles"
						}
					}
				},
				{
					"name": "Delete Network Camera Quality Retention Profile",
					"value": "Delete Network Camera Quality Retention Profile",
					"action": "Delete an existing quality retention profile for this network.",
					"description": "Delete an existing quality retention profile for this network.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/camera/qualityRetentionProfiles/{{$parameter[\"qualityRetentionProfileId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Camera Quality Retention Profile",
					"value": "Get Network Camera Quality Retention Profile",
					"action": "Retrieve a single quality retention profile",
					"description": "Retrieve a single quality retention profile",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/camera/qualityRetentionProfiles/{{$parameter[\"qualityRetentionProfileId\"]}}"
						}
					}
				},
				{
					"name": "Update Network Camera Quality Retention Profile",
					"value": "Update Network Camera Quality Retention Profile",
					"action": "Update an existing quality retention profile for this network.",
					"description": "Update an existing quality retention profile for this network.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/camera/qualityRetentionProfiles/{{$parameter[\"qualityRetentionProfileId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/camera/qualityRetentionProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Get Network Camera Quality Retention Profiles"
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Get Network Camera Quality Retention Profiles"
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Get Network Camera Quality Retention Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/camera/qualityRetentionProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Create Network Camera Quality Retention Profile"
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Create Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Audio Recording Enabled",
			"name": "audioRecordingEnabled",
			"type": "boolean",
			"default": true,
			"description": "Whether or not to record audio. Can be either true or false. Defaults to false.",
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Create Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Cloud Archive Enabled",
			"name": "cloudArchiveEnabled",
			"type": "boolean",
			"default": true,
			"description": "Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false.",
			"routing": {
				"send": {
					"property": "cloudArchiveEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Create Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Max Retention Days",
			"name": "maxRetentionDays",
			"type": "number",
			"default": 0,
			"description": "The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days.",
			"routing": {
				"send": {
					"property": "maxRetentionDays",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Create Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Motion Based Retention Enabled",
			"name": "motionBasedRetentionEnabled",
			"type": "boolean",
			"default": true,
			"description": "Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.",
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Create Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Motion Detector Version",
			"name": "motionDetectorVersion",
			"type": "number",
			"default": 0,
			"description": "The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.",
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Create Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the new profile. Must be unique. This parameter is required.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Create Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Restricted Bandwidth Mode Enabled",
			"name": "restrictedBandwidthModeEnabled",
			"type": "boolean",
			"default": true,
			"description": "Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.",
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Create Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Schedule ID",
			"name": "scheduleId",
			"type": "string",
			"default": "",
			"description": "Schedule for which this camera will record video, or 'null' to always record.",
			"routing": {
				"send": {
					"property": "scheduleId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Create Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Video Settings",
			"name": "videoSettings",
			"type": "json",
			"default": "{\n  \"MV12/MV22/MV72\": {},\n  \"MV12WE\": {},\n  \"MV13\": {},\n  \"MV21/MV71\": {},\n  \"MV22X/MV72X\": {},\n  \"MV32\": {},\n  \"MV33\": {},\n  \"MV52\": {},\n  \"MV63\": {},\n  \"MV63X\": {},\n  \"MV93\": {},\n  \"MV93X\": {}\n}",
			"description": "Video quality and resolution settings for all the camera models.",
			"routing": {
				"send": {
					"property": "videoSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Create Network Camera Quality Retention Profile"
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Create Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Delete Network Camera Quality Retention Profile"
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Delete Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Quality Retention Profile ID",
			"name": "qualityRetentionProfileId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Delete Network Camera Quality Retention Profile"
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Delete Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Get Network Camera Quality Retention Profile"
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Get Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Quality Retention Profile ID",
			"name": "qualityRetentionProfileId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Get Network Camera Quality Retention Profile"
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Get Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Update Network Camera Quality Retention Profile"
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Update Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Quality Retention Profile ID",
			"name": "qualityRetentionProfileId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Update Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Audio Recording Enabled",
			"name": "audioRecordingEnabled",
			"type": "boolean",
			"default": true,
			"description": "Whether or not to record audio. Can be either true or false. Defaults to false.",
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Update Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Cloud Archive Enabled",
			"name": "cloudArchiveEnabled",
			"type": "boolean",
			"default": true,
			"description": "Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false.",
			"routing": {
				"send": {
					"property": "cloudArchiveEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Update Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Max Retention Days",
			"name": "maxRetentionDays",
			"type": "number",
			"default": 0,
			"description": "The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days.",
			"routing": {
				"send": {
					"property": "maxRetentionDays",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Update Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Motion Based Retention Enabled",
			"name": "motionBasedRetentionEnabled",
			"type": "boolean",
			"default": true,
			"description": "Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.",
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Update Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Motion Detector Version",
			"name": "motionDetectorVersion",
			"type": "number",
			"default": 0,
			"description": "The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.",
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Update Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the new profile. Must be unique.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Update Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Restricted Bandwidth Mode Enabled",
			"name": "restrictedBandwidthModeEnabled",
			"type": "boolean",
			"default": true,
			"description": "Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.",
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Update Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Schedule ID",
			"name": "scheduleId",
			"type": "string",
			"default": "",
			"description": "Schedule for which this camera will record video, or 'null' to always record.",
			"routing": {
				"send": {
					"property": "scheduleId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Update Network Camera Quality Retention Profile"
					]
				}
			}
		},
		{
			"displayName": "Video Settings",
			"name": "videoSettings",
			"type": "json",
			"default": "{\n  \"MV12/MV22/MV72\": {},\n  \"MV12WE\": {},\n  \"MV13\": {},\n  \"MV21/MV71\": {},\n  \"MV22X/MV72X\": {},\n  \"MV32\": {},\n  \"MV33\": {},\n  \"MV52\": {},\n  \"MV63\": {},\n  \"MV63X\": {},\n  \"MV93\": {},\n  \"MV93X\": {}\n}",
			"description": "Video quality and resolution settings for all the camera models.",
			"routing": {
				"send": {
					"property": "videoSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Update Network Camera Quality Retention Profile"
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
						"Camera Quality Retention Profiles"
					],
					"operation": [
						"Update Network Camera Quality Retention Profile"
					]
				}
			}
		},
];
