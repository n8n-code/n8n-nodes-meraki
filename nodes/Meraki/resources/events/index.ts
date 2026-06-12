import type { INodeProperties } from 'n8n-workflow';

export const eventsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Events",
					"value": "Get Network Events",
					"action": "List the events for the network",
					"description": "List the events for the network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/events"
						}
					}
				},
				{
					"name": "Get Network Events Event Types",
					"value": "Get Network Events Event Types",
					"action": "List the event type to human-readable description",
					"description": "List the event type to human-readable description",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/events/eventTypes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Get Network Events"
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
						"Events"
					],
					"operation": [
						"Get Network Events"
					]
				}
			}
		},
		{
			"displayName": "Product Type",
			"name": "productType",
			"description": "The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and environmental",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "productType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Get Network Events"
					]
				}
			}
		},
		{
			"displayName": "Included Event Types",
			"name": "includedEventTypes",
			"description": "A list of event types. The returned events will be filtered to only include events with these types.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "includedEventTypes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Get Network Events"
					]
				}
			}
		},
		{
			"displayName": "Excluded Event Types",
			"name": "excludedEventTypes",
			"description": "A list of event types. The returned events will be filtered to exclude events with these types.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "excludedEventTypes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Get Network Events"
					]
				}
			}
		},
		{
			"displayName": "Device Mac",
			"name": "deviceMac",
			"description": "The MAC address of the Meraki device which the list of events will be filtered with",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "deviceMac",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Get Network Events"
					]
				}
			}
		},
		{
			"displayName": "Device Serial",
			"name": "deviceSerial",
			"description": "The serial of the Meraki device which the list of events will be filtered with",
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
						"Events"
					],
					"operation": [
						"Get Network Events"
					]
				}
			}
		},
		{
			"displayName": "Device Name",
			"name": "deviceName",
			"description": "The name of the Meraki device which the list of events will be filtered with",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "deviceName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Get Network Events"
					]
				}
			}
		},
		{
			"displayName": "Client Ip",
			"name": "clientIp",
			"description": "The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "clientIp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Get Network Events"
					]
				}
			}
		},
		{
			"displayName": "Client Mac",
			"name": "clientMac",
			"description": "The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "clientMac",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Get Network Events"
					]
				}
			}
		},
		{
			"displayName": "Client Name",
			"name": "clientName",
			"description": "The name, or partial name, of the client which the list of events will be filtered with",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "clientName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Get Network Events"
					]
				}
			}
		},
		{
			"displayName": "Sm Device Mac",
			"name": "smDeviceMac",
			"description": "The MAC address of the Systems Manager device which the list of events will be filtered with",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "smDeviceMac",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Get Network Events"
					]
				}
			}
		},
		{
			"displayName": "Sm Device Name",
			"name": "smDeviceName",
			"description": "The name of the Systems Manager device which the list of events will be filtered with",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "smDeviceName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Get Network Events"
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
						"Events"
					],
					"operation": [
						"Get Network Events"
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
						"Events"
					],
					"operation": [
						"Get Network Events"
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
						"Events"
					],
					"operation": [
						"Get Network Events"
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
						"Events"
					],
					"operation": [
						"Get Network Events"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/events/eventTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Get Network Events Event Types"
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
						"Events"
					],
					"operation": [
						"Get Network Events Event Types"
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
						"Events"
					],
					"operation": [
						"Get Network Events Event Types"
					]
				}
			}
		},
];
