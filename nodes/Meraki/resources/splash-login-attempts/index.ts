import type { INodeProperties } from 'n8n-workflow';

export const splashLoginAttemptsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Splash Login Attempts"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Splash Login Attempts",
					"value": "Get Network Splash Login Attempts",
					"action": "List the splash login attempts for a network",
					"description": "List the splash login attempts for a network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/splashLoginAttempts"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/splashLoginAttempts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Splash Login Attempts"
					],
					"operation": [
						"Get Network Splash Login Attempts"
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
						"Splash Login Attempts"
					],
					"operation": [
						"Get Network Splash Login Attempts"
					]
				}
			}
		},
		{
			"displayName": "Ssid Number",
			"name": "ssidNumber",
			"description": "Only return the login attempts for the specified SSID",
			"default": 0,
			"type": "options",
			"options": [
				{
					"name": "0",
					"value": 0
				},
				{
					"name": "1",
					"value": 1
				},
				{
					"name": "2",
					"value": 2
				},
				{
					"name": "3",
					"value": 3
				},
				{
					"name": "4",
					"value": 4
				},
				{
					"name": "5",
					"value": 5
				},
				{
					"name": "6",
					"value": 6
				},
				{
					"name": "7",
					"value": 7
				},
				{
					"name": "8",
					"value": 8
				},
				{
					"name": "9",
					"value": 9
				},
				{
					"name": "10",
					"value": 10
				},
				{
					"name": "11",
					"value": 11
				},
				{
					"name": "12",
					"value": 12
				},
				{
					"name": "13",
					"value": 13
				},
				{
					"name": "14",
					"value": 14
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "ssidNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Splash Login Attempts"
					],
					"operation": [
						"Get Network Splash Login Attempts"
					]
				}
			}
		},
		{
			"displayName": "Login Identifier",
			"name": "loginIdentifier",
			"description": "The username, email, or phone number used during login",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loginIdentifier",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Splash Login Attempts"
					],
					"operation": [
						"Get Network Splash Login Attempts"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Splash Login Attempts"
					],
					"operation": [
						"Get Network Splash Login Attempts"
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
						"Splash Login Attempts"
					],
					"operation": [
						"Get Network Splash Login Attempts"
					]
				}
			}
		},
];
