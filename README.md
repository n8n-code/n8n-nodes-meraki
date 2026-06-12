# @n8n-dev/n8n-nodes-meraki

![meraki Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-meraki.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-meraki)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing meraki API integrations by hand.**

Every time you connect n8n to meraki, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to meraki took 5 minutes, not half a day?**

This node gives you **63+ resources** out of the box: **API Usage**, **Action Batches**, **Admins**, **Alert Settings**, **Bluetooth Clients**, and 58 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-meraki
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-meraki`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **meraki API** → paste your API key
3. Drag the **meraki** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>API Usage</b> (2 operations)</summary>

- Get List the API requests made by an organization
- Get Return an aggregated overview of API requests data

</details>

<details>
<summary><b>Action Batches</b> (4 operations)</summary>

- Get Return the list of action batches in the organization
- Post Create an action batch
- Delete an action batch
- Put Update an action batch

</details>

<details>
<summary><b>Admins</b> (4 operations)</summary>

- Get List the dashboard administrators in this organization
- Post Create a new dashboard administrator
- Delete Revoke all access for a dashboard administrator within this organization
- Put Update an administrator

</details>

<details>
<summary><b>Alert Settings</b> (2 operations)</summary>

- Get Return the alert configuration for this network
- Put Update the alert configuration for this network

</details>

<details>
<summary><b>Bluetooth Clients</b> (2 operations)</summary>

- Get List the Bluetooth clients seen by APs in this network
- Get Return a Bluetooth client

</details>

<details>
<summary><b>Bluetooth Settings</b> (3 operations)</summary>

- Put Update the bluetooth settings for a wireless device
- Get Return the Bluetooth settings for a network a href HTTPS documentation meraki com MR Bluetooth Bluetooth Low Energy BLE Bluetooth settings a must be enabled on the network
- Put Update the Bluetooth settings for a network

</details>

<details>
<summary><b>Camera Quality Retention Profiles</b> (5 operations)</summary>

- Get List the quality retention profiles for this network
- Post Creates new quality retention profile for this network
- Delete an existing quality retention profile for this network
- Get Retrieve a single quality retention profile
- Put Update an existing quality retention profile for this network

</details>

<details>
<summary><b>Cameras</b> (7 operations)</summary>

- Get Returns quality and retention settings for the given camera
- Put Update quality and retention settings for the given camera
- Get Returns video settings for the given camera
- Put Update video settings for the given camera
- Get Returns a list of all camera recording schedules
- Post Generate a snapshot of what the camera sees at the specified time and return a link to that image
- Get Returns video link to the specified camera

</details>

<details>
<summary><b>Change Log</b> (1 operations)</summary>

- Get View the Change Log for your organization

</details>

<details>
<summary><b>Clients</b> (11 operations)</summary>

- Get List the clients of a device up to a maximum of a month ago
- Get List the clients that have used this network in the timespan
- Post Provisions a client with a name and policy
- Get Return the client associated with the given identifier
- Get Return the events associated with this client
- Get Return the latency history for a client
- Get Return the policy assigned to a client on the network
- Put Update the policy assigned to a client on the network
- Get Return the splash authorization for a client for each SSID they ve associated with through splash
- Put Update a client s splash authorization
- Get Return the client s daily usage history

</details>

<details>
<summary><b>Config Templates</b> (2 operations)</summary>

- Get List the configuration templates for this organization
- Delete Remove a configuration template

</details>

<details>
<summary><b>Content Filtering Categories</b> (1 operations)</summary>

- Get List all available content filtering categories for an MX network

</details>

<details>
<summary><b>Content Filtering Rules</b> (2 operations)</summary>

- Get Return the content filtering settings for an MX network
- Put Update the content filtering settings for an MX network

</details>

<details>
<summary><b>Devices</b> (11 operations)</summary>

- Post Cycle a set of switch ports
- Get List the devices in a network
- Post Claim devices into a network Note for recently claimed devices it may take a few minutes for API requests against that device to succeed
- Get Return a single device
- Put Update the attributes of a device
- Get the uplink loss percentage and latency in milliseconds for a wired network device
- Get Return the performance score for a single MX
- Post Reboot a device
- Post Remove a single device
- Get Return the uplink information for a device
- Get List the devices in an organization

</details>

<details>
<summary><b>Events</b> (2 operations)</summary>

- Get List the events for the network
- Get List the event type to human readable description

</details>

<details>
<summary><b>Firewalled Services</b> (3 operations)</summary>

- Get List the appliance services and their accessibility rules
- Get Return the accessibility settings of the given service ICMP web or SNMP
- Put Updates the accessibility settings for the given service ICMP web or SNMP

</details>

<details>
<summary><b>Floor Plans</b> (5 operations)</summary>

- Get List the floor plans that belong to your network
- Post Upload a floor plan
- Delete Destroy a floor plan
- Get Find a floor plan by ID
- Put Update a floor plan s geolocation and other meta data

</details>

<details>
<summary><b>Intrusion Settings</b> (4 operations)</summary>

- Get Returns all supported intrusion settings for an MX network
- Put Set the supported intrusion settings for an MX network
- Get Returns all supported intrusion settings for an organization
- Put Sets supported intrusion settings for an organization

</details>

<details>
<summary><b>Licenses</b> (6 operations)</summary>

- Get Return an overview of the license state for an organization
- Get List the licenses for an organization
- Post Assign SM seats to a network
- Post Move SM seats to another organization
- Post Renew SM seats of a license
- Get Display a license

</details>

<details>
<summary><b>Link Aggregations</b> (4 operations)</summary>

- Get List link aggregation groups
- Post Create a link aggregation group
- Delete Split a link aggregation group into separate ports
- Put Update a link aggregation group

</details>

<details>
<summary><b>MG LAN Settings</b> (2 operations)</summary>

- Get Show the LAN Settings of a MG
- Put Update the LAN Settings for a single MG

</details>

<details>
<summary><b>MG Port Forwarding Rules</b> (2 operations)</summary>

- Get Returns the port forwarding rules for a single MG
- Put Updates the port forwarding rules for a single MG

</details>

<details>
<summary><b>MR L 3 Firewall</b> (2 operations)</summary>

- Get Return the L3 firewall rules for an SSID on an MR network
- Put Update the L3 firewall rules of an SSID on an MR network

</details>

<details>
<summary><b>MV Sense</b> (5 operations)</summary>

- Get Returns live state from camera of analytics zones
- Get Returns an overview of aggregate analytics data for a timespan
- Get Returns most recent record for analytics zones
- Get Returns all configured analytic zones for this camera
- Get Return historical records for analytic zones

</details>

<details>
<summary><b>MX 1 1 NAT Rules</b> (2 operations)</summary>

- Get Return the 1 1 NAT mapping rules for an MX network
- Put Set the 1 1 NAT mapping rules for an MX network

</details>

<details>
<summary><b>MX 1 Many NAT Rules</b> (2 operations)</summary>

- Get Return the 1 Many NAT mapping rules for an MX network
- Put Set the 1 Many NAT mapping rules for an MX network

</details>

<details>
<summary><b>MX L 3 Inbound Firewall</b> (2 operations)</summary>

- Get Return the inbound firewall rules for an MX network
- Put Update the inbound firewall rules of an MX network

</details>

<details>
<summary><b>MX L 3 Outbound Firewall</b> (2 operations)</summary>

- Get Return the L3 firewall rules for an MX network
- Put Update the L3 firewall rules of an MX network

</details>

<details>
<summary><b>MX L 7 Application Categories</b> (1 operations)</summary>

- Get Return the L7 firewall application categories and their associated applications for an MX network

</details>

<details>
<summary><b>MX L 7 Firewall</b> (2 operations)</summary>

- Get List the MX L7 firewall rules for an MX network
- Put Update the MX L7 firewall rules for an MX network

</details>

<details>
<summary><b>MX VLAN Ports</b> (3 operations)</summary>

- Get List per port VLAN settings for all ports of a MX
- Get Return per port VLAN settings for a single MX port
- Put Update the per port VLAN settings for a single MX port

</details>

<details>
<summary><b>MX VPN Firewall</b> (2 operations)</summary>

- Get Return the firewall rules for an organization s site to site VPN
- Put Update the firewall rules of an organization s site to site VPN

</details>

<details>
<summary><b>MX Cellular Firewall</b> (2 operations)</summary>

- Get Return the cellular firewall rules for an MX network
- Put Update the cellular firewall rules of an MX network

</details>

<details>
<summary><b>MX Port Forwarding Rules</b> (2 operations)</summary>

- Get Return the port forwarding rules for an MX network
- Put Update the port forwarding rules for an MX network

</details>

<details>
<summary><b>MX Static Routes</b> (5 operations)</summary>

- Get List the static routes for an MX or teleworker network
- Post Add a static route for an MX or teleworker network
- Delete a static route from an MX or teleworker network
- Get Return a static route for an MX or teleworker network
- Put Update a static route for an MX or teleworker network

</details>

<details>
<summary><b>MX Warm Spare Settings</b> (3 operations)</summary>

- Post Swap MX primary and warm spare appliances
- Get Return MX warm spare settings
- Put Update MX warm spare settings

</details>

<details>
<summary><b>Malware Settings</b> (2 operations)</summary>

- Get Returns all supported malware settings for an MX network
- Put Set the supported malware settings for an MX network

</details>

<details>
<summary><b>Meraki Auth Users</b> (2 operations)</summary>

- Get List the splash or RADIUS users configured under Meraki Authentication for a network
- Get Return the Meraki Auth splash or RADIUS user

</details>

<details>
<summary><b>Monitored Media Servers</b> (5 operations)</summary>

- Get List the monitored media servers for this organization
- Post Add a media server to be monitored for this organization
- Delete a monitored media server from this organization
- Get Return a monitored media server for this organization
- Put Update a monitored media server for this organization

</details>

<details>
<summary><b>Named Tag Scope</b> (5 operations)</summary>

- Get List the target groups in this network
- Post Add a target group
- Delete a target group from a network
- Get Return a target group
- Put Update a target group

</details>

<details>
<summary><b>Networks</b> (13 operations)</summary>

- Delete a network
- Get Return a network
- Put Update a network
- Get List Air Marshal scan results from a network
- Post Bind a network to a template
- Get Return the site to site VPN settings of a network
- Put Update the site to site VPN settings of a network
- Post Split a combined network into individual networks for each type of device
- Get Return the traffic analysis data for this network
- Post Unbind a network from a template
- Get List the networks in an organization
- Post Create a network
- Post Combine multiple networks into a single network

</details>

<details>
<summary><b>Open API Spec</b> (1 operations)</summary>

- Get Return the OpenAPI 2 0 Specification of the organization s API documentation in JSON

</details>

<details>
<summary><b>Organizations</b> (9 operations)</summary>

- Get List the organizations that the user has privileges on
- Get Return an organization
- Post Claim a list of devices licenses and or orders into an organization
- Post Create a new organization by cloning the addressed organization
- Get List the status of every Meraki device in the organization
- Get Return the inventory for an organization
- Get Return the third party VPN peers for an organization
- Put Update the third party VPN peers for an organization
- Get Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

</details>

<details>
<summary><b>PII</b> (7 operations)</summary>

- Get List the keys required to access Personally Identifiable Information PII for a given identifier
- Get List the PII requests for this network or organization
- Post Submit a new delete or restrict processing PII request
- Delete a restrict processing PII request
- Get Return a PII request
- Get Given a piece of Personally Identifiable Information PII return the Systems Manager device ID s associated with that identifier
- Get Given a piece of Personally Identifiable Information PII return the Systems Manager owner ID s associated with that identifier

</details>

<details>
<summary><b>Radio Settings</b> (5 operations)</summary>

- Get List the non basic RF profiles for this network
- Post Creates new RF profile for this network
- Delete a RF Profile
- Get Return a RF profile
- Put Updates specified RF profile for this network

</details>

<details>
<summary><b>SAML Roles</b> (4 operations)</summary>

- Get List the SAML roles for this organization
- Post Create a SAML role
- Get Return a SAML role
- Put Update a SAML role

</details>

<details>
<summary><b>SM</b> (26 operations)</summary>

- Post Bypass activation lock attempt
- Get Bypass activation lock attempt status
- Put Modify the fields of a device
- Put Wipe a device
- Post Refresh the details of a device
- Get List the devices enrolled in an SM network with various specified fields and filters
- Put Force check in a set of devices
- Put Add delete or update the tags of a set of devices
- Post Unenroll a device
- Get List all the profiles in the network
- Get the profiles associated with a user
- Get a list of softwares associated with a user
- Get List the owners in an SM network with various specified fields and filters
- Get Return the client s daily cellular data usage history
- Get List the certs on a device
- Get the profiles associated with a device
- Get List the network adapters of a device
- Get List the restrictions on a device
- Get List the security centers on a device
- Get a list of softwares associated with a device
- Get List the saved SSID names on a device
- Put Lock a set of devices
- Get Returns historical connectivity data whether a device is regularly checking in to Dashboard
- Get Return historical records of various Systems Manager network connection details for desktop devices
- Get Return historical records of commands sent to Systems Manager devices
- Get Return historical records of various Systems Manager client metrics for desktop devices

</details>

<details>
<summary><b>SNMP Settings</b> (2 operations)</summary>

- Get Return the SNMP settings for a network
- Get Return the SNMP settings for an organization

</details>

<details>
<summary><b>SSI Ds</b> (4 operations)</summary>

- Get Return the SSID statuses of an access point
- Get List the SSIDs in a network
- Get Return a single SSID
- Put Update the attributes of an SSID

</details>

<details>
<summary><b>Security Events</b> (2 operations)</summary>

- Get List the security events intrusion detection only for a network
- Get List the security events intrusion detection only for an organization

</details>

<details>
<summary><b>Splash Login Attempts</b> (1 operations)</summary>

- Get List the splash login attempts for a network

</details>

<details>
<summary><b>Splash Settings</b> (2 operations)</summary>

- Get Display the splash page settings for the given SSID
- Put Modify the splash page settings for the given SSID

</details>

<details>
<summary><b>Switch Access Policies</b> (1 operations)</summary>

- Get List the access policies for this network

</details>

<details>
<summary><b>Switch Port Schedules</b> (4 operations)</summary>

- Get List switch port schedules
- Post Add a switch port schedule
- Delete a switch port schedule
- Put Update a switch port schedule

</details>

<details>
<summary><b>Switch Ports</b> (2 operations)</summary>

- Get Return the status for all the ports of a switch
- Get Return the packet counters for all the ports of a switch

</details>

<details>
<summary><b>Switch Profiles</b> (1 operations)</summary>

- Get List the switch profiles for your switch template configuration

</details>

<details>
<summary><b>Switch Settings</b> (15 operations)</summary>

- Get Returns the switch network settings
- Put Update switch network settings
- Get Return the MTU configuration
- Put Update the MTU configuration
- Get Return multicast settings for a network
- Put Update multicast settings for a network
- Get List quality of service rules
- Post Add a quality of service rule
- Get Return the quality of service rule IDs by order in which they will be processed by the switch
- Put Update the order in which the rules should be processed by the switch
- Delete a quality of service rule
- Get Return a quality of service rule
- Put Update a quality of service rule
- Get Return the storm control configuration for a switch network
- Put Update the storm control configuration for a switch network

</details>

<details>
<summary><b>Switch Stacks</b> (6 operations)</summary>

- Get List the switch stacks in a network
- Post Create a stack
- Delete a stack
- Get Show a switch stack
- Post Add a switch to a stack
- Post Remove a switch from a stack

</details>

<details>
<summary><b>Syslog Servers</b> (2 operations)</summary>

- Get List the syslog servers for a network
- Put Update the syslog servers for a network

</details>

<details>
<summary><b>Traffic Shaping Uplink Settings</b> (2 operations)</summary>

- Get Returns the uplink settings for your MX network
- Put Updates the uplink settings for your MX network

</details>

<details>
<summary><b>VLA Ns</b> (7 operations)</summary>

- Get List the VLANs for an MX network
- Post Add a VLAN
- Delete a VLAN from a network
- Get Return a VLAN
- Put Update a VLAN
- Get Returns the enabled status of VLANs for the network
- Put Enable Disable VLANs for the given network

</details>

<details>
<summary><b>Wireless Health</b> (11 operations)</summary>

- Get Aggregated connectivity info for this network grouped by clients
- Get Aggregated latency info for this network grouped by clients
- Get Aggregated connectivity info for a given client on this network
- Get Aggregated latency info for a given client on this network
- Get Aggregated connectivity info for this network
- Get Aggregated connectivity info for this network grouped by node
- Get Aggregated latency info for this network grouped by node
- Get Aggregated connectivity info for a given AP on this network
- Get Aggregated latency info for a given AP on this network
- Get List of all failed client connection events on this network in a given time range
- Get Aggregated latency info for this network

</details>

<details>
<summary><b>Wireless Settings</b> (2 operations)</summary>

- Get Return the wireless settings for a network
- Put Update the wireless settings for a network

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from meraki docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official meraki OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **meraki** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the meraki API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
