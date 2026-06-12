import type { INodeProperties } from 'n8n-workflow';

export const licensesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					]
				}
			},
			"options": [
				{
					"name": "Get Organization License State",
					"value": "Get Organization License State",
					"action": "Return an overview of the license state for an organization",
					"description": "Return an overview of the license state for an organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/licenseState"
						}
					}
				},
				{
					"name": "Get Organization Licenses",
					"value": "Get Organization Licenses",
					"action": "List the licenses for an organization",
					"description": "List the licenses for an organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/licenses"
						}
					}
				},
				{
					"name": "Assign Organization Licenses Seats",
					"value": "Assign Organization Licenses Seats",
					"action": "Assign SM seats to a network",
					"description": "Assign SM seats to a network. This will increase the managed SM device limit of the network",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/licenses/assignSeats"
						}
					}
				},
				{
					"name": "Move Organization Licenses Seats",
					"value": "Move Organization Licenses Seats",
					"action": "Move SM seats to another organization",
					"description": "Move SM seats to another organization",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/licenses/moveSeats"
						}
					}
				},
				{
					"name": "Renew Organization Licenses Seats",
					"value": "Renew Organization Licenses Seats",
					"action": "Renew SM seats of a license",
					"description": "Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/licenses/renewSeats"
						}
					}
				},
				{
					"name": "Get Organization License",
					"value": "Get Organization License",
					"action": "Display a license",
					"description": "Display a license",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/licenses/{{$parameter[\"licenseId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationId}/licenseState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Get Organization License State"
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
						"Licenses"
					],
					"operation": [
						"Get Organization License State"
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
						"Licenses"
					],
					"operation": [
						"Get Organization License State"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}/licenses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Get Organization Licenses"
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
						"Licenses"
					],
					"operation": [
						"Get Organization Licenses"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "perPage",
			"description": "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "perPage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Get Organization Licenses"
					]
				}
			}
		},
		{
			"displayName": "Starting After",
			"name": "startingAfter",
			"description": "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startingAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Get Organization Licenses"
					]
				}
			}
		},
		{
			"displayName": "Ending Before",
			"name": "endingBefore",
			"description": "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endingBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Get Organization Licenses"
					]
				}
			}
		},
		{
			"displayName": "Device Serial",
			"name": "deviceSerial",
			"description": "Filter the licenses to those assigned to a particular device",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "deviceSerial",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Get Organization Licenses"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"description": "Filter the licenses to those assigned in a particular network",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "networkId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Get Organization Licenses"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"description": "Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'recentlyQueued', 'unused' or 'unusedActive'",
			"default": "active",
			"type": "options",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Expired",
					"value": "expired"
				},
				{
					"name": "Expiring",
					"value": "expiring"
				},
				{
					"name": "Recently Queued",
					"value": "recentlyQueued"
				},
				{
					"name": "Unused",
					"value": "unused"
				},
				{
					"name": "Unused Active",
					"value": "unusedActive"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Get Organization Licenses"
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
						"Licenses"
					],
					"operation": [
						"Get Organization Licenses"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationId}/licenses/assignSeats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Assign Organization Licenses Seats"
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
						"Licenses"
					],
					"operation": [
						"Assign Organization Licenses Seats"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "License ID",
			"name": "licenseId",
			"type": "string",
			"default": "",
			"description": "The ID of the SM license to assign seats from",
			"routing": {
				"send": {
					"property": "licenseId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Assign Organization Licenses Seats"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Network ID",
			"name": "networkId",
			"type": "string",
			"default": "",
			"description": "The ID of the SM network to assign the seats to",
			"routing": {
				"send": {
					"property": "networkId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Assign Organization Licenses Seats"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Seat Count",
			"name": "seatCount",
			"type": "number",
			"default": 0,
			"description": "The number of seats to assign to the SM network. Must be less than or equal to the total number of seats of the license",
			"routing": {
				"send": {
					"property": "seatCount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Assign Organization Licenses Seats"
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
						"Licenses"
					],
					"operation": [
						"Assign Organization Licenses Seats"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationId}/licenses/moveSeats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Move Organization Licenses Seats"
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
						"Licenses"
					],
					"operation": [
						"Move Organization Licenses Seats"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Dest Organization ID",
			"name": "destOrganizationId",
			"type": "string",
			"default": "",
			"description": "The ID of the organization to move the SM seats to",
			"routing": {
				"send": {
					"property": "destOrganizationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Move Organization Licenses Seats"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "License ID",
			"name": "licenseId",
			"type": "string",
			"default": "",
			"description": "The ID of the SM license to move the seats from",
			"routing": {
				"send": {
					"property": "licenseId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Move Organization Licenses Seats"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Seat Count",
			"name": "seatCount",
			"type": "number",
			"default": 0,
			"description": "The number of seats to move to the new organization. Must be less than or equal to the total number of seats of the license",
			"routing": {
				"send": {
					"property": "seatCount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Move Organization Licenses Seats"
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
						"Licenses"
					],
					"operation": [
						"Move Organization Licenses Seats"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationId}/licenses/renewSeats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Renew Organization Licenses Seats"
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
						"Licenses"
					],
					"operation": [
						"Renew Organization Licenses Seats"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "License ID To Renew",
			"name": "licenseIdToRenew",
			"type": "string",
			"default": "",
			"description": "The ID of the SM license to renew. This license must already be assigned to an SM network",
			"routing": {
				"send": {
					"property": "licenseIdToRenew",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Renew Organization Licenses Seats"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Unused License ID",
			"name": "unusedLicenseId",
			"type": "string",
			"default": "",
			"description": "The SM license to use to renew the seats on 'licenseIdToRenew'. This license must have at least as many seats available as there are seats on 'licenseIdToRenew'",
			"routing": {
				"send": {
					"property": "unusedLicenseId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Renew Organization Licenses Seats"
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
						"Licenses"
					],
					"operation": [
						"Renew Organization Licenses Seats"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}/licenses/{licenseId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Get Organization License"
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
						"Licenses"
					],
					"operation": [
						"Get Organization License"
					]
				}
			}
		},
		{
			"displayName": "License ID",
			"name": "licenseId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"Get Organization License"
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
						"Licenses"
					],
					"operation": [
						"Get Organization License"
					]
				}
			}
		},
];
