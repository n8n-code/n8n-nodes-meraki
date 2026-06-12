import type { INodeProperties } from 'n8n-workflow';

export const actionBatchesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Action Batches"
					]
				}
			},
			"options": [
				{
					"name": "Get Organization Action Batches",
					"value": "Get Organization Action Batches",
					"action": "Return the list of action batches in the organization",
					"description": "Return the list of action batches in the organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/actionBatches"
						}
					}
				},
				{
					"name": "Create Organization Action Batch",
					"value": "Create Organization Action Batch",
					"action": "Create an action batch",
					"description": "Create an action batch",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/actionBatches"
						}
					}
				},
				{
					"name": "Delete Organization Action Batch",
					"value": "Delete Organization Action Batch",
					"action": "Delete an action batch",
					"description": "Delete an action batch",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/actionBatches/{{$parameter[\"actionBatchId\"]}}"
						}
					}
				},
				{
					"name": "Update Organization Action Batch",
					"value": "Update Organization Action Batch",
					"action": "Update an action batch",
					"description": "Update an action batch",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/actionBatches/{{$parameter[\"actionBatchId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationId}/actionBatches",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Action Batches"
					],
					"operation": [
						"Get Organization Action Batches"
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
						"Action Batches"
					],
					"operation": [
						"Get Organization Action Batches"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Filter batches by status. Valid types are pending, completed, and failed.",
			"default": "completed",
			"type": "options",
			"options": [
				{
					"name": "Completed",
					"value": "completed"
				},
				{
					"name": "Failed",
					"value": "failed"
				},
				{
					"name": "Pending",
					"value": "pending"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Action Batches"
					],
					"operation": [
						"Get Organization Action Batches"
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
						"Action Batches"
					],
					"operation": [
						"Get Organization Action Batches"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationId}/actionBatches",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Action Batches"
					],
					"operation": [
						"Create Organization Action Batch"
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
						"Action Batches"
					],
					"operation": [
						"Create Organization Action Batch"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Actions",
			"name": "actions",
			"type": "json",
			"default": "[\n  {\n    \"body\": {}\n  }\n]",
			"description": "A set of changes to make as part of this action (<a href='https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/'>more details</a>)",
			"routing": {
				"send": {
					"property": "actions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Action Batches"
					],
					"operation": [
						"Create Organization Action Batch"
					]
				}
			}
		},
		{
			"displayName": "Confirmed",
			"name": "confirmed",
			"type": "boolean",
			"default": true,
			"description": "Set to true for immediate execution. Set to false if the action should be previewed before executing. This property cannot be unset once it is true. Defaults to false.",
			"routing": {
				"send": {
					"property": "confirmed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Action Batches"
					],
					"operation": [
						"Create Organization Action Batch"
					]
				}
			}
		},
		{
			"displayName": "Synchronous",
			"name": "synchronous",
			"type": "boolean",
			"default": true,
			"description": "Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. Defaults to false.",
			"routing": {
				"send": {
					"property": "synchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Action Batches"
					],
					"operation": [
						"Create Organization Action Batch"
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
						"Action Batches"
					],
					"operation": [
						"Create Organization Action Batch"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organizations/{organizationId}/actionBatches/{actionBatchId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Action Batches"
					],
					"operation": [
						"Delete Organization Action Batch"
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
						"Action Batches"
					],
					"operation": [
						"Delete Organization Action Batch"
					]
				}
			}
		},
		{
			"displayName": "Action Batch ID",
			"name": "actionBatchId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Action Batches"
					],
					"operation": [
						"Delete Organization Action Batch"
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
						"Action Batches"
					],
					"operation": [
						"Delete Organization Action Batch"
					]
				}
			}
		},
		{
			"displayName": "PUT /organizations/{organizationId}/actionBatches/{actionBatchId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Action Batches"
					],
					"operation": [
						"Update Organization Action Batch"
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
						"Action Batches"
					],
					"operation": [
						"Update Organization Action Batch"
					]
				}
			}
		},
		{
			"displayName": "Action Batch ID",
			"name": "actionBatchId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Action Batches"
					],
					"operation": [
						"Update Organization Action Batch"
					]
				}
			}
		},
		{
			"displayName": "Confirmed",
			"name": "confirmed",
			"type": "boolean",
			"default": true,
			"description": "A boolean representing whether or not the batch has been confirmed. This property cannot be unset once it is true.",
			"routing": {
				"send": {
					"property": "confirmed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Action Batches"
					],
					"operation": [
						"Update Organization Action Batch"
					]
				}
			}
		},
		{
			"displayName": "Synchronous",
			"name": "synchronous",
			"type": "boolean",
			"default": true,
			"description": "Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch.",
			"routing": {
				"send": {
					"property": "synchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Action Batches"
					],
					"operation": [
						"Update Organization Action Batch"
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
						"Action Batches"
					],
					"operation": [
						"Update Organization Action Batch"
					]
				}
			}
		},
];
