import type { INodeProperties } from 'n8n-workflow';

export const splashSettingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Splash Settings"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Ssid Splash Settings",
					"value": "Get Network Ssid Splash Settings",
					"action": "Display the splash page settings for the given SSID",
					"description": "Display the splash page settings for the given SSID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/ssids/{{$parameter[\"number\"]}}/splashSettings"
						}
					}
				},
				{
					"name": "Update Network Ssid Splash Settings",
					"value": "Update Network Ssid Splash Settings",
					"action": "Modify the splash page settings for the given SSID",
					"description": "Modify the splash page settings for the given SSID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/ssids/{{$parameter[\"number\"]}}/splashSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/ssids/{number}/splashSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Splash Settings"
					],
					"operation": [
						"Get Network Ssid Splash Settings"
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
						"Splash Settings"
					],
					"operation": [
						"Get Network Ssid Splash Settings"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Splash Settings"
					],
					"operation": [
						"Get Network Ssid Splash Settings"
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
						"Splash Settings"
					],
					"operation": [
						"Get Network Ssid Splash Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/ssids/{number}/splashSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Splash Settings"
					],
					"operation": [
						"Update Network Ssid Splash Settings"
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
						"Splash Settings"
					],
					"operation": [
						"Update Network Ssid Splash Settings"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Splash Settings"
					],
					"operation": [
						"Update Network Ssid Splash Settings"
					]
				}
			}
		},
		{
			"displayName": "Splash URL",
			"name": "splashUrl",
			"type": "string",
			"default": "",
			"description": "[optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see 'useSplashUrl'",
			"routing": {
				"send": {
					"property": "splashUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Splash Settings"
					],
					"operation": [
						"Update Network Ssid Splash Settings"
					]
				}
			}
		},
		{
			"displayName": "Use Splash URL",
			"name": "useSplashUrl",
			"type": "boolean",
			"default": true,
			"description": "[optional] Boolean indicating whether the user will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID's access control settings, it may not be possible to use the custom splash URL.",
			"routing": {
				"send": {
					"property": "useSplashUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Splash Settings"
					],
					"operation": [
						"Update Network Ssid Splash Settings"
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
						"Splash Settings"
					],
					"operation": [
						"Update Network Ssid Splash Settings"
					]
				}
			}
		},
];
