import type { INodeProperties } from 'n8n-workflow';

export const mvSenseDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MV Sense"
					]
				}
			},
			"options": [
				{
					"name": "Get Device Camera Analytics Live",
					"value": "Get Device Camera Analytics Live",
					"action": "Returns live state from camera of analytics zones",
					"description": "Returns live state from camera of analytics zones",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"serial\"]}}/camera/analytics/live"
						}
					}
				},
				{
					"name": "Get Device Camera Analytics Overview",
					"value": "Get Device Camera Analytics Overview",
					"action": "Returns an overview of aggregate analytics data for a timespan",
					"description": "Returns an overview of aggregate analytics data for a timespan",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"serial\"]}}/camera/analytics/overview"
						}
					}
				},
				{
					"name": "Get Device Camera Analytics Recent",
					"value": "Get Device Camera Analytics Recent",
					"action": "Returns most recent record for analytics zones",
					"description": "Returns most recent record for analytics zones",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"serial\"]}}/camera/analytics/recent"
						}
					}
				},
				{
					"name": "Get Device Camera Analytics Zones",
					"value": "Get Device Camera Analytics Zones",
					"action": "Returns all configured analytic zones for this camera",
					"description": "Returns all configured analytic zones for this camera",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"serial\"]}}/camera/analytics/zones"
						}
					}
				},
				{
					"name": "Get Device Camera Analytics Zone History",
					"value": "Get Device Camera Analytics Zone History",
					"action": "Return historical records for analytic zones",
					"description": "Return historical records for analytic zones",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"serial\"]}}/camera/analytics/zones/{{$parameter[\"zoneId\"]}}/history"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /devices/{serial}/camera/analytics/live",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Live"
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Live"
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Live"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{serial}/camera/analytics/overview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Overview"
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Overview"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 365 days from today.",
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Overview"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 7 days after t0.",
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Overview"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour.",
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Overview"
					]
				}
			}
		},
		{
			"displayName": "Object Type",
			"name": "objectType",
			"description": "[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].",
			"default": "person",
			"type": "options",
			"options": [
				{
					"name": "Person",
					"value": "person"
				},
				{
					"name": "Vehicle",
					"value": "vehicle"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "objectType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Overview"
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{serial}/camera/analytics/recent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Recent"
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Recent"
					]
				}
			}
		},
		{
			"displayName": "Object Type",
			"name": "objectType",
			"description": "[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].",
			"default": "person",
			"type": "options",
			"options": [
				{
					"name": "Person",
					"value": "person"
				},
				{
					"name": "Vehicle",
					"value": "vehicle"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "objectType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Recent"
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Recent"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{serial}/camera/analytics/zones",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Zones"
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Zones"
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Zones"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{serial}/camera/analytics/zones/{zoneId}/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Zone History"
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Zone History"
					]
				}
			}
		},
		{
			"displayName": "Zone ID",
			"name": "zoneId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Zone History"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 365 days from today.",
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Zone History"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 14 hours after t0.",
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Zone History"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour.",
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Zone History"
					]
				}
			}
		},
		{
			"displayName": "Resolution",
			"name": "resolution",
			"description": "The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60.",
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Zone History"
					]
				}
			}
		},
		{
			"displayName": "Object Type",
			"name": "objectType",
			"description": "[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].",
			"default": "person",
			"type": "options",
			"options": [
				{
					"name": "Person",
					"value": "person"
				},
				{
					"name": "Vehicle",
					"value": "vehicle"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "objectType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Zone History"
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
						"MV Sense"
					],
					"operation": [
						"Get Device Camera Analytics Zone History"
					]
				}
			}
		},
];
