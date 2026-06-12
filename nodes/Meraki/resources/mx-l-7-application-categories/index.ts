import type { INodeProperties } from 'n8n-workflow';

export const mxL7ApplicationCategoriesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MX L 7 Application Categories"
					]
				}
			},
			"options": [
				{
					"name": "Get Network L 7 Firewall Rules Application Categories",
					"value": "Get Network L 7 Firewall Rules Application Categories",
					"action": "Return the L7 firewall application categories and their associated applications for an MX network",
					"description": "Return the L7 firewall application categories and their associated applications for an MX network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/l7FirewallRules/applicationCategories"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/l7FirewallRules/applicationCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX L 7 Application Categories"
					],
					"operation": [
						"Get Network L 7 Firewall Rules Application Categories"
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
						"MX L 7 Application Categories"
					],
					"operation": [
						"Get Network L 7 Firewall Rules Application Categories"
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
						"MX L 7 Application Categories"
					],
					"operation": [
						"Get Network L 7 Firewall Rules Application Categories"
					]
				}
			}
		},
];
