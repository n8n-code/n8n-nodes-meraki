import type { INodeProperties } from 'n8n-workflow';

export const firewalledServicesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalled Services"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Firewalled Services",
					"value": "Get Network Firewalled Services",
					"action": "List the appliance services and their accessibility rules",
					"description": "List the appliance services and their accessibility rules",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/firewalledServices"
						}
					}
				},
				{
					"name": "Get Network Firewalled Service",
					"value": "Get Network Firewalled Service",
					"action": "Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')",
					"description": "Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/firewalledServices/{{$parameter[\"service\"]}}"
						}
					}
				},
				{
					"name": "Update Network Firewalled Service",
					"value": "Update Network Firewalled Service",
					"action": "Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')",
					"description": "Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/firewalledServices/{{$parameter[\"service\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/firewalledServices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalled Services"
					],
					"operation": [
						"Get Network Firewalled Services"
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
						"Firewalled Services"
					],
					"operation": [
						"Get Network Firewalled Services"
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
						"Firewalled Services"
					],
					"operation": [
						"Get Network Firewalled Services"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/firewalledServices/{service}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalled Services"
					],
					"operation": [
						"Get Network Firewalled Service"
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
						"Firewalled Services"
					],
					"operation": [
						"Get Network Firewalled Service"
					]
				}
			}
		},
		{
			"displayName": "Service",
			"name": "service",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalled Services"
					],
					"operation": [
						"Get Network Firewalled Service"
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
						"Firewalled Services"
					],
					"operation": [
						"Get Network Firewalled Service"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/firewalledServices/{service}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalled Services"
					],
					"operation": [
						"Update Network Firewalled Service"
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
						"Firewalled Services"
					],
					"operation": [
						"Update Network Firewalled Service"
					]
				}
			}
		},
		{
			"displayName": "Service",
			"name": "service",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalled Services"
					],
					"operation": [
						"Update Network Firewalled Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Access",
			"name": "access",
			"type": "options",
			"default": "blocked",
			"description": "A string indicating the rule for which IPs are allowed to use the specified service. Acceptable values are \"blocked\" (no remote IPs can access the service), \"restricted\" (only whitelisted IPs can access the service), and \"unrestriced\" (any remote IP can access the service). This field is required",
			"options": [
				{
					"name": "Blocked",
					"value": "blocked"
				},
				{
					"name": "Restricted",
					"value": "restricted"
				},
				{
					"name": "Unrestricted",
					"value": "unrestricted"
				}
			],
			"routing": {
				"send": {
					"property": "access",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalled Services"
					],
					"operation": [
						"Update Network Firewalled Service"
					]
				}
			}
		},
		{
			"displayName": "Allowed Ips",
			"name": "allowedIps",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of whitelisted IPs that can access the service. This field is required if \"access\" is set to \"restricted\". Otherwise this field is ignored",
			"routing": {
				"send": {
					"property": "allowedIps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalled Services"
					],
					"operation": [
						"Update Network Firewalled Service"
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
						"Firewalled Services"
					],
					"operation": [
						"Update Network Firewalled Service"
					]
				}
			}
		},
];
