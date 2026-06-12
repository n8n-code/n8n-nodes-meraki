import type { INodeProperties } from 'n8n-workflow';

export const mxPortForwardingRulesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MX Port Forwarding Rules"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Port Forwarding Rules",
					"value": "Get Network Port Forwarding Rules",
					"action": "Return the port forwarding rules for an MX network",
					"description": "Return the port forwarding rules for an MX network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/portForwardingRules"
						}
					}
				},
				{
					"name": "Update Network Port Forwarding Rules",
					"value": "Update Network Port Forwarding Rules",
					"action": "Update the port forwarding rules for an MX network",
					"description": "Update the port forwarding rules for an MX network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/portForwardingRules"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/portForwardingRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Port Forwarding Rules"
					],
					"operation": [
						"Get Network Port Forwarding Rules"
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
						"MX Port Forwarding Rules"
					],
					"operation": [
						"Get Network Port Forwarding Rules"
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
						"MX Port Forwarding Rules"
					],
					"operation": [
						"Get Network Port Forwarding Rules"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/portForwardingRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Port Forwarding Rules"
					],
					"operation": [
						"Update Network Port Forwarding Rules"
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
						"MX Port Forwarding Rules"
					],
					"operation": [
						"Update Network Port Forwarding Rules"
					]
				}
			}
		},
		{
			"required": true,
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
						"MX Port Forwarding Rules"
					],
					"operation": [
						"Update Network Port Forwarding Rules"
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
						"MX Port Forwarding Rules"
					],
					"operation": [
						"Update Network Port Forwarding Rules"
					]
				}
			}
		},
];
