import type { INodeProperties } from 'n8n-workflow';

export const wirelessSettingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Settings"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Wireless Settings",
					"value": "Get Network Wireless Settings",
					"action": "Return the wireless settings for a network",
					"description": "Return the wireless settings for a network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/wireless/settings"
						}
					}
				},
				{
					"name": "Update Network Wireless Settings",
					"value": "Update Network Wireless Settings",
					"action": "Update the wireless settings for a network",
					"description": "Update the wireless settings for a network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/wireless/settings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/wireless/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Settings"
					],
					"operation": [
						"Get Network Wireless Settings"
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
						"Wireless Settings"
					],
					"operation": [
						"Get Network Wireless Settings"
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
						"Wireless Settings"
					],
					"operation": [
						"Get Network Wireless Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/wireless/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Settings"
					],
					"operation": [
						"Update Network Wireless Settings"
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
						"Wireless Settings"
					],
					"operation": [
						"Update Network Wireless Settings"
					]
				}
			}
		},
		{
			"displayName": "Ipv 6 Bridge Enabled",
			"name": "ipv6BridgeEnabled",
			"type": "boolean",
			"default": true,
			"description": "Toggle for enabling or disabling IPv6 bridging in a network (Note: if enabled, SSIDs must also be configured to use bridge mode)",
			"routing": {
				"send": {
					"property": "ipv6BridgeEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Settings"
					],
					"operation": [
						"Update Network Wireless Settings"
					]
				}
			}
		},
		{
			"displayName": "Led Lights On",
			"name": "ledLightsOn",
			"type": "boolean",
			"default": true,
			"description": "Toggle for enabling or disabling LED lights on all APs in the network (making them run dark)",
			"routing": {
				"send": {
					"property": "ledLightsOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Settings"
					],
					"operation": [
						"Update Network Wireless Settings"
					]
				}
			}
		},
		{
			"displayName": "Location Analytics Enabled",
			"name": "locationAnalyticsEnabled",
			"type": "boolean",
			"default": true,
			"description": "Toggle for enabling or disabling location analytics for your network",
			"routing": {
				"send": {
					"property": "locationAnalyticsEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Settings"
					],
					"operation": [
						"Update Network Wireless Settings"
					]
				}
			}
		},
		{
			"displayName": "Meshing Enabled",
			"name": "meshingEnabled",
			"type": "boolean",
			"default": true,
			"description": "Toggle for enabling or disabling meshing in a network",
			"routing": {
				"send": {
					"property": "meshingEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Settings"
					],
					"operation": [
						"Update Network Wireless Settings"
					]
				}
			}
		},
		{
			"displayName": "Upgrade Strategy",
			"name": "upgradeStrategy",
			"type": "options",
			"default": "minimizeClientDowntime",
			"description": "The upgrade strategy to apply to the network. Must be one of 'minimizeUpgradeTime' or 'minimizeClientDowntime'. Requires firmware version MR 26.8 or higher'",
			"options": [
				{
					"name": "Minimize Client Downtime",
					"value": "minimizeClientDowntime"
				},
				{
					"name": "Minimize Upgrade Time",
					"value": "minimizeUpgradeTime"
				}
			],
			"routing": {
				"send": {
					"property": "upgradeStrategy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Settings"
					],
					"operation": [
						"Update Network Wireless Settings"
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
						"Wireless Settings"
					],
					"operation": [
						"Update Network Wireless Settings"
					]
				}
			}
		},
];
