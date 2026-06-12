import type { INodeProperties } from 'n8n-workflow';

export const mxL3OutboundFirewallDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MX L 3 Outbound Firewall"
					]
				}
			},
			"options": [
				{
					"name": "Get Network L 3 Firewall Rules",
					"value": "Get Network L 3 Firewall Rules",
					"action": "Return the L3 firewall rules for an MX network",
					"description": "Return the L3 firewall rules for an MX network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/l3FirewallRules"
						}
					}
				},
				{
					"name": "Update Network L 3 Firewall Rules",
					"value": "Update Network L 3 Firewall Rules",
					"action": "Update the L3 firewall rules of an MX network",
					"description": "Update the L3 firewall rules of an MX network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/l3FirewallRules"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/l3FirewallRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX L 3 Outbound Firewall"
					],
					"operation": [
						"Get Network L 3 Firewall Rules"
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
						"MX L 3 Outbound Firewall"
					],
					"operation": [
						"Get Network L 3 Firewall Rules"
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
						"MX L 3 Outbound Firewall"
					],
					"operation": [
						"Get Network L 3 Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/l3FirewallRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX L 3 Outbound Firewall"
					],
					"operation": [
						"Update Network L 3 Firewall Rules"
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
						"MX L 3 Outbound Firewall"
					],
					"operation": [
						"Update Network L 3 Firewall Rules"
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
						"MX L 3 Outbound Firewall"
					],
					"operation": [
						"Update Network L 3 Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "Syslog Default Rule",
			"name": "syslogDefaultRule",
			"type": "boolean",
			"default": true,
			"description": "Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)",
			"routing": {
				"send": {
					"property": "syslogDefaultRule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX L 3 Outbound Firewall"
					],
					"operation": [
						"Update Network L 3 Firewall Rules"
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
						"MX L 3 Outbound Firewall"
					],
					"operation": [
						"Update Network L 3 Firewall Rules"
					]
				}
			}
		},
];
