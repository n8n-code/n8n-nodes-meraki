import type { INodeProperties } from 'n8n-workflow';

export const mxCellularFirewallDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MX Cellular Firewall"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Cellular Firewall Rules",
					"value": "Get Network Cellular Firewall Rules",
					"action": "Return the cellular firewall rules for an MX network",
					"description": "Return the cellular firewall rules for an MX network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/cellularFirewallRules"
						}
					}
				},
				{
					"name": "Update Network Cellular Firewall Rules",
					"value": "Update Network Cellular Firewall Rules",
					"action": "Update the cellular firewall rules of an MX network",
					"description": "Update the cellular firewall rules of an MX network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/cellularFirewallRules"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/cellularFirewallRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Cellular Firewall"
					],
					"operation": [
						"Get Network Cellular Firewall Rules"
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
						"MX Cellular Firewall"
					],
					"operation": [
						"Get Network Cellular Firewall Rules"
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
						"MX Cellular Firewall"
					],
					"operation": [
						"Get Network Cellular Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/cellularFirewallRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Cellular Firewall"
					],
					"operation": [
						"Update Network Cellular Firewall Rules"
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
						"MX Cellular Firewall"
					],
					"operation": [
						"Update Network Cellular Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "Rules",
			"name": "rules",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "An ordered array of the firewall rules (not including the default rule)",
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
						"MX Cellular Firewall"
					],
					"operation": [
						"Update Network Cellular Firewall Rules"
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
						"MX Cellular Firewall"
					],
					"operation": [
						"Update Network Cellular Firewall Rules"
					]
				}
			}
		},
];
