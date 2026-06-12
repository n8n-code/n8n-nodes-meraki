import type { INodeProperties } from 'n8n-workflow';

export const switchSettingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Switch Settings",
					"value": "Get Network Switch Settings",
					"action": "Returns the switch network settings",
					"description": "Returns the switch network settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings"
						}
					}
				},
				{
					"name": "Update Network Switch Settings",
					"value": "Update Network Switch Settings",
					"action": "Update switch network settings",
					"description": "Update switch network settings",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings"
						}
					}
				},
				{
					"name": "Get Network Switch Settings Mtu",
					"value": "Get Network Switch Settings Mtu",
					"action": "Return the MTU configuration",
					"description": "Return the MTU configuration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings/mtu"
						}
					}
				},
				{
					"name": "Update Network Switch Settings Mtu",
					"value": "Update Network Switch Settings Mtu",
					"action": "Update the MTU configuration",
					"description": "Update the MTU configuration",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings/mtu"
						}
					}
				},
				{
					"name": "Get Network Switch Settings Multicast",
					"value": "Get Network Switch Settings Multicast",
					"action": "Return multicast settings for a network",
					"description": "Return multicast settings for a network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings/multicast"
						}
					}
				},
				{
					"name": "Update Network Switch Settings Multicast",
					"value": "Update Network Switch Settings Multicast",
					"action": "Update multicast settings for a network",
					"description": "Update multicast settings for a network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings/multicast"
						}
					}
				},
				{
					"name": "Get Network Switch Settings Qos Rules",
					"value": "Get Network Switch Settings Qos Rules",
					"action": "List quality of service rules",
					"description": "List quality of service rules",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings/qosRules"
						}
					}
				},
				{
					"name": "Create Network Switch Settings Qos Rule",
					"value": "Create Network Switch Settings Qos Rule",
					"action": "Add a quality of service rule",
					"description": "Add a quality of service rule",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings/qosRules"
						}
					}
				},
				{
					"name": "Get Network Switch Settings Qos Rules Order",
					"value": "Get Network Switch Settings Qos Rules Order",
					"action": "Return the quality of service rule IDs by order in which they will be processed by the switch",
					"description": "Return the quality of service rule IDs by order in which they will be processed by the switch",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings/qosRules/order"
						}
					}
				},
				{
					"name": "Update Network Switch Settings Qos Rules Order",
					"value": "Update Network Switch Settings Qos Rules Order",
					"action": "Update the order in which the rules should be processed by the switch",
					"description": "Update the order in which the rules should be processed by the switch",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings/qosRules/order"
						}
					}
				},
				{
					"name": "Delete Network Switch Settings Qos Rule",
					"value": "Delete Network Switch Settings Qos Rule",
					"action": "Delete a quality of service rule",
					"description": "Delete a quality of service rule",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings/qosRules/{{$parameter[\"qosRuleId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Switch Settings Qos Rule",
					"value": "Get Network Switch Settings Qos Rule",
					"action": "Return a quality of service rule",
					"description": "Return a quality of service rule",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings/qosRules/{{$parameter[\"qosRuleId\"]}}"
						}
					}
				},
				{
					"name": "Update Network Switch Settings Qos Rule",
					"value": "Update Network Switch Settings Qos Rule",
					"action": "Update a quality of service rule",
					"description": "Update a quality of service rule",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings/qosRules/{{$parameter[\"qosRuleId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Switch Settings Storm Control",
					"value": "Get Network Switch Settings Storm Control",
					"action": "Return the storm control configuration for a switch network",
					"description": "Return the storm control configuration for a switch network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings/stormControl"
						}
					}
				},
				{
					"name": "Update Network Switch Settings Storm Control",
					"value": "Update Network Switch Settings Storm Control",
					"action": "Update the storm control configuration for a switch network",
					"description": "Update the storm control configuration for a switch network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/settings/stormControl"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/switch/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/switch/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings"
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings"
					]
				}
			}
		},
		{
			"displayName": "Power Exceptions",
			"name": "powerExceptions",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Exceptions on a per switch basis to \"useCombinedPower\"",
			"routing": {
				"send": {
					"property": "powerExceptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings"
					]
				}
			}
		},
		{
			"displayName": "Use Combined Power",
			"name": "useCombinedPower",
			"type": "boolean",
			"default": true,
			"description": "The use Combined Power as the default behavior of secondary power supplies on supported devices.",
			"routing": {
				"send": {
					"property": "useCombinedPower",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"type": "number",
			"default": 0,
			"description": "Management VLAN",
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings"
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/switch/settings/mtu",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Mtu"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Mtu"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Mtu"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/switch/settings/mtu",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Mtu"
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Mtu"
					]
				}
			}
		},
		{
			"displayName": "Default Mtu Size",
			"name": "defaultMtuSize",
			"type": "number",
			"default": 0,
			"description": "MTU size for the entire network. Default value is 9578.",
			"routing": {
				"send": {
					"property": "defaultMtuSize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Mtu"
					]
				}
			}
		},
		{
			"displayName": "Overrides",
			"name": "overrides",
			"type": "json",
			"default": "[\n  {\n    \"switchProfiles\": [\n      null\n    ],\n    \"switches\": [\n      null\n    ]\n  }\n]",
			"description": "Override MTU size for individual switches or switch profiles. An empty array will clear overrides.",
			"routing": {
				"send": {
					"property": "overrides",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Mtu"
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Mtu"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/switch/settings/multicast",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Multicast"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Multicast"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Multicast"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/switch/settings/multicast",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Multicast"
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Multicast"
					]
				}
			}
		},
		{
			"displayName": "Default Settings",
			"name": "defaultSettings",
			"type": "json",
			"default": "{}",
			"description": "Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.",
			"routing": {
				"send": {
					"property": "defaultSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Multicast"
					]
				}
			}
		},
		{
			"displayName": "Overrides",
			"name": "overrides",
			"type": "json",
			"default": "[\n  {\n    \"stacks\": [\n      null\n    ],\n    \"switchProfiles\": [\n      null\n    ],\n    \"switches\": [\n      null\n    ]\n  }\n]",
			"description": "Array of paired switches/stacks/profiles and corresponding multicast settings. An empty array will clear the multicast settings.",
			"routing": {
				"send": {
					"property": "overrides",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Multicast"
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Multicast"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/switch/settings/qosRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Qos Rules"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Qos Rules"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Qos Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/switch/settings/qosRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Create Network Switch Settings Qos Rule"
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
						"Switch Settings"
					],
					"operation": [
						"Create Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Dscp",
			"name": "dscp",
			"type": "number",
			"default": 0,
			"description": "DSCP tag. Set this to -1 to trust incoming DSCP. Default value is 0",
			"routing": {
				"send": {
					"property": "dscp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Create Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Dst Port",
			"name": "dstPort",
			"type": "number",
			"default": 0,
			"description": "The destination port of the incoming packet. Applicable only if protocol is TCP or UDP.",
			"routing": {
				"send": {
					"property": "dstPort",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Create Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Dst Port Range",
			"name": "dstPortRange",
			"type": "string",
			"default": "",
			"description": "The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80",
			"routing": {
				"send": {
					"property": "dstPortRange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Create Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Protocol",
			"name": "protocol",
			"type": "options",
			"default": "ANY",
			"description": "The protocol of the incoming packet. Can be one of \"ANY\", \"TCP\" or \"UDP\". Default value is \"ANY\"",
			"options": [
				{
					"name": "ANY",
					"value": "ANY"
				},
				{
					"name": "TCP",
					"value": "TCP"
				},
				{
					"name": "UDP",
					"value": "UDP"
				}
			],
			"routing": {
				"send": {
					"property": "protocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Create Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Src Port",
			"name": "srcPort",
			"type": "number",
			"default": 0,
			"description": "The source port of the incoming packet. Applicable only if protocol is TCP or UDP.",
			"routing": {
				"send": {
					"property": "srcPort",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Create Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Src Port Range",
			"name": "srcPortRange",
			"type": "string",
			"default": "",
			"description": "The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80",
			"routing": {
				"send": {
					"property": "srcPortRange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Create Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Vlan",
			"name": "vlan",
			"type": "number",
			"default": 0,
			"description": "The VLAN of the incoming packet. A null value will match any VLAN.",
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
						"Switch Settings"
					],
					"operation": [
						"Create Network Switch Settings Qos Rule"
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
						"Switch Settings"
					],
					"operation": [
						"Create Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/switch/settings/qosRules/order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Qos Rules Order"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Qos Rules Order"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Qos Rules Order"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/switch/settings/qosRules/order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rules Order"
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rules Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rule Ids",
			"name": "ruleIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of quality of service rule IDs arranged in order in which they should be processed by the switch.",
			"routing": {
				"send": {
					"property": "ruleIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rules Order"
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rules Order"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networks/{networkId}/switch/settings/qosRules/{qosRuleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Delete Network Switch Settings Qos Rule"
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
						"Switch Settings"
					],
					"operation": [
						"Delete Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Qos Rule ID",
			"name": "qosRuleId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Delete Network Switch Settings Qos Rule"
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
						"Switch Settings"
					],
					"operation": [
						"Delete Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/switch/settings/qosRules/{qosRuleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Qos Rule"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Qos Rule ID",
			"name": "qosRuleId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Qos Rule"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/switch/settings/qosRules/{qosRuleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rule"
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Qos Rule ID",
			"name": "qosRuleId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Dscp",
			"name": "dscp",
			"type": "number",
			"default": 0,
			"description": "DSCP tag that should be assigned to incoming packet. Set this to -1 to trust incoming DSCP. Default value is 0.",
			"routing": {
				"send": {
					"property": "dscp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Dst Port",
			"name": "dstPort",
			"type": "number",
			"default": 0,
			"description": "The destination port of the incoming packet. Applicable only if protocol is TCP or UDP.",
			"routing": {
				"send": {
					"property": "dstPort",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Dst Port Range",
			"name": "dstPortRange",
			"type": "string",
			"default": "",
			"description": "The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80",
			"routing": {
				"send": {
					"property": "dstPortRange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Protocol",
			"name": "protocol",
			"type": "options",
			"default": "ANY",
			"description": "The protocol of the incoming packet. Can be one of \"ANY\", \"TCP\" or \"UDP\". Default value is \"ANY\".",
			"options": [
				{
					"name": "ANY",
					"value": "ANY"
				},
				{
					"name": "TCP",
					"value": "TCP"
				},
				{
					"name": "UDP",
					"value": "UDP"
				}
			],
			"routing": {
				"send": {
					"property": "protocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Src Port",
			"name": "srcPort",
			"type": "number",
			"default": 0,
			"description": "The source port of the incoming packet. Applicable only if protocol is TCP or UDP.",
			"routing": {
				"send": {
					"property": "srcPort",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Src Port Range",
			"name": "srcPortRange",
			"type": "string",
			"default": "",
			"description": "The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80",
			"routing": {
				"send": {
					"property": "srcPortRange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"type": "number",
			"default": 0,
			"description": "The VLAN of the incoming packet. A null value will match any VLAN.",
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rule"
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Qos Rule"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/switch/settings/stormControl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Storm Control"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Storm Control"
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
						"Switch Settings"
					],
					"operation": [
						"Get Network Switch Settings Storm Control"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/switch/settings/stormControl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Storm Control"
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Storm Control"
					]
				}
			}
		},
		{
			"displayName": "Broadcast Threshold",
			"name": "broadcastThreshold",
			"type": "number",
			"default": 0,
			"description": "Percentage (1 to 99) of total available port bandwidth for broadcast traffic type. Default value 100 percent rate is to clear the configuration.",
			"routing": {
				"send": {
					"property": "broadcastThreshold",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Storm Control"
					]
				}
			}
		},
		{
			"displayName": "Multicast Threshold",
			"name": "multicastThreshold",
			"type": "number",
			"default": 0,
			"description": "Percentage (1 to 99) of total available port bandwidth for multicast traffic type. Default value 100 percent rate is to clear the configuration.",
			"routing": {
				"send": {
					"property": "multicastThreshold",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Storm Control"
					]
				}
			}
		},
		{
			"displayName": "Unknown Unicast Threshold",
			"name": "unknownUnicastThreshold",
			"type": "number",
			"default": 0,
			"description": "Percentage (1 to 99) of total available port bandwidth for unknown unicast (dlf-destination lookup failure) traffic type. Default value 100 percent rate is to clear the configuration.",
			"routing": {
				"send": {
					"property": "unknownUnicastThreshold",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Storm Control"
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
						"Switch Settings"
					],
					"operation": [
						"Update Network Switch Settings Storm Control"
					]
				}
			}
		},
];
