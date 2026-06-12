import type { INodeProperties } from 'n8n-workflow';

export const trafficShapingUplinkSettingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Traffic Shaping Uplink Settings"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Uplink Settings",
					"value": "Get Network Uplink Settings",
					"action": "Returns the uplink settings for your MX network.",
					"description": "Returns the uplink settings for your MX network.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/uplinkSettings"
						}
					}
				},
				{
					"name": "Update Network Uplink Settings",
					"value": "Update Network Uplink Settings",
					"action": "Updates the uplink settings for your MX network.",
					"description": "Updates the uplink settings for your MX network.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/uplinkSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/uplinkSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Traffic Shaping Uplink Settings"
					],
					"operation": [
						"Get Network Uplink Settings"
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
						"Traffic Shaping Uplink Settings"
					],
					"operation": [
						"Get Network Uplink Settings"
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
						"Traffic Shaping Uplink Settings"
					],
					"operation": [
						"Get Network Uplink Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/uplinkSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Traffic Shaping Uplink Settings"
					],
					"operation": [
						"Update Network Uplink Settings"
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
						"Traffic Shaping Uplink Settings"
					],
					"operation": [
						"Update Network Uplink Settings"
					]
				}
			}
		},
		{
			"displayName": "Bandwidth Limits",
			"name": "bandwidthLimits",
			"type": "json",
			"default": "{\n  \"cellular\": {},\n  \"wan1\": {},\n  \"wan2\": {}\n}",
			"description": "A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)",
			"routing": {
				"send": {
					"property": "bandwidthLimits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Traffic Shaping Uplink Settings"
					],
					"operation": [
						"Update Network Uplink Settings"
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
						"Traffic Shaping Uplink Settings"
					],
					"operation": [
						"Update Network Uplink Settings"
					]
				}
			}
		},
];
