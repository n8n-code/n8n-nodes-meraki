import type { INodeProperties } from 'n8n-workflow';

export const mxVpnFirewallDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MX VPN Firewall"
					]
				}
			},
			"options": [
				{
					"name": "Get Organization Vpn Firewall Rules",
					"value": "Get Organization Vpn Firewall Rules",
					"action": "Return the firewall rules for an organization's site-to-site VPN",
					"description": "Return the firewall rules for an organization's site-to-site VPN",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/vpnFirewallRules"
						}
					}
				},
				{
					"name": "Update Organization Vpn Firewall Rules",
					"value": "Update Organization Vpn Firewall Rules",
					"action": "Update the firewall rules of an organization's site-to-site VPN",
					"description": "Update the firewall rules of an organization's site-to-site VPN",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/vpnFirewallRules"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationId}/vpnFirewallRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX VPN Firewall"
					],
					"operation": [
						"Get Organization Vpn Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"MX VPN Firewall"
					],
					"operation": [
						"Get Organization Vpn Firewall Rules"
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
						"MX VPN Firewall"
					],
					"operation": [
						"Get Organization Vpn Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "PUT /organizations/{organizationId}/vpnFirewallRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX VPN Firewall"
					],
					"operation": [
						"Update Organization Vpn Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"MX VPN Firewall"
					],
					"operation": [
						"Update Organization Vpn Firewall Rules"
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
						"MX VPN Firewall"
					],
					"operation": [
						"Update Organization Vpn Firewall Rules"
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
						"MX VPN Firewall"
					],
					"operation": [
						"Update Organization Vpn Firewall Rules"
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
						"MX VPN Firewall"
					],
					"operation": [
						"Update Organization Vpn Firewall Rules"
					]
				}
			}
		},
];
