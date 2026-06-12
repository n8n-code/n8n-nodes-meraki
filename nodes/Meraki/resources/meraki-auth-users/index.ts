import type { INodeProperties } from 'n8n-workflow';

export const merakiAuthUsersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Meraki Auth Users"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Meraki Auth Users",
					"value": "Get Network Meraki Auth Users",
					"action": "List the splash or RADIUS users configured under Meraki Authentication for a network",
					"description": "List the splash or RADIUS users configured under Meraki Authentication for a network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/merakiAuthUsers"
						}
					}
				},
				{
					"name": "Get Network Meraki Auth User",
					"value": "Get Network Meraki Auth User",
					"action": "Return the Meraki Auth splash or RADIUS user",
					"description": "Return the Meraki Auth splash or RADIUS user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/merakiAuthUsers/{{$parameter[\"merakiAuthUserId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/merakiAuthUsers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Meraki Auth Users"
					],
					"operation": [
						"Get Network Meraki Auth Users"
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
						"Meraki Auth Users"
					],
					"operation": [
						"Get Network Meraki Auth Users"
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
						"Meraki Auth Users"
					],
					"operation": [
						"Get Network Meraki Auth Users"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Meraki Auth Users"
					],
					"operation": [
						"Get Network Meraki Auth User"
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
						"Meraki Auth Users"
					],
					"operation": [
						"Get Network Meraki Auth User"
					]
				}
			}
		},
		{
			"displayName": "Meraki Auth User ID",
			"name": "merakiAuthUserId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Meraki Auth Users"
					],
					"operation": [
						"Get Network Meraki Auth User"
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
						"Meraki Auth Users"
					],
					"operation": [
						"Get Network Meraki Auth User"
					]
				}
			}
		},
];
