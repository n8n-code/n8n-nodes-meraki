import type { INodeProperties } from 'n8n-workflow';

export const namedTagScopeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Named Tag Scope"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Sm Target Groups",
					"value": "Get Network Sm Target Groups",
					"action": "List the target groups in this network",
					"description": "List the target groups in this network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/targetGroups"
						}
					}
				},
				{
					"name": "Create Network Sm Target Group",
					"value": "Create Network Sm Target Group",
					"action": "Add a target group",
					"description": "Add a target group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/targetGroups"
						}
					}
				},
				{
					"name": "Delete Network Sm Target Group",
					"value": "Delete Network Sm Target Group",
					"action": "Delete a target group from a network",
					"description": "Delete a target group from a network",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/targetGroups/{{$parameter[\"targetGroupId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Sm Target Group",
					"value": "Get Network Sm Target Group",
					"action": "Return a target group",
					"description": "Return a target group",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/targetGroups/{{$parameter[\"targetGroupId\"]}}"
						}
					}
				},
				{
					"name": "Update Network Sm Target Group",
					"value": "Update Network Sm Target Group",
					"action": "Update a target group",
					"description": "Update a target group",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/targetGroups/{{$parameter[\"targetGroupId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/sm/targetGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Named Tag Scope"
					],
					"operation": [
						"Get Network Sm Target Groups"
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
						"Named Tag Scope"
					],
					"operation": [
						"Get Network Sm Target Groups"
					]
				}
			}
		},
		{
			"displayName": "With Details",
			"name": "withDetails",
			"description": "Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "withDetails",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Named Tag Scope"
					],
					"operation": [
						"Get Network Sm Target Groups"
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
						"Named Tag Scope"
					],
					"operation": [
						"Get Network Sm Target Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/sm/targetGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Named Tag Scope"
					],
					"operation": [
						"Create Network Sm Target Group"
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
						"Named Tag Scope"
					],
					"operation": [
						"Create Network Sm Target Group"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of this target group",
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
						"Named Tag Scope"
					],
					"operation": [
						"Create Network Sm Target Group"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "",
			"description": "The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty.",
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Named Tag Scope"
					],
					"operation": [
						"Create Network Sm Target Group"
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
						"Named Tag Scope"
					],
					"operation": [
						"Create Network Sm Target Group"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networks/{networkId}/sm/targetGroups/{targetGroupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Named Tag Scope"
					],
					"operation": [
						"Delete Network Sm Target Group"
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
						"Named Tag Scope"
					],
					"operation": [
						"Delete Network Sm Target Group"
					]
				}
			}
		},
		{
			"displayName": "Target Group ID",
			"name": "targetGroupId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Named Tag Scope"
					],
					"operation": [
						"Delete Network Sm Target Group"
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
						"Named Tag Scope"
					],
					"operation": [
						"Delete Network Sm Target Group"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/targetGroups/{targetGroupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Named Tag Scope"
					],
					"operation": [
						"Get Network Sm Target Group"
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
						"Named Tag Scope"
					],
					"operation": [
						"Get Network Sm Target Group"
					]
				}
			}
		},
		{
			"displayName": "Target Group ID",
			"name": "targetGroupId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Named Tag Scope"
					],
					"operation": [
						"Get Network Sm Target Group"
					]
				}
			}
		},
		{
			"displayName": "With Details",
			"name": "withDetails",
			"description": "Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "withDetails",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Named Tag Scope"
					],
					"operation": [
						"Get Network Sm Target Group"
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
						"Named Tag Scope"
					],
					"operation": [
						"Get Network Sm Target Group"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/sm/targetGroups/{targetGroupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Named Tag Scope"
					],
					"operation": [
						"Update Network Sm Target Group"
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
						"Named Tag Scope"
					],
					"operation": [
						"Update Network Sm Target Group"
					]
				}
			}
		},
		{
			"displayName": "Target Group ID",
			"name": "targetGroupId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Named Tag Scope"
					],
					"operation": [
						"Update Network Sm Target Group"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of this target group",
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
						"Named Tag Scope"
					],
					"operation": [
						"Update Network Sm Target Group"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "",
			"description": "The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty.",
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Named Tag Scope"
					],
					"operation": [
						"Update Network Sm Target Group"
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
						"Named Tag Scope"
					],
					"operation": [
						"Update Network Sm Target Group"
					]
				}
			}
		},
];
