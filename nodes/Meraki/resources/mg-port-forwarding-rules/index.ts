import type { INodeProperties } from 'n8n-workflow';

export const mgPortForwardingRulesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MG Port Forwarding Rules"
					]
				}
			},
			"options": [
				{
					"name": "Get Device Cellular Gateway Settings Port Forwarding Rules",
					"value": "Get Device Cellular Gateway Settings Port Forwarding Rules",
					"action": "Returns the port forwarding rules for a single MG.",
					"description": "Returns the port forwarding rules for a single MG.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"serial\"]}}/cellularGateway/settings/portForwardingRules"
						}
					}
				},
				{
					"name": "Update Device Cellular Gateway Settings Port Forwarding Rules",
					"value": "Update Device Cellular Gateway Settings Port Forwarding Rules",
					"action": "Updates the port forwarding rules for a single MG.",
					"description": "Updates the port forwarding rules for a single MG.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/devices/{{$parameter[\"serial\"]}}/cellularGateway/settings/portForwardingRules"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /devices/{serial}/cellularGateway/settings/portForwardingRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MG Port Forwarding Rules"
					],
					"operation": [
						"Get Device Cellular Gateway Settings Port Forwarding Rules"
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
						"MG Port Forwarding Rules"
					],
					"operation": [
						"Get Device Cellular Gateway Settings Port Forwarding Rules"
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
						"MG Port Forwarding Rules"
					],
					"operation": [
						"Get Device Cellular Gateway Settings Port Forwarding Rules"
					]
				}
			}
		},
		{
			"displayName": "PUT /devices/{serial}/cellularGateway/settings/portForwardingRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MG Port Forwarding Rules"
					],
					"operation": [
						"Update Device Cellular Gateway Settings Port Forwarding Rules"
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
						"MG Port Forwarding Rules"
					],
					"operation": [
						"Update Device Cellular Gateway Settings Port Forwarding Rules"
					]
				}
			}
		},
		{
			"displayName": "Rules",
			"name": "rules",
			"type": "json",
			"default": "[\n  {\n    \"allowedIps\": [\n      null\n    ]\n  }\n]",
			"description": "An array of port forwarding params",
			"routing": {
				"send": {
					"property": "rules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MG Port Forwarding Rules"
					],
					"operation": [
						"Update Device Cellular Gateway Settings Port Forwarding Rules"
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
						"MG Port Forwarding Rules"
					],
					"operation": [
						"Update Device Cellular Gateway Settings Port Forwarding Rules"
					]
				}
			}
		},
];
