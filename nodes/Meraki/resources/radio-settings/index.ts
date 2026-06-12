import type { INodeProperties } from 'n8n-workflow';

export const radioSettingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Wireless Rf Profiles",
					"value": "Get Network Wireless Rf Profiles",
					"action": "List the non-basic RF profiles for this network",
					"description": "List the non-basic RF profiles for this network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/wireless/rfProfiles"
						}
					}
				},
				{
					"name": "Create Network Wireless Rf Profile",
					"value": "Create Network Wireless Rf Profile",
					"action": "Creates new RF profile for this network",
					"description": "Creates new RF profile for this network",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/wireless/rfProfiles"
						}
					}
				},
				{
					"name": "Delete Network Wireless Rf Profile",
					"value": "Delete Network Wireless Rf Profile",
					"action": "Delete a RF Profile",
					"description": "Delete a RF Profile",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/wireless/rfProfiles/{{$parameter[\"rfProfileId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Wireless Rf Profile",
					"value": "Get Network Wireless Rf Profile",
					"action": "Return a RF profile",
					"description": "Return a RF profile",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/wireless/rfProfiles/{{$parameter[\"rfProfileId\"]}}"
						}
					}
				},
				{
					"name": "Update Network Wireless Rf Profile",
					"value": "Update Network Wireless Rf Profile",
					"action": "Updates specified RF profile for this network",
					"description": "Updates specified RF profile for this network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/wireless/rfProfiles/{{$parameter[\"rfProfileId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/wireless/rfProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Get Network Wireless Rf Profiles"
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
						"Radio Settings"
					],
					"operation": [
						"Get Network Wireless Rf Profiles"
					]
				}
			}
		},
		{
			"displayName": "Include Template Profiles",
			"name": "includeTemplateProfiles",
			"description": "If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeTemplateProfiles",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Get Network Wireless Rf Profiles"
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
						"Radio Settings"
					],
					"operation": [
						"Get Network Wireless Rf Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/wireless/rfProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Create Network Wireless Rf Profile"
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
						"Radio Settings"
					],
					"operation": [
						"Create Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Ap Band Settings",
			"name": "apBandSettings",
			"type": "json",
			"default": "{}",
			"description": "Settings that will be enabled if selectionType is set to 'ap'.",
			"routing": {
				"send": {
					"property": "apBandSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Create Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Band Selection Type",
			"name": "bandSelectionType",
			"type": "options",
			"default": "ap",
			"description": "Band selection can be set to either 'ssid' or 'ap'. This param is required on creation.",
			"options": [
				{
					"name": "Ap",
					"value": "ap"
				},
				{
					"name": "Ssid",
					"value": "ssid"
				}
			],
			"routing": {
				"send": {
					"property": "bandSelectionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Create Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Client Balancing Enabled",
			"name": "clientBalancingEnabled",
			"type": "boolean",
			"default": true,
			"description": "Steers client to best available access point. Can be either true or false. Defaults to true.",
			"routing": {
				"send": {
					"property": "clientBalancingEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Create Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Five Ghz Settings",
			"name": "fiveGhzSettings",
			"type": "json",
			"default": "{\n  \"validAutoChannels\": [\n    null\n  ]\n}",
			"description": "Settings related to 5Ghz band",
			"routing": {
				"send": {
					"property": "fiveGhzSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Create Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Min Bitrate Type",
			"name": "minBitrateType",
			"type": "options",
			"default": "band",
			"description": "Minimum bitrate can be set to either 'band' or 'ssid'. Defaults to band.",
			"options": [
				{
					"name": "Band",
					"value": "band"
				},
				{
					"name": "Ssid",
					"value": "ssid"
				}
			],
			"routing": {
				"send": {
					"property": "minBitrateType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Create Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the new profile. Must be unique. This param is required on creation.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Create Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Two Four Ghz Settings",
			"name": "twoFourGhzSettings",
			"type": "json",
			"default": "{\n  \"validAutoChannels\": [\n    null\n  ]\n}",
			"description": "Settings related to 2.4Ghz band",
			"routing": {
				"send": {
					"property": "twoFourGhzSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Create Network Wireless Rf Profile"
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
						"Radio Settings"
					],
					"operation": [
						"Create Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networks/{networkId}/wireless/rfProfiles/{rfProfileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Delete Network Wireless Rf Profile"
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
						"Radio Settings"
					],
					"operation": [
						"Delete Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Rf Profile ID",
			"name": "rfProfileId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Delete Network Wireless Rf Profile"
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
						"Radio Settings"
					],
					"operation": [
						"Delete Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/wireless/rfProfiles/{rfProfileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Get Network Wireless Rf Profile"
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
						"Radio Settings"
					],
					"operation": [
						"Get Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Rf Profile ID",
			"name": "rfProfileId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Get Network Wireless Rf Profile"
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
						"Radio Settings"
					],
					"operation": [
						"Get Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/wireless/rfProfiles/{rfProfileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Update Network Wireless Rf Profile"
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
						"Radio Settings"
					],
					"operation": [
						"Update Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Rf Profile ID",
			"name": "rfProfileId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Update Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Ap Band Settings",
			"name": "apBandSettings",
			"type": "json",
			"default": "{}",
			"description": "Settings that will be enabled if selectionType is set to 'ap'.",
			"routing": {
				"send": {
					"property": "apBandSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Update Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Band Selection Type",
			"name": "bandSelectionType",
			"type": "options",
			"default": "ap",
			"description": "Band selection can be set to either 'ssid' or 'ap'.",
			"options": [
				{
					"name": "Ap",
					"value": "ap"
				},
				{
					"name": "Ssid",
					"value": "ssid"
				}
			],
			"routing": {
				"send": {
					"property": "bandSelectionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Update Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Client Balancing Enabled",
			"name": "clientBalancingEnabled",
			"type": "boolean",
			"default": true,
			"description": "Steers client to best available access point. Can be either true or false.",
			"routing": {
				"send": {
					"property": "clientBalancingEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Update Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Five Ghz Settings",
			"name": "fiveGhzSettings",
			"type": "json",
			"default": "{\n  \"validAutoChannels\": [\n    null\n  ]\n}",
			"description": "Settings related to 5Ghz band",
			"routing": {
				"send": {
					"property": "fiveGhzSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Update Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Min Bitrate Type",
			"name": "minBitrateType",
			"type": "options",
			"default": "band",
			"description": "Minimum bitrate can be set to either 'band' or 'ssid'.",
			"options": [
				{
					"name": "Band",
					"value": "band"
				},
				{
					"name": "Ssid",
					"value": "ssid"
				}
			],
			"routing": {
				"send": {
					"property": "minBitrateType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Update Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the new profile. Must be unique.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Update Network Wireless Rf Profile"
					]
				}
			}
		},
		{
			"displayName": "Two Four Ghz Settings",
			"name": "twoFourGhzSettings",
			"type": "json",
			"default": "{\n  \"validAutoChannels\": [\n    null\n  ]\n}",
			"description": "Settings related to 2.4Ghz band",
			"routing": {
				"send": {
					"property": "twoFourGhzSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Radio Settings"
					],
					"operation": [
						"Update Network Wireless Rf Profile"
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
						"Radio Settings"
					],
					"operation": [
						"Update Network Wireless Rf Profile"
					]
				}
			}
		},
];
