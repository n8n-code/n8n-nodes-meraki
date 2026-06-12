import type { INodeProperties } from 'n8n-workflow';

export const snmpSettingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"SNMP Settings"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Snmp Settings",
					"value": "Get Network Snmp Settings",
					"action": "Return the SNMP settings for a network",
					"description": "Return the SNMP settings for a network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/snmpSettings"
						}
					}
				},
				{
					"name": "Get Organization Snmp",
					"value": "Get Organization Snmp",
					"action": "Return the SNMP settings for an organization",
					"description": "Return the SNMP settings for an organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/snmp"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/snmpSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SNMP Settings"
					],
					"operation": [
						"Get Network Snmp Settings"
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
						"SNMP Settings"
					],
					"operation": [
						"Get Network Snmp Settings"
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
						"SNMP Settings"
					],
					"operation": [
						"Get Network Snmp Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}/snmp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SNMP Settings"
					],
					"operation": [
						"Get Organization Snmp"
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
						"SNMP Settings"
					],
					"operation": [
						"Get Organization Snmp"
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
						"SNMP Settings"
					],
					"operation": [
						"Get Organization Snmp"
					]
				}
			}
		},
];
