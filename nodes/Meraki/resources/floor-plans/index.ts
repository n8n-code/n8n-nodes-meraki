import type { INodeProperties } from 'n8n-workflow';

export const floorPlansDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Floor Plans",
					"value": "Get Network Floor Plans",
					"action": "List the floor plans that belong to your network",
					"description": "List the floor plans that belong to your network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/floorPlans"
						}
					}
				},
				{
					"name": "Create Network Floor Plan",
					"value": "Create Network Floor Plan",
					"action": "Upload a floor plan",
					"description": "Upload a floor plan",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/floorPlans"
						}
					}
				},
				{
					"name": "Delete Network Floor Plan",
					"value": "Delete Network Floor Plan",
					"action": "Destroy a floor plan",
					"description": "Destroy a floor plan",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/floorPlans/{{$parameter[\"floorPlanId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Floor Plan",
					"value": "Get Network Floor Plan",
					"action": "Find a floor plan by ID",
					"description": "Find a floor plan by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/floorPlans/{{$parameter[\"floorPlanId\"]}}"
						}
					}
				},
				{
					"name": "Update Network Floor Plan",
					"value": "Update Network Floor Plan",
					"action": "Update a floor plan's geolocation and other meta data",
					"description": "Update a floor plan's geolocation and other meta data",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/floorPlans/{{$parameter[\"floorPlanId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/floorPlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Get Network Floor Plans"
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
						"Floor Plans"
					],
					"operation": [
						"Get Network Floor Plans"
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
						"Floor Plans"
					],
					"operation": [
						"Get Network Floor Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/floorPlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Create Network Floor Plan"
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
						"Floor Plans"
					],
					"operation": [
						"Create Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Bottom Left Corner",
			"name": "bottomLeftCorner",
			"type": "json",
			"default": "{}",
			"description": "The longitude and latitude of the bottom left corner of your floor plan.",
			"routing": {
				"send": {
					"property": "bottomLeftCorner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Create Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Bottom Right Corner",
			"name": "bottomRightCorner",
			"type": "json",
			"default": "{}",
			"description": "The longitude and latitude of the bottom right corner of your floor plan.",
			"routing": {
				"send": {
					"property": "bottomRightCorner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Create Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Center",
			"name": "center",
			"type": "json",
			"default": "{}",
			"description": "The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.",
			"routing": {
				"send": {
					"property": "center",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Create Network Floor Plan"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Image Contents",
			"name": "imageContents",
			"type": "string",
			"default": "",
			"description": "The file contents (a base 64 encoded string) of your image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in.",
			"routing": {
				"send": {
					"property": "imageContents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Create Network Floor Plan"
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
			"description": "The name of your floor plan.",
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
						"Floor Plans"
					],
					"operation": [
						"Create Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Top Left Corner",
			"name": "topLeftCorner",
			"type": "json",
			"default": "{}",
			"description": "The longitude and latitude of the top left corner of your floor plan.",
			"routing": {
				"send": {
					"property": "topLeftCorner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Create Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Top Right Corner",
			"name": "topRightCorner",
			"type": "json",
			"default": "{}",
			"description": "The longitude and latitude of the top right corner of your floor plan.",
			"routing": {
				"send": {
					"property": "topRightCorner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Create Network Floor Plan"
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
						"Floor Plans"
					],
					"operation": [
						"Create Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networks/{networkId}/floorPlans/{floorPlanId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Delete Network Floor Plan"
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
						"Floor Plans"
					],
					"operation": [
						"Delete Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Floor Plan ID",
			"name": "floorPlanId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Delete Network Floor Plan"
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
						"Floor Plans"
					],
					"operation": [
						"Delete Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/floorPlans/{floorPlanId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Get Network Floor Plan"
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
						"Floor Plans"
					],
					"operation": [
						"Get Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Floor Plan ID",
			"name": "floorPlanId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Get Network Floor Plan"
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
						"Floor Plans"
					],
					"operation": [
						"Get Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/floorPlans/{floorPlanId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Update Network Floor Plan"
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
						"Floor Plans"
					],
					"operation": [
						"Update Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Floor Plan ID",
			"name": "floorPlanId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Update Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Bottom Left Corner",
			"name": "bottomLeftCorner",
			"type": "json",
			"default": "{}",
			"description": "The longitude and latitude of the bottom left corner of your floor plan.",
			"routing": {
				"send": {
					"property": "bottomLeftCorner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Update Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Bottom Right Corner",
			"name": "bottomRightCorner",
			"type": "json",
			"default": "{}",
			"description": "The longitude and latitude of the bottom right corner of your floor plan.",
			"routing": {
				"send": {
					"property": "bottomRightCorner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Update Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Center",
			"name": "center",
			"type": "json",
			"default": "{}",
			"description": "The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.",
			"routing": {
				"send": {
					"property": "center",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Update Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Image Contents",
			"name": "imageContents",
			"type": "string",
			"default": "",
			"description": "The file contents (a base 64 encoded string) of your new image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in. If you upload a new image, and you do NOT specify any new geolocation fields ('center, 'topLeftCorner', etc), the floor plan will be recentered with no rotation in order to maintain the aspect ratio of your new image.",
			"routing": {
				"send": {
					"property": "imageContents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Update Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of your floor plan.",
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
						"Floor Plans"
					],
					"operation": [
						"Update Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Top Left Corner",
			"name": "topLeftCorner",
			"type": "json",
			"default": "{}",
			"description": "The longitude and latitude of the top left corner of your floor plan.",
			"routing": {
				"send": {
					"property": "topLeftCorner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Update Network Floor Plan"
					]
				}
			}
		},
		{
			"displayName": "Top Right Corner",
			"name": "topRightCorner",
			"type": "json",
			"default": "{}",
			"description": "The longitude and latitude of the top right corner of your floor plan.",
			"routing": {
				"send": {
					"property": "topRightCorner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floor Plans"
					],
					"operation": [
						"Update Network Floor Plan"
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
						"Floor Plans"
					],
					"operation": [
						"Update Network Floor Plan"
					]
				}
			}
		},
];
