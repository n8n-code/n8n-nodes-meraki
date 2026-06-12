import type { INodeProperties } from 'n8n-workflow';

export const mxL7FirewallDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MX L 7 Firewall"
					]
				}
			},
			"options": [
				{
					"name": "Get Network L 7 Firewall Rules",
					"value": "Get Network L 7 Firewall Rules",
					"action": "List the MX L7 firewall rules for an MX network",
					"description": "List the MX L7 firewall rules for an MX network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/l7FirewallRules"
						}
					}
				},
				{
					"name": "Update Network L 7 Firewall Rules",
					"value": "Update Network L 7 Firewall Rules",
					"action": "Update the MX L7 firewall rules for an MX network",
					"description": "Update the MX L7 firewall rules for an MX network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/l7FirewallRules"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/l7FirewallRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX L 7 Firewall"
					],
					"operation": [
						"Get Network L 7 Firewall Rules"
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
						"MX L 7 Firewall"
					],
					"operation": [
						"Get Network L 7 Firewall Rules"
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
						"MX L 7 Firewall"
					],
					"operation": [
						"Get Network L 7 Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/l7FirewallRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX L 7 Firewall"
					],
					"operation": [
						"Update Network L 7 Firewall Rules"
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
						"MX L 7 Firewall"
					],
					"operation": [
						"Update Network L 7 Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "Rules",
			"name": "rules",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "An ordered array of the MX L7 firewall rules",
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
						"MX L 7 Firewall"
					],
					"operation": [
						"Update Network L 7 Firewall Rules"
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
						"MX L 7 Firewall"
					],
					"operation": [
						"Update Network L 7 Firewall Rules"
					]
				}
			}
		},
];
