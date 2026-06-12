import type { INodeProperties } from 'n8n-workflow';

export const intrusionSettingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Intrusion Settings"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Security Intrusion Settings",
					"value": "Get Network Security Intrusion Settings",
					"action": "Returns all supported intrusion settings for an MX network",
					"description": "Returns all supported intrusion settings for an MX network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/security/intrusionSettings"
						}
					}
				},
				{
					"name": "Update Network Security Intrusion Settings",
					"value": "Update Network Security Intrusion Settings",
					"action": "Set the supported intrusion settings for an MX network",
					"description": "Set the supported intrusion settings for an MX network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/security/intrusionSettings"
						}
					}
				},
				{
					"name": "Get Organization Security Intrusion Settings",
					"value": "Get Organization Security Intrusion Settings",
					"action": "Returns all supported intrusion settings for an organization",
					"description": "Returns all supported intrusion settings for an organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/security/intrusionSettings"
						}
					}
				},
				{
					"name": "Update Organization Security Intrusion Settings",
					"value": "Update Organization Security Intrusion Settings",
					"action": "Sets supported intrusion settings for an organization",
					"description": "Sets supported intrusion settings for an organization",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/security/intrusionSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/security/intrusionSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Intrusion Settings"
					],
					"operation": [
						"Get Network Security Intrusion Settings"
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
						"Intrusion Settings"
					],
					"operation": [
						"Get Network Security Intrusion Settings"
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
						"Intrusion Settings"
					],
					"operation": [
						"Get Network Security Intrusion Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/security/intrusionSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Intrusion Settings"
					],
					"operation": [
						"Update Network Security Intrusion Settings"
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
						"Intrusion Settings"
					],
					"operation": [
						"Update Network Security Intrusion Settings"
					]
				}
			}
		},
		{
			"displayName": "Ids Rulesets",
			"name": "idsRulesets",
			"type": "options",
			"default": "balanced",
			"description": "Set the detection ruleset 'connectivity'/'balanced'/'security' (optional - omitting will leave current config unchanged). Default value is 'balanced' if none currently saved",
			"options": [
				{
					"name": "Balanced",
					"value": "balanced"
				},
				{
					"name": "Connectivity",
					"value": "connectivity"
				},
				{
					"name": "Security",
					"value": "security"
				}
			],
			"routing": {
				"send": {
					"property": "idsRulesets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Intrusion Settings"
					],
					"operation": [
						"Update Network Security Intrusion Settings"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "detection",
			"description": "Set mode to 'disabled'/'detection'/'prevention' (optional - omitting will leave current config unchanged)",
			"options": [
				{
					"name": "Detection",
					"value": "detection"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Prevention",
					"value": "prevention"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Intrusion Settings"
					],
					"operation": [
						"Update Network Security Intrusion Settings"
					]
				}
			}
		},
		{
			"displayName": "Protected Networks",
			"name": "protectedNetworks",
			"type": "json",
			"default": "{\n  \"excludedCidr\": [\n    null\n  ],\n  \"includedCidr\": [\n    null\n  ]\n}",
			"description": "Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode",
			"routing": {
				"send": {
					"property": "protectedNetworks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Intrusion Settings"
					],
					"operation": [
						"Update Network Security Intrusion Settings"
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
						"Intrusion Settings"
					],
					"operation": [
						"Update Network Security Intrusion Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}/security/intrusionSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Intrusion Settings"
					],
					"operation": [
						"Get Organization Security Intrusion Settings"
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
						"Intrusion Settings"
					],
					"operation": [
						"Get Organization Security Intrusion Settings"
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
						"Intrusion Settings"
					],
					"operation": [
						"Get Organization Security Intrusion Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /organizations/{organizationId}/security/intrusionSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Intrusion Settings"
					],
					"operation": [
						"Update Organization Security Intrusion Settings"
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
						"Intrusion Settings"
					],
					"operation": [
						"Update Organization Security Intrusion Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Whitelisted Rules",
			"name": "whitelistedRules",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Sets a list of specific SNORT signatures to allow",
			"routing": {
				"send": {
					"property": "whitelistedRules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Intrusion Settings"
					],
					"operation": [
						"Update Organization Security Intrusion Settings"
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
						"Intrusion Settings"
					],
					"operation": [
						"Update Organization Security Intrusion Settings"
					]
				}
			}
		},
];
