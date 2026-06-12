import type { INodeProperties } from 'n8n-workflow';

export const mgLanSettingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MG LAN Settings"
					]
				}
			},
			"options": [
				{
					"name": "Get Device Cellular Gateway Settings",
					"value": "Get Device Cellular Gateway Settings",
					"action": "Show the LAN Settings of a MG",
					"description": "Show the LAN Settings of a MG",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"serial\"]}}/cellularGateway/settings"
						}
					}
				},
				{
					"name": "Update Device Cellular Gateway Settings",
					"value": "Update Device Cellular Gateway Settings",
					"action": "Update the LAN Settings for a single MG.",
					"description": "Update the LAN Settings for a single MG.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/devices/{{$parameter[\"serial\"]}}/cellularGateway/settings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /devices/{serial}/cellularGateway/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MG LAN Settings"
					],
					"operation": [
						"Get Device Cellular Gateway Settings"
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
						"MG LAN Settings"
					],
					"operation": [
						"Get Device Cellular Gateway Settings"
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
						"MG LAN Settings"
					],
					"operation": [
						"Get Device Cellular Gateway Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /devices/{serial}/cellularGateway/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MG LAN Settings"
					],
					"operation": [
						"Update Device Cellular Gateway Settings"
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
						"MG LAN Settings"
					],
					"operation": [
						"Update Device Cellular Gateway Settings"
					]
				}
			}
		},
		{
			"displayName": "Fixed Ip Assignments",
			"name": "fixedIpAssignments",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "list of all fixed IP assignments for a single MG",
			"routing": {
				"send": {
					"property": "fixedIpAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MG LAN Settings"
					],
					"operation": [
						"Update Device Cellular Gateway Settings"
					]
				}
			}
		},
		{
			"displayName": "Reserved Ip Ranges",
			"name": "reservedIpRanges",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "list of all reserved IP ranges for a single MG",
			"routing": {
				"send": {
					"property": "reservedIpRanges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MG LAN Settings"
					],
					"operation": [
						"Update Device Cellular Gateway Settings"
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
						"MG LAN Settings"
					],
					"operation": [
						"Update Device Cellular Gateway Settings"
					]
				}
			}
		},
];
