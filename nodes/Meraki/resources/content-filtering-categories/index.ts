import type { INodeProperties } from 'n8n-workflow';

export const contentFilteringCategoriesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Content Filtering Categories"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Content Filtering Categories",
					"value": "Get Network Content Filtering Categories",
					"action": "List all available content filtering categories for an MX network",
					"description": "List all available content filtering categories for an MX network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/contentFiltering/categories"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/contentFiltering/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Content Filtering Categories"
					],
					"operation": [
						"Get Network Content Filtering Categories"
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
						"Content Filtering Categories"
					],
					"operation": [
						"Get Network Content Filtering Categories"
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
						"Content Filtering Categories"
					],
					"operation": [
						"Get Network Content Filtering Categories"
					]
				}
			}
		},
];
