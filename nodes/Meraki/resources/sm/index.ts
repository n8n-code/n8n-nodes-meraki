import type { INodeProperties } from 'n8n-workflow';

export const smDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					]
				}
			},
			"options": [
				{
					"name": "Create Network Sm Bypass Activation Lock Attempt",
					"value": "Create Network Sm Bypass Activation Lock Attempt",
					"action": "Bypass activation lock attempt",
					"description": "Bypass activation lock attempt",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/bypassActivationLockAttempts"
						}
					}
				},
				{
					"name": "Get Network Sm Bypass Activation Lock Attempt",
					"value": "Get Network Sm Bypass Activation Lock Attempt",
					"action": "Bypass activation lock attempt status",
					"description": "Bypass activation lock attempt status",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/bypassActivationLockAttempts/{{$parameter[\"attemptId\"]}}"
						}
					}
				},
				{
					"name": "Update Network Sm Device Fields",
					"value": "Update Network Sm Device Fields",
					"action": "Modify the fields of a device",
					"description": "Modify the fields of a device",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/device/fields"
						}
					}
				},
				{
					"name": "Wipe Network Sm Device",
					"value": "Wipe Network Sm Device",
					"action": "Wipe a device",
					"description": "Wipe a device",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/device/wipe"
						}
					}
				},
				{
					"name": "Refresh Network Sm Device Details",
					"value": "Refresh Network Sm Device Details",
					"action": "Refresh the details of a device",
					"description": "Refresh the details of a device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/device/{{$parameter[\"deviceId\"]}}/refreshDetails"
						}
					}
				},
				{
					"name": "Get Network Sm Devices",
					"value": "Get Network Sm Devices",
					"action": "List the devices enrolled in an SM network with various specified fields and filters",
					"description": "List the devices enrolled in an SM network with various specified fields and filters",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/devices"
						}
					}
				},
				{
					"name": "Checkin Network Sm Devices",
					"value": "Checkin Network Sm Devices",
					"action": "Force check-in a set of devices",
					"description": "Force check-in a set of devices",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/devices/checkin"
						}
					}
				},
				{
					"name": "Update Network Sm Devices Tags",
					"value": "Update Network Sm Devices Tags",
					"action": "Add, delete, or update the tags of a set of devices",
					"description": "Add, delete, or update the tags of a set of devices",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/devices/tags"
						}
					}
				},
				{
					"name": "Unenroll Network Sm Device",
					"value": "Unenroll Network Sm Device",
					"action": "Unenroll a device",
					"description": "Unenroll a device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/devices/{{$parameter[\"deviceId\"]}}/unenroll"
						}
					}
				},
				{
					"name": "Get Network Sm Profiles",
					"value": "Get Network Sm Profiles",
					"action": "List all the profiles in the network",
					"description": "List all the profiles in the network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/profiles"
						}
					}
				},
				{
					"name": "Get Network Sm User Device Profiles",
					"value": "Get Network Sm User Device Profiles",
					"action": "Get the profiles associated with a user",
					"description": "Get the profiles associated with a user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/user/{{$parameter[\"userId\"]}}/deviceProfiles"
						}
					}
				},
				{
					"name": "Get Network Sm User Softwares",
					"value": "Get Network Sm User Softwares",
					"action": "Get a list of softwares associated with a user",
					"description": "Get a list of softwares associated with a user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/user/{{$parameter[\"userId\"]}}/softwares"
						}
					}
				},
				{
					"name": "Get Network Sm Users",
					"value": "Get Network Sm Users",
					"action": "List the owners in an SM network with various specified fields and filters",
					"description": "List the owners in an SM network with various specified fields and filters",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/users"
						}
					}
				},
				{
					"name": "Get Network Sm Cellular Usage History",
					"value": "Get Network Sm Cellular Usage History",
					"action": "Return the client's daily cellular data usage history",
					"description": "Return the client's daily cellular data usage history. Usage data is in kilobytes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/{{$parameter[\"deviceId\"]}}/cellularUsageHistory"
						}
					}
				},
				{
					"name": "Get Network Sm Certs",
					"value": "Get Network Sm Certs",
					"action": "List the certs on a device",
					"description": "List the certs on a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/{{$parameter[\"deviceId\"]}}/certs"
						}
					}
				},
				{
					"name": "Get Network Sm Device Profiles",
					"value": "Get Network Sm Device Profiles",
					"action": "Get the profiles associated with a device",
					"description": "Get the profiles associated with a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/{{$parameter[\"deviceId\"]}}/deviceProfiles"
						}
					}
				},
				{
					"name": "Get Network Sm Network Adapters",
					"value": "Get Network Sm Network Adapters",
					"action": "List the network adapters of a device",
					"description": "List the network adapters of a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/{{$parameter[\"deviceId\"]}}/networkAdapters"
						}
					}
				},
				{
					"name": "Get Network Sm Restrictions",
					"value": "Get Network Sm Restrictions",
					"action": "List the restrictions on a device",
					"description": "List the restrictions on a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/{{$parameter[\"deviceId\"]}}/restrictions"
						}
					}
				},
				{
					"name": "Get Network Sm Security Centers",
					"value": "Get Network Sm Security Centers",
					"action": "List the security centers on a device",
					"description": "List the security centers on a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/{{$parameter[\"deviceId\"]}}/securityCenters"
						}
					}
				},
				{
					"name": "Get Network Sm Softwares",
					"value": "Get Network Sm Softwares",
					"action": "Get a list of softwares associated with a device",
					"description": "Get a list of softwares associated with a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/{{$parameter[\"deviceId\"]}}/softwares"
						}
					}
				},
				{
					"name": "Get Network Sm Wlan Lists",
					"value": "Get Network Sm Wlan Lists",
					"action": "List the saved SSID names on a device",
					"description": "List the saved SSID names on a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/sm/{{$parameter[\"deviceId\"]}}/wlanLists"
						}
					}
				},
				{
					"name": "Lock Network Sm Devices",
					"value": "Lock Network Sm Devices",
					"action": "Lock a set of devices",
					"description": "Lock a set of devices",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"network_id\"]}}/sm/devices/lock"
						}
					}
				},
				{
					"name": "Get Network Sm Connectivity",
					"value": "Get Network Sm Connectivity",
					"action": "Returns historical connectivity data (whether a device is regularly checking in to Dashboard).",
					"description": "Returns historical connectivity data (whether a device is regularly checking in to Dashboard).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"network_id\"]}}/sm/{{$parameter[\"id\"]}}/connectivity"
						}
					}
				},
				{
					"name": "Get Network Sm Desktop Logs",
					"value": "Get Network Sm Desktop Logs",
					"action": "Return historical records of various Systems Manager network connection details for desktop devices.",
					"description": "Return historical records of various Systems Manager network connection details for desktop devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"network_id\"]}}/sm/{{$parameter[\"id\"]}}/desktopLogs"
						}
					}
				},
				{
					"name": "Get Network Sm Device Command Logs",
					"value": "Get Network Sm Device Command Logs",
					"action": "Return historical records of commands sent to Systems Manager devices",
					"description": "Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"network_id\"]}}/sm/{{$parameter[\"id\"]}}/deviceCommandLogs"
						}
					}
				},
				{
					"name": "Get Network Sm Performance History",
					"value": "Get Network Sm Performance History",
					"action": "Return historical records of various Systems Manager client metrics for desktop devices.",
					"description": "Return historical records of various Systems Manager client metrics for desktop devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"network_id\"]}}/sm/{{$parameter[\"id\"]}}/performanceHistory"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /networks/{networkId}/sm/bypassActivationLockAttempts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Create Network Sm Bypass Activation Lock Attempt"
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
						"SM"
					],
					"operation": [
						"Create Network Sm Bypass Activation Lock Attempt"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The ids of the devices to attempt activation lock bypass.",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Create Network Sm Bypass Activation Lock Attempt"
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
						"SM"
					],
					"operation": [
						"Create Network Sm Bypass Activation Lock Attempt"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Bypass Activation Lock Attempt"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Bypass Activation Lock Attempt"
					]
				}
			}
		},
		{
			"displayName": "Attempt ID",
			"name": "attemptId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Bypass Activation Lock Attempt"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Bypass Activation Lock Attempt"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/sm/device/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Update Network Sm Device Fields"
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
						"SM"
					],
					"operation": [
						"Update Network Sm Device Fields"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Device Fields",
			"name": "deviceFields",
			"type": "json",
			"default": "{}",
			"description": "The new fields of the device. Each field of this object is optional.",
			"routing": {
				"send": {
					"property": "deviceFields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Update Network Sm Device Fields"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "The id of the device to be modified.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Update Network Sm Device Fields"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"type": "string",
			"default": "",
			"description": "The serial of the device to be modified.",
			"routing": {
				"send": {
					"property": "serial",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Update Network Sm Device Fields"
					]
				}
			}
		},
		{
			"displayName": "Wifi Mac",
			"name": "wifiMac",
			"type": "string",
			"default": "",
			"description": "The wifiMac of the device to be modified.",
			"routing": {
				"send": {
					"property": "wifiMac",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Update Network Sm Device Fields"
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
						"SM"
					],
					"operation": [
						"Update Network Sm Device Fields"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/sm/device/wipe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Wipe Network Sm Device"
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
						"SM"
					],
					"operation": [
						"Wipe Network Sm Device"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "The id of the device to be wiped.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Wipe Network Sm Device"
					]
				}
			}
		},
		{
			"displayName": "Pin",
			"name": "pin",
			"type": "number",
			"default": 0,
			"description": "The pin number (a six digit value) for wiping a macOS device. Required only for macOS devices.",
			"routing": {
				"send": {
					"property": "pin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Wipe Network Sm Device"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"type": "string",
			"default": "",
			"description": "The serial of the device to be wiped.",
			"routing": {
				"send": {
					"property": "serial",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Wipe Network Sm Device"
					]
				}
			}
		},
		{
			"displayName": "Wifi Mac",
			"name": "wifiMac",
			"type": "string",
			"default": "",
			"description": "The wifiMac of the device to be wiped.",
			"routing": {
				"send": {
					"property": "wifiMac",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Wipe Network Sm Device"
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
						"SM"
					],
					"operation": [
						"Wipe Network Sm Device"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/sm/device/{deviceId}/refreshDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Refresh Network Sm Device Details"
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
						"SM"
					],
					"operation": [
						"Refresh Network Sm Device Details"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "deviceId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Refresh Network Sm Device Details"
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
						"SM"
					],
					"operation": [
						"Refresh Network Sm Device Details"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Devices"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Additional fields that will be displayed for each device. Multiple fields can be passed in as comma separated values.\n    The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,\n    systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,\n    ownerEmail, ownerUsername, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,\n    simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,\n    isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,\n    hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, and androidSecurityPatchVersion.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Wifi Macs",
			"name": "wifiMacs",
			"description": "Filter devices by wifi mac(s). Multiple wifi macs can be passed in as comma separated values.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "wifiMacs",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Serials",
			"name": "serials",
			"description": "Filter devices by serial(s). Multiple serials can be passed in as comma separated values.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "serials",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"description": "Filter devices by id(s). Multiple ids can be passed in as comma separated values.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ids",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"description": "Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags as comma separated values.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "scope",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Batch Size",
			"name": "batchSize",
			"description": "Number of devices to return, 1000 is the default as well as the max.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "batchSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Batch Token",
			"name": "batchToken",
			"description": "If the network has more devices than the batch size, a batch token will be returned\n    as a part of the device list. To see the remainder of the devices, pass in the batchToken as a parameter in the next request.\n    Requests made with the batchToken do not require additional parameters as the batchToken includes the parameters passed in\n    with the original request. Additional parameters passed in with the batchToken will be ignored.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "batchToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Devices"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/sm/devices/checkin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Checkin Network Sm Devices"
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
						"SM"
					],
					"operation": [
						"Checkin Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "string",
			"default": "",
			"description": "The ids of the devices to be checked-in.",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Checkin Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "",
			"description": "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be checked-in.",
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
						"SM"
					],
					"operation": [
						"Checkin Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Serials",
			"name": "serials",
			"type": "string",
			"default": "",
			"description": "The serials of the devices to be checked-in.",
			"routing": {
				"send": {
					"property": "serials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Checkin Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Wifi Macs",
			"name": "wifiMacs",
			"type": "string",
			"default": "",
			"description": "The wifiMacs of the devices to be checked-in.",
			"routing": {
				"send": {
					"property": "wifiMacs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Checkin Network Sm Devices"
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
						"SM"
					],
					"operation": [
						"Checkin Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/sm/devices/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Update Network Sm Devices Tags"
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
						"SM"
					],
					"operation": [
						"Update Network Sm Devices Tags"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "string",
			"default": "",
			"description": "The ids of the devices to be modified.",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Update Network Sm Devices Tags"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "",
			"description": "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be modified.",
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
						"SM"
					],
					"operation": [
						"Update Network Sm Devices Tags"
					]
				}
			}
		},
		{
			"displayName": "Serials",
			"name": "serials",
			"type": "string",
			"default": "",
			"description": "The serials of the devices to be modified.",
			"routing": {
				"send": {
					"property": "serials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Update Network Sm Devices Tags"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "tags",
			"type": "string",
			"default": "",
			"description": "The tags to be added, deleted, or updated.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Update Network Sm Devices Tags"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Update Action",
			"name": "updateAction",
			"type": "string",
			"default": "",
			"description": "One of add, delete, or update. Only devices that have been modified will be returned.",
			"routing": {
				"send": {
					"property": "updateAction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Update Network Sm Devices Tags"
					]
				}
			}
		},
		{
			"displayName": "Wifi Macs",
			"name": "wifiMacs",
			"type": "string",
			"default": "",
			"description": "The wifiMacs of the devices to be modified.",
			"routing": {
				"send": {
					"property": "wifiMacs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Update Network Sm Devices Tags"
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
						"SM"
					],
					"operation": [
						"Update Network Sm Devices Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/sm/devices/{deviceId}/unenroll",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Unenroll Network Sm Device"
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
						"SM"
					],
					"operation": [
						"Unenroll Network Sm Device"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "deviceId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Unenroll Network Sm Device"
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
						"SM"
					],
					"operation": [
						"Unenroll Network Sm Device"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/profiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Profiles"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Profiles"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/user/{userId}/deviceProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm User Device Profiles"
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
						"SM"
					],
					"operation": [
						"Get Network Sm User Device Profiles"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm User Device Profiles"
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
						"SM"
					],
					"operation": [
						"Get Network Sm User Device Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/user/{userId}/softwares",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm User Softwares"
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
						"SM"
					],
					"operation": [
						"Get Network Sm User Softwares"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm User Softwares"
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
						"SM"
					],
					"operation": [
						"Get Network Sm User Softwares"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Users"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Users"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"description": "Filter users by id(s). Multiple ids can be passed in as comma separated values.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ids",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Users"
					]
				}
			}
		},
		{
			"displayName": "Usernames",
			"name": "usernames",
			"description": "Filter users by username(s). Multiple usernames can be passed in as comma separated values.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "usernames",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Users"
					]
				}
			}
		},
		{
			"displayName": "Emails",
			"name": "emails",
			"description": "Filter users by email(s). Multiple emails can be passed in as comma separated values.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "emails",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Users"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"description": "Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags as comma separated values.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "scope",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Users"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Users"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/{deviceId}/cellularUsageHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Cellular Usage History"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Cellular Usage History"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "deviceId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Cellular Usage History"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Cellular Usage History"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/{deviceId}/certs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Certs"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Certs"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "deviceId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Certs"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Certs"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/{deviceId}/deviceProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Device Profiles"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Device Profiles"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "deviceId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Device Profiles"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Device Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/{deviceId}/networkAdapters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Network Adapters"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Network Adapters"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "deviceId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Network Adapters"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Network Adapters"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/{deviceId}/restrictions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Restrictions"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Restrictions"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "deviceId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Restrictions"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Restrictions"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/{deviceId}/securityCenters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Security Centers"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Security Centers"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "deviceId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Security Centers"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Security Centers"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/{deviceId}/softwares",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Softwares"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Softwares"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "deviceId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Softwares"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Softwares"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/sm/{deviceId}/wlanLists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Wlan Lists"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Wlan Lists"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "deviceId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Wlan Lists"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Wlan Lists"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{network_id}/sm/devices/lock",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Lock Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "network_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Lock Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "string",
			"default": "",
			"description": "The ids of the devices to be locked.",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Lock Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Pin",
			"name": "pin",
			"type": "number",
			"default": 0,
			"description": "The pin number for locking macOS devices (a six digit number). Required only for macOS devices.",
			"routing": {
				"send": {
					"property": "pin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Lock Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "",
			"description": "The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be wiped.",
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
						"SM"
					],
					"operation": [
						"Lock Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Serials",
			"name": "serials",
			"type": "string",
			"default": "",
			"description": "The serials of the devices to be locked.",
			"routing": {
				"send": {
					"property": "serials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Lock Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "Wifi Macs",
			"name": "wifiMacs",
			"type": "string",
			"default": "",
			"description": "The wifiMacs of the devices to be locked.",
			"routing": {
				"send": {
					"property": "wifiMacs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Lock Network Sm Devices"
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
						"SM"
					],
					"operation": [
						"Lock Network Sm Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{network_id}/sm/{id}/connectivity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Connectivity"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "network_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Connectivity"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Connectivity"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "perPage",
			"description": "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "perPage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Connectivity"
					]
				}
			}
		},
		{
			"displayName": "Starting After",
			"name": "startingAfter",
			"description": "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startingAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Connectivity"
					]
				}
			}
		},
		{
			"displayName": "Ending Before",
			"name": "endingBefore",
			"description": "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endingBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Connectivity"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Connectivity"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{network_id}/sm/{id}/desktopLogs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Desktop Logs"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "network_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Desktop Logs"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Desktop Logs"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "perPage",
			"description": "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "perPage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Desktop Logs"
					]
				}
			}
		},
		{
			"displayName": "Starting After",
			"name": "startingAfter",
			"description": "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startingAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Desktop Logs"
					]
				}
			}
		},
		{
			"displayName": "Ending Before",
			"name": "endingBefore",
			"description": "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endingBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Desktop Logs"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Desktop Logs"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{network_id}/sm/{id}/deviceCommandLogs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Device Command Logs"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "network_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Device Command Logs"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Device Command Logs"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "perPage",
			"description": "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "perPage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Device Command Logs"
					]
				}
			}
		},
		{
			"displayName": "Starting After",
			"name": "startingAfter",
			"description": "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startingAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Device Command Logs"
					]
				}
			}
		},
		{
			"displayName": "Ending Before",
			"name": "endingBefore",
			"description": "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endingBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Device Command Logs"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Device Command Logs"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{network_id}/sm/{id}/performanceHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Performance History"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "network_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Performance History"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Performance History"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "perPage",
			"description": "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "perPage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Performance History"
					]
				}
			}
		},
		{
			"displayName": "Starting After",
			"name": "startingAfter",
			"description": "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startingAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Performance History"
					]
				}
			}
		},
		{
			"displayName": "Ending Before",
			"name": "endingBefore",
			"description": "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endingBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SM"
					],
					"operation": [
						"Get Network Sm Performance History"
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
						"SM"
					],
					"operation": [
						"Get Network Sm Performance History"
					]
				}
			}
		},
];
