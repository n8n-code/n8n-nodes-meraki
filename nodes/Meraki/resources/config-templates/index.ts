import type { INodeProperties } from 'n8n-workflow';

export const configTemplatesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Config Templates"
					]
				}
			},
			"options": [
				{
					"name": "Get Organization Config Templates",
					"value": "Get Organization Config Templates",
					"action": "List the configuration templates for this organization",
					"description": "List the configuration templates for this organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/configTemplates"
						}
					}
				},
				{
					"name": "Delete Organization Config Template",
					"value": "Delete Organization Config Template",
					"action": "Remove a configuration template",
					"description": "Remove a configuration template",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/configTemplates/{{$parameter[\"configTemplateId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationId}/configTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Config Templates"
					],
					"operation": [
						"Get Organization Config Templates"
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
						"Config Templates"
					],
					"operation": [
						"Get Organization Config Templates"
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
						"Config Templates"
					],
					"operation": [
						"Get Organization Config Templates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organizations/{organizationId}/configTemplates/{configTemplateId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Config Templates"
					],
					"operation": [
						"Delete Organization Config Template"
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
						"Config Templates"
					],
					"operation": [
						"Delete Organization Config Template"
					]
				}
			}
		},
		{
			"displayName": "Config Template ID",
			"name": "configTemplateId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Config Templates"
					],
					"operation": [
						"Delete Organization Config Template"
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
						"Config Templates"
					],
					"operation": [
						"Delete Organization Config Template"
					]
				}
			}
		},
];
