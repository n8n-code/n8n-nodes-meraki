import type { INodeProperties } from 'n8n-workflow';

export const mxWarmSpareSettingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MX Warm Spare Settings"
					]
				}
			},
			"options": [
				{
					"name": "Swap Network Warm Spare",
					"value": "Swap Network Warm Spare",
					"action": "Swap MX primary and warm spare appliances",
					"description": "Swap MX primary and warm spare appliances",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/swapWarmSpare"
						}
					}
				},
				{
					"name": "Get Network Warm Spare Settings",
					"value": "Get Network Warm Spare Settings",
					"action": "Return MX warm spare settings",
					"description": "Return MX warm spare settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/warmSpareSettings"
						}
					}
				},
				{
					"name": "Update Network Warm Spare Settings",
					"value": "Update Network Warm Spare Settings",
					"action": "Update MX warm spare settings",
					"description": "Update MX warm spare settings",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/warmSpareSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /networks/{networkId}/swapWarmSpare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Warm Spare Settings"
					],
					"operation": [
						"Swap Network Warm Spare"
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
						"MX Warm Spare Settings"
					],
					"operation": [
						"Swap Network Warm Spare"
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
						"MX Warm Spare Settings"
					],
					"operation": [
						"Swap Network Warm Spare"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/warmSpareSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Warm Spare Settings"
					],
					"operation": [
						"Get Network Warm Spare Settings"
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
						"MX Warm Spare Settings"
					],
					"operation": [
						"Get Network Warm Spare Settings"
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
						"MX Warm Spare Settings"
					],
					"operation": [
						"Get Network Warm Spare Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/warmSpareSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Warm Spare Settings"
					],
					"operation": [
						"Update Network Warm Spare Settings"
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
						"MX Warm Spare Settings"
					],
					"operation": [
						"Update Network Warm Spare Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Enable warm spare",
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
						"MX Warm Spare Settings"
					],
					"operation": [
						"Update Network Warm Spare Settings"
					]
				}
			}
		},
		{
			"displayName": "Spare Serial",
			"name": "spareSerial",
			"type": "string",
			"default": "",
			"description": "Serial number of the warm spare appliance",
			"routing": {
				"send": {
					"property": "spareSerial",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX Warm Spare Settings"
					],
					"operation": [
						"Update Network Warm Spare Settings"
					]
				}
			}
		},
		{
			"displayName": "Uplink Mode",
			"name": "uplinkMode",
			"type": "string",
			"default": "",
			"description": "Uplink mode, either virtual or public",
			"routing": {
				"send": {
					"property": "uplinkMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX Warm Spare Settings"
					],
					"operation": [
						"Update Network Warm Spare Settings"
					]
				}
			}
		},
		{
			"displayName": "Virtual Ip 1",
			"name": "virtualIp1",
			"type": "string",
			"default": "",
			"description": "The WAN 1 shared IP",
			"routing": {
				"send": {
					"property": "virtualIp1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX Warm Spare Settings"
					],
					"operation": [
						"Update Network Warm Spare Settings"
					]
				}
			}
		},
		{
			"displayName": "Virtual Ip 2",
			"name": "virtualIp2",
			"type": "string",
			"default": "",
			"description": "The WAN 2 shared IP",
			"routing": {
				"send": {
					"property": "virtualIp2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX Warm Spare Settings"
					],
					"operation": [
						"Update Network Warm Spare Settings"
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
						"MX Warm Spare Settings"
					],
					"operation": [
						"Update Network Warm Spare Settings"
					]
				}
			}
		},
];
