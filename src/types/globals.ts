import type {Component} from "vue";

export type Fn = (...args: any[]) => void;
export type StateMap = Record<string, boolean>
export type EventMap = Record<string, Fn>
export type ComponentMap = Record<string, Component>