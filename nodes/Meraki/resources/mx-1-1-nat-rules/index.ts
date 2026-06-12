import type { INodeProperties } from 'n8n-workflow';

export const mx11NatRulesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MX 1 1 NAT Rules"
					]
				}
			},
			"options": [
				{
					"name": "Get Network One To One Nat Rules",
					"value": "Get Network One To One Nat Rules",
					"action": "Return the 1:1 NAT mapping rules for an MX network",
					"description": "Return the 1:1 NAT mapping rules for an MX network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/oneToOneNatRules"
						}
					}
				},
				{
					"name": "Update Network One To One Nat Rules",
					"value": "Update Network One To One Nat Rules",
					"action": "Set the 1:1 NAT mapping rules for an MX network",
					"description": "Set the 1:1 NAT mapping rules for an MX network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/oneToOneNatRules"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/oneToOneNatRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX 1 1 NAT Rules"
					],
					"operation": [
						"Get Network One To One Nat Rules"
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
						"MX 1 1 NAT Rules"
					],
					"operation": [
						"Get Network One To One Nat Rules"
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
						"MX 1 1 NAT Rules"
					],
					"operation": [
						"Get Network One To One Nat Rules"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/oneToOneNatRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX 1 1 NAT Rules"
					],
					"operation": [
						"Update Network One To One Nat Rules"
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
						"MX 1 1 NAT Rules"
					],
					"operation": [
						"Update Network One To One Nat Rules"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rules",
			"name": "rules",
			"type": "json",
			"default": "[\n  {\n    \"allowedInbound\": [\n      {\n        \"allowedIps\": [\n          null\n        ],\n        \"destinationPorts\": [\n          null\n        ]\n      }\n    ]\n  }\n]",
			"description": "An array of 1:1 nat rules",
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
						"MX 1 1 NAT Rules"
					],
					"operation": [
						"Update Network One To One Nat Rules"
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
						"MX 1 1 NAT Rules"
					],
					"operation": [
						"Update Network One To One Nat Rules"
					]
				}
			}
		},
];
