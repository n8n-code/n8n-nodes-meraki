import type { INodeProperties } from 'n8n-workflow';

export const openApiSpecDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Open API Spec"
					]
				}
			},
			"options": [
				{
					"name": "Get Organization Openapi Spec",
					"value": "Get Organization Openapi Spec",
					"action": "Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON",
					"description": "Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/openapiSpec"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationId}/openapiSpec",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Open API Spec"
					],
					"operation": [
						"Get Organization Openapi Spec"
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
						"Open API Spec"
					],
					"operation": [
						"Get Organization Openapi Spec"
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
						"Open API Spec"
					],
					"operation": [
						"Get Organization Openapi Spec"
					]
				}
			}
		},
];
