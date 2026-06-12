import type { INodeProperties } from 'n8n-workflow';

export const mrL3FirewallDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MR L 3 Firewall"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Ssid L 3 Firewall Rules",
					"value": "Get Network Ssid L 3 Firewall Rules",
					"action": "Return the L3 firewall rules for an SSID on an MR network",
					"description": "Return the L3 firewall rules for an SSID on an MR network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/ssids/{{$parameter[\"number\"]}}/l3FirewallRules"
						}
					}
				},
				{
					"name": "Update Network Ssid L 3 Firewall Rules",
					"value": "Update Network Ssid L 3 Firewall Rules",
					"action": "Update the L3 firewall rules of an SSID on an MR network",
					"description": "Update the L3 firewall rules of an SSID on an MR network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/ssids/{{$parameter[\"number\"]}}/l3FirewallRules"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/ssids/{number}/l3FirewallRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MR L 3 Firewall"
					],
					"operation": [
						"Get Network Ssid L 3 Firewall Rules"
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
						"MR L 3 Firewall"
					],
					"operation": [
						"Get Network Ssid L 3 Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"MR L 3 Firewall"
					],
					"operation": [
						"Get Network Ssid L 3 Firewall Rules"
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
						"MR L 3 Firewall"
					],
					"operation": [
						"Get Network Ssid L 3 Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/ssids/{number}/l3FirewallRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MR L 3 Firewall"
					],
					"operation": [
						"Update Network Ssid L 3 Firewall Rules"
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
						"MR L 3 Firewall"
					],
					"operation": [
						"Update Network Ssid L 3 Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"MR L 3 Firewall"
					],
					"operation": [
						"Update Network Ssid L 3 Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "Allow Lan Access",
			"name": "allowLanAccess",
			"type": "boolean",
			"default": true,
			"description": "Allow wireless client access to local LAN (boolean value - true allows access and false denies access) (optional)",
			"routing": {
				"send": {
					"property": "allowLanAccess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MR L 3 Firewall"
					],
					"operation": [
						"Update Network Ssid L 3 Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "Rules",
			"name": "rules",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "An ordered array of the firewall rules for this SSID (not including the local LAN access rule or the default rule)",
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
						"MR L 3 Firewall"
					],
					"operation": [
						"Update Network Ssid L 3 Firewall Rules"
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
						"MR L 3 Firewall"
					],
					"operation": [
						"Update Network Ssid L 3 Firewall Rules"
					]
				}
			}
		},
];
