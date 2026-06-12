import type { INodeProperties } from 'n8n-workflow';

export const contentFilteringRulesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Content Filtering Rules"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Content Filtering",
					"value": "Get Network Content Filtering",
					"action": "Return the content filtering settings for an MX network",
					"description": "Return the content filtering settings for an MX network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/contentFiltering"
						}
					}
				},
				{
					"name": "Update Network Content Filtering",
					"value": "Update Network Content Filtering",
					"action": "Update the content filtering settings for an MX network",
					"description": "Update the content filtering settings for an MX network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/contentFiltering"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/contentFiltering",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Content Filtering Rules"
					],
					"operation": [
						"Get Network Content Filtering"
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
						"Content Filtering Rules"
					],
					"operation": [
						"Get Network Content Filtering"
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
						"Content Filtering Rules"
					],
					"operation": [
						"Get Network Content Filtering"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/contentFiltering",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Content Filtering Rules"
					],
					"operation": [
						"Update Network Content Filtering"
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
						"Content Filtering Rules"
					],
					"operation": [
						"Update Network Content Filtering"
					]
				}
			}
		},
		{
			"displayName": "Allowed URL Patterns",
			"name": "allowedUrlPatterns",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of URL patterns that are allowed",
			"routing": {
				"send": {
					"property": "allowedUrlPatterns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Content Filtering Rules"
					],
					"operation": [
						"Update Network Content Filtering"
					]
				}
			}
		},
		{
			"displayName": "Blocked URL Categories",
			"name": "blockedUrlCategories",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of URL categories to block",
			"routing": {
				"send": {
					"property": "blockedUrlCategories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Content Filtering Rules"
					],
					"operation": [
						"Update Network Content Filtering"
					]
				}
			}
		},
		{
			"displayName": "Blocked URL Patterns",
			"name": "blockedUrlPatterns",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of URL patterns that are blocked",
			"routing": {
				"send": {
					"property": "blockedUrlPatterns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Content Filtering Rules"
					],
					"operation": [
						"Update Network Content Filtering"
					]
				}
			}
		},
		{
			"displayName": "URL Category List Size",
			"name": "urlCategoryListSize",
			"type": "options",
			"default": "fullList",
			"description": "URL category list size which is either 'topSites' or 'fullList'",
			"options": [
				{
					"name": "Full List",
					"value": "fullList"
				},
				{
					"name": "Top Sites",
					"value": "topSites"
				}
			],
			"routing": {
				"send": {
					"property": "urlCategoryListSize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Content Filtering Rules"
					],
					"operation": [
						"Update Network Content Filtering"
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
						"Content Filtering Rules"
					],
					"operation": [
						"Update Network Content Filtering"
					]
				}
			}
		},
];
