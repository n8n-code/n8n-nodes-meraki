import type { INodeProperties } from 'n8n-workflow';

export const switchPortsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Ports"
					]
				}
			},
			"options": [
				{
					"name": "Get Device Switch Port Statuses",
					"value": "Get Device Switch Port Statuses",
					"action": "Return the status for all the ports of a switch",
					"description": "Return the status for all the ports of a switch",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"serial\"]}}/switchPortStatuses"
						}
					}
				},
				{
					"name": "Get Device Switch Port Statuses Packets",
					"value": "Get Device Switch Port Statuses Packets",
					"action": "Return the packet counters for all the ports of a switch",
					"description": "Return the packet counters for all the ports of a switch",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"serial\"]}}/switchPortStatuses/packets"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /devices/{serial}/switchPortStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Ports"
					],
					"operation": [
						"Get Device Switch Port Statuses"
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
						"Switch Ports"
					],
					"operation": [
						"Get Device Switch Port Statuses"
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
						"Switch Ports"
					],
					"operation": [
						"Get Device Switch Port Statuses"
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
						"Switch Ports"
					],
					"operation": [
						"Get Device Switch Port Statuses"
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
						"Switch Ports"
					],
					"operation": [
						"Get Device Switch Port Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{serial}/switchPortStatuses/packets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Ports"
					],
					"operation": [
						"Get Device Switch Port Statuses Packets"
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
						"Switch Ports"
					],
					"operation": [
						"Get Device Switch Port Statuses Packets"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 1 day from today.",
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
						"Switch Ports"
					],
					"operation": [
						"Get Device Switch Port Statuses Packets"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day.",
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
						"Switch Ports"
					],
					"operation": [
						"Get Device Switch Port Statuses Packets"
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
						"Switch Ports"
					],
					"operation": [
						"Get Device Switch Port Statuses Packets"
					]
				}
			}
		},
];
