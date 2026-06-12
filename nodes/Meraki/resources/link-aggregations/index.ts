import type { INodeProperties } from 'n8n-workflow';

export const linkAggregationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Link Aggregations"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Switch Link Aggregations",
					"value": "Get Network Switch Link Aggregations",
					"action": "List link aggregation groups",
					"description": "List link aggregation groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/linkAggregations"
						}
					}
				},
				{
					"name": "Create Network Switch Link Aggregation",
					"value": "Create Network Switch Link Aggregation",
					"action": "Create a link aggregation group",
					"description": "Create a link aggregation group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/linkAggregations"
						}
					}
				},
				{
					"name": "Delete Network Switch Link Aggregation",
					"value": "Delete Network Switch Link Aggregation",
					"action": "Split a link aggregation group into separate ports",
					"description": "Split a link aggregation group into separate ports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/linkAggregations/{{$parameter[\"linkAggregationId\"]}}"
						}
					}
				},
				{
					"name": "Update Network Switch Link Aggregation",
					"value": "Update Network Switch Link Aggregation",
					"action": "Update a link aggregation group",
					"description": "Update a link aggregation group",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switch/linkAggregations/{{$parameter[\"linkAggregationId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/switch/linkAggregations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Link Aggregations"
					],
					"operation": [
						"Get Network Switch Link Aggregations"
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
						"Link Aggregations"
					],
					"operation": [
						"Get Network Switch Link Aggregations"
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
						"Link Aggregations"
					],
					"operation": [
						"Get Network Switch Link Aggregations"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/switch/linkAggregations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Link Aggregations"
					],
					"operation": [
						"Create Network Switch Link Aggregation"
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
						"Link Aggregations"
					],
					"operation": [
						"Create Network Switch Link Aggregation"
					]
				}
			}
		},
		{
			"displayName": "Switch Ports",
			"name": "switchPorts",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Array of switch or stack ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.",
			"routing": {
				"send": {
					"property": "switchPorts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Link Aggregations"
					],
					"operation": [
						"Create Network Switch Link Aggregation"
					]
				}
			}
		},
		{
			"displayName": "Switch Profile Ports",
			"name": "switchProfilePorts",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Array of switch profile ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.",
			"routing": {
				"send": {
					"property": "switchProfilePorts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Link Aggregations"
					],
					"operation": [
						"Create Network Switch Link Aggregation"
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
						"Link Aggregations"
					],
					"operation": [
						"Create Network Switch Link Aggregation"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networks/{networkId}/switch/linkAggregations/{linkAggregationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Link Aggregations"
					],
					"operation": [
						"Delete Network Switch Link Aggregation"
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
						"Link Aggregations"
					],
					"operation": [
						"Delete Network Switch Link Aggregation"
					]
				}
			}
		},
		{
			"displayName": "Link Aggregation ID",
			"name": "linkAggregationId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Link Aggregations"
					],
					"operation": [
						"Delete Network Switch Link Aggregation"
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
						"Link Aggregations"
					],
					"operation": [
						"Delete Network Switch Link Aggregation"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/switch/linkAggregations/{linkAggregationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Link Aggregations"
					],
					"operation": [
						"Update Network Switch Link Aggregation"
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
						"Link Aggregations"
					],
					"operation": [
						"Update Network Switch Link Aggregation"
					]
				}
			}
		},
		{
			"displayName": "Link Aggregation ID",
			"name": "linkAggregationId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Link Aggregations"
					],
					"operation": [
						"Update Network Switch Link Aggregation"
					]
				}
			}
		},
		{
			"displayName": "Switch Ports",
			"name": "switchPorts",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Array of switch or stack ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported.",
			"routing": {
				"send": {
					"property": "switchPorts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Link Aggregations"
					],
					"operation": [
						"Update Network Switch Link Aggregation"
					]
				}
			}
		},
		{
			"displayName": "Switch Profile Ports",
			"name": "switchProfilePorts",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Array of switch profile ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported.",
			"routing": {
				"send": {
					"property": "switchProfilePorts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Link Aggregations"
					],
					"operation": [
						"Update Network Switch Link Aggregation"
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
						"Link Aggregations"
					],
					"operation": [
						"Update Network Switch Link Aggregation"
					]
				}
			}
		},
];
