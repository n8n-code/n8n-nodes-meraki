import type { INodeProperties } from 'n8n-workflow';

export const mx1ManyNatRulesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MX 1 Many NAT Rules"
					]
				}
			},
			"options": [
				{
					"name": "Get Network One To Many Nat Rules",
					"value": "Get Network One To Many Nat Rules",
					"action": "Return the 1:Many NAT mapping rules for an MX network",
					"description": "Return the 1:Many NAT mapping rules for an MX network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/oneToManyNatRules"
						}
					}
				},
				{
					"name": "Update Network One To Many Nat Rules",
					"value": "Update Network One To Many Nat Rules",
					"action": "Set the 1:Many NAT mapping rules for an MX network",
					"description": "Set the 1:Many NAT mapping rules for an MX network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/oneToManyNatRules"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/oneToManyNatRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX 1 Many NAT Rules"
					],
					"operation": [
						"Get Network One To Many Nat Rules"
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
						"MX 1 Many NAT Rules"
					],
					"operation": [
						"Get Network One To Many Nat Rules"
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
						"MX 1 Many NAT Rules"
					],
					"operation": [
						"Get Network One To Many Nat Rules"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/oneToManyNatRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX 1 Many NAT Rules"
					],
					"operation": [
						"Update Network One To Many Nat Rules"
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
						"MX 1 Many NAT Rules"
					],
					"operation": [
						"Update Network One To Many Nat Rules"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rules",
			"name": "rules",
			"type": "json",
			"default": "[\n  {\n    \"portRules\": [\n      {\n        \"allowedIps\": [\n          null\n        ]\n      }\n    ]\n  }\n]",
			"description": "An array of 1:Many nat rules",
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
						"MX 1 Many NAT Rules"
					],
					"operation": [
						"Update Network One To Many Nat Rules"
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
						"MX 1 Many NAT Rules"
					],
					"operation": [
						"Update Network One To Many Nat Rules"
					]
				}
			}
		},
];
