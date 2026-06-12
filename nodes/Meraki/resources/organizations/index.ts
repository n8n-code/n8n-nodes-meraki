import type { INodeProperties } from 'n8n-workflow';

export const organizationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					]
				}
			},
			"options": [
				{
					"name": "Get Organizations",
					"value": "Get Organizations",
					"action": "List the organizations that the user has privileges on",
					"description": "List the organizations that the user has privileges on",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations"
						}
					}
				},
				{
					"name": "Get Organization",
					"value": "Get Organization",
					"action": "Return an organization",
					"description": "Return an organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}"
						}
					}
				},
				{
					"name": "Claim Into Organization",
					"value": "Claim Into Organization",
					"action": "Claim a list of devices, licenses, and/or orders into an organization",
					"description": "Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/claim"
						}
					}
				},
				{
					"name": "Clone Organization",
					"value": "Clone Organization",
					"action": "Create a new organization by cloning the addressed organization",
					"description": "Create a new organization by cloning the addressed organization",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/clone"
						}
					}
				},
				{
					"name": "Get Organization Device Statuses",
					"value": "Get Organization Device Statuses",
					"action": "List the status of every Meraki device in the organization",
					"description": "List the status of every Meraki device in the organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Get Organization Inventory",
					"value": "Get Organization Inventory",
					"action": "Return the inventory for an organization",
					"description": "Return the inventory for an organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/inventory"
						}
					}
				},
				{
					"name": "Get Organization Third Party VPN Peers",
					"value": "Get Organization Third Party VPN Peers",
					"action": "Return the third party VPN peers for an organization",
					"description": "Return the third party VPN peers for an organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/thirdPartyVPNPeers"
						}
					}
				},
				{
					"name": "Update Organization Third Party VPN Peers",
					"value": "Update Organization Third Party VPN Peers",
					"action": "Update the third party VPN peers for an organization",
					"description": "Update the third party VPN peers for an organization",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/thirdPartyVPNPeers"
						}
					}
				},
				{
					"name": "Get Organization Uplinks Loss And Latency",
					"value": "Get Organization Uplinks Loss And Latency",
					"action": "Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago",
					"description": "Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/uplinksLossAndLatency"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organizations"
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
						"Organizations"
					],
					"operation": [
						"Get Organizations"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organization"
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
						"Organizations"
					],
					"operation": [
						"Get Organization"
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
						"Organizations"
					],
					"operation": [
						"Get Organization"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationId}/claim",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Claim Into Organization"
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
						"Organizations"
					],
					"operation": [
						"Claim Into Organization"
					]
				}
			}
		},
		{
			"displayName": "Licenses",
			"name": "licenses",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The licenses that should be claimed",
			"routing": {
				"send": {
					"property": "licenses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Claim Into Organization"
					]
				}
			}
		},
		{
			"displayName": "Orders",
			"name": "orders",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The numbers of the orders that should be claimed",
			"routing": {
				"send": {
					"property": "orders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Claim Into Organization"
					]
				}
			}
		},
		{
			"displayName": "Serials",
			"name": "serials",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The serials of the devices that should be claimed",
			"routing": {
				"send": {
					"property": "serials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Claim Into Organization"
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
						"Organizations"
					],
					"operation": [
						"Claim Into Organization"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationId}/clone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Clone Organization"
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
						"Organizations"
					],
					"operation": [
						"Clone Organization"
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
			"description": "The name of the new organization",
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
						"Organizations"
					],
					"operation": [
						"Clone Organization"
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
						"Organizations"
					],
					"operation": [
						"Clone Organization"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organization Device Statuses"
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
						"Organizations"
					],
					"operation": [
						"Get Organization Device Statuses"
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
						"Organizations"
					],
					"operation": [
						"Get Organization Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}/inventory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organization Inventory"
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
						"Organizations"
					],
					"operation": [
						"Get Organization Inventory"
					]
				}
			}
		},
		{
			"displayName": "Include License Info",
			"name": "includeLicenseInfo",
			"description": "When this parameter is true, each entity in the response will include the license expiration date of the device (if any). Only applies to organizations that are on the per-device licensing model. Defaults to false.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeLicenseInfo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organization Inventory"
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
						"Organizations"
					],
					"operation": [
						"Get Organization Inventory"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}/thirdPartyVPNPeers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organization Third Party VPN Peers"
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
						"Organizations"
					],
					"operation": [
						"Get Organization Third Party VPN Peers"
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
						"Organizations"
					],
					"operation": [
						"Get Organization Third Party VPN Peers"
					]
				}
			}
		},
		{
			"displayName": "PUT /organizations/{organizationId}/thirdPartyVPNPeers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Third Party VPN Peers"
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
						"Organizations"
					],
					"operation": [
						"Update Organization Third Party VPN Peers"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Peers",
			"name": "peers",
			"type": "json",
			"default": "[\n  {\n    \"ikeVersion\": \"1\",\n    \"ipsecPolicies\": {\n      \"childAuthAlgo\": [\n        null\n      ],\n      \"childCipherAlgo\": [\n        null\n      ],\n      \"childPfsGroup\": [\n        null\n      ],\n      \"ikeAuthAlgo\": [\n        null\n      ],\n      \"ikeCipherAlgo\": [\n        null\n      ],\n      \"ikeDiffieHellmanGroup\": [\n        null\n      ],\n      \"ikePrfAlgo\": [\n        null\n      ]\n    },\n    \"networkTags\": [\n      null\n    ],\n    \"privateSubnets\": [\n      null\n    ]\n  }\n]",
			"description": "The list of VPN peers",
			"routing": {
				"send": {
					"property": "peers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Third Party VPN Peers"
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
						"Organizations"
					],
					"operation": [
						"Update Organization Third Party VPN Peers"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}/uplinksLossAndLatency",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organization Uplinks Loss And Latency"
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
						"Organizations"
					],
					"operation": [
						"Get Organization Uplinks Loss And Latency"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 60 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organization Uplinks Loss And Latency"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organization Uplinks Loss And Latency"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organization Uplinks Loss And Latency"
					]
				}
			}
		},
		{
			"displayName": "Uplink",
			"name": "uplink",
			"description": "Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks.",
			"default": "cellular",
			"type": "options",
			"options": [
				{
					"name": "Cellular",
					"value": "cellular"
				},
				{
					"name": "Wan 1",
					"value": "wan1"
				},
				{
					"name": "Wan 2",
					"value": "wan2"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "uplink",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organization Uplinks Loss And Latency"
					]
				}
			}
		},
		{
			"displayName": "Ip",
			"name": "ip",
			"description": "Optional filter for a specific destination IP. Default will return all destination IPs.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organization Uplinks Loss And Latency"
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
						"Organizations"
					],
					"operation": [
						"Get Organization Uplinks Loss And Latency"
					]
				}
			}
		},
];
