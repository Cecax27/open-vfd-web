---
title: OPC UA Telemetry
description: Consume simulation telemetry nodes for monitoring and analysis.
order: 3
category: opc-ua
---

Telemetry nodes report the current simulator state and are designed for external monitoring.

## Typical telemetry values

- Motor speed
- Estimated load behavior
- Active control references

## Data handling tips

- Sample at a consistent interval
- Store timestamps with each value
- Separate long-term logging from real-time dashboards
