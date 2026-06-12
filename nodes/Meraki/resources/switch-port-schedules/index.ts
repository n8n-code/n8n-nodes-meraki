import type { INodeProperties } from 'n8n-workflow';

export const switchPortSchedulesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Port Schedules"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Switch Port Schedules",
					"value": "Get Network Switch Port Schedules",
					"action": "List switch port schedules",
					"description": "List switch port schedules",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/portSchedules"
						}
					}
				},
				{
					"name": "Create Network Switch Port Schedule",
					"value": "Create Network Switch Port Schedule",
					"action": "Add a switch port schedule",
					"description": "Add a switch port schedule",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/portSchedules"
						}
					}
				},
				{
					"name": "Delete Network Switch Port Schedule",
					"value": "Delete Network Switch Port Schedule",
					"action": "Delete a switch port schedule",
					"description": "Delete a switch port schedule",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/portSchedules/{{$parameter[\"portScheduleId\"]}}"
						}
					}
				},
				{
					"name": "Update Network Switch Port Schedule",
					"value": "Update Network Switch Port Schedule",
					"action": "Update a switch port schedule",
					"description": "Update a switch port schedule",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/portSchedules/{{$parameter[\"portScheduleId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/switch/portSchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Port Schedules"
					],
					"operation": [
						"Get Network Switch Port Schedules"
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
						"Switch Port Schedules"
					],
					"operation": [
						"Get Network Switch Port Schedules"
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
						"Switch Port Schedules"
					],
					"operation": [
						"Get Network Switch Port Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/switch/portSchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Port Schedules"
					],
					"operation": [
						"Create Network Switch Port Schedule"
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
						"Switch Port Schedules"
					],
					"operation": [
						"Create Network Switch Port Schedule"
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
			"description": "The name for your port schedule. Required",
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
						"Switch Port Schedules"
					],
					"operation": [
						"Create Network Switch Port Schedule"
					]
				}
			}
		},
		{
			"displayName": "Port Schedule",
			"name": "portSchedule",
			"type": "json",
			"default": "{\n  \"friday\": {},\n  \"monday\": {},\n  \"saturday\": {},\n  \"sunday\": {},\n  \"thursday\": {},\n  \"tuesday\": {},\n  \"wednesday\": {}\n}",
			"description": "    The schedule for switch port scheduling. Schedules are applied to days of the week.\n    When it's empty, default schedule with all days of a week are configured.\n    Any unspecified day in the schedule is added as a default schedule configuration of the day.\n",
			"routing": {
				"send": {
					"property": "portSchedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Port Schedules"
					],
					"operation": [
						"Create Network Switch Port Schedule"
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
						"Switch Port Schedules"
					],
					"operation": [
						"Create Network Switch Port Schedule"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networks/{networkId}/switch/portSchedules/{portScheduleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Port Schedules"
					],
					"operation": [
						"Delete Network Switch Port Schedule"
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
						"Switch Port Schedules"
					],
					"operation": [
						"Delete Network Switch Port Schedule"
					]
				}
			}
		},
		{
			"displayName": "Port Schedule ID",
			"name": "portScheduleId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Port Schedules"
					],
					"operation": [
						"Delete Network Switch Port Schedule"
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
						"Switch Port Schedules"
					],
					"operation": [
						"Delete Network Switch Port Schedule"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/switch/portSchedules/{portScheduleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Port Schedules"
					],
					"operation": [
						"Update Network Switch Port Schedule"
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
						"Switch Port Schedules"
					],
					"operation": [
						"Update Network Switch Port Schedule"
					]
				}
			}
		},
		{
			"displayName": "Port Schedule ID",
			"name": "portScheduleId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Port Schedules"
					],
					"operation": [
						"Update Network Switch Port Schedule"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name for your port schedule.",
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
						"Switch Port Schedules"
					],
					"operation": [
						"Update Network Switch Port Schedule"
					]
				}
			}
		},
		{
			"displayName": "Port Schedule",
			"name": "portSchedule",
			"type": "json",
			"default": "{\n  \"friday\": {},\n  \"monday\": {},\n  \"saturday\": {},\n  \"sunday\": {},\n  \"thursday\": {},\n  \"tuesday\": {},\n  \"wednesday\": {}\n}",
			"description": "    The schedule for switch port scheduling. Schedules are applied to days of the week.\n    When it's empty, default schedule with all days of a week are configured.\n    Any unspecified day in the schedule is added as a default schedule configuration of the day.\n",
			"routing": {
				"send": {
					"property": "portSchedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Port Schedules"
					],
					"operation": [
						"Update Network Switch Port Schedule"
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
						"Switch Port Schedules"
					],
					"operation": [
						"Update Network Switch Port Schedule"
					]
				}
			}
		},
];
