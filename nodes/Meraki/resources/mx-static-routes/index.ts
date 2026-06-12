import type { INodeProperties } from 'n8n-workflow';

export const mxStaticRoutesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Static Routes",
					"value": "Get Network Static Routes",
					"action": "List the static routes for an MX or teleworker network",
					"description": "List the static routes for an MX or teleworker network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/staticRoutes"
						}
					}
				},
				{
					"name": "Create Network Static Route",
					"value": "Create Network Static Route",
					"action": "Add a static route for an MX or teleworker network",
					"description": "Add a static route for an MX or teleworker network",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/staticRoutes"
						}
					}
				},
				{
					"name": "Delete Network Static Route",
					"value": "Delete Network Static Route",
					"action": "Delete a static route from an MX or teleworker network",
					"description": "Delete a static route from an MX or teleworker network",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/staticRoutes/{{$parameter[\"staticRouteId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Static Route",
					"value": "Get Network Static Route",
					"action": "Return a static route for an MX or teleworker network",
					"description": "Return a static route for an MX or teleworker network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/staticRoutes/{{$parameter[\"staticRouteId\"]}}"
						}
					}
				},
				{
					"name": "Update Network Static Route",
					"value": "Update Network Static Route",
					"action": "Update a static route for an MX or teleworker network",
					"description": "Update a static route for an MX or teleworker network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/staticRoutes/{{$parameter[\"staticRouteId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/staticRoutes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Get Network Static Routes"
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
						"MX Static Routes"
					],
					"operation": [
						"Get Network Static Routes"
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
						"MX Static Routes"
					],
					"operation": [
						"Get Network Static Routes"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/staticRoutes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Create Network Static Route"
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
						"MX Static Routes"
					],
					"operation": [
						"Create Network Static Route"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Gateway Ip",
			"name": "gatewayIp",
			"type": "string",
			"default": "",
			"description": "The gateway IP (next hop) of the static route",
			"routing": {
				"send": {
					"property": "gatewayIp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Create Network Static Route"
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
			"description": "The name of the new static route",
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
						"MX Static Routes"
					],
					"operation": [
						"Create Network Static Route"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subnet",
			"name": "subnet",
			"type": "string",
			"default": "",
			"description": "The subnet of the static route",
			"routing": {
				"send": {
					"property": "subnet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Create Network Static Route"
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
						"MX Static Routes"
					],
					"operation": [
						"Create Network Static Route"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networks/{networkId}/staticRoutes/{staticRouteId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Delete Network Static Route"
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
						"MX Static Routes"
					],
					"operation": [
						"Delete Network Static Route"
					]
				}
			}
		},
		{
			"displayName": "Static Route ID",
			"name": "staticRouteId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Delete Network Static Route"
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
						"MX Static Routes"
					],
					"operation": [
						"Delete Network Static Route"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/staticRoutes/{staticRouteId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Get Network Static Route"
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
						"MX Static Routes"
					],
					"operation": [
						"Get Network Static Route"
					]
				}
			}
		},
		{
			"displayName": "Static Route ID",
			"name": "staticRouteId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Get Network Static Route"
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
						"MX Static Routes"
					],
					"operation": [
						"Get Network Static Route"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/staticRoutes/{staticRouteId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Update Network Static Route"
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
						"MX Static Routes"
					],
					"operation": [
						"Update Network Static Route"
					]
				}
			}
		},
		{
			"displayName": "Static Route ID",
			"name": "staticRouteId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Update Network Static Route"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "The enabled state of the static route",
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
						"MX Static Routes"
					],
					"operation": [
						"Update Network Static Route"
					]
				}
			}
		},
		{
			"displayName": "Fixed Ip Assignments",
			"name": "fixedIpAssignments",
			"type": "json",
			"default": "{}",
			"description": "The DHCP fixed IP assignments on the static route. This should be an object that contains mappings from MAC addresses to objects that themselves each contain \"ip\" and \"name\" string fields. See the sample request/response for more details.",
			"routing": {
				"send": {
					"property": "fixedIpAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Update Network Static Route"
					]
				}
			}
		},
		{
			"displayName": "Gateway Ip",
			"name": "gatewayIp",
			"type": "string",
			"default": "",
			"description": "The gateway IP (next hop) of the static route",
			"routing": {
				"send": {
					"property": "gatewayIp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Update Network Static Route"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the static route",
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
						"MX Static Routes"
					],
					"operation": [
						"Update Network Static Route"
					]
				}
			}
		},
		{
			"displayName": "Reserved Ip Ranges",
			"name": "reservedIpRanges",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The DHCP reserved IP ranges on the static route",
			"routing": {
				"send": {
					"property": "reservedIpRanges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Update Network Static Route"
					]
				}
			}
		},
		{
			"displayName": "Subnet",
			"name": "subnet",
			"type": "string",
			"default": "",
			"description": "The subnet of the static route",
			"routing": {
				"send": {
					"property": "subnet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MX Static Routes"
					],
					"operation": [
						"Update Network Static Route"
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
						"MX Static Routes"
					],
					"operation": [
						"Update Network Static Route"
					]
				}
			}
		},
];
