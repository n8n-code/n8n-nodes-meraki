import type { INodeProperties } from 'n8n-workflow';

export const devicesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					]
				}
			},
			"options": [
				{
					"name": "Cycle Device Switch Ports",
					"value": "Cycle Device Switch Ports",
					"action": "Cycle a set of switch ports",
					"description": "Cycle a set of switch ports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/devices/{{$parameter[\"serial\"]}}/switch/ports/cycle"
						}
					}
				},
				{
					"name": "Get Network Devices",
					"value": "Get Network Devices",
					"action": "List the devices in a network",
					"description": "List the devices in a network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices"
						}
					}
				},
				{
					"name": "Claim Network Devices",
					"value": "Claim Network Devices",
					"action": "Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)",
					"description": "Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices/claim"
						}
					}
				},
				{
					"name": "Get Network Device",
					"value": "Get Network Device",
					"action": "Return a single device",
					"description": "Return a single device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices/{{$parameter[\"serial\"]}}"
						}
					}
				},
				{
					"name": "Update Network Device",
					"value": "Update Network Device",
					"action": "Update the attributes of a device",
					"description": "Update the attributes of a device",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices/{{$parameter[\"serial\"]}}"
						}
					}
				},
				{
					"name": "Get Network Device Loss And Latency History",
					"value": "Get Network Device Loss And Latency History",
					"action": "Get the uplink loss percentage and latency in milliseconds for a wired network device.",
					"description": "Get the uplink loss percentage and latency in milliseconds for a wired network device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices/{{$parameter[\"serial\"]}}/lossAndLatencyHistory"
						}
					}
				},
				{
					"name": "Get Network Device Performance",
					"value": "Get Network Device Performance",
					"action": "Return the performance score for a single MX",
					"description": "Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices/{{$parameter[\"serial\"]}}/performance"
						}
					}
				},
				{
					"name": "Reboot Network Device",
					"value": "Reboot Network Device",
					"action": "Reboot a device",
					"description": "Reboot a device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices/{{$parameter[\"serial\"]}}/reboot"
						}
					}
				},
				{
					"name": "Remove Network Device",
					"value": "Remove Network Device",
					"action": "Remove a single device",
					"description": "Remove a single device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices/{{$parameter[\"serial\"]}}/remove"
						}
					}
				},
				{
					"name": "Get Network Device Uplink",
					"value": "Get Network Device Uplink",
					"action": "Return the uplink information for a device.",
					"description": "Return the uplink information for a device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices/{{$parameter[\"serial\"]}}/uplink"
						}
					}
				},
				{
					"name": "Get Organization Devices",
					"value": "Get Organization Devices",
					"action": "List the devices in an organization",
					"description": "List the devices in an organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/devices"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /devices/{serial}/switch/ports/cycle",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Cycle Device Switch Ports"
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
						"Devices"
					],
					"operation": [
						"Cycle Device Switch Ports"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ports",
			"name": "ports",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of switch ports. Example: [1, 2-5, 1_MA-MOD-8X10G_1, 1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8]",
			"routing": {
				"send": {
					"property": "ports",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Cycle Device Switch Ports"
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
						"Devices"
					],
					"operation": [
						"Cycle Device Switch Ports"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Network Devices"
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
						"Devices"
					],
					"operation": [
						"Get Network Devices"
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
						"Devices"
					],
					"operation": [
						"Get Network Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/devices/claim",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Claim Network Devices"
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
						"Devices"
					],
					"operation": [
						"Claim Network Devices"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"type": "string",
			"default": "",
			"description": "[DEPRECATED] The serial of a device to claim",
			"routing": {
				"send": {
					"property": "serial",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Claim Network Devices"
					]
				}
			}
		},
		{
			"displayName": "Serials",
			"name": "serials",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of serials of devices to claim",
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
						"Devices"
					],
					"operation": [
						"Claim Network Devices"
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
						"Devices"
					],
					"operation": [
						"Claim Network Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/devices/{serial}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Network Device"
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
						"Devices"
					],
					"operation": [
						"Get Network Device"
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
						"Devices"
					],
					"operation": [
						"Get Network Device"
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
						"Devices"
					],
					"operation": [
						"Get Network Device"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/devices/{serial}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Update Network Device"
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
						"Devices"
					],
					"operation": [
						"Update Network Device"
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
						"Devices"
					],
					"operation": [
						"Update Network Device"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"description": "The address of a device",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Update Network Device"
					]
				}
			}
		},
		{
			"displayName": "Floor Plan ID",
			"name": "floorPlanId",
			"type": "string",
			"default": "",
			"description": "The floor plan to associate to this device. null disassociates the device from the floorplan.",
			"routing": {
				"send": {
					"property": "floorPlanId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Update Network Device"
					]
				}
			}
		},
		{
			"displayName": "Lat",
			"name": "lat",
			"type": "number",
			"default": 0,
			"description": "The latitude of a device",
			"routing": {
				"send": {
					"property": "lat",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Update Network Device"
					]
				}
			}
		},
		{
			"displayName": "Lng",
			"name": "lng",
			"type": "number",
			"default": 0,
			"description": "The longitude of a device",
			"routing": {
				"send": {
					"property": "lng",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Update Network Device"
					]
				}
			}
		},
		{
			"displayName": "Move Map Marker",
			"name": "moveMapMarker",
			"type": "boolean",
			"default": true,
			"description": "Whether or not to set the latitude and longitude of a device based on the new address. Only applies when lat and lng are not specified.",
			"routing": {
				"send": {
					"property": "moveMapMarker",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Update Network Device"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of a device",
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
						"Devices"
					],
					"operation": [
						"Update Network Device"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "string",
			"default": "",
			"description": "The notes for the device. String. Limited to 255 characters.",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Update Network Device"
					]
				}
			}
		},
		{
			"displayName": "Switch Profile ID",
			"name": "switchProfileId",
			"type": "string",
			"default": "",
			"description": "The ID of a switch profile to bind to the device (for available switch profiles, see the 'Switch Profiles' endpoint). Use null to unbind the switch device from the current profile. For a device to be bindable to a switch profile, it must (1) be a switch, and (2) belong to a network that is bound to a configuration template.",
			"routing": {
				"send": {
					"property": "switchProfileId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Update Network Device"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "string",
			"default": "",
			"description": "The tags of a device",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Update Network Device"
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
						"Devices"
					],
					"operation": [
						"Update Network Device"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/devices/{serial}/lossAndLatencyHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Network Device Loss And Latency History"
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
						"Devices"
					],
					"operation": [
						"Get Network Device Loss And Latency History"
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
						"Devices"
					],
					"operation": [
						"Get Network Device Loss And Latency History"
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
						"Devices"
					],
					"operation": [
						"Get Network Device Loss And Latency History"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 31 days after t0.",
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
						"Devices"
					],
					"operation": [
						"Get Network Device Loss And Latency History"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.",
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
						"Devices"
					],
					"operation": [
						"Get Network Device Loss And Latency History"
					]
				}
			}
		},
		{
			"displayName": "Resolution",
			"name": "resolution",
			"description": "The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60.",
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
						"Devices"
					],
					"operation": [
						"Get Network Device Loss And Latency History"
					]
				}
			}
		},
		{
			"displayName": "Uplink",
			"name": "uplink",
			"description": "The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1.",
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
						"Devices"
					],
					"operation": [
						"Get Network Device Loss And Latency History"
					]
				}
			}
		},
		{
			"displayName": "Ip",
			"name": "ip",
			"required": true,
			"description": "The destination IP used to obtain the requested stats. This is required.",
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
						"Devices"
					],
					"operation": [
						"Get Network Device Loss And Latency History"
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
						"Devices"
					],
					"operation": [
						"Get Network Device Loss And Latency History"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/devices/{serial}/performance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Network Device Performance"
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
						"Devices"
					],
					"operation": [
						"Get Network Device Performance"
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
						"Devices"
					],
					"operation": [
						"Get Network Device Performance"
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
						"Devices"
					],
					"operation": [
						"Get Network Device Performance"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/devices/{serial}/reboot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Reboot Network Device"
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
						"Devices"
					],
					"operation": [
						"Reboot Network Device"
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
						"Devices"
					],
					"operation": [
						"Reboot Network Device"
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
						"Devices"
					],
					"operation": [
						"Reboot Network Device"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/devices/{serial}/remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Remove Network Device"
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
						"Devices"
					],
					"operation": [
						"Remove Network Device"
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
						"Devices"
					],
					"operation": [
						"Remove Network Device"
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
						"Devices"
					],
					"operation": [
						"Remove Network Device"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/devices/{serial}/uplink",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Network Device Uplink"
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
						"Devices"
					],
					"operation": [
						"Get Network Device Uplink"
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
						"Devices"
					],
					"operation": [
						"Get Network Device Uplink"
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
						"Devices"
					],
					"operation": [
						"Get Network Device Uplink"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}/devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Organization Devices"
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
						"Devices"
					],
					"operation": [
						"Get Organization Devices"
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
						"Devices"
					],
					"operation": [
						"Get Organization Devices"
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
						"Devices"
					],
					"operation": [
						"Get Organization Devices"
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
						"Devices"
					],
					"operation": [
						"Get Organization Devices"
					]
				}
			}
		},
		{
			"displayName": "Configuration Updated After",
			"name": "configurationUpdatedAfter",
			"description": "Filter results by whether or not the device's configuration has been updated after the given timestamp",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "configurationUpdatedAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Organization Devices"
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
						"Devices"
					],
					"operation": [
						"Get Organization Devices"
					]
				}
			}
		},
];
