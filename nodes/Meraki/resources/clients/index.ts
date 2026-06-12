import type { INodeProperties } from 'n8n-workflow';

export const clientsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					]
				}
			},
			"options": [
				{
					"name": "Get Device Clients",
					"value": "Get Device Clients",
					"action": "List the clients of a device, up to a maximum of a month ago",
					"description": "List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"serial\"]}}/clients"
						}
					}
				},
				{
					"name": "Get Network Clients",
					"value": "Get Network Clients",
					"action": "List the clients that have used this network in the timespan",
					"description": "List the clients that have used this network in the timespan",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients"
						}
					}
				},
				{
					"name": "Provision Network Clients",
					"value": "Provision Network Clients",
					"action": "Provisions a client with a name and policy",
					"description": "Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients/provision"
						}
					}
				},
				{
					"name": "Get Network Client",
					"value": "Get Network Client",
					"action": "Return the client associated with the given identifier",
					"description": "Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients/{{$parameter[\"clientId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Client Events",
					"value": "Get Network Client Events",
					"action": "Return the events associated with this client",
					"description": "Return the events associated with this client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients/{{$parameter[\"clientId\"]}}/events"
						}
					}
				},
				{
					"name": "Get Network Client Latency History",
					"value": "Get Network Client Latency History",
					"action": "Return the latency history for a client",
					"description": "Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients/{{$parameter[\"clientId\"]}}/latencyHistory"
						}
					}
				},
				{
					"name": "Get Network Client Policy",
					"value": "Get Network Client Policy",
					"action": "Return the policy assigned to a client on the network",
					"description": "Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients/{{$parameter[\"clientId\"]}}/policy"
						}
					}
				},
				{
					"name": "Update Network Client Policy",
					"value": "Update Network Client Policy",
					"action": "Update the policy assigned to a client on the network",
					"description": "Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients/{{$parameter[\"clientId\"]}}/policy"
						}
					}
				},
				{
					"name": "Get Network Client Splash Authorization Status",
					"value": "Get Network Client Splash Authorization Status",
					"action": "Return the splash authorization for a client, for each SSID they've associated with through splash",
					"description": "Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients/{{$parameter[\"clientId\"]}}/splashAuthorizationStatus"
						}
					}
				},
				{
					"name": "Update Network Client Splash Authorization Status",
					"value": "Update Network Client Splash Authorization Status",
					"action": "Update a client's splash authorization",
					"description": "Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients/{{$parameter[\"clientId\"]}}/splashAuthorizationStatus"
						}
					}
				},
				{
					"name": "Get Network Client Usage History",
					"value": "Get Network Client Usage History",
					"action": "Return the client's daily usage history",
					"description": "Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients/{{$parameter[\"clientId\"]}}/usageHistory"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /devices/{serial}/clients",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Device Clients"
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
						"Clients"
					],
					"operation": [
						"Get Device Clients"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 31 days from today.",
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
						"Clients"
					],
					"operation": [
						"Get Device Clients"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.",
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
						"Clients"
					],
					"operation": [
						"Get Device Clients"
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
						"Clients"
					],
					"operation": [
						"Get Device Clients"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/clients",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Clients"
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
						"Clients"
					],
					"operation": [
						"Get Network Clients"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 31 days from today.",
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
						"Clients"
					],
					"operation": [
						"Get Network Clients"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.",
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
						"Clients"
					],
					"operation": [
						"Get Network Clients"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "perPage",
			"description": "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.",
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
						"Clients"
					],
					"operation": [
						"Get Network Clients"
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
						"Clients"
					],
					"operation": [
						"Get Network Clients"
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
						"Clients"
					],
					"operation": [
						"Get Network Clients"
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
						"Clients"
					],
					"operation": [
						"Get Network Clients"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/clients/provision",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Provision Network Clients"
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
						"Clients"
					],
					"operation": [
						"Provision Network Clients"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Device Policy",
			"name": "devicePolicy",
			"type": "options",
			"default": "Allowed",
			"description": "The policy to apply to the specified client. Can be 'Group policy', 'Whitelisted', 'Allowed', 'Blocked', 'Per connection' or 'Normal'. Required.",
			"options": [
				{
					"name": "Allowed",
					"value": "Allowed"
				},
				{
					"name": "Blocked",
					"value": "Blocked"
				},
				{
					"name": "Group Policy",
					"value": "Group policy"
				},
				{
					"name": "Normal",
					"value": "Normal"
				},
				{
					"name": "Per Connection",
					"value": "Per connection"
				},
				{
					"name": "Whitelisted",
					"value": "Whitelisted"
				}
			],
			"routing": {
				"send": {
					"property": "devicePolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Provision Network Clients"
					]
				}
			}
		},
		{
			"displayName": "Group Policy ID",
			"name": "groupPolicyId",
			"type": "string",
			"default": "",
			"description": "The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to \"Group policy\". Otherwise this is ignored.",
			"routing": {
				"send": {
					"property": "groupPolicyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Provision Network Clients"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Mac",
			"name": "mac",
			"type": "string",
			"default": "",
			"description": "The MAC address of the client. Required.",
			"routing": {
				"send": {
					"property": "mac",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Provision Network Clients"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The display name for the client. Optional. Limited to 255 bytes.",
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
						"Clients"
					],
					"operation": [
						"Provision Network Clients"
					]
				}
			}
		},
		{
			"displayName": "Policies By Security Appliance",
			"name": "policiesBySecurityAppliance",
			"type": "json",
			"default": "{}",
			"description": "An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)",
			"routing": {
				"send": {
					"property": "policiesBySecurityAppliance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Provision Network Clients"
					]
				}
			}
		},
		{
			"displayName": "Policies By Ssid",
			"name": "policiesBySsid",
			"type": "json",
			"default": "{\n  \"0\": {},\n  \"1\": {},\n  \"2\": {},\n  \"3\": {},\n  \"4\": {},\n  \"5\": {},\n  \"6\": {},\n  \"7\": {},\n  \"8\": {},\n  \"9\": {},\n  \"10\": {},\n  \"11\": {},\n  \"12\": {},\n  \"13\": {},\n  \"14\": {}\n}",
			"description": "An object, describing the policy-connection associations for each active SSID within the network. Keys should be the number of enabled SSIDs, mapping to an object describing the client's policy",
			"routing": {
				"send": {
					"property": "policiesBySsid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Provision Network Clients"
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
						"Clients"
					],
					"operation": [
						"Provision Network Clients"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/clients/{clientId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Client"
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
						"Clients"
					],
					"operation": [
						"Get Network Client"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Client"
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
						"Clients"
					],
					"operation": [
						"Get Network Client"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/clients/{clientId}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Client Events"
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
						"Clients"
					],
					"operation": [
						"Get Network Client Events"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Client Events"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "perPage",
			"description": "The number of entries per page returned. Acceptable range is 3 - 100. Default is 100.",
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
						"Clients"
					],
					"operation": [
						"Get Network Client Events"
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
						"Clients"
					],
					"operation": [
						"Get Network Client Events"
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
						"Clients"
					],
					"operation": [
						"Get Network Client Events"
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
						"Clients"
					],
					"operation": [
						"Get Network Client Events"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/clients/{clientId}/latencyHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Client Latency History"
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
						"Clients"
					],
					"operation": [
						"Get Network Client Latency History"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Client Latency History"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 791 days from today.",
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
						"Clients"
					],
					"operation": [
						"Get Network Client Latency History"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 791 days after t0.",
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
						"Clients"
					],
					"operation": [
						"Get Network Client Latency History"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day.",
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
						"Clients"
					],
					"operation": [
						"Get Network Client Latency History"
					]
				}
			}
		},
		{
			"displayName": "Resolution",
			"name": "resolution",
			"description": "The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "resolution",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Client Latency History"
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
						"Clients"
					],
					"operation": [
						"Get Network Client Latency History"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/clients/{clientId}/policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Client Policy"
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
						"Clients"
					],
					"operation": [
						"Get Network Client Policy"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Client Policy"
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
						"Clients"
					],
					"operation": [
						"Get Network Client Policy"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/clients/{clientId}/policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Update Network Client Policy"
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
						"Clients"
					],
					"operation": [
						"Update Network Client Policy"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Update Network Client Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Device Policy",
			"name": "devicePolicy",
			"type": "string",
			"default": "",
			"description": "The policy to assign. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
			"routing": {
				"send": {
					"property": "devicePolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Update Network Client Policy"
					]
				}
			}
		},
		{
			"displayName": "Group Policy ID",
			"name": "groupPolicyId",
			"type": "string",
			"default": "",
			"description": "[optional] If 'devicePolicy' is set to 'Group policy' this param is used to specify the group policy ID.",
			"routing": {
				"send": {
					"property": "groupPolicyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Update Network Client Policy"
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
						"Clients"
					],
					"operation": [
						"Update Network Client Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Client Splash Authorization Status"
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
						"Clients"
					],
					"operation": [
						"Get Network Client Splash Authorization Status"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Client Splash Authorization Status"
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
						"Clients"
					],
					"operation": [
						"Get Network Client Splash Authorization Status"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Update Network Client Splash Authorization Status"
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
						"Clients"
					],
					"operation": [
						"Update Network Client Splash Authorization Status"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Update Network Client Splash Authorization Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ssids",
			"name": "ssids",
			"type": "json",
			"default": "{\n  \"0\": {},\n  \"1\": {},\n  \"2\": {},\n  \"3\": {},\n  \"4\": {},\n  \"5\": {},\n  \"6\": {},\n  \"7\": {},\n  \"8\": {},\n  \"9\": {},\n  \"10\": {},\n  \"11\": {},\n  \"12\": {},\n  \"13\": {},\n  \"14\": {}\n}",
			"description": "The target SSIDs. Each SSID must be enabled and must have Click-through splash enabled. For each SSID where isAuthorized is true, the expiration time will automatically be set according to the SSID's splash frequency. Not all networks support configuring all SSIDs",
			"routing": {
				"send": {
					"property": "ssids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Update Network Client Splash Authorization Status"
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
						"Clients"
					],
					"operation": [
						"Update Network Client Splash Authorization Status"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/clients/{clientId}/usageHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Client Usage History"
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
						"Clients"
					],
					"operation": [
						"Get Network Client Usage History"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Clients"
					],
					"operation": [
						"Get Network Client Usage History"
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
						"Clients"
					],
					"operation": [
						"Get Network Client Usage History"
					]
				}
			}
		},
];
