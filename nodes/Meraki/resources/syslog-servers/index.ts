import type { INodeProperties } from 'n8n-workflow';

export const syslogServersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Syslog Servers"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Syslog Servers",
					"value": "Get Network Syslog Servers",
					"action": "List the syslog servers for a network",
					"description": "List the syslog servers for a network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/syslogServers"
						}
					}
				},
				{
					"name": "Update Network Syslog Servers",
					"value": "Update Network Syslog Servers",
					"action": "Update the syslog servers for a network",
					"description": "Update the syslog servers for a network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/syslogServers"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/syslogServers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Syslog Servers"
					],
					"operation": [
						"Get Network Syslog Servers"
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
						"Syslog Servers"
					],
					"operation": [
						"Get Network Syslog Servers"
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
						"Syslog Servers"
					],
					"operation": [
						"Get Network Syslog Servers"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/syslogServers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Syslog Servers"
					],
					"operation": [
						"Update Network Syslog Servers"
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
						"Syslog Servers"
					],
					"operation": [
						"Update Network Syslog Servers"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Servers",
			"name": "servers",
			"type": "json",
			"default": "[\n  {\n    \"roles\": [\n      null\n    ]\n  }\n]",
			"description": "A list of the syslog servers for this network",
			"routing": {
				"send": {
					"property": "servers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Syslog Servers"
					],
					"operation": [
						"Update Network Syslog Servers"
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
						"Syslog Servers"
					],
					"operation": [
						"Update Network Syslog Servers"
					]
				}
			}
		},
];
