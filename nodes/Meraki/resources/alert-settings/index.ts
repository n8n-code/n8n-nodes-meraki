import type { INodeProperties } from 'n8n-workflow';

export const alertSettingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Alert Settings"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Alert Settings",
					"value": "Get Network Alert Settings",
					"action": "Return the alert configuration for this network",
					"description": "Return the alert configuration for this network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/alertSettings"
						}
					}
				},
				{
					"name": "Update Network Alert Settings",
					"value": "Update Network Alert Settings",
					"action": "Update the alert configuration for this network",
					"description": "Update the alert configuration for this network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/alertSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/alertSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Alert Settings"
					],
					"operation": [
						"Get Network Alert Settings"
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
						"Alert Settings"
					],
					"operation": [
						"Get Network Alert Settings"
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
						"Alert Settings"
					],
					"operation": [
						"Get Network Alert Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/alertSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Alert Settings"
					],
					"operation": [
						"Update Network Alert Settings"
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
						"Alert Settings"
					],
					"operation": [
						"Update Network Alert Settings"
					]
				}
			}
		},
		{
			"displayName": "Alerts",
			"name": "alerts",
			"type": "json",
			"default": "[\n  {\n    \"alertDestinations\": {\n      \"emails\": [\n        null\n      ],\n      \"httpServerIds\": [\n        null\n      ]\n    },\n    \"filters\": {}\n  }\n]",
			"description": "Alert-specific configuration for each type. Only alerts that pertain to the network can be updated.",
			"routing": {
				"send": {
					"property": "alerts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Alert Settings"
					],
					"operation": [
						"Update Network Alert Settings"
					]
				}
			}
		},
		{
			"displayName": "Default Destinations",
			"name": "defaultDestinations",
			"type": "json",
			"default": "{\n  \"emails\": [\n    null\n  ],\n  \"httpServerIds\": [\n    null\n  ]\n}",
			"description": "The network-wide destinations for all alerts on the network.",
			"routing": {
				"send": {
					"property": "defaultDestinations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Alert Settings"
					],
					"operation": [
						"Update Network Alert Settings"
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
						"Alert Settings"
					],
					"operation": [
						"Update Network Alert Settings"
					]
				}
			}
		},
];
