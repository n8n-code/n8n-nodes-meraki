import type { INodeProperties } from 'n8n-workflow';

export const mxVlanPortsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MX VLAN Ports"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Appliance Ports",
					"value": "Get Network Appliance Ports",
					"action": "List per-port VLAN settings for all ports of a MX.",
					"description": "List per-port VLAN settings for all ports of a MX.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/appliancePorts"
						}
					}
				},
				{
					"name": "Get Network Appliance Port",
					"value": "Get Network Appliance Port",
					"action": "Return per-port VLAN settings for a single MX port.",
					"description": "Return per-port VLAN settings for a single MX port.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/appliancePorts/{{$parameter[\"appliancePortId\"]}}"
						}
					}
				},
				{
					"name": "Update Network Appliance Port",
					"value": "Update Network Appliance Port",
					"action": "Update the per-port VLAN settings for a single MX port.",
					"description": "Update the per-port VLAN settings for a single MX port.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/appliancePorts/{{$parameter[\"appliancePortId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/appliancePorts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX VLAN Ports"
					],
					"operation": [
						"Get Network Appliance Ports"
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
						"MX VLAN Ports"
					],
					"operation": [
						"Get Network Appliance Ports"
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
						"MX VLAN Ports"
					],
					"operation": [
						"Get Network Appliance Ports"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/appliancePorts/{appliancePortId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX VLAN Ports"
					],
					"operation": [
						"Get Network Appliance Port"
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
						"MX VLAN Ports"
					],
					"operation": [
						"Get Network Appliance Port"
					]
				}
			}
		},
		{
			"displayName": "Appliance Port ID",
			"name": "appliancePortId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"MX VLAN Ports"
					],
					"operation": [
						"Get Network Appliance Port"
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
						"MX VLAN Ports"
					],
					"operation": [
						"Get Network Appliance Port"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/appliancePorts/{appliancePortId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX VLAN Ports"
					],
					"operation": [
						"Update Network Appliance Port"
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
						"MX VLAN Ports"
					],
					"operation": [
						"Update Network Appliance Port"
					]
				}
			}
		},
		{
			"displayName": "Appliance Port ID",
			"name": "appliancePortId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"MX VLAN Ports"
					],
					"operation": [
						"Update Network Appliance Port"
					]
				}
			}
		},
		{
			"displayName": "Access Policy",
			"name": "accessPolicy",
			"type": "string",
			"default": "",
			"description": "The name of the policy. Only applicable to Access ports. Valid values are: 'open', '8021x-radius', 'mac-radius', 'hybris-radius' for MX64 or Z3 or any MX supporting the per port authentication feature. Otherwise, 'open' is the only valid value and 'open' is the default value if the field is missing.",
			"routing": {
				"send": {
					"property": "accessPolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX VLAN Ports"
					],
					"operation": [
						"Update Network Appliance Port"
					]
				}
			}
		},
		{
			"displayName": "Allowed Vlans",
			"name": "allowedVlans",
			"type": "string",
			"default": "",
			"description": "Comma-delimited list of the VLAN ID's allowed on the port, or 'all' to permit all VLAN's on the port.",
			"routing": {
				"send": {
					"property": "allowedVlans",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX VLAN Ports"
					],
					"operation": [
						"Update Network Appliance Port"
					]
				}
			}
		},
		{
			"displayName": "Drop Untagged Traffic",
			"name": "dropUntaggedTraffic",
			"type": "boolean",
			"default": true,
			"description": "Trunk port can Drop all Untagged traffic. When true, no VLAN is required. Access ports cannot have dropUntaggedTraffic set to true.",
			"routing": {
				"send": {
					"property": "dropUntaggedTraffic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX VLAN Ports"
					],
					"operation": [
						"Update Network Appliance Port"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "The status of the port",
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX VLAN Ports"
					],
					"operation": [
						"Update Network Appliance Port"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"description": "The type of the port: 'access' or 'trunk'.",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX VLAN Ports"
					],
					"operation": [
						"Update Network Appliance Port"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"type": "number",
			"default": 0,
			"description": "Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode.",
			"routing": {
				"send": {
					"property": "vlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX VLAN Ports"
					],
					"operation": [
						"Update Network Appliance Port"
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
						"MX VLAN Ports"
					],
					"operation": [
						"Update Network Appliance Port"
					]
				}
			}
		},
];
