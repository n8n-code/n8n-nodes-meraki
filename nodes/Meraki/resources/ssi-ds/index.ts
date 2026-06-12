import type { INodeProperties } from 'n8n-workflow';

export const ssiDsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Device Wireless Status",
					"value": "Get Network Device Wireless Status",
					"action": "Return the SSID statuses of an access point",
					"description": "Return the SSID statuses of an access point",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices/{{$parameter[\"serial\"]}}/wireless/status"
						}
					}
				},
				{
					"name": "Get Network Ssids",
					"value": "Get Network Ssids",
					"action": "List the SSIDs in a network",
					"description": "List the SSIDs in a network. Supports networks with access points or wireless-enabled security appliances and teleworker gateways.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/ssids"
						}
					}
				},
				{
					"name": "Get Network Ssid",
					"value": "Get Network Ssid",
					"action": "Return a single SSID",
					"description": "Return a single SSID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/ssids/{{$parameter[\"number\"]}}"
						}
					}
				},
				{
					"name": "Update Network Ssid",
					"value": "Update Network Ssid",
					"action": "Update the attributes of an SSID",
					"description": "Update the attributes of an SSID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/ssids/{{$parameter[\"number\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/devices/{serial}/wireless/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Get Network Device Wireless Status"
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
						"SSI Ds"
					],
					"operation": [
						"Get Network Device Wireless Status"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Get Network Device Wireless Status"
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
						"SSI Ds"
					],
					"operation": [
						"Get Network Device Wireless Status"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/ssids",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Get Network Ssids"
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
						"SSI Ds"
					],
					"operation": [
						"Get Network Ssids"
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
						"SSI Ds"
					],
					"operation": [
						"Get Network Ssids"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/ssids/{number}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Get Network Ssid"
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
						"SSI Ds"
					],
					"operation": [
						"Get Network Ssid"
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
						"SSI Ds"
					],
					"operation": [
						"Get Network Ssid"
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
						"SSI Ds"
					],
					"operation": [
						"Get Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/ssids/{number}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
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
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
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
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Ap Tags And Vlan Ids",
			"name": "apTagsAndVlanIds",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The list of tags and VLAN IDs used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'",
			"routing": {
				"send": {
					"property": "apTagsAndVlanIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Auth Mode",
			"name": "authMode",
			"type": "options",
			"default": "8021x-google",
			"description": "The association control method for the SSID ('open', 'open-enhanced', 'psk', 'open-with-radius', 'open-with-nac', '8021x-meraki', '8021x-nac', '8021x-radius', '8021x-google', '8021x-localradius', 'ipsk-with-radius' or 'ipsk-without-radius')",
			"options": [
				{
					"name": "8021 X Google",
					"value": "8021x-google"
				},
				{
					"name": "8021 X Localradius",
					"value": "8021x-localradius"
				},
				{
					"name": "8021 X Meraki",
					"value": "8021x-meraki"
				},
				{
					"name": "8021 X Nac",
					"value": "8021x-nac"
				},
				{
					"name": "8021 X Radius",
					"value": "8021x-radius"
				},
				{
					"name": "Ipsk With Radius",
					"value": "ipsk-with-radius"
				},
				{
					"name": "Ipsk Without Radius",
					"value": "ipsk-without-radius"
				},
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Open Enhanced",
					"value": "open-enhanced"
				},
				{
					"name": "Open With Nac",
					"value": "open-with-nac"
				},
				{
					"name": "Open With Radius",
					"value": "open-with-radius"
				},
				{
					"name": "Psk",
					"value": "psk"
				}
			],
			"routing": {
				"send": {
					"property": "authMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Availability Tags",
			"name": "availabilityTags",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Accepts a list of tags for this SSID. If availableOnAllAps is false, then the SSID will only be broadcast by APs with tags matching any of the tags in this list.",
			"routing": {
				"send": {
					"property": "availabilityTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Available On All Aps",
			"name": "availableOnAllAps",
			"type": "boolean",
			"default": true,
			"description": "Boolean indicating whether all APs should broadcast the SSID or if it should be restricted to APs matching any availability tags. Can only be false if the SSID has availability tags.",
			"routing": {
				"send": {
					"property": "availableOnAllAps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Band Selection",
			"name": "bandSelection",
			"type": "string",
			"default": "",
			"description": "The client-serving radio frequencies of this SSID in the default indoor RF profile. ('Dual band operation', '5 GHz band only' or 'Dual band operation with Band Steering')",
			"routing": {
				"send": {
					"property": "bandSelection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Concentrator Network ID",
			"name": "concentratorNetworkId",
			"type": "string",
			"default": "",
			"description": "The concentrator to use when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'.",
			"routing": {
				"send": {
					"property": "concentratorNetworkId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Default Vlan ID",
			"name": "defaultVlanId",
			"type": "number",
			"default": 0,
			"description": "The default VLAN ID used for 'all other APs'. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'",
			"routing": {
				"send": {
					"property": "defaultVlanId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Disassociate Clients On Vpn Failover",
			"name": "disassociateClientsOnVpnFailover",
			"type": "boolean",
			"default": true,
			"description": "Disassociate clients when 'VPN' concentrator failover occurs in order to trigger clients to re-associate and generate new DHCP requests. This param is only valid if ipAssignmentMode is 'VPN'.",
			"routing": {
				"send": {
					"property": "disassociateClientsOnVpnFailover",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Whether or not the SSID is enabled",
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
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Encryption Mode",
			"name": "encryptionMode",
			"type": "options",
			"default": "wep",
			"description": "The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk'",
			"options": [
				{
					"name": "Wep",
					"value": "wep"
				},
				{
					"name": "Wpa",
					"value": "wpa"
				}
			],
			"routing": {
				"send": {
					"property": "encryptionMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Enterprise Admin Access",
			"name": "enterpriseAdminAccess",
			"type": "options",
			"default": "access disabled",
			"description": "Whether or not an SSID is accessible by 'enterprise' administrators ('access disabled' or 'access enabled')",
			"options": [
				{
					"name": "Access Disabled",
					"value": "access disabled"
				},
				{
					"name": "Access Enabled",
					"value": "access enabled"
				}
			],
			"routing": {
				"send": {
					"property": "enterpriseAdminAccess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Ip Assignment Mode",
			"name": "ipAssignmentMode",
			"type": "string",
			"default": "",
			"description": "The client IP assignment mode ('NAT mode', 'Bridge mode', 'Layer 3 roaming', 'Ethernet over GRE', 'Layer 3 roaming with a concentrator' or 'VPN')",
			"routing": {
				"send": {
					"property": "ipAssignmentMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Lan Isolation Enabled",
			"name": "lanIsolationEnabled",
			"type": "boolean",
			"default": true,
			"description": "Boolean indicating whether Layer 2 LAN isolation should be enabled or disabled. Only configurable when ipAssignmentMode is 'Bridge mode'.",
			"routing": {
				"send": {
					"property": "lanIsolationEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Min Bitrate",
			"name": "minBitrate",
			"type": "number",
			"default": 0,
			"description": "The minimum bitrate in Mbps of this SSID in the default indoor RF profile. ('1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54')",
			"routing": {
				"send": {
					"property": "minBitrate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the SSID",
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
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Per Client Bandwidth Limit Down",
			"name": "perClientBandwidthLimitDown",
			"type": "number",
			"default": 0,
			"description": "The download bandwidth limit in Kbps. (0 represents no limit.)",
			"routing": {
				"send": {
					"property": "perClientBandwidthLimitDown",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Per Client Bandwidth Limit Up",
			"name": "perClientBandwidthLimitUp",
			"type": "number",
			"default": 0,
			"description": "The upload bandwidth limit in Kbps. (0 represents no limit.)",
			"routing": {
				"send": {
					"property": "perClientBandwidthLimitUp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Psk",
			"name": "psk",
			"type": "string",
			"default": "",
			"description": "The passkey for the SSID. This param is only valid if the authMode is 'psk'",
			"routing": {
				"send": {
					"property": "psk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Radius Accounting Enabled",
			"name": "radiusAccountingEnabled",
			"type": "boolean",
			"default": true,
			"description": "Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'",
			"routing": {
				"send": {
					"property": "radiusAccountingEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Radius Accounting Servers",
			"name": "radiusAccountingServers",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The RADIUS accounting 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' and radiusAccountingEnabled is 'true'",
			"routing": {
				"send": {
					"property": "radiusAccountingServers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Radius Attribute For Group Policies",
			"name": "radiusAttributeForGroupPolicies",
			"type": "string",
			"default": "",
			"description": "Specify the RADIUS attribute used to look up group policies ('Filter-Id', 'Reply-Message', 'Airespace-ACL-Name' or 'Aruba-User-Role'). Access points must receive this attribute in the RADIUS Access-Accept message",
			"routing": {
				"send": {
					"property": "radiusAttributeForGroupPolicies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Radius Coa Enabled",
			"name": "radiusCoaEnabled",
			"type": "boolean",
			"default": true,
			"description": "If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server.",
			"routing": {
				"send": {
					"property": "radiusCoaEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Radius Failover Policy",
			"name": "radiusFailoverPolicy",
			"type": "options",
			"default": "Allow access",
			"description": "This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable ('Deny access' or 'Allow access')",
			"options": [
				{
					"name": "Allow Access",
					"value": "Allow access"
				},
				{
					"name": "Deny Access",
					"value": "Deny access"
				}
			],
			"routing": {
				"send": {
					"property": "radiusFailoverPolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Radius Load Balancing Policy",
			"name": "radiusLoadBalancingPolicy",
			"type": "options",
			"default": "Round robin",
			"description": "This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts ('Strict priority order' or 'Round robin')",
			"options": [
				{
					"name": "Round Robin",
					"value": "Round robin"
				},
				{
					"name": "Strict Priority Order",
					"value": "Strict priority order"
				}
			],
			"routing": {
				"send": {
					"property": "radiusLoadBalancingPolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Radius Override",
			"name": "radiusOverride",
			"type": "boolean",
			"default": true,
			"description": "If true, the RADIUS response can override VLAN tag. This is not valid when ipAssignmentMode is 'NAT mode'.",
			"routing": {
				"send": {
					"property": "radiusOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Radius Servers",
			"name": "radiusServers",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The RADIUS 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'",
			"routing": {
				"send": {
					"property": "radiusServers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Secondary Concentrator Network ID",
			"name": "secondaryConcentratorNetworkId",
			"type": "string",
			"default": "",
			"description": "The secondary concentrator to use when the ipAssignmentMode is 'VPN'. If configured, the APs will switch to using this concentrator if the primary concentrator is unreachable. This param is optional. ('disabled' represents no secondary concentrator.)",
			"routing": {
				"send": {
					"property": "secondaryConcentratorNetworkId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Splash Page",
			"name": "splashPage",
			"type": "options",
			"default": "Billing",
			"description": "The type of splash page for the SSID ('None', 'Click-through splash page', 'Billing', 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS', 'Password-protected with Active Directory', 'Password-protected with LDAP', 'SMS authentication', 'Systems Manager Sentry', 'Facebook Wi-Fi', 'Google OAuth', 'Sponsored guest', 'Cisco ISE' or 'Google Apps domain'). This attribute is not supported for template children.",
			"options": [
				{
					"name": "Billing",
					"value": "Billing"
				},
				{
					"name": "Cisco ISE",
					"value": "Cisco ISE"
				},
				{
					"name": "Click Through Splash Page",
					"value": "Click-through splash page"
				},
				{
					"name": "Facebook Wi Fi",
					"value": "Facebook Wi-Fi"
				},
				{
					"name": "Google Apps Domain",
					"value": "Google Apps domain"
				},
				{
					"name": "Google O Auth",
					"value": "Google OAuth"
				},
				{
					"name": "None",
					"value": "None"
				},
				{
					"name": "Password Protected With Active Directory",
					"value": "Password-protected with Active Directory"
				},
				{
					"name": "Password Protected With LDAP",
					"value": "Password-protected with LDAP"
				},
				{
					"name": "Password Protected With Meraki RADIUS",
					"value": "Password-protected with Meraki RADIUS"
				},
				{
					"name": "Password Protected With Custom RADIUS",
					"value": "Password-protected with custom RADIUS"
				},
				{
					"name": "SMS Authentication",
					"value": "SMS authentication"
				},
				{
					"name": "Sponsored Guest",
					"value": "Sponsored guest"
				},
				{
					"name": "Systems Manager Sentry",
					"value": "Systems Manager Sentry"
				}
			],
			"routing": {
				"send": {
					"property": "splashPage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Use Vlan Tagging",
			"name": "useVlanTagging",
			"type": "boolean",
			"default": true,
			"description": "Whether or not traffic should be directed to use specific VLANs. This param is only valid if the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'",
			"routing": {
				"send": {
					"property": "useVlanTagging",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Visible",
			"name": "visible",
			"type": "boolean",
			"default": true,
			"description": "Boolean indicating whether APs should advertise or hide this SSID. APs will only broadcast this SSID if set to true",
			"routing": {
				"send": {
					"property": "visible",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Vlan ID",
			"name": "vlanId",
			"type": "number",
			"default": 0,
			"description": "The VLAN ID used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'",
			"routing": {
				"send": {
					"property": "vlanId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Walled Garden Enabled",
			"name": "walledGardenEnabled",
			"type": "boolean",
			"default": true,
			"description": "Allow access to a configurable list of IP ranges, which users may access prior to sign-on.",
			"routing": {
				"send": {
					"property": "walledGardenEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Walled Garden Ranges",
			"name": "walledGardenRanges",
			"type": "string",
			"default": "",
			"description": "Specify your walled garden by entering space-separated addresses, ranges using CIDR notation, domain names, and domain wildcards (e.g. 192.168.1.1/24 192.168.37.10/32 www.yahoo.com *.google.com). Meraki's splash page is automatically included in your walled garden.",
			"routing": {
				"send": {
					"property": "walledGardenRanges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
		{
			"displayName": "Wpa Encryption Mode",
			"name": "wpaEncryptionMode",
			"type": "options",
			"default": "WPA1 and WPA2",
			"description": "The types of WPA encryption. ('WPA1 only', 'WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode' or 'WPA3 only')",
			"options": [
				{
					"name": "WPA 1 And WPA 2",
					"value": "WPA1 and WPA2"
				},
				{
					"name": "WPA 1 Only",
					"value": "WPA1 only"
				},
				{
					"name": "WPA 2 Only",
					"value": "WPA2 only"
				},
				{
					"name": "WPA 3 Transition Mode",
					"value": "WPA3 Transition Mode"
				},
				{
					"name": "WPA 3 Only",
					"value": "WPA3 only"
				}
			],
			"routing": {
				"send": {
					"property": "wpaEncryptionMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
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
						"SSI Ds"
					],
					"operation": [
						"Update Network Ssid"
					]
				}
			}
		},
];
