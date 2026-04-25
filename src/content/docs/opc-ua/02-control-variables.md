---
title: OPC UA Control Variables
description: Understand which variables are intended for control writes.
order: 2
category: opc-ua
---

Control variables are values that external clients can write to influence simulation behavior.

## Typical control nodes

- Frequency setpoint
- Start and stop command flags
- Ramp-related references

## Recommended pattern

Validate write boundaries and apply deterministic update intervals when sending commands from automation clients.
