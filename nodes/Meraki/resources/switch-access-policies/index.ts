import type { INodeProperties } from 'n8n-workflow';

export const switchAccessPoliciesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Access Policies"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Access Policies",
					"value": "Get Network Access Policies",
					"action": "List the access policies for this network",
					"description": "List the access policies for this network. Only valid for MS networks.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/accessPolicies"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/accessPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Access Policies"
					],
					"operation": [
						"Get Network Access Policies"
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
						"Switch Access Policies"
					],
					"operation": [
						"Get Network Access Policies"
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
						"Switch Access Policies"
					],
					"operation": [
						"Get Network Access Policies"
					]
				}
			}
		},
];
